import { useMemo } from "react";

export default function Hero() {
  // Generate 30 particles once (same approach as the original).
  // Every 6th one is crimson for a little extra warmth.
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const size = 1 + Math.random() * 3;
        return {
          crimson: i % 6 === 0,
          style: {
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${8 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`,
          },
        };
      }),
    []
  );

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-particles" id="hero-particles">
        {particles.map((p, i) => (
          <div key={i} className={"particle" + (p.crimson ? " crimson" : "")} style={p.style}></div>
        ))}
      </div>

      <div className="hero-content">
        <span className="hero-tag">✦ Las Vegas, Nevada ✦</span>
        <h1 className="hero-title">Where <em>Art</em><br />Meets Skin</h1>
        <p className="hero-sub">Custom tattoo artistry — fine line, blackwork, realism, floral &amp; bespoke designs crafted with precision and care.</p>
        <div className="hero-btns">
          <a href="#contact" className="btn-gold">Book Appointment</a>
          <a href="#portfolio" className="btn-outline">Explore Work</a>
        </div>
      </div>

      <div className="hero-divider">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
