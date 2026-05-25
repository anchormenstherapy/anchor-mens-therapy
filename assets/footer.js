/* ===========================================================
   ANCHOR MEN'S THERAPY — Shared Site Footer
   ----
   Edit the FOOTER object below to update site-wide footer.
   The footer renders into <div id="site-footer"></div> on every page.
   =========================================================== */

(function () {
  const FOOTER = {
    logo: { src: '/assets/logo.png', alt: "Anchor Men's Therapy" },
    blurb: "Professional therapy and counselling specifically for men. Virtual sessions available across Canada and the United States.",
    columns: [
      {
        heading: 'Explore',
        links: [
          { label: 'Home',                             href: '/' },
          { label: 'About',                            href: '/jordan-j-caron' },
          { label: 'Canadian Cities',                  href: '/canada' },
          { label: 'USA Cities',                       href: '/usa' },
          { label: 'Blog',                             href: '/blog' },
          { label: 'Book a Consultation',              href: '/book-consultation' },
        ],
      },
      {
        heading: 'Issues',
        links: [
          { label: 'Dating & Marriage',                href: '/dating-and-marriage' },
          { label: 'Break Up & Divorce',               href: '/break-up-and-divorce' },
          { label: 'Fatherhood',                       href: '/fatherhood' },
          { label: 'Trauma & Stress',                  href: '/trauma-and-stress' },
          { label: 'Work-Life Balance',                href: '/work-life-balance' },
          { label: 'Sexlessness & Intimacy',           href: '/sexlessness-and-intimacy' },
          { label: 'Infidelity & Sexual Compulsion',   href: '/infidelity-and-sexual-compulsion' },
          { label: 'Porn & Recovery',                   href: '/porn-and-other-addictions' },
        ],
      },
      {
        heading: 'Programs',
        links: [
          { label: 'Porn Recovery Therapy',            href: '/porn-addiction-therapy' },
          { label: 'Gambling Recovery Therapy',        href: '/gambling-addiction-therapy' },
          { label: 'Porn Recovery Group',              href: '/porn-recovery-group' },
        ],
      },
    ],
    contact: {
      heading: 'Canada Head Office',
      address: '477 Richmond St, #601<br>Toronto, ON M5V 3E7<br>Canada',
      meta: 'By appointment',
      email: 'hello@anchormenstherapy.com',
    },
    legal: '© 2026 Anchor Men\'s Therapy. All rights reserved.',
    legalLinks: [
      { label: 'Privacy', href: '#' },
      { label: 'Accessibility', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  };

  const colsHtml = FOOTER.columns.map(col => `
    <div class="footer-col">
      <h5>${col.heading}</h5>
      <ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
    </div>
  `).join('');

  const legalHtml = FOOTER.legalLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

  const html = `
    <footer class="site" id="resources" data-screen-label="12 Footer">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="/" class="brand">
              <img src="${FOOTER.logo.src}" alt="${FOOTER.logo.alt}">
            </a>
            <p>${FOOTER.blurb}</p>
            <div class="footer-contact-inline">
              <h5>${FOOTER.contact.heading}</h5>
              <div class="addr">${FOOTER.contact.address}</div>
              <div class="meta">${FOOTER.contact.meta}</div>
              <a class="email" href="mailto:${FOOTER.contact.email}">${FOOTER.contact.email}</a>
            </div>
          </div>
          ${colsHtml}
        </div>
        <div class="footer-bottom">
          <div>${FOOTER.legal}</div>
          <div>${legalHtml}</div>
        </div>
      </div>
    </footer>
  `;

  function inject() {
    const slot = document.getElementById('site-footer');
    if (!slot) return;
    slot.outerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
