export default function Popup({ show, onClose }) {
  return (
    <div
      id="popup-overlay"
      className={show ? "show" : ""}
      onClick={(e) => { if (e.target.id === "popup-overlay") onClose(); }}
    >
      <div className="popup-card">
        <button className="popup-close" aria-label="Close" onClick={onClose}>✕</button>
        <span className="popup-tag">Limited Bookings Available</span>
        <h2 className="popup-title">
          Ready For Your<br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Next Piece?</em>
        </h2>
        <p className="popup-sub">Contact now for a custom quote. Every tattoo is a collaboration.</p>
        <div className="popup-btns">
          <a href="#contact" className="btn-gold" onClick={onClose}>Book Consultation</a>
          <a href="#portfolio" className="btn-outline" onClick={onClose}>View Portfolio</a>
        </div>
      </div>
    </div>
  );
}
