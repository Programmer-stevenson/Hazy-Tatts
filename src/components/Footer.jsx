export default function Footer() {
  return (
    <footer>
      {/* Scoped styles for the pyramid layout + large Instagram button */}
      <style>{`
        .footer-pyramid {
          max-width: 1100px; margin: 0 auto 48px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: 28px;
        }
        .footer-apex { max-width: 420px; }
        .footer-apex .footer-tagline { margin: 0 auto; }

        .footer-ig-big {
          width: 64px; height: 64px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,204,0,0.4);
          border-radius: 14px; color: var(--gold);
          text-decoration: none; cursor: none;
          transition: border-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .footer-ig-big:hover {
          border-color: var(--crimson);
          color: var(--crimson);
          box-shadow: 0 0 26px var(--crimson-glow);
          transform: translateY(-3px);
        }

        .footer-base {
          display: flex; justify-content: center; flex-wrap: wrap;
          gap: 64px; width: 100%;
        }
        .footer-base > div { text-align: center; }
        .footer-base .footer-links { align-items: center; }

        @media (max-width: 600px) {
          .footer-base { gap: 36px; }
        }
      `}</style>

      <div className="footer-pyramid">
        {/* Apex */}
        <div className="footer-apex">
          <a href="#hero" className="footer-logo">Hazey <span>Tattoos</span></a>
          <p className="footer-tagline">Illustrative black and grey tattoo artistry at Marauder Tattoo in Murray, Utah. Traditional, fine line, stippling, and black and grey realism.</p>
        </div>

        {/* Large Instagram logo */}
        <a href="https://instagram.com/hazeytattoos" target="_blank" rel="noreferrer" className="footer-ig-big" aria-label="Instagram">
          <svg width="34" height="34" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        </a>

        {/* Base row of columns (the pyramid's wide base) */}
        <div className="footer-base">
          <div>
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Services</p>
            <ul className="footer-links">
              <li><a href="#services">Illustrative B&amp;G</a></li>
              <li><a href="#services">B&amp;G Realism</a></li>
              <li><a href="#services">Traditional</a></li>
              <li><a href="#services">Fine Line</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Connect</p>
            <ul className="footer-links">
              <li><a href="#contact">Book Appointment</a></li>
              <li><a href="https://instagram.com/hazeytattoos" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="mailto:hello@hazeytattoos.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="gold-divider"></div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Hazey Tattoos · Murray, UT · All Rights Reserved</p>
        <div className="footer-social">
          <a href="https://instagram.com/hazeytattoos" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}