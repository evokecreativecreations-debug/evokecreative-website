(() => {
  const header = document.querySelector('.s-header');
  const menu = document.querySelector('.s-nav-links');
  const toggle = document.querySelector('.s-menu-toggle');
  const dropdown = document.querySelector('.s-dropdown');
  const serviceToggle = document.querySelector('.s-dropdown-toggle');
  const desktop = window.matchMedia('(min-width: 961px)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let serviceHoverTimer;
  function setServices(open) {
    window.clearTimeout(serviceHoverTimer);
    dropdown?.classList.toggle('open', open);
    serviceToggle?.setAttribute('aria-expanded', String(open));
  }
  function closeMenu() {
    menu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    setServices(false);
  }
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    closeMenu();
    if (!expanded) { menu.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); }
  });
  serviceToggle?.addEventListener('click', () => {
    setServices(serviceToggle.getAttribute('aria-expanded') !== 'true');
  });
  dropdown?.addEventListener('pointerenter', () => {
    if (desktop.matches && finePointer.matches) serviceHoverTimer = window.setTimeout(() => setServices(true), 160);
  });
  header?.addEventListener('pointerleave', () => {
    window.clearTimeout(serviceHoverTimer);
    if (desktop.matches && finePointer.matches && !dropdown.contains(document.activeElement)) setServices(false);
  });
  menu?.querySelectorAll(':scope > li:not(.s-dropdown)').forEach(item => item.addEventListener('pointerenter', () => {
    if (desktop.matches && finePointer.matches) setServices(false);
  }));
  dropdown?.addEventListener('focusout', event => {
    if (!dropdown.contains(event.relatedTarget)) setServices(false);
  });
  header?.addEventListener('focusout', event => {
    if (!header.contains(event.relatedTarget)) closeMenu();
  });
  desktop.addEventListener('change', closeMenu);
  document.addEventListener('click', event => { if (!header?.contains(event.target)) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const menuWasOpen = toggle?.getAttribute('aria-expanded') === 'true';
    const dropdownWasOpen = serviceToggle?.getAttribute('aria-expanded') === 'true';
    closeMenu();
    if (menuWasOpen) toggle.focus();
    else if (dropdownWasOpen) serviceToggle.focus();
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  const normalize = path => path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const current = normalize(location.pathname);
  document.querySelectorAll('.s-nav-links a').forEach(link => {
    if (new URL(link.href).origin !== location.origin) return;
    const target = normalize(new URL(link.href).pathname);
    if (current === target) link.setAttribute('aria-current', 'page');
    else if (target === '/services' && current.startsWith('/services/')) link.classList.add('active');
  });
  if (current === '/services' || current.startsWith('/services/')) serviceToggle?.classList.add('active');
})();

// One-time entrance accents. Content stays visible if scripting or animation is unavailable.
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  const targets = document.querySelectorAll('main .s-section-top, main .s-project, main .s-service-row, main .s-studio-portrait, main .s-studio-copy, main .s-process-step, main .s-journal-link, main .portfolio-item, main .blog-card, main .showcase-card, main .expertise-card, main .service-overview, main .case-meta, main .brief-text, main .approach-block, main .compare-card, main .post-card, main .cta-band');
  if (!targets.length) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('s-enter');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  targets.forEach(target => {
    // Keep everything already on screen immediate, including initial loading content.
    if (target.getBoundingClientRect().top >= window.innerHeight) observer.observe(target);
  });
  reduced.addEventListener('change', event => {
    if (event.matches) observer.disconnect();
  });
})();
