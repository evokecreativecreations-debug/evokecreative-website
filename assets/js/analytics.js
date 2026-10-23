(() => {
  'use strict';
  if (window.EvokePrivacy) return;
  const measurementId = 'G-H9L2DW07PZ';
  const key = 'evoke_cookie_consent';
  const maxAge = 180 * 24 * 60 * 60 * 1000;
  const production = ['evokecreativecreations.com', 'www.evokecreativecreations.com'].includes(location.hostname);
  const disableKey = 'ga-disable-' + measurementId;
  let memoryChoice = null;
  let analyticsLoaded = false;
  let ui;
  let returnFocus;
  let noticeTimer;

  function parseChoice(value) {
    try {
      const item = JSON.parse(value);
      if (!item || item.version !== 1 || typeof item.analytics !== 'boolean' ||
          !Number.isFinite(item.updatedAt) || item.updatedAt > Date.now() ||
          Date.now() - item.updatedAt >= maxAge) return null;
      return item;
    } catch { return null; }
  }
  function readChoice() {
    try {
      const raw = localStorage.getItem(key);
      const item = parseChoice(raw);
      if (raw && !item) localStorage.removeItem(key);
      return item;
    } catch { return memoryChoice; }
  }
  let choice = readChoice();
  window[disableKey] = choice?.analytics !== true;

  function clearAnalyticsCookies() {
    const names = document.cookie.split(';').map(part => part.split('=')[0].trim())
      .filter(name => /^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name));
    const domains = new Set(['', location.hostname, '.' + location.hostname]);
    if (production) { domains.add('evokecreativecreations.com'); domains.add('.evokecreativecreations.com'); }
    for (const name of names) {
      for (const domain of domains) {
        document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' +
          (domain ? '; domain=' + domain : '') + (location.protocol === 'https:' ? '; Secure' : '') + '; SameSite=Lax';
      }
    }
  }
  function loadAnalytics() {
    if (!production || choice?.analytics !== true || analyticsLoaded) return;
    analyticsLoaded = true;
    window[disableKey] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    // Basic consent: no Google script or request exists before permission.
    window.gtag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_domain: 'evokecreativecreations.com',
      cookie_path: '/',
      cookie_expires: maxAge / 1000,
      cookie_update: false
    });
    const tag = document.createElement('script');
    tag.id = 'evoke-google-analytics';
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(tag);
  }
  function enforceChoice() {
    if (choice?.analytics === true) { loadAnalytics(); return; }
    // Disable collection before removing cookies or the library.
    window[disableKey] = true;
    clearAnalyticsCookies();
    if (analyticsLoaded) {
      document.getElementById('evoke-google-analytics')?.remove();
      // A new document also removes the library's existing timers/listeners.
      location.reload();
    }
  }
  function syncUI() {
    if (!ui) return;
    ui.banner.hidden = choice !== null;
    ui.analytics.checked = choice?.analytics === true;
  }
  function saveChoice(analytics) {
    choice = { version: 1, analytics: Boolean(analytics), updatedAt: Date.now() };
    memoryChoice = choice;
    let persisted = true;
    try { localStorage.setItem(key, JSON.stringify(choice)); } catch { persisted = false; }
    enforceChoice();
    syncUI();
    if (ui?.dialog.open) ui.dialog.close();
    if (ui) {
      clearTimeout(noticeTimer);
      ui.notice.textContent = persisted
        ? 'Analytics ' + (choice.analytics ? 'enabled' : 'disabled') + '. Your preferences have been saved.'
        : 'Choice applied for this page. Your browser could not save it; please choose again on your next visit.';
      ui.notice.hidden = false;
      noticeTimer = setTimeout(() => { ui.notice.hidden = true; }, 6000);
    }
  }
  function openSettings(trigger) {
    if (!ui) return;
    returnFocus = trigger || document.activeElement;
    ui.analytics.checked = choice?.analytics === true;
    if (!ui.dialog.open) {
      document.body.classList.add('s-cookie-dialog-open');
      ui.dialog.showModal();
    }
  }
  function initUI() {
    const container = document.createElement('div');
    container.innerHTML = `
      <section class="s-cookie-banner" aria-label="Cookie choices" hidden>
        <div><h2>Your privacy choices</h2><p>Optional Google Analytics helps us understand visits. Accept or reject analytics; the contact form works either way. <a href="/privacy">Privacy Policy</a></p></div>
        <div class="s-cookie-actions"><button type="button" data-cookie-accept>Accept analytics</button><button type="button" data-cookie-reject>Reject analytics</button><button type="button" class="s-cookie-link" data-cookie-settings>Settings</button></div>
      </section>
      <dialog class="s-cookie-dialog" aria-labelledby="cookie-settings-title" aria-describedby="cookie-settings-description">
        <div class="s-cookie-dialog-top"><h2 id="cookie-settings-title">Cookie settings</h2><button type="button" class="s-cookie-close" aria-label="Close cookie settings" data-cookie-close>×</button></div>
        <p id="cookie-settings-description">Choose whether this browser can use optional analytics. You can change your choice here at any time.</p>
        <div class="s-cookie-category"><div><h3>Preference storage</h3><p>Remembers your choice for 180 days on this website. It does not track your visits.</p></div><span class="s-cookie-required">Required</span></div>
        <div class="s-cookie-category"><div><label for="cookie-analytics">Allow Google Analytics</label><p>Helps us understand which pages are useful. Off until you choose to enable it.</p></div><input type="checkbox" id="cookie-analytics" name="analytics"/></div>
        <p class="s-cookie-details">Rejecting analytics keeps Google Analytics off. Opening Calendly or a social profile takes you to a separate service with its own privacy controls. <a href="/privacy#cookies">Read about cookies and storage</a>.</p>
        <div class="s-cookie-actions"><button type="button" data-cookie-save>Save preferences</button><button type="button" data-cookie-reject>Reject analytics</button></div>
      </dialog>
      <p class="s-cookie-notice" role="status" aria-live="polite" hidden></p>`;
    document.body.appendChild(container);
    ui = {
      banner: container.querySelector('.s-cookie-banner'),
      dialog: container.querySelector('dialog'),
      analytics: container.querySelector('#cookie-analytics'),
      notice: container.querySelector('.s-cookie-notice')
    };
    container.querySelector('[data-cookie-accept]').addEventListener('click', () => saveChoice(true));
    container.querySelector('[data-cookie-save]').addEventListener('click', () => saveChoice(ui.analytics.checked));
    container.querySelectorAll('[data-cookie-reject]').forEach(button => button.addEventListener('click', () => saveChoice(false)));
    container.querySelector('[data-cookie-close]').addEventListener('click', () => ui.dialog.close());
    ui.dialog.addEventListener('close', () => {
      document.body.classList.remove('s-cookie-dialog-open');
      const target = returnFocus?.getClientRects().length ? returnFocus : document.querySelector('footer [data-cookie-settings]');
      target?.focus({ preventScroll: true });
    });
    document.addEventListener('click', event => {
      const trigger = event.target.closest('[data-cookie-settings]');
      if (trigger) openSettings(trigger);
    });
    syncUI();
  }
  function refreshChoice() {
    choice = readChoice();
    enforceChoice();
    syncUI();
  }
  window.EvokePrivacy = Object.freeze({
    openSettings,
    getPreferences: () => choice ? { analytics: choice.analytics, updatedAt: choice.updatedAt } : null
  });
  window.addEventListener('storage', event => { if (event.key === key || event.key === null) refreshChoice(); });
  window.addEventListener('pageshow', event => { if (event.persisted) refreshChoice(); });
  enforceChoice();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initUI, { once: true });
  else initUI();
})();
