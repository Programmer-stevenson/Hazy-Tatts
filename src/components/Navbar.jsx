import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const links = [
  ["hero", "Home"],
  ["portfolio", "Portfolio"],
  ["about", "About"],
  ["services", "Services"],
  ["reviews", "Reviews"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Smoothly scroll to a section by id.
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle a section link click. If we're already on the home page, just
  // scroll. If we're on another page (Terms/Privacy), go home first, then
  // scroll once the home page has rendered.
  const goToSection = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToId(id), 100);
    }
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <Link to="/" className="nav-logo" onClick={goToSection("hero")}>
          Hazey <span>Tattoos</span>
        </Link>
        <ul className="nav-links">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`/#${id}`} onClick={goToSection(id)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="/#contact" className="nav-cta" onClick={goToSection("contact")}>
          Book Now
        </a>
        <button
          className={"hamburger" + (open ? " open" : "")}
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={"mobile-menu" + (open ? " open" : "")}>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`/#${id}`}
            className="mob-link"
            onClick={goToSection(id)}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}