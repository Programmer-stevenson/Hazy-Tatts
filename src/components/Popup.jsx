import { useEffect, useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);

  // Slide in shortly after load.
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Close with the slide-out animation, then jump to the contact section.
  const handleBook = (e) => {
    e.preventDefault();
    setShow(false);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 600); // matches the badge's transition duration
  };

  return (
    <>
      <style>{`
        .booking-badge {
          position: fixed; bottom: 22px; right: 22px; z-index: 99998;
          display: flex; align-items: center; gap: 14px;
          background: rgba(13,15,17,0.95);
          border: 1px solid var(--crimson, #A4161A);
          border-radius: 6px; padding: 14px 16px 14px 18px;
          box-shadow: 0 0 22px rgba(164,22,26,0.45), 0 18px 40px rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
          max-width: 280px;
          transform: translateY(140%); opacity: 0;
          transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1), opacity 0.6s ease;
        }
        .booking-badge.show { transform: translateY(0); opacity: 1; }

        .booking-badge-tag {
          font-family: 'Jost', sans-serif; font-size: 0.6rem;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--crimson, #A4161A); margin-bottom: 4px;
        }
        .booking-badge-title {
          font-family: 'Cormorant Garamond', serif; font-size: 1.05rem;
          color: var(--text, #EDEDED); line-height: 1.2;
        }
        .booking-badge-cta {
          display: inline-block; margin-top: 8px;
          font-family: 'Jost', sans-serif; font-size: 0.66rem;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--gold, #FFCC00); text-decoration: none;
        }
        .booking-badge-cta:hover { color: var(--crimson, #A4161A); }

        .booking-badge-close {
          background: none; border: none; cursor: pointer;
          color: var(--muted, #888); font-size: 0.95rem; line-height: 1;
          padding: 2px; align-self: flex-start;
          transition: color 0.2s ease;
        }
        .booking-badge-close:hover { color: var(--crimson, #A4161A); }

        @media (max-width: 600px) {
          .booking-badge {
            bottom: 14px; right: 14px; left: 14px; max-width: none;
            position: fixed; padding: 18px 20px;
          }
          .booking-badge-close {
            position: absolute; top: 8px; right: 8px;
            width: 34px; height: 34px; padding: 0;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.1rem; border-radius: 50%;
            border: 1px solid var(--crimson, #A4161A);
            color: var(--crimson, #A4161A);
            background: rgba(164,22,26,0.10);
          }
          .booking-badge > div { padding-right: 8px; }
        }

      `}</style>

      <div className={"booking-badge" + (show ? " show" : "")}>
        <div>
          <div className="booking-badge-tag">✦ Limited Bookings Available</div>
          <div className="booking-badge-title">Ready for your next piece?</div>
          <a href="#contact" className="booking-badge-cta" onClick={handleBook}>Book a consultation →</a>
        </div>
        <button className="booking-badge-close" aria-label="Dismiss" onClick={() => setShow(false)}>✕</button>
      </div>
    </>
  );
}