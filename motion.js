/* ==========================================================================
   CITTASANA MOTION SYSTEM
   Vanilla-JS primitives: scroll-aware nav, reveal, counters, magnetic, tilt,
   typewriter. Respects prefers-reduced-motion. No dependencies.
   ========================================================================== */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Scroll-aware nav ---
  const nav = document.querySelector('[data-nav]');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('glass-nav-scrolled');
      else nav.classList.remove('glass-nav-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Scroll reveal ---
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach((el) => io.observe(el));
    // Safety net: any element still hidden after 2s gets revealed.
    // Covers fast scrollers, programmatic screenshots, and IO no-ops.
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => el.classList.add('is-in'));
    }, 2000);
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  if (reduce) return;

  // --- Animated counters ---
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const isFloat = !Number.isInteger(target);
        const start = performance.now();
        const dur = 1400;
        function step(t) {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = target * eased;
          el.textContent = (isFloat ? v.toFixed(1) : Math.round(v)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => cio.observe(el));
  }

  // --- Magnetic buttons ---
  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    let raf = null;
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.3;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        btn.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    });
    btn.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      btn.style.transform = '';
    });
  });

  // --- Tilt cards ---
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    let raf = null;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(1200px) rotateX(${-py * 4}deg) rotateY(${px * 5}deg) translate3d(0,0,0)`;
      });
    });
    el.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = '';
    });
  });

  // --- Typewriter ---
  document.querySelectorAll('[data-typewriter]').forEach((el) => {
    let phrases;
    try { phrases = JSON.parse(el.dataset.phrases); } catch (_) { return; }
    if (!Array.isArray(phrases) || phrases.length === 0) return;
    let i = 0, j = phrases[0].length, deleting = false;
    el.textContent = phrases[0];
    setTimeout(tick, 2400);
    function tick() {
      const full = phrases[i];
      if (deleting) {
        j--;
        el.textContent = full.slice(0, j);
        if (j === 0) { deleting = false; i = (i + 1) % phrases.length; return setTimeout(tick, 320); }
        return setTimeout(tick, 26);
      } else {
        j++;
        el.textContent = full.slice(0, j);
        if (j === full.length) { deleting = true; return setTimeout(tick, 2400); }
        return setTimeout(tick, 48);
      }
    }
  });
})();
