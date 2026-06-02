import { useRef, useState } from "react";

// ⚠️ Replace with your Web3Forms access key (https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "c3449346-da48-4eaf-8ca8-4682c1a06945";

export default function Contact() {
  const formRef = useRef(null);
  const [btnText, setBtnText] = useState("Send Inquiry →");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    setSending(true);
    setBtnText("Sending...");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        form.reset();
        setBtnText("✦ Inquiry Sent");
      } else {
        setBtnText("Error — Try Again");
      }
    } catch {
      setBtnText("Error — Try Again");
    }
    setSending(false);
    setTimeout(() => setBtnText("Send Inquiry →"), 4000);
  };

  return (
    <section id="contact">
      <style>{`
        .contact-flip { max-width: 1200px; margin: 0 auto; }

        /* MOBILE (default): show one panel at a time */
        .contact-flip .flip-back { display: none; }

        /* Front info items in 2 columns on mobile for cleaner visuals */
        .contact-info-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px 20px; align-items: start;
        }
        .contact-info-grid .contact-info-item { margin-bottom: 0; }
        /* Last item (Touch-Ups) spans both columns, centered underneath */
        .contact-info-grid .contact-info-item:last-child {
          grid-column: 1 / -1; text-align: center; margin-top: 20px;
        }

        /* Center the heading block on mobile */
        .flip-front .section-tag,
        .flip-front .section-title,
        .flip-front .section-body { text-align: center; }
        .flip-front .gold-line { margin-left: auto; margin-right: auto; }
        .flip-front .section-body { margin-left: auto; margin-right: auto; }
        .contact-flip.flipped .flip-front { display: none; }
        .contact-flip.flipped .flip-back {
          display: block;
          animation: flipIn 0.5s ease both;
        }
        @keyframes flipIn {
          from { transform: rotateY(-90deg); opacity: 0; }
          to   { transform: rotateY(0deg);  opacity: 1; }
        }

        /* Harley watermark inside the "Describe Your Idea" textarea */
        .idea-wrap { position: relative; }
        .idea-watermark {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120px; height: 120px; border-radius: 50%;
          object-fit: cover; object-position: center 30%;
          opacity: 0.16; pointer-events: none;
          border: 1px solid rgba(255,204,0,0.35);
          box-shadow: 0 0 18px rgba(164,22,26,0.25);
          z-index: 0;
        }
        .idea-wrap textarea { position: relative; z-index: 1; background: transparent; }

        /* Glowing crimson tap-to-book button (mobile only) */
        .flip-tap {
          width: 100%; margin-top: 40px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          background: var(--crimson); color: #fff;
          border: 1px solid rgba(255,80,80,0.5); border-radius: 4px;
          padding: 20px 28px;
          font-family: 'Jost', sans-serif; font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; cursor: none;
          box-shadow: 0 0 18px rgba(164,22,26,0.6), 0 0 44px rgba(164,22,26,0.35);
          animation: crimsonPulse 2.2s ease-in-out infinite;
          transition: transform 0.2s ease;
        }
        .flip-tap:active { transform: scale(0.98); }
        @keyframes crimsonPulse {
          0%, 100% { box-shadow: 0 0 16px rgba(164,22,26,0.55), 0 0 34px rgba(164,22,26,0.30); }
          50%      { box-shadow: 0 0 30px rgba(164,22,26,0.95), 0 0 64px rgba(164,22,26,0.55); }
        }
        .flip-back-btn {
          background: none; border: none; color: var(--gold);
          font-family: 'Jost', sans-serif; font-size: 0.7rem;
          letter-spacing: 0.25em; text-transform: uppercase; cursor: none;
          padding: 0; margin-bottom: 24px;
          display: inline-flex; align-items: center; gap: 8px;
        }

        /* DESKTOP: 3-column layout — info text spans 2 cols, form in the 3rd */
        @media (min-width: 769px) {
          .contact-flip {
            display: grid; grid-template-columns: 1fr 1fr 1.3fr;
            gap: 40px 56px; align-items: start;
          }
          .contact-flip .flip-front { grid-column: 1 / span 2; }
          .contact-flip .flip-back { grid-column: 3; align-self: end; }
          .contact-flip .flip-front,
          .contact-flip .flip-back { display: block !important; animation: none !important; }
          .contact-info-grid { grid-template-columns: 1fr 1fr; gap: 18px 28px; }
          .contact-info-grid .contact-info-item { margin-bottom: 0; }
          .contact-info-grid .contact-info-item:last-child { grid-column: auto; text-align: left; margin-top: 0; }
          .flip-front .section-tag,
          .flip-front .section-title,
          .flip-front .section-body { text-align: left; }
          .flip-front .gold-line { margin-left: 0; margin-right: 0; }
          .flip-front .section-body { margin-left: 0; margin-right: 0; }
          .flip-tap, .flip-back-btn { display: none !important; }
        }
      `}</style>

      <div className={"contact-flip" + (flipped ? " flipped" : "")}>

        {/* FRONT — details (shown first) */}
        <div className="flip-front">
          <span className="section-tag">✦ Let's Connect</span>
          <h2 className="section-title">Book Your<br /><em>Session</em></h2>
          <div className="gold-line"></div>
          <p className="section-body">
            Ready to start your tattoo? Fill out the form and Hazey will get back to you within 24–48 hours to talk through your idea.
          </p>

          <div className="contact-info-grid" style={{ marginTop: "48px" }}>
            <div className="contact-info-item">
              <div className="contact-info-label">Studio</div>
              <div className="contact-info-val">Marauder Tattoo</div>
              <div style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.7, marginTop: "4px" }}>
                4700 S 900 E, Suite #36<br />Murray, UT 84117
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Instagram</div>
              <div className="contact-info-val">@hazeytattoos</div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-val" style={{ fontSize: "1.1rem" }}>hello@hazeytattoos.com</div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Booking Hours</div>
              <div className="contact-info-val">By Appointment Only</div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Deposit</div>
              <div style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>
                $100 non-refundable (also the shop minimum), collected via Venmo when your tattoo appointment is scheduled.
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Rates</div>
              <div style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>
                Most pieces are priced per project. Multi-day sessions: $120 first hour, $110 each hour after.
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Touch-Ups</div>
              <div style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>
                One free touch-up within one year of healing.
              </div>
            </div>
          </div>

          {/* Mobile-only: flip to the form */}
          <button type="button" className="flip-tap" onClick={() => setFlipped(true)}>
            ✦ Tap Here to Book →
          </button>
        </div>

        {/* BACK — the form */}
        <div className="flip-back">
          <button type="button" className="flip-back-btn" onClick={() => setFlipped(false)}>← Back to details</button>
          <form className="contact-form" id="contact-form" ref={formRef} onSubmit={onSubmit}>
            {/* Web3Forms required fields */}
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Booking Inquiry — Hazey Tattoos" />
            <input type="hidden" name="from_name" value="Hazey Tattoos Website" />
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <div className="form-group">
              <input type="text" name="name" id="name" placeholder=" " required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <input type="tel" name="phone" id="phone" placeholder=" " required />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="text" name="body_placement" id="placement" placeholder=" " required />
                <label htmlFor="placement">Body Placement</label>
              </div>
              <div className="form-group">
                <input type="text" name="approx_size" id="size" placeholder=" " required />
                <label htmlFor="size">Approximate Size</label>
              </div>
            </div>

            <div className="form-group idea-wrap">
              <img className="idea-watermark" src="/harley.png" alt="" aria-hidden="true" />
              <textarea name="idea" id="idea" placeholder=" " required minLength={10}></textarea>
              <label htmlFor="idea">Describe Your Idea</label>
            </div>

            <div className="form-group">
              <input type="text" name="earliest_date" id="earliest" placeholder=" " />
              <label htmlFor="earliest">Earliest You Can Come In (optional)</label>
            </div>

            <div className="form-group">
              <select name="referral_source" id="referral" defaultValue="" style={{ color: "var(--muted)" }}>
                <option value="">How'd you find me? (optional)</option>
                <option value="Instagram">Instagram</option>
                <option value="Google">Google</option>
                <option value="Friend referral">Friend referral</option>
                <option value="Walked past the shop">Walked past the shop</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--muted)", fontSize: "0.78rem", letterSpacing: "0.05em", cursor: "none" }}>
              <input type="checkbox" name="email_subscribe" value="Yes" style={{ width: "16px", height: "16px", accentColor: "var(--gold)" }} />
              Add me to the email list for openings &amp; flash drops
            </label>

            <button type="submit" className="btn-gold" disabled={sending} style={{ width: "100%", justifyContent: "center", fontSize: "0.8rem", opacity: sending ? 0.7 : 1 }}>
              {btnText}
            </button>

            <div className={"form-success" + (success ? " show" : "")}>
              ✦ Thank you! Your inquiry has been received. Hazey will be in touch within 24–48 hours.
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}