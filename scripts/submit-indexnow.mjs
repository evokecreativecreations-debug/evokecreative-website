// Run without arguments to validate locally. Use --submit after deployment.
// IndexNow verifies the public root key file; this key is not a credential.
import { readFile, readdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const host = 'evokecreativecreations.com';
const keyFiles = (await readdir(root)).filter(name => /^[a-f0-9]{32}\.txt$/.test(name));
if (keyFiles.length !== 1) throw new Error('Expected exactly one IndexNow key file.');
const key = (await readFile(new URL(keyFiles[0], root), 'utf8')).trim();
if (keyFiles[0] !== `${key}.txt`) throw new Error('IndexNow key/filename mismatch.');
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (!urlList.length || urlList.length > 10000 || new Set(urlList).size !== urlList.length) {
  throw new Error('Invalid or duplicate sitemap URLs.');
}
for (const value of urlList) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.hostname !== host || url.search || url.hash) {
    throw new Error(`Unexpected sitemap URL: ${value}`);
  }
}
const keyLocation = `https://${host}/${key}.txt`;
if (!process.argv.includes('--submit')) {
  console.log(`Validated ${urlList.length} canonical URLs. No submission sent.`);
  console.log(`After deployment, key must be available at ${keyLocation}`);
  process.exit(0);
}
const verification = await fetch(keyLocation, { signal: AbortSignal.timeout(15000) });
if (!verification.ok || (await verification.text()).trim() !== key) {
  throw new Error('Live key is not verified. Deploy the key file before submitting.');
}
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
  signal: AbortSignal.timeout(15000),
});
if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow returned HTTP ${response.status}: ${await response.text()}`);
}
console.log(`IndexNow received ${urlList.length} URLs (HTTP ${response.status}). This does not confirm indexing.`);
