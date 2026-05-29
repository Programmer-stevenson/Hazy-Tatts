export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <a href="#hero" className="footer-logo">Tattoos, <span>By Hazey</span></a>
          <p className="footer-tagline">Luxury custom tattoo artistry in Las Vegas. Fine line, blackwork, realism, and bespoke designs crafted with precision.</p>
          <div style={{ width: "40px", height: "1px", background: "rgba(255,204,0,0.3)", marginTop: "24px" }}></div>
        </div>
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
            <li><a href="#services">Custom Tattoos</a></li>
            <li><a href="#services">Fine Line</a></li>
            <li><a href="#services">Sleeve Design</a></li>
            <li><a href="#services">Cover Ups</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Connect</p>
          <ul className="footer-links">
            <li><a href="#contact">Book Appointment</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="gold-divider"></div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Tattoos, By Hazey · Las Vegas, NV · All Rights Reserved</p>
        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
