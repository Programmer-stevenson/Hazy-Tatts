// ─── DATA + SVG ART (placeholder gallery for Hazey to replace with real photos) ───

export const galleryData = [
  { cat: "illustrative", name: "Illustrative Raven", desc: "Illustrative black and grey raven with fine textural linework.", colors: ["#0d0f11", "#1a1d21", "#888"] },
  { cat: "realism", name: "Portrait Study", desc: "Black and grey realism portrait with detailed shading.", colors: ["#1a1d21", "#2a2a2a", "#aaa"] },
  { cat: "traditional", name: "Traditional Rose", desc: "Bold traditional rose with classic linework and solid shading.", colors: ["#161a1d", "#222629", "#999"] },
  { cat: "fine-line", name: "Fine Line Botanical", desc: "Delicate fine line botanical piece with subtle detail.", colors: ["#1a1d21", "#222629", "#bbb"] },
  { cat: "stippling", name: "Stippled Skull", desc: "Dotwork skull rendered entirely in stippling for soft gradients.", colors: ["#0d0f11", "#1a1a1a", "#999"] },
  { cat: "illustrative", name: "Illustrative Serpent", desc: "Flowing illustrative black and grey serpent with organic linework.", colors: ["#161a1d", "#1a1d21", "#888"] },
  { cat: "realism", name: "Eye of Detail", desc: "Hyper-realistic black and grey eye study with micro-detail iris work.", colors: ["#0d0f11", "#1a1d21", "#aaa"] },
  { cat: "fine-line", name: "Fine Line Moth", desc: "Symmetrical fine line moth with delicate, restrained detail.", colors: ["#1a1d21", "#222629", "#bbb"] },
  { cat: "traditional", name: "Traditional Dagger", desc: "Classic traditional dagger with bold black and grey rendering.", colors: ["#161a1d", "#222629", "#999"] },
];

export const testimonials = [
  { text: "Hazey created the most beautiful fine line piece on my wrist. The detail is absolutely breathtaking — I get compliments every single day.", name: "Aria M.", stars: "★★★★★" },
  { text: "Professional, talented, and so thoughtful throughout the entire process. The studio is immaculate. Hazey is truly an artist in every sense.", name: "Jordan K.", stars: "★★★★★" },
  { text: "I was nervous about my first tattoo and Hazey made me feel completely at ease. The result exceeded every expectation I had.", name: "Serena L.", stars: "★★★★★" },
  { text: "The black and grey piece Hazey designed for me is a masterpiece. People literally stop me on the street to ask about it.", name: "Maya R.", stars: "★★★★★" },
  { text: "Her illustrative work is unreal. The shading and detail are on another level — exactly what I hoped for and more.", name: "Zoe T.", stars: "★★★★★" },
  { text: "The black and grey portrait Hazey did is so realistic and detailed. I cried when I saw it. Truly a gift.", name: "Camille B.", stars: "★★★★★" },
];

// Returns an SVG string for a gallery item (identical patterns to the original).
export function makeGalleryArt(item, i) {
  const [c1, c2, c3] = item.colors;
  const patterns = [
    // Floral linework
    `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;opacity:0.7">
      <defs><radialGradient id="rg${i}" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="${c3}" stop-opacity="0.3"/><stop offset="100%" stop-color="${c1}" stop-opacity="0"/></radialGradient></defs>
      <rect width="300" height="400" fill="${c1}"/>
      <ellipse cx="150" cy="180" rx="120" ry="150" fill="url(#rg${i})"/>
      <circle cx="150" cy="160" r="50" stroke="${c3}" stroke-width="0.8" fill="none" opacity="0.5"/>
      <circle cx="150" cy="160" r="30" stroke="${c3}" stroke-width="0.5" fill="none" opacity="0.4"/>
      <circle cx="150" cy="160" r="70" stroke="${c3}" stroke-width="0.4" fill="none" stroke-dasharray="3 8" opacity="0.3"/>
      <path d="M150 90 Q180 130 150 160 Q120 130 150 90Z" stroke="${c3}" stroke-width="0.7" fill="none" opacity="0.5"/>
      <path d="M150 230 Q120 190 150 160 Q180 190 150 230Z" stroke="${c3}" stroke-width="0.7" fill="none" opacity="0.5"/>
      <path d="M80 160 Q120 130 150 160 Q120 190 80 160Z" stroke="${c3}" stroke-width="0.7" fill="none" opacity="0.5"/>
      <path d="M220 160 Q180 130 150 160 Q180 190 220 160Z" stroke="${c3}" stroke-width="0.7" fill="none" opacity="0.5"/>
      <line x1="60" y1="340" x2="240" y2="340" stroke="${c3}" stroke-width="0.5" opacity="0.3"/>
      <text x="150" y="370" text-anchor="middle" fill="${c3}" font-size="8" letter-spacing="5" font-family="serif" opacity="0.5">${item.name.toUpperCase()}</text>
    </svg>`,
    // Geometric
    `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;opacity:0.7">
      <defs><linearGradient id="lg${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c2}"/><stop offset="100%" stop-color="${c1}"/></linearGradient></defs>
      <rect width="300" height="400" fill="url(#lg${i})"/>
      <polygon points="150,60 240,200 150,340 60,200" stroke="${c3}" stroke-width="0.8" fill="none" opacity="0.5"/>
      <polygon points="150,80 220,200 150,320 80,200" stroke="${c3}" stroke-width="0.5" fill="none" opacity="0.35"/>
      <polygon points="150,100 200,200 150,300 100,200" stroke="${c3}" stroke-width="0.4" fill="none" opacity="0.3"/>
      <line x1="150" y1="60" x2="150" y2="340" stroke="${c3}" stroke-width="0.4" opacity="0.25"/>
      <line x1="60" y1="200" x2="240" y2="200" stroke="${c3}" stroke-width="0.4" opacity="0.25"/>
      <circle cx="150" cy="200" r="12" stroke="${c3}" stroke-width="1" fill="none" opacity="0.6"/>
      <circle cx="150" cy="200" r="4" fill="${c3}" opacity="0.4"/>
    </svg>`,
    // Script/portrait
    `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;opacity:0.7">
      <defs><radialGradient id="pgrad${i}" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="${c2}" stop-opacity="0.6"/><stop offset="100%" stop-color="${c1}"/></radialGradient></defs>
      <rect width="300" height="400" fill="url(#pgrad${i})"/>
      <circle cx="150" cy="150" r="70" stroke="${c3}" stroke-width="0.8" fill="none" opacity="0.4"/>
      <circle cx="150" cy="150" r="50" stroke="${c3}" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M100 250 Q130 220 150 240 Q170 260 200 250" stroke="${c3}" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M80 280 Q150 260 220 280" stroke="${c3}" stroke-width="0.5" fill="none" opacity="0.3"/>
      <line x1="50" y1="340" x2="250" y2="340" stroke="${c3}" stroke-width="0.4" opacity="0.25"/>
      <text x="150" y="370" text-anchor="middle" fill="${c3}" font-size="7" letter-spacing="6" font-family="serif" opacity="0.5">${item.cat.toUpperCase()}</text>
    </svg>`,
  ];
  return patterns[i % 3];
}