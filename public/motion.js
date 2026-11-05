/* Shared motion system. Native scroll, no scroll hijacking, no animation dependency. */
(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.querySelector('#motion-toggle');
  let preference = null;
  try { preference = sessionStorage.getItem('up-motion'); } catch {}
  const isOff = () => reduced.matches || preference === 'off';
  function sync() {
    root.classList.toggle('motion-off', isOff());
    toggle.setAttribute('aria-pressed', String(!isOff()));
    toggle.textContent = isOff() ? 'Анимации выключены' : 'Анимации включены';
  }
  toggle.addEventListener('click', () => {
    preference = isOff() ? 'on' : 'off';
    try { sessionStorage.setItem('up-motion', preference); } catch {}
    sync();
  });
  reduced.addEventListener('change', sync);
  sync();
  const reveal = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const {target, isIntersecting} of entries) if (isIntersecting) {
      target.classList.add('revealed');
      reveal.unobserve(target);
    }
  }, {threshold: 0.07, rootMargin: '0px 0px -24px 0px'}) : null;
  const activity = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const {target, isIntersecting} of entries) target.classList.toggle('in-view', isIntersecting);
  }, {rootMargin:'50px'}) : null;
  function enhance() {
    const targets = document.querySelectorAll('.heading,.section>h2,.section>.eyebrow,.service-card,.features article,.steps article,.about>div,.contacts>div,.contacts iframe,.calculator>div,.calculator form,.offer>div');
    for (const el of targets) {
      if (el.dataset.motionReady || el.closest('[hidden]')) continue;
      el.dataset.motionReady = 'true';
      const siblings = el.parentElement?.children;
      const index = siblings ? [...siblings].indexOf(el) : 0;
      el.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 65}ms`);
      if (reveal && el.getBoundingClientRect().top > innerHeight - 30) {
        el.classList.add('reveal');
        reveal.observe(el);
      }
    }
    for (const card of document.querySelectorAll('.service-card:not([data-active-ready])')) {
      card.dataset.activeReady = 'true';
      activity?.observe(card);
    }
  }
  enhance();
  document.addEventListener('up:ready', enhance);
  const hero = document.querySelector('.hero');
  if (hero && !hero.hidden) activity?.observe(hero);
  // Reveal focused controls immediately, including keyboard navigation ahead of scrolling.
  document.addEventListener('focusin', e => e.target.closest('.reveal')?.classList.add('revealed'));
  document.querySelector('nav')?.querySelectorAll('a').forEach(a => {
    if (new URL(a.href).pathname === location.pathname) a.setAttribute('aria-current', 'page');
  });
})();
