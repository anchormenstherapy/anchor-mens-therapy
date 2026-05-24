/* ===========================================================
   ANCHOR MEN'S THERAPY — Shared Site Header
   ----
   Edit the NAV array below to add/remove/reorder menu items.
   The header renders into <div id="site-header"></div> on every page.
   Mobile: hamburger opens a full overlay menu.
   =========================================================== */

(function () {
  // ----- Configure your nav here -----
  const NAV = [
    { type: 'link',     label: 'Home',      href: '/' },
    { type: 'link',     label: 'About',     href: '/jordan-j-caron' },
    { type: 'dropdown', label: 'Issues', items: [
        { label: 'Dating & Marriage',              href: '/dating-and-marriage' },
        { label: 'Break Up & Divorce',             href: '/break-up-and-divorce' },
        { label: 'Fatherhood',                     href: '/fatherhood' },
        { label: 'Trauma & Stress',                href: '/trauma-and-stress' },
        { label: 'Work-Life Balance',              href: '/work-life-balance' },
        { label: 'Sexlessness & Intimacy',         href: '/sexlessness-and-intimacy' },
        { label: 'Infidelity & Sexual Compulsion', href: '/infidelity-and-sexual-compulsion' },
        { label: 'Porn & Other Addictions',        href: '/porn-and-other-addictions' },
    ]},
    { type: 'dropdown', label: 'Locations', items: [
        { label: 'Canadian Cities', href: '/canada', meta: 'CA' },
        { label: 'USA Cities',      href: '/usa',    meta: 'US' },
    ]},
    { type: 'link',     label: 'Blog',      href: '/blog' },
  ];
  const CTA = { label: 'Free Consultation', href: 'https://anchormenstherapy.com/book-consultation' };
  const LOGO = { src: '/assets/logo.png', alt: "Anchor Men's Therapy" };

  // ----- Build markup -----
  const navHtml = NAV.map(item => {
    if (item.type === 'link') {
      return `<a href="${item.href}">${item.label}</a>`;
    }
    if (item.type === 'dropdown') {
      const subItems = item.items.map(s =>
        `<a href="${s.href}" role="menuitem"><span>${s.label}</span>${s.meta ? `<span class="nav-dd-meta">${s.meta}</span>` : ''}</a>`
      ).join('');
      return `
        <div class="nav-item" data-nav="${item.label.toLowerCase()}">
          <button class="nav-trigger" type="button" aria-haspopup="true" aria-expanded="false">
            <span>${item.label}</span>
            <span class="caret" aria-hidden="true"></span>
          </button>
          <div class="nav-dropdown" role="menu">${subItems}</div>
        </div>
      `;
    }
  }).join('');

  // Mobile menu uses simpler flat list (dropdowns expand inline)
  const mobileHtml = NAV.map(item => {
    if (item.type === 'link') {
      return `<a class="mobile-link" href="${item.href}">${item.label}</a>`;
    }
    if (item.type === 'dropdown') {
      const subs = item.items.map(s =>
        `<a class="mobile-sublink" href="${s.href}">${s.label} <span class="mobile-meta">${s.meta || ''}</span></a>`
      ).join('');
      return `
        <div class="mobile-group">
          <div class="mobile-group-label">${item.label}</div>
          ${subs}
        </div>
      `;
    }
  }).join('');

  const headerHtml = `
    <header class="site" id="header" data-screen-label="01 Header">
      <a href="/" class="brand" aria-label="${LOGO.alt} home">
        <img src="${LOGO.src}" alt="${LOGO.alt}">
      </a>
      <nav class="primary" aria-label="Primary">${navHtml}</nav>
      <div class="header-right">
        <a href="${CTA.href}" class="header-cta header-cta-desktop">${CTA.label}</a>
        <button class="hamburger" type="button" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu-inner">
        <nav class="mobile-nav" aria-label="Mobile menu">
          ${mobileHtml}
        </nav>
        <a href="${CTA.href}" class="cta mobile-cta"><span>${CTA.label}</span> <span class="arr">→</span></a>
      </div>
    </div>
  `;

  // ----- Google Tag Manager -----
  if (!window.__gtm_loaded) {
    window.__gtm_loaded = true;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5978WJJD');
  }

  // ----- Favicon -----
  if (!document.querySelector('link[rel="icon"]')) {
    const fav = document.createElement('link');
    fav.rel = 'icon';
    fav.type = 'image/png';
    fav.href = '/assets/anchor-favicon.png';
    document.head.appendChild(fav);
  }

  // ----- Inject -----
  function inject() {
    const slot = document.getElementById('site-header');
    if (!slot) return;
    const pinSolid = slot.hasAttribute('data-pin-solid');
    slot.outerHTML = headerHtml;
    if (pinSolid) document.getElementById('header').setAttribute('data-pin-solid', '');
    wireUp();
  }

  function wireUp() {
    // Dropdown click toggle (touch)
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

    // Header scroll state (or pinned solid)
    const h = document.getElementById('header');
    if (h.hasAttribute('data-pin-solid') || document.body.hasAttribute('data-header-solid')) {
      h.classList.add('solid');
    } else {
      const tick = () => {
        if (window.scrollY > 60) h.classList.add('solid');
        else h.classList.remove('solid');
      };
      window.addEventListener('scroll', tick, { passive: true });
      tick();
    }

    // Hamburger
    const ham = document.querySelector('.hamburger');
    const menu = document.getElementById('mobile-menu');
    if (ham && menu) {
      const open = () => {
        ham.classList.add('open');
        ham.setAttribute('aria-expanded', 'true');
        menu.classList.add('open');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      };
      const close = () => {
        ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      };
      ham.addEventListener('click', () => {
        if (menu.classList.contains('open')) close();
        else open();
      });
      // Close on link click
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
      // Close on Esc
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
