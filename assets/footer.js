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
          { label: 'Home',                href: '/' },
          { label: 'About',               href: '/#about' },
          { label: 'Canadian Cities',     href: '/locations/canada.html' },
          { label: 'USA Cities',          href: '/locations/usa.html' },
          { label: 'Book a Consultation', href: 'https://anchormenstherapy.com/book-consultation' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Dating & Marriage',                href: 'https://anchormenstherapy.com/dating-and-marriage' },
          { label: 'Break Up & Divorce',               href: 'https://anchormenstherapy.com/break-up-and-divorce' },
          { label: 'Fatherhood',                       href: 'https://anchormenstherapy.com/fatherhood' },
          { label: 'Trauma & Stress',                  href: 'https://anchormenstherapy.com/trauma-and-stress' },
          { label: 'Work-Life Balance',                href: 'https://anchormenstherapy.com/work-life-balance' },
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
          </div>
          ${colsHtml}
          <div class="footer-col footer-contact">
            <h5>${FOOTER.contact.heading}</h5>
            <div class="addr">${FOOTER.contact.address}</div>
            <div class="meta">${FOOTER.contact.meta}</div>
            <a class="email" href="mailto:${FOOTER.contact.email}">${FOOTER.contact.email}</a>
          </div>
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
