const features = [
  ["wolf", "Illustrative Focus", "Specializing in illustrative black and grey with depth and fine detail."],
  ["knight", "Marauder Tattoo", "Working out of a clean, licensed studio in Murray, Utah."],
  ["moon", "Fine Art Roots", "A background in oil painting and calligraphy informs every piece."],
  ["mermaid", "Client First", "Ongoing support from first consultation to a free healed touch-up."],
];

export default function About() {
  return (
    <section id="about">
      {/* Center the heading block on mobile only */}
      <style>{`
        /* Logo images inside the feature icon slots (replace emojis) */
        #about .about-feature-icon {
          overflow: hidden;
          width: 64px !important; height: 64px !important;
          min-width: 64px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,204,0,0.45);
        }
        #about .about-feature-img {
          width: 84%; height: 84%; object-fit: contain;
        }

        @media (max-width: 768px) {
          #about .about-text .section-tag,
          #about .about-text .section-title,
          #about .about-text .section-body { text-align: center; }
          #about .about-text .gold-line { margin-left: auto; margin-right: auto; }

          /* Feature blocks in 2 columns for a cleaner, elegant grid */
          #about .about-features {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 22px 18px;
          }
          #about .about-feature { margin-bottom: 0; }
        }

        /* "Start Your Journey" — exact popup look: black bg, crimson border, red glow */
        #about .about-cta-wrap { text-align: center; }
        #about .about-cta {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: rgba(13,15,17,0.95);
          color: var(--text, #EDEDED);
          border: 1px solid var(--crimson, #A4161A); border-radius: 6px;
          padding: 18px 34px;
          font-family: 'Jost', sans-serif; font-size: 0.78rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; text-decoration: none;
          box-shadow: 0 0 22px rgba(164,22,26,0.45), 0 18px 40px rgba(0,0,0,0.5);
          transition: box-shadow 0.3s ease, transform 0.2s ease, border-color 0.3s ease;
          -webkit-tap-highlight-color: transparent;
        }
        /* Hover (desktop) */
        @media (hover: hover) {
          #about .about-cta:hover {
            border-color: #ff4d4d;
            box-shadow: 0 0 34px rgba(164,22,26,0.85), 0 0 70px rgba(164,22,26,0.5);
            transform: translateY(-3px);
          }
        }
        /* Tap / click glow (works on mobile too) */
        #about .about-cta:active {
          border-color: #ff4d4d;
          box-shadow: 0 0 40px rgba(164,22,26,0.95), 0 0 80px rgba(164,22,26,0.6);
          transform: scale(0.98);
        }
      `}</style>

      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="about-frame">
            <div className="about-frame-deco"></div>
            <div className="about-frame-deco-2"></div>
            <div className="about-placeholder">
              <svg viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "80%", height: "80%", opacity: 0.15 }}>
                <circle cx="160" cy="160" r="100" stroke="#FFCC00" strokeWidth="0.8" />
                <path d="M80 160 Q160 80 240 160 Q160 240 80 160Z" stroke="#FFCC00" strokeWidth="0.5" />
                <circle cx="160" cy="160" r="50" stroke="#FFCC00" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="60" y1="320" x2="260" y2="320" stroke="#FFCC00" strokeWidth="0.5" />
                <line x1="90" y1="340" x2="230" y2="340" stroke="#FFCC00" strokeWidth="0.3" />
                <text x="160" y="390" textAnchor="middle" fill="#FFCC00" fontSize="14" letterSpacing="4" fontFamily="serif" opacity="0.6">HAZEY</text>
              </svg>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,26,29,0.5), transparent 60%)" }}></div>
            </div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">6+</div>
            <div className="about-stat-label">Years Tattooing</div>
          </div>
        </div>

        <div className="about-text">
          <span className="section-tag reveal">✦ The Artist</span>
          <h2 className="section-title reveal reveal-delay-1">Precision.<br /><em>Passion.</em><br />Permanence.</h2>
          <div className="gold-line reveal reveal-delay-2"></div>
          <p className="section-body reveal reveal-delay-2">
            Hailey — known as Hazey — is a tattoo artist at Marauder Tattoo in Murray, Utah, just south of Salt Lake City. With six years tattooing and roughly a decade in the industry, she specializes in illustrative black and grey, alongside traditional, fine line, stippling, and black and grey realism.
          </p>
          <p className="section-body reveal reveal-delay-3" style={{ marginTop: "20px" }}>
            Her work is grounded in fine art — a background in oil painting and calligraphy, and formal art study since 2014. Every session is built around your idea, with a clean, welcoming studio and care that lasts from consultation through a free healed touch-up.
          </p>
          <div className="about-features reveal reveal-delay-4">
            {features.map(([logo, label, text]) => (
              <div className="about-feature" key={label}>
                <div className="about-feature-icon">
                  <img className="about-feature-img" src={`/${logo}.png`} alt="" aria-hidden="true" />
                </div>
                <div>
                  <div className="about-feature-label">{label}</div>
                  <div className="about-feature-text">{text}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "36px" }} className="about-cta-wrap">
            <a href="#contact" className="about-cta">✦ Start Your Journey →</a>
          </div>
        </div>
      </div>
    </section>
  );
}