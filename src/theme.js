// ── Color palette ─────────────────────────────────────────────────────────
export const P = {
  coral:  "#F4623A",
  sky:    "#2DAAE2",
  sun:    "#F7C325",
  mint:   "#3AB795",
  plum:   "#8B4B8C",
  navy:   "#1B2A4A",
  cream:  "#FBF8F2",
  sand:   "#F0EAD8",
  white:  "#FFFFFF",
  ink:    "#1A1A2E",
  gray:   "#6B7280",
  lgray:  "#E8E4DC",
};

// ── Phase configuration ────────────────────────────────────────────────────
// lightBg: pale tint for light mode cards/banners
// darkBg:  deep tint for dark mode cards/banners
// accent:  done-state chip background (light mode only)
export const PHASES = [
  { id:0, num:"00", label:"Opportunity\nTuning", short:"Tune",      color:P.plum,  lightBg:"#F5EEF8", darkBg:"#2D1F3D", accent:"#D7BDE2" },
  { id:1, num:"01", label:"Empathize",           short:"Empathize", color:P.coral, lightBg:"#FEF0EB", darkBg:"#3D1A0A", accent:"#F4C9BC" },
  { id:2, num:"02", label:"Define",              short:"Define",    color:P.sky,   lightBg:"#EAF6FD", darkBg:"#0A2330", accent:"#AED6F1" },
  { id:3, num:"03", label:"Ideate",              short:"Ideate",    color:P.sun,   lightBg:"#FEFBE8", darkBg:"#302800", accent:"#F9E79F" },
  { id:4, num:"04", label:"Prototype",           short:"Proto",     color:P.mint,  lightBg:"#EAF8F4", darkBg:"#0A2D22", accent:"#A9DFBF" },
  { id:5, num:"05", label:"Test &\nLaunch",      short:"Test",      color:P.navy,  lightBg:"#EBF0F8", darkBg:"#08111E", accent:"#AEC6E8" },
];

// ── Light / dark surface tokens ────────────────────────────────────────────
export const TOKENS = {
  light: {
    surface:     "#FFFFFF",
    pageBg:      "#FBF8F2",
    sand:        "#F0EAD8",
    border:      "#E8E4DC",
    borderLight: "#F0EAD8",
    textHeading: "#1A1A2E",
    textBody:    "#374151",
    textMuted:   "#6B7280",
    navBg:       "#FFFFFF",
  },
  dark: {
    surface:     "#1C1C2E",
    pageBg:      "#12121E",
    sand:        "#252535",
    border:      "#35354A",
    borderLight: "#2A2A40",
    textHeading: "#F0EAD8",
    textBody:    "#C8C3B8",
    textMuted:   "#9CA3AF",
    navBg:       "#1C1C2E",
  },
};
