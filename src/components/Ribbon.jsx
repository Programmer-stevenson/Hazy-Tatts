// Auto-scrolling "ribbon" marquee of portfolio images.
// Performance notes:
//  - Uses a single CSS transform animation (GPU-accelerated) — smooth with many items.
//  - The image set is duplicated ONCE so the loop is seamless (translateX -50%).
//  - For best performance, point these at RESIZED thumbnails (~400px wide), not the
//    full-resolution photos. The ribbon only displays them small.

const ribbonImages = [
  "/ninjacat.jpg", "/bgskeles.jpg", "/bgsnake.jpg", "/colorskullflower.jpg",
  "/crow.jpg", "/monkeybox.jpg", "/bg_lilly.jpg", "/bgskullcow.jpg",
  "/bgastrosnow.jpg", "/bg_daisies.jpg", "/bgbutterfly.jpg", "/bgspacealli.jpg",
  "/colorking.jpg", "/colorjaderock.jpg", "/colorarcade.jpg", "/colorknife.jpg",
  "/burnchurch.jpg", "/color2flower.jpg", "/colorflow.jpg", "/colorshroom.jpg",
  "/colorpizza.jpg", "/web.jpg", "/chain.jpg", "/2jags.jpg", "/jaguarbg.jpg",
  "/heartmoon.jpg", "/spruzzy.jpg", "/heartlocks.jpg", "/bgswirls.jpg",
  "/finelineflowers.jpg", "/finelinedeer.jpg", "/grail.jpg", "/timburton.jpg",
];

export default function Ribbon({ speed = 60, height = 200 }) {
  // Duplicate the set so the track can loop seamlessly.
  const loop = [...ribbonImages, ...ribbonImages];

  return (
    <div className="ribbon">
      <style>{`
        .ribbon {
          width: 100%;
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }

        /* Glowing top (gold) & bottom (crimson) borders with a slow pulse */
        .ribbon::before,
        .ribbon::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 2;
          pointer-events: none;
        }
        .ribbon::before {
          top: 0;
          background: #FFCC00;
          animation: ribbon-glow-gold 2.6s ease-in-out infinite;
        }
        .ribbon::after {
          bottom: 0;
          background: #A4161A;
          animation: ribbon-glow-crimson 2.6s ease-in-out infinite;
          animation-delay: -1.3s; /* offset so top & bottom breathe separately */
        }
        @keyframes ribbon-glow-gold {
          0%, 100% { opacity: 0.55; box-shadow: 0 0 8px 1px rgba(255,204,0,0.45); }
          50%      { opacity: 1;    box-shadow: 0 0 18px 2px rgba(255,204,0,0.9); }
        }
        @keyframes ribbon-glow-crimson {
          0%, 100% { opacity: 0.55; box-shadow: 0 0 8px 1px rgba(164,22,26,0.45); }
          50%      { opacity: 1;    box-shadow: 0 0 18px 2px rgba(164,22,26,0.95); }
        }

        .ribbon-track {
          display: flex;
          width: max-content;
          gap: 14px;
          will-change: transform;
          animation: ribbon-scroll ${speed}s linear infinite;
        }
        .ribbon:hover .ribbon-track { animation-play-state: paused; }
        .ribbon-item {
          flex: 0 0 auto;
          width: ${height}px;
          height: ${height}px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255,204,0,0.55);
          box-shadow: 0 0 12px rgba(255,204,0,0.4);
        }
        .ribbon-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @keyframes ribbon-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        /* Respect users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .ribbon-track { animation: none; }
          .ribbon { overflow-x: auto; }
          .ribbon::before, .ribbon::after { animation: none; opacity: 0.85; }
        }
      `}</style>

      <div className="ribbon-track">
        {loop.map((src, i) => (
          <div className="ribbon-item" key={i}>
            <img src={src} alt="" loading="lazy" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}