import { useEffect } from "react";

export default function Lightbox({ data, onClose }) {
  const show = !!data;

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show, onClose]);

  return (
    <div
      id="lightbox"
      className={show ? "show" : ""}
      onClick={(e) => { if (e.target.id === "lightbox") onClose(); }}
    >
      <div className="lightbox-inner">
        <button className="lightbox-close" onClick={onClose}>✕</button>
        <div
          id="lb-visual"
          style={{ width: "100%", minHeight: "300px", background: "#1a1d21", display: "flex", alignItems: "center", justifyContent: "center" }}
          dangerouslySetInnerHTML={{ __html: data ? data.art : "" }}
        />
        <div className="lightbox-info">
          <span className="lightbox-cat">{data ? data.item.cat.replace("-", " ") : ""}</span>
          <h3 className="lightbox-title">{data ? data.item.name : ""}</h3>
          <p className="lightbox-desc">{data ? data.item.desc : ""}</p>
        </div>
      </div>
    </div>
  );
}
