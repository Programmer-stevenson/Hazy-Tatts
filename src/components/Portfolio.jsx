import { useState } from "react";
import { galleryData, makeGalleryArt } from "../data";
import Lightbox from "./Lightbox";

const filters = [
  ["all", "All Work"],
  ["fine-line", "Fine Line"],
  ["blackwork", "Blackwork"],
  ["realism", "Realism"],
  ["floral", "Floral"],
  ["custom", "Custom"],
];

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null); // { item, art }

  return (
    <section id="portfolio">
      <div className="portfolio-header reveal">
        <span className="section-tag">✦ The Work</span>
        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
          Curated <em>Portfolio</em>
        </h2>
        <div className="gold-line"></div>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", letterSpacing: "0.1em", maxWidth: "480px", margin: "0 auto", lineHeight: 2 }}>
          Each piece is a collaboration between artist and client — permanent, intentional, timeless.
        </p>
      </div>

      <div className="filter-tabs reveal">
        {filters.map(([key, label]) => (
          <button
            key={key}
            className={"filter-tab" + (active === key ? " active" : "")}
            data-filter={key}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="gallery-grid" id="gallery-grid">
        {galleryData.map((item, i) => {
          const art = makeGalleryArt(item, i);
          const match = active === "all" || item.cat === active;
          return (
            <div
              key={i}
              className="gallery-item reveal visible"
              data-cat={item.cat}
              style={{
                transitionDelay: ((i % 3) * 0.1) + "s",
                opacity: match ? 1 : 0.2,
                transform: match ? "scale(1)" : "scale(0.96)",
              }}
              onClick={() => setLightbox({ item, art })}
            >
              <div className="gallery-placeholder" dangerouslySetInnerHTML={{ __html: art }} />
              <div className="gallery-glow"></div>
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.cat.replace("-", " ")}</span>
                <div className="gallery-name">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Lightbox data={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
