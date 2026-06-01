export default function Terms() {
  return (
    <section id="terms" className="legal-page">
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
      <h1>Terms of Service</h1>
      <p className="legal-updated">Last updated: May 2026 · Governed by the laws of the State of Utah</p>
      <div className="gold-line"></div>

      <p className="legal-intro">
        These Terms of Service ("Terms") govern your use of the Hazey Tattoos website and the
        tattoo services provided by Hazey Tattoos at Marauder Tattoo in Murray, Utah. By booking an
        appointment, paying a deposit, or receiving a tattoo, you agree to these Terms. Please read
        them carefully.
      </p>

      <h2>1. Age requirement</h2>
      <p>
        Under Utah law, you must be at least 18 years old to receive a tattoo, and we require a
        valid government-issued photo ID at your appointment. We do not tattoo minors, and we do not
        accept parental or guardian consent as a substitute for the legal age requirement. If we
        cannot verify that you are 18 or older, your appointment will be cancelled and your deposit
        forfeited.
      </p>

      <h2>2. Consent and health disclosure</h2>
      <p>
        Before any tattoo, you must complete and sign our consent and release form and disclose
        relevant health information, including allergies, skin conditions, bleeding disorders,
        pregnancy or nursing, and any medications or conditions that may affect healing. We reserve
        the right to decline or postpone service if we believe a tattoo would pose a health or
        safety risk.
      </p>

      <h2>3. Booking, deposits, and payment</h2>
      <ul>
        <li>A non-refundable deposit is required to reserve your appointment and is applied toward the final cost of your tattoo.</li>
        <li>Deposits are forfeited for no-shows, same-day cancellations, or arriving without valid ID.</li>
        <li>Custom design time is reserved specifically for you; deposits cover that work and are non-refundable.</li>
        <li>Final pricing depends on size, placement, detail, and time. Quotes are estimates until the work is complete.</li>
      </ul>

      <h2>4. Rescheduling and cancellations</h2>
      <p>
        Please provide at least 48 hours' notice to reschedule and keep your deposit. Cancellations
        with less notice, repeated rescheduling, or no-shows may require a new deposit before we
        book again.
      </p>

      <h2>5. Designs and intellectual property</h2>
      <p>
        All custom artwork, drawings, and designs created by the artist remain the intellectual
        property of Hazey Tattoos unless otherwise agreed in writing. Designs are created for your
        individual tattoo and may not be reproduced, resold, or used by other artists. We may
        photograph completed work and display it in our portfolio, on social media, and on this
        website unless you request otherwise in writing.
      </p>

      <h2>6. Aftercare and results</h2>
      <p>
        Proper healing depends heavily on following the aftercare instructions we provide. Tattoos
        are permanent, and final appearance can vary based on skin type, placement, sun exposure,
        and aftercare. We are not responsible for fading, distortion, or infection that results from
        failure to follow aftercare guidance or from picking, scratching, or improper care.
      </p>

      <h2>7. Touch-ups</h2>
      <p>
        Minor touch-ups may be offered at our discretion within a reasonable window after healing.
        Touch-ups needed due to neglect of aftercare, excessive sun, or other client-caused factors
        may incur a charge.
      </p>

      <h2>8. Conduct and right to refuse service</h2>
      <p>
        We reserve the right to refuse or stop service for anyone who is intoxicated, under the
        influence of drugs or alcohol, abusive, or otherwise unfit to be tattooed safely. Clients
        under the influence cannot legally consent and will be turned away with deposit forfeited.
      </p>

      <h2>9. Assumption of risk and limitation of liability</h2>
      <p>
        Tattooing carries inherent risks, including allergic reaction, infection, and scarring, even
        when proper procedures are followed. By receiving a tattoo, you acknowledge and assume these
        risks. To the fullest extent permitted by Utah law, our liability for any claim arising from
        our services is limited to the amount you paid for the service in question.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Utah, without regard to its
        conflict-of-laws rules. Any dispute will be brought in the state or federal courts located
        in Salt Lake County, Utah.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be posted on this page
        with a new "last updated" date. Continued use of our services after changes take effect
        means you accept the updated Terms.
      </p>

      <div className="legal-contact">
        <p style={{ margin: 0 }}>
          Questions about these Terms? Email us at{" "}
          <a href="mailto:hello@hazeytattoos.com">hello@hazeytattoos.com</a>.
        </p>
      </div>
    </section>
  );
}
