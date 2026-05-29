const features = [
  ["✦", "Custom Artistry", "Every design is original and tailored specifically to you."],
  ["◈", "Safe Studio", "Fully licensed, sterile environment and premium inks."],
  ["◇", "Fine Detail", "Micro-detail work and precision linework are a specialty."],
  ["✧", "Client First", "Ongoing support from first consultation to healed ink."],
];

export default function About() {
  return (
    <section id="about">
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
            <div className="about-stat-num">500+</div>
            <div className="about-stat-label">Pieces Completed</div>
          </div>
        </div>

        <div className="about-text">
          <span className="section-tag reveal">✦ The Artist</span>
          <h2 className="section-title reveal reveal-delay-1">Precision.<br /><em>Passion.</em><br />Permanence.</h2>
          <div className="gold-line reveal reveal-delay-2"></div>
          <p className="section-body reveal reveal-delay-2">
            Hazey is a luxury tattoo artist based in Las Vegas, specializing in fine line, blackwork, realism, and custom floral compositions. With a deep respect for the art form and an unwavering commitment to client experience, every session is crafted around your vision.
          </p>
          <p className="section-body reveal reveal-delay-3" style={{ marginTop: "20px" }}>
            A safe, sterile, and welcoming studio environment ensures comfort from consultation to aftercare. Because your skin deserves the very best.
          </p>
          <div className="about-features reveal reveal-delay-4">
            {features.map(([icon, label, text]) => (
              <div className="about-feature" key={label}>
                <div className="about-feature-icon">{icon}</div>
                <div>
                  <div className="about-feature-label">{label}</div>
                  <div className="about-feature-text">{text}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "36px" }} className="reveal reveal-delay-4">
            <a href="#contact" className="btn-gold">Start Your Journey</a>
          </div>
        </div>
      </div>
    </section>
  );
}
