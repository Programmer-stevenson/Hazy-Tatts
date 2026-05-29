import { useEffect, useState } from "react";

const links = [
  ["#hero", "Home"],
  ["#portfolio", "Portfolio"],
  ["#about", "About"],
  ["#services", "Services"],
  ["#reviews", "Reviews"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a href="#hero" className="nav-logo">Tattoos, <span>By Hazey</span></a>
        <ul className="nav-links">
          {links.map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Book Now</a>
        <button
          className={"hamburger" + (open ? " open" : "")}
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={"mobile-menu" + (open ? " open" : "")}>
        {links.map(([href, label]) => (
          <a key={href} href={href} className="mob-link" onClick={() => setOpen(false)}>{label}</a>
        ))}
      </div>
    </>
  );
}
