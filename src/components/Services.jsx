const services = [
  ["01", "✦", "Custom Tattoos", "From concept to completion — fully bespoke designs crafted around your vision, personality, and placement.", "Starting from consultation →"],
  ["02", "◈", "Fine Line Work", "Delicate, precise linework requiring exceptional skill. Portraits, botanical, geometric, and illustrative styles.", "Signature specialty →"],
  ["03", "◇", "Sleeve Design", "Full and half sleeves designed as cohesive compositions — planned over multiple sessions for perfect harmony.", "Multi-session projects →"],
  ["04", "✧", "Cover Ups", "Transform existing ink into something beautiful. Creative cover-up solutions that exceed expectations.", "Consultation required →"],
  ["05", "⬡", "Floral & Botanical", "Lush, detailed floral compositions — roses, lotus, orchids, and custom botanical arrangements.", "A true specialty →"],
  ["06", "◉", "Consultation", "One-on-one session to explore ideas, placement, sizing, and design direction before committing to ink.", "Book your session →"],
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
