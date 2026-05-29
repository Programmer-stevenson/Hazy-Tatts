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
      <style>{`
        /* Centered heading block (all screens) */
        #services .services-head {
          text-align: center; max-width: 640px; margin: 0 auto;
        }
        #services .services-head .section-tag { display: block; text-align: center; }
        #services .services-head .section-title { text-align: center; margin: 0 auto 18px; }
        #services .services-head .gold-line { margin: 18px auto 22px; }
        #services .services-head p { margin: 0 auto; text-align: center; }

        /* ── DESKTOP: compact, elegant 3 × 2 card grid ── */
        @media (min-width: 769px) {
          #services .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 18px !important;
            background: transparent !important;
            max-width: 1080px; margin: 56px auto 0;
          }
          #services .service-card {
            position: relative; overflow: hidden;
            padding: 30px 26px !important;
            border: 1px solid rgba(255,204,0,0.15);
            border-radius: 5px;
            background: rgba(255,255,255,0.015);
            transition: border-color 0.4s ease, transform 0.4s ease, background 0.4s ease;
          }
          #services .service-card:hover {
            border-color: rgba(164,22,26,0.45);
            transform: translateY(-5px);
            background: rgba(164,22,26,0.04);
          }
          /* Number as a faint oversized watermark in the corner */
          #services .service-num {
            position: absolute; top: 10px; right: 16px;
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.6rem; line-height: 1;
            color: var(--gold, #FFCC00); opacity: 0.10;
            margin: 0 !important;
          }
          /* Icon + title sit on one row */
          #services .service-icon {
            width: 38px !important; height: 38px !important;
            font-size: 1rem !important; margin-bottom: 16px !important;
          }
          #services .service-title { font-size: 1.18rem !important; margin-bottom: 12px !important; }
          #services .service-desc { font-size: 0.8rem !important; line-height: 1.85 !important; margin-bottom: 16px !important; }
          #services .service-tag { opacity: 1 !important; transform: none !important; }
        }

        /* ── MOBILE: staggered 2-column layout (unchanged) ── */
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
          .service-card:nth-child(even) { transform: translateY(34px); }
          .service-num { margin-bottom: 16px !important; }
          .service-icon {
            width: 40px !important; height: 40px !important;
            margin-bottom: 16px !important; font-size: 1.1rem !important;
          }
          .service-title { font-size: 1.2rem !important; margin-bottom: 10px !important; }
          .service-desc { font-size: 0.78rem !important; margin-bottom: 16px !important; }
          .service-tag { opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div className="services-head">
          <span className="section-tag reveal">✦ What We Offer</span>
          <h2 className="section-title reveal reveal-delay-1">Premium <em>Services</em></h2>
          <div className="gold-line reveal reveal-delay-2"></div>
          <p className="reveal reveal-delay-2" style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 2 }}>
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