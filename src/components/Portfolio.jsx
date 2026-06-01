import { useState } from "react";
import Lightbox from "./Lightbox";

const filters = [
  ["all", "All Work"],
  ["illustrative", "Illustrative B&G"],
  ["realism", "B&G Realism"],
  ["traditional", "Traditional"],
  ["fine-line", "Fine Line"],
  ["stippling", "Stippling"],
];

// Real client photos. Drop these files into your /public folder with the
// exact same filenames. Order matters: the first 4 are the featured pieces
// shown before "Show More".
const customPieces = [
  // -- Featured (best work) -- these lead the gallery --
  { img: "/ninjacat.jpg",          name: "Masked Dagger",       cat: "illustrative" },
  { img: "/bgskeles.jpg",          name: "The Lovers",          cat: "illustrative" },
  { img: "/bgsnake.jpg",           name: "Serpent & Blossoms",  cat: "illustrative" },
  { img: "/bgangel.jpg",           name: "Angel Statue",        cat: "realism" },

  // -- Illustrative B&G --
  { img: "/crow.jpg",              name: "Raven in Flight",     cat: "illustrative" },
  { img: "/monkeybox.jpg",         name: "Boxing Monkey",       cat: "illustrative" },
  { img: "/bg_lilly.jpg",          name: "Black & Grey Peony",  cat: "illustrative" },
  { img: "/bgskullcow.jpg",        name: "Outlaw Skull",        cat: "illustrative" },
  { img: "/bgastrosnow.jpg",       name: "Cosmic Snowboarder",  cat: "illustrative" },
  { img: "/bg_daisies.jpg",        name: "Wildflower Spray",    cat: "illustrative" },
  { img: "/bgbutterfly.jpg",       name: "Moth",                cat: "illustrative" },
  { img: "/bgspacealli.jpg",       name: "Space Gator",         cat: "illustrative" },
  { img: "/dottedvamp.jpg",        name: "Dotwork Vamp",        cat: "illustrative" },
  { img: "/bgfishgren.jpg",        name: "Goldfish & Blossoms", cat: "illustrative" },
  { img: "/bgskull.jpg",           name: "Dragon Skull",        cat: "illustrative" },
  { img: "/bgfrogandshroom.jpg",   name: "Frog & Toadstool",    cat: "illustrative" },
  { img: "/bgflowers.jpg",         name: "Paw & Blossoms",      cat: "illustrative" },

  // -- Traditional --
  { img: "/colorskullflower.jpg",  name: "Skull Bloom",         cat: "traditional" },
  { img: "/colorking.jpg",         name: "The King",            cat: "traditional" },
  { img: "/colorjaderock.jpg",     name: "Moonlit Crystal",     cat: "traditional" },
  { img: "/colorarcade.jpg",       name: "Arcade Cabinet",      cat: "traditional" },
  { img: "/colorknife.jpg",        name: "Dagger & Hannya",     cat: "traditional" },
  { img: "/colorflow.jpg",         name: "Traditional Bloom",   cat: "traditional" },
  { img: "/colorshroom.jpg",       name: "Mushroom Mischief",   cat: "traditional" },
  { img: "/colorpizza.jpg",        name: "Pizza Slice",         cat: "traditional" },
  { img: "/web.jpg",               name: "Spider Web",          cat: "traditional" },
  { img: "/chain.jpg",             name: "Ornamental Band",     cat: "traditional" },
  { img: "/2jags.jpg",             name: "Twin Cats",           cat: "traditional" },
  { img: "/jaguarbg.jpg",          name: "Prowling Leopard",    cat: "traditional" },
  { img: "/heartmoon.jpg",         name: "Heart Moon",          cat: "traditional" },
  { img: "/colorkang.jpg",         name: "Boxing Kangaroo",     cat: "traditional" },

  // -- Fine line --
  { img: "/spruzzy.jpg",           name: "Soot Sprite",         cat: "fine-line" },
  { img: "/heartlocks.jpg",        name: "Linked Hearts",       cat: "fine-line" },
  { img: "/bgswirls.jpg",          name: "Botanical Spiral",    cat: "fine-line" },
  { img: "/finelineflowers.jpg",   name: "Collarbone Florals",  cat: "fine-line" },
  { img: "/finelinedeer.jpg",      name: "Resting Fawn",        cat: "fine-line" },
  { img: "/finelinegrass.jpg",     name: "Mantis 'Girl Dinner'",cat: "fine-line" },

  // -- Stippling --
  { img: "/timburton.jpg",         name: "Kodama Spirits",      cat: "stippling" },
  { img: "/bgstars.jpg",           name: "Dotwork Mandala",     cat: "stippling" },
];

const INITIAL_COUNT = 4;

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { item, art }

  const handleFilter = (key) => {
    setActive(key);
    setShowAll(false); // reset pagination when switching tabs
    window.dispatchEvent(new CustomEvent("gallery-expanded", { detail: { open: false } }));
  };

  // Fire a window event so other components (e.g. the booking Popup)
  // can react to the gallery expanding/collapsing.
  const setExpanded = (open) => {
    setShowAll(open);
    window.dispatchEvent(new CustomEvent("gallery-expanded", { detail: { open } }));
  };

  // Collapse the gallery AND jump back up to the top of the portfolio
  // section, so the user isn't left stranded far down the page.
  const collapse = () => {
    setExpanded(false);
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Only real photos now (placeholder art removed).
  const allPieces = customPieces.map((p) => ({
    item: { name: p.name, cat: p.cat },
    art: `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;" />`,
  }));

  // Only show pieces in the active category (non-matching are hidden entirely)
  const filtered = allPieces.filter(
    (p) => active === "all" || p.item.cat === active
  );

  // Show only the first 4 unless expanded
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <section id="portfolio">
      <style>{`
        /* Make every gallery tile the same size so the grid looks even */
        #portfolio .gallery-placeholder {
          aspect-ratio: 1 / 1;   /* square tiles -- change to 4 / 5 for portrait */
          width: 100%;
          overflow: hidden;
        }
        #portfolio .gallery-placeholder img,
        #portfolio .gallery-placeholder svg {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          display: block;
        }

        /* Glowing border on every gallery tile (works on mobile + desktop). */
        #portfolio .gallery-item {
          border-radius: 10px;
          border: 1px solid rgba(255,204,0,0.45);
          box-shadow: 0 0 14px rgba(255,204,0,0.25);
          transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.2s ease;
        }
        #portfolio .gallery-item .gallery-placeholder {
          border-radius: 10px;
        }
        @media (hover: hover) {
          #portfolio .gallery-item:hover {
            border-color: #FFCC00;
            box-shadow: 0 0 28px rgba(255,204,0,0.6);
            transform: translateY(-3px);
          }
        }
        #portfolio .gallery-item:active {
          border-color: #FFCC00;
          box-shadow: 0 0 32px rgba(255,204,0,0.65);
        }

        /* -- Floating "collapse" button -- follows you while expanded --
           Only rendered when the gallery is expanded. Fixed to the
           bottom-center of the screen so you can close from anywhere
           without scrolling to the very end. Respects the iOS safe area. */
        .gallery-collapse-fab {
          position: fixed;
          left: 22px;
          bottom: calc(22px + env(safe-area-inset-bottom, 0px));
          z-index: 9990;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(13,15,17,0.92);
          color: var(--text, #EDEDED);
          border: 1px solid rgba(255,204,0,0.55);
          border-radius: 999px;
          padding: 13px 26px;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 22px rgba(255,204,0,0.25), 0 14px 36px rgba(0,0,0,0.5);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease, opacity 0.3s ease;
          animation: fab-rise 0.35s ease both;
        }
        .gallery-collapse-fab:hover {
          border-color: #FFCC00;
          box-shadow: 0 0 30px rgba(255,204,0,0.45), 0 14px 36px rgba(0,0,0,0.5);
        }
        .gallery-collapse-fab:active {
          transform: translateY(1px);
        }
        @keyframes fab-rise {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="portfolio-header reveal">
        <span className="section-tag">✦ The Work</span>
        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
          Curated <em>Portfolio</em>
        </h2>
        <div className="gold-line"></div>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem", letterSpacing: "0.1em", maxWidth: "480px", margin: "0 auto", lineHeight: 2 }}>
          Each piece is a collaboration between artist and client -- permanent, intentional, timeless.
        </p>
      </div>

      <div className="filter-tabs reveal">
        {filters.map(([key, label]) => (
          <button
            key={key}
            className={"filter-tab" + (active === key ? " active" : "")}
            data-filter={key}
            onClick={() => handleFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="gallery-grid" id="gallery-grid">
        {visible.map(({ item, art }, i) => (
          <div
            key={i}
            className="gallery-item reveal visible"
            data-cat={item.cat}
            style={{ transitionDelay: ((i % 3) * 0.1) + "s" }}
            onClick={() => setLightbox({ item, art })}
          >
            <div className="gallery-placeholder" dangerouslySetInnerHTML={{ __html: art }} />
            <div className="gallery-glow"></div>
            <div className="gallery-overlay">
              <span className="gallery-tag">{item.cat.replace("-", " ")}</span>
              <div className="gallery-name">{item.name}</div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => setExpanded(!showAll)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              color: "var(--text, #EDEDED)",
              border: "1px solid rgba(255,204,0,0.55)",
              borderRadius: "6px",
              padding: "14px 32px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FFCC00";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(255,204,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,204,0,0.55)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {showAll ? "Show Less ✦" : `Show More ✦ (${filtered.length - INITIAL_COUNT})`}
          </button>
        </div>
      )}

      {/* Floating collapse button -- only while expanded, so the user can
          close the gallery from anywhere without scrolling to the bottom. */}
      {showAll && (
        <button
          className="gallery-collapse-fab"
          onClick={collapse}
          aria-label="Collapse gallery"
        >
          Collapse Gallery ✦
        </button>
      )}

      <Lightbox data={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}