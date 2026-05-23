/* ----- Nav dropdown click toggle (covers tap on touch devices) ----- */
  (function () {
    document.querySelectorAll('.nav-item').forEach(item => {
      const trigger = item.querySelector('.nav-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.nav-item.open').forEach(o => {
          o.classList.remove('open');
          o.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item.open').forEach(o => {
          o.classList.remove('open');
          o.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
  })();

  /* ----- Header scroll state -----
     If the header has [data-pin-solid] (pages without a dark hero), keep it
     in solid state always. Otherwise toggle solid past 60px of scroll. */
  (function () {
    const h = document.getElementById('header');
    if (!h) return;
    if (h.hasAttribute('data-pin-solid')) {
      h.classList.add('solid');
      return;
    }
    const tick = () => {
      if (window.scrollY > 60) h.classList.add('solid');
      else h.classList.remove('solid');
    };
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  })();

  /* ----- FAQ accordion ----- */
  (function () {
    document.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-q');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(o => {
          o.classList.remove('open');
          o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  })();
