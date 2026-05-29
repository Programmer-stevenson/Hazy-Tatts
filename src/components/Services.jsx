const services = [
  ["01", "✦", "Illustrative Black & Grey", "Hazey's signature — illustrative black and grey with depth, texture, and fine detail built around your concept.", "Signature specialty →"],
  ["02", "◈", "Black & Grey Realism", "Realistic black and grey work capturing shadow, dimension, and lifelike detail.", "Detail-driven →"],
  ["03", "◇", "Traditional", "Bold lines and timeless traditional designs made to age beautifully.", "Built to last →"],
  ["04", "✧", "Fine Line", "Delicate, precise linework for subtle, intricate pieces.", "Precision work →"],
  ["05", "⬡", "Stippling", "Dotwork shading and stippled texture for a soft, hand-rendered feel.", "Dotwork artistry →"],
  ["06", "◉", "Consultation", "A relaxed one-on-one to talk through your idea, placement, and sizing before booking the tattoo.", "Book your session →"],
];

export function Banner() {
  return (
    <div className="parallax-banner reveal">
      <h2 className="banner-title">Your Story, <em style={{ fontStyle: "italic" }}>Permanently</em> Told</h2>
      <p className="banner-sub">Every tattoo is a collaboration between your vision and Hazey's artistry.</p>
      <a href="#contact" className="btn-gold">Book Your Consultation</a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      {/* Mobile-only: staggered 2-column "pyramid-ish" card layout */}
      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 14px !important;
            background: transparent !important;
            padding-bottom: 34px;
          }
          .service-card {
            border: 1px solid rgba(255,204,0,0.14) !important;
            border-radius: 3px;
            padding: 26px 18px !important;
            background: rgba(255,255,255,0.02) !important;
          }
          /* Drop the right column to interlock with the left */
          .service-card:nth-child(even) { transform: translateY(34px); }

          .service-num { margin-bottom: 16px !important; }
          .service-icon {
            width: 40px !important; height: 40px !important;
            margin-bottom: 16px !important; font-size: 1.1rem !important;
          }
          .service-title { font-size: 1.2rem !important; margin-bottom: 10px !important; }
          .service-desc { font-size: 0.78rem !important; margin-bottom: 16px !important; }
          /* No hover on touch — keep the tag visible */
          .service-tag { opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <span className="section-tag reveal">✦ What We Offer</span>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: 0 }}>
          <h2 className="section-title reveal reveal-delay-1" style={{ marginBottom: 0 }}>Premium<br /><em>Services</em></h2>
          <p className="reveal reveal-delay-2" style={{ color: "var(--muted)", fontSize: "0.82rem", maxWidth: "340px", lineHeight: 2, textAlign: "right" }}>
            Each service is offered with a full consultation, custom design process, and aftercare guidance.
          </p>
        </div>
      </div>

      <div className="services-grid reveal">
        {services.map(([num, icon, title, desc, tag]) => (
          <div className="service-card" key={num}>
            <div className="service-num">{num}</div>
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{desc}</p>
            <span className="service-tag">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}