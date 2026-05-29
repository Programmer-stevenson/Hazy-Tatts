import { useEffect, useRef, useState } from "react";

export default function Loader({ onDone }) {
  const [hide, setHide] = useState(false);
  const sparksRef = useRef(null);
  // Keep the latest onDone in a ref so the timer effect never depends on it.
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    // Build sparks once (clear first to avoid duplicates in StrictMode dev).
    const sparksEl = sparksRef.current;
    sparksEl.innerHTML = "";
    for (let i = 0; i < 18; i++) {
      const s = document.createElement("div");
      s.className = "spark";
      const angle = Math.random() * 360;
      const dist = 40 + Math.random() * 60;
      s.style.cssText = `
        left:${90 + Math.random() * 20}px; top:${90 + Math.random() * 20}px;
        --dx:${Math.cos((angle * Math.PI) / 180) * dist}px;
        --dy:${Math.sin((angle * Math.PI) / 180) * dist}px;
        animation-delay:${Math.random() * 2}s;
        animation-duration:${1.5 + Math.random()}s;
        width:${1 + Math.random() * 3}px; height:${1 + Math.random() * 3}px;
      `;
      sparksEl.appendChild(s);
    }

    let popupTimer;
    const hideTimer = setTimeout(() => {
      setHide(true);
      popupTimer = setTimeout(() => onDoneRef.current && onDoneRef.current(), 1000);
    }, 6200);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(popupTimer);
    };
    // Empty deps: this runs once on mount and never re-arms the popup timer.
  }, []);

  return (
    <div id="loader" className={hide ? "hide" : ""}>
      <style>{`
        .loader-h {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          fill: var(--crimson);
          fill-opacity: 0;
          stroke: var(--crimson);
          stroke-width: 1.2;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          filter: drop-shadow(0 0 8px rgba(164,22,26,0.75));
          animation: drawLine 2.2s ease forwards, hFill 1s ease 1.5s forwards;
        }
        @keyframes hFill { to { fill-opacity: 1; } }
      `}</style>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "200px", height: "200px" }}>
        <div className="loader-sparks" ref={sparksRef}></div>
        <svg className="loader-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="88" stroke="#FFCC00" strokeWidth="0.5" opacity="0.2" />
          <circle cx="100" cy="100" r="78" stroke="#FFCC00" strokeWidth="0.3" opacity="0.1" />
          <text className="loader-h" x="100" y="140" textAnchor="middle" fontSize="120">H</text>
          <path className="loader-path loader-path-2" d="M40 40 L80 40 M120 40 L160 40 M40 160 L80 160 M120 160 L160 160" />
          <path d="M30 50 L30 30 L50 30" stroke="#FFCC00" strokeWidth="0.8" opacity="0.4" strokeDasharray="40" strokeDashoffset="40" style={{ animation: "drawLine 1s ease 1.8s forwards" }} />
          <path d="M170 50 L170 30 L150 30" stroke="#FFCC00" strokeWidth="0.8" opacity="0.4" strokeDasharray="40" strokeDashoffset="40" style={{ animation: "drawLine 1s ease 1.9s forwards" }} />
          <path d="M30 150 L30 170 L50 170" stroke="#FFCC00" strokeWidth="0.8" opacity="0.4" strokeDasharray="40" strokeDashoffset="40" style={{ animation: "drawLine 1s ease 2s forwards" }} />
          <path d="M170 150 L170 170 L150 170" stroke="#FFCC00" strokeWidth="0.8" opacity="0.4" strokeDasharray="40" strokeDashoffset="40" style={{ animation: "drawLine 1s ease 2.1s forwards" }} />
        </svg>
      </div>
      <h1 className="loader-title">Hazey Tattoos</h1>
      <p className="loader-sub">Crafting timeless ink.</p>
      <div className="loader-bar"><div className="loader-bar-fill"></div></div>
    </div>
  );
}