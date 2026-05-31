const services = [
  ["01", "Illustrative Black & Grey", "Hazey's signature — illustrative black and grey with depth, texture, and fine detail built around your concept.", "Signature specialty →", "dragon-head"],
  ["02", "Black & Grey Realism", "Realistic black and grey work capturing shadow, dimension, and lifelike detail.", "Detail-driven →", "gargoyle"],
  ["03", "Traditional", "Bold lines and timeless traditional designs made to age beautifully.", "Built to last →", "dragon-full"],
  ["04", "Fine Line", "Delicate, precise linework for subtle, intricate pieces.", "Precision work →", "mermaid"],
  ["05", "Stippling", "Dotwork shading and stippled texture for a soft, hand-rendered feel.", "Dotwork artistry →", "rose"],
  ["06", "Consultation", "A relaxed one-on-one to talk through your idea, placement, and sizing before booking the tattoo.", "Book your session →", "clown"],
];

export function Banner() {
  return (
    <div className="parallax-banner reveal">
      <h2 className="banner-title">Your Story, <em style={{ fontStyle: "italic" }}>Permanently</em> Told</h2>
      <p className="banner-sub">Every tattoo is a collaboration between your vision and Hazey's artistry. Need to reach me right away?</p>
      <a href="tel:+13854958436" className="btn-gold" style={{ position: "relative", zIndex: 2 }}>✦ Call Now — (801) 440-6561</a>
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

        /* Logo sits inside the round icon badge, replacing the old emoji */
        #services .service-icon { overflow: hidden; }
        #services .service-icon-img {
          width: 78%; height: 78%; object-fit: contain;
          transition: transform 0.4s ease;
        }
        #services .service-card:hover .service-icon-img { transform: scale(1.1); }

        /* ── DESKTOP: compact 3 × 2 grid, SAME crimson/gold checkerboard,
             with INVERTED hover glow (crimson cards glow gold on hover,
             gold cards glow crimson). 3-col grid so the per-row flip uses
             a 6-step cycle: positions 1,5,6 = crimson ; 2,3,4 = gold,
             which gives crimson/gold/gold · crimson/crimson/gold rows. ── */
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
            border-radius: 5px;
            transition: border-color 0.4s ease, transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
          }
          #services .service-card:hover { transform: translateY(-5px); }

          /* DESKTOP is a 3-column grid. Pattern:
               Row 1:  crimson  yellow  crimson
               Row 2:  yellow   crimson yellow
             That's simply odd = crimson, even = yellow. */

          /* CRIMSON cards (odd: 1,3,5) */
          #services .service-card:nth-child(odd) {
            border: 1px solid rgba(164,22,26,0.45);
            background: rgba(164,22,26,0.05);
          }
          #services .service-card:nth-child(odd) .service-icon {
            border-color: rgba(164,22,26,0.6) !important; color: var(--crimson, #A4161A) !important;
          }
          #services .service-card:nth-child(odd) .service-tag {
            color: var(--crimson, #A4161A) !important;
          }
          /* crimson card hover → GOLD glow (inverted) */
          #services .service-card:nth-child(odd):hover {
            border-color: rgba(255,204,0,0.7);
            background: rgba(255,204,0,0.06);
            box-shadow: 0 0 26px rgba(255,204,0,0.45);
          }
          #services .service-card:nth-child(odd):hover .service-icon,
          #services .service-card:nth-child(odd):hover .service-tag {
            color: var(--gold, #FFCC00) !important; border-color: rgba(255,204,0,0.7) !important;
          }

          /* GOLD cards (even: 2,4,6) */
          #services .service-card:nth-child(even) {
            border: 1px solid rgba(255,204,0,0.45);
            background: rgba(255,204,0,0.05);
          }
          #services .service-card:nth-child(even) .service-icon {
            border-color: rgba(255,204,0,0.6) !important; color: var(--gold, #FFCC00) !important;
          }
          #services .service-card:nth-child(even) .service-tag {
            color: var(--gold, #FFCC00) !important;
          }
          /* gold card hover → CRIMSON glow (inverted) */
          #services .service-card:nth-child(even):hover {
            border-color: rgba(164,22,26,0.8);
            background: rgba(164,22,26,0.07);
            box-shadow: 0 0 26px rgba(164,22,26,0.5);
          }
          #services .service-card:nth-child(even):hover .service-icon,
          #services .service-card:nth-child(even):hover .service-tag {
            color: var(--crimson, #A4161A) !important; border-color: rgba(164,22,26,0.8) !important;
          }

          #services .service-icon {
            width: 44px !important; height: 44px !important;
            margin-bottom: 16px !important;
          }
          #services .service-title { font-size: 1.18rem !important; margin-bottom: 12px !important; }
          #services .service-desc { font-size: 0.8rem !important; line-height: 1.85 !important; margin-bottom: 16px !important; }
          #services .service-tag { opacity: 1 !important; transform: none !important; }
        }

        /* ── MOBILE: staggered 2-column layout with ALTERNATING colors ──
           No hover on touch, so we bake the color rhythm in: cards
           alternate crimson / gold in a checkerboard. Borders, tint,
           glow, icon ring, and tag color all flip to match. */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 14px !important;
            background: transparent !important;
            padding-bottom: 34px;
          }
          .service-card {
            border-radius: 3px;
            padding: 26px 18px !important;
            transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          }
          .service-card:nth-child(even) { transform: translateY(34px); }

          /* CHECKERBOARD on a 2-column grid:
             positions 1,4,5,8 = crimson ; positions 2,3,6,7 = gold.
             That's 4n+1 & 4n (crimson) and 4n+2 & 4n+3 (gold), so the
             color flips by column AND row — no two same colors touch. */

          /* CRIMSON cards: 1st, 4th, 5th, 8th ... */
          #services .service-card:nth-child(4n+1),
          #services .service-card:nth-child(4n) {
            border: 1px solid rgba(164,22,26,0.55) !important;
            background: rgba(164,22,26,0.06) !important;
            box-shadow: 0 0 16px rgba(164,22,26,0.20);
          }
          #services .service-card:nth-child(4n+1) .service-icon,
          #services .service-card:nth-child(4n) .service-icon {
            border-color: rgba(164,22,26,0.6) !important;
            color: var(--crimson, #A4161A) !important;
          }
          #services .service-card:nth-child(4n+1) .service-tag,
          #services .service-card:nth-child(4n) .service-tag {
            color: var(--crimson, #A4161A) !important;
          }
          /* crimson card tap → GOLD glow (inverted) */
          #services .service-card:nth-child(4n+1):active,
          #services .service-card:nth-child(4n):active {
            border-color: #FFCC00 !important;
            box-shadow: 0 0 24px rgba(255,204,0,0.55);
          }

          /* GOLD cards: 2nd, 3rd, 6th, 7th ... */
          #services .service-card:nth-child(4n+2),
          #services .service-card:nth-child(4n+3) {
            border: 1px solid rgba(255,204,0,0.55) !important;
            background: rgba(255,204,0,0.06) !important;
            box-shadow: 0 0 16px rgba(255,204,0,0.20);
          }
          #services .service-card:nth-child(4n+2) .service-icon,
          #services .service-card:nth-child(4n+3) .service-icon {
            border-color: rgba(255,204,0,0.6) !important;
            color: var(--gold, #FFCC00) !important;
          }
          #services .service-card:nth-child(4n+2) .service-tag,
          #services .service-card:nth-child(4n+3) .service-tag {
            color: var(--gold, #FFCC00) !important;
          }
          /* gold card tap → CRIMSON glow (inverted) */
          #services .service-card:nth-child(4n+2):active,
          #services .service-card:nth-child(4n+3):active {
            border-color: #A4161A !important;
            box-shadow: 0 0 24px rgba(164,22,26,0.55);
          }

          #services .service-icon {
            width: 46px !important; height: 46px !important;
            margin-bottom: 16px !important;
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
        {services.map(([num, title, desc, tag, logo]) => (
          <div className="service-card" key={num}>
            <div className="service-icon">
              <img className="service-icon-img" src={`/${logo}.png`} alt="" aria-hidden="true" />
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{desc}</p>
            <span className="service-tag">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}