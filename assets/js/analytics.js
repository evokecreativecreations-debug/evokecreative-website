(() => {
  const productionHosts = ['evokecreativecreations.com', 'www.evokecreativecreations.com'];
  if (!productionHosts.includes(window.location.hostname)) return;
  if (window.__evokeAnalyticsInitialized) return;
  window.__evokeAnalyticsInitialized = true;

  const measurementId = 'G-H9L2DW07PZ';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);
})();
