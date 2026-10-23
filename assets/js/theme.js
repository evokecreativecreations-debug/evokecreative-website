(() => {
  'use strict';
  const key = 'evoke_theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  function readPreference() {
    try {
      const value = localStorage.getItem(key);
      return value === 'dark' || value === 'light' ? value : null;
    } catch { return preference; }
  }
  function apply() {
    const dark = (preference || (system.matches ? 'dark' : 'light')) === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.querySelectorAll('.s-theme-toggle').forEach(button => {
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    });
  }
  preference = readPreference();
  apply();
  function init() {
    apply();
    document.querySelectorAll('.s-theme-toggle').forEach(button => button.addEventListener('click', () => {
      preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch { /* Appearance still works for this page. */ }
      apply();
    }));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
  else init();
  system.addEventListener('change', () => { if (!preference) apply(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) { preference = readPreference(); apply(); }
  });
})();
