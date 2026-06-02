export default function Privacy() {
  return (
    <section id="privacy" className="legal-page">
      <style>{`
        .legal-page {
          max-width: 820px;
          margin: 0 auto;
          padding: 140px 24px 100px;
          position: relative;
          z-index: 1;
        }
        .legal-page .legal-tag {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold, #FFCC00);
          margin-bottom: 18px;
        }
        .legal-page h1 {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          line-height: 1.1;
          margin: 0 0 12px;
        }
        .legal-page .legal-updated {
          color: var(--muted, #9a9a9a);
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          margin-bottom: 40px;
        }
        .legal-page .gold-line {
          width: 60px; height: 2px;
          background: var(--gold, #FFCC00);
          margin: 0 0 40px;
          box-shadow: 0 0 14px rgba(255,204,0,0.5);
        }
        .legal-page h2 {
          font-size: 1.25rem;
          margin: 38px 0 12px;
          color: var(--text, #EDEDED);
        }
        .legal-page p,
        .legal-page li {
          color: var(--muted, #b4b4b4);
          line-height: 1.9;
          font-size: 0.95rem;
        }
        .legal-page ul { padding-left: 22px; margin: 10px 0; }
        .legal-page li { margin-bottom: 8px; }
        .legal-page .legal-intro { font-size: 1.02rem; color: var(--text, #d8d8d8); }
        .legal-page a { color: var(--gold, #FFCC00); text-decoration: none; }
        .legal-page a:hover { opacity: 0.8; }
        .legal-page .legal-contact {
          margin-top: 48px;
          padding: 22px 24px;
          border: 1px solid rgba(255,204,0,0.25);
          border-radius: 12px;
          background: rgba(255,204,0,0.03);
        }
      `}</style>

      <span className="legal-tag">✦ Legal</span>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: May 2026 · Governed by the laws of the State of Utah</p>
      <div className="gold-line"></div>

      <p className="legal-intro">
        This Privacy Policy explains how Hazey Tattoos collects, uses, and protects your information
        when you visit our website, book an appointment, or receive services at our studio in
        Murray, Utah.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Contact details</strong> — your name, email address, and phone number when you book or inquire.</li>
        <li><strong>Appointment and consultation details</strong> — design ideas, placement, reference images, and scheduling information you share with us.</li>
        <li><strong>Health and consent information</strong> — information you provide on our consent and release forms, including age verification and relevant medical disclosures required before tattooing.</li>
        <li><strong>Identification</strong> — we verify a valid government-issued photo ID to confirm you are 18 or older, as required by Utah law. We record that ID was verified but do not retain copies unless required by law.</li>
        <li><strong>Website usage</strong> — basic analytics such as pages visited and device type, used to improve the site.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To schedule, confirm, and provide your tattoo appointment.</li>
        <li>To communicate with you about designs, deposits, aftercare, and follow-ups.</li>
        <li>To meet legal, health, and safety obligations under Utah law.</li>
        <li>To display completed work in our portfolio and on social media (unless you opt out in writing).</li>
        <li>To improve our website and services.</li>
      </ul>

      <h2>3. Health information</h2>
      <p>
        The health details you disclose on our consent forms are used solely to determine whether it
        is safe to tattoo you and to provide appropriate care. We keep signed consent and release
        forms as required for our records and treat this information as confidential.
      </p>

      <h2>4. How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with trusted providers that help
        us operate — for example, booking or scheduling tools, payment processors, and analytics
        providers — and only as needed. We may disclose information if required by law or to protect
        the rights, safety, or property of our clients, staff, or studio.
      </p>

      <h2>5. Photographs and social media</h2>
      <p>
        We may photograph completed tattoos and share them in our portfolio, on this website, and on
        platforms such as Instagram. We generally do not tag or identify clients without permission.
        If you prefer your tattoo not be photographed or shared, let us know before your appointment
        and we will honor that request.
      </p>

      <h2>6. Cookies and analytics</h2>
      <p>
        Our website may use cookies and similar technologies to remember preferences and understand
        how the site is used. You can control cookies through your browser settings; disabling them
        may affect some site features.
      </p>

      <h2>7. Data retention and security</h2>
      <p>
        We retain your information for as long as needed to provide services, comply with legal
        obligations, and maintain required records. We use reasonable safeguards to protect your
        information, though no method of transmission or storage is completely secure.
      </p>

      <h2>8. Your choices</h2>
      <p>
        You may request to access, correct, or delete the personal information we hold about you,
        subject to records we are legally required to keep. You may also opt out of marketing
        messages at any time. To make a request, contact us using the details below.
      </p>

      <h2>9. Children's privacy</h2>
      <p>
        Our services and website are intended for adults 18 and older. We do not knowingly collect
        personal information from minors. If you believe a minor has provided us information, please
        contact us so we can remove it.
      </p>

      <h2>10. Governing law</h2>
      <p>
        This Privacy Policy is governed by the laws of the State of Utah, without regard to its
        conflict-of-laws rules.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be posted on this
        page with a new "last updated" date.
      </p>

      <div className="legal-contact">
        <p style={{ margin: 0 }}>
          Privacy questions or requests? Email us at{" "}
          <a href="mailto:hello@hazeytattoos.com">hello@hazeytattoos.com</a>.
        </p>
      </div>
    </section>
  );
}