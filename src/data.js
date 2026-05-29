// ─── DATA + SVG ART (ported 1:1 from the original site) ───

export const galleryData = [
  { cat: "fine-line", name: "Botanical Grace", desc: "Delicate fine line floral arrangement on the forearm. Micro-detail botanical illustration.", colors: ["#1a1d21", "#222629", "#FFCC00"] },
  { cat: "blackwork", name: "Shadow Mandala", desc: "Geometric blackwork mandala with intricate linework. Full back placement.", colors: ["#0d0f11", "#1a1a1a", "#333"] },
  { cat: "realism", name: "Portrait Study", desc: "Photorealistic portrait in black and grey. Exceptional detail capture.", colors: ["#1a1d21", "#2a2a2a", "#444"] },
  { cat: "floral", name: "Rose Cascade", desc: "Flowing rose design with fine detail petals and organic linework.", colors: ["#660708", "#1a1d21", "#FFCC00"] },
  { cat: "custom", name: "Abstract Realm", desc: "Surrealist custom composition blending elements from client's vision.", colors: ["#222", "#A4161A", "#FFCC00"] },
  { cat: "fine-line", name: "Celestial Map", desc: "Fine line star constellation with delicate dotwork shading.", colors: ["#0d0f11", "#1a2030", "#8899bb"] },
  { cat: "blackwork", name: "Geometric Tiger", desc: "Bold blackwork geometric animal study with negative space technique.", colors: ["#111", "#222", "#555"] },
  { cat: "floral", name: "Lotus Bloom", desc: "Ornate lotus composition with fine line detail and dotwork center.", colors: ["#1a1d21", "#FFCC00", "#660708"] },
  { cat: "realism", name: "Eye of Detail", desc: "Hyper-realistic eye study with micro-detail iris work.", colors: ["#0d0f11", "#1a1d21", "#6699cc"] },
];

export const testimonials = [
  { text: "Hazey created the most beautiful fine line piece on my wrist. The detail is absolutely breathtaking — I get compliments every single day.", name: "Aria M.", stars: "★★★★★" },
  { text: "Professional, talented, and so thoughtful throughout the entire process. The studio is immaculate. Hazey is truly an artist in every sense.", name: "Jordan K.", stars: "★★★★★" },
  { text: "I was nervous about my first tattoo and Hazey made me feel completely at ease. The result exceeded every expectation I had.", name: "Serena L.", stars: "★★★★★" },
  { text: "The floral sleeve design Hazey created for me is a masterpiece. People literally stop me on the street to ask about it.", name: "Maya R.", stars: "★★★★★" },
  { text: "Cover-up work is an art form and Hazey is a master of it. What was once an embarrassing old tattoo is now my favorite thing about myself.", name: "Zoe T.", stars: "★★★★★" },
  { text: "The fine line portrait of my grandmother is so realistic and detailed. I cried when I saw it. Truly a gift.", name: "Camille B.", stars: "★★★★★" },
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
