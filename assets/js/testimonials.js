(() => {
  const scroller = document.querySelector('.testi-marquee');
  const track = scroller?.querySelector('.testi-track');
  if (!track) return;
  const originals = [...track.children];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let distance = 0, frame = 0, previousTime = 0, position = 0, resumeTimer;
  let visible = false, hovering = false, focused = false, touching = false;
  const canPlay = () => distance > 0 && visible && !document.hidden && !motion.matches && !hovering && !focused && !touching;
  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
  }
  function tick(now) {
    if (!canPlay()) { stop(); return; }
    if (previousTime) {
      position = (position + Math.min(now - previousTime, 64) * 0.026) % distance;
      scroller.scrollLeft = position;
    }
    previousTime = now;
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (!canPlay()) stop();
    else if (!frame) { position = scroller.scrollLeft; frame = requestAnimationFrame(tick); }
  }
  function rebuild() {
    stop();
    track.querySelectorAll('[data-review-copy]').forEach(el => el.remove());
    scroller.scrollLeft = 0;
    distance = 0;
    if (motion.matches || !originals.length) return;
    function appendCopy() {
      originals.forEach(original => {
        const copy = original.cloneNode(true);
        copy.setAttribute('data-review-copy', '');
        copy.setAttribute('aria-hidden', 'true');
        copy.setAttribute('inert', '');
        track.append(copy);
      });
    }
    appendCopy();
    distance = track.querySelector('[data-review-copy]').offsetLeft - originals[0].offsetLeft;
    if (distance <= scroller.clientWidth - parseFloat(getComputedStyle(scroller).paddingLeft) * 2) {
      track.querySelectorAll('[data-review-copy]').forEach(el => el.remove());
      distance = 0;
      return;
    }
    while (scroller.scrollWidth - scroller.clientWidth < distance) appendCopy();
    sync();
  }
  scroller.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovering = true; sync(); }
  });
  scroller.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') { hovering = false; sync(); }
  });
  scroller.addEventListener('focusin', () => { focused = true; sync(); });
  scroller.addEventListener('focusout', event => {
    focused = scroller.contains(event.relatedTarget);
    sync();
  });
  scroller.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse') {
      clearTimeout(resumeTimer);
      touching = true;
      sync();
    }
  });
  function release(event) {
    if (event.pointerType === 'mouse' || !touching) return;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { touching = false; sync(); }, 3500);
  }
  document.addEventListener('pointerup', release);
  document.addEventListener('pointercancel', release);
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', rebuild);
  window.addEventListener('resize', rebuild);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    sync();
  }).observe(scroller);
  rebuild();
})();
