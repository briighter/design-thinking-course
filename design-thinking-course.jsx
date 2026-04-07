import { useState } from "react";

// ── IDEO-inspired color palette ──────────────────────────────────────────
const P = {
  coral:   "#F4623A",
  sky:     "#2DAAE2",
  sun:     "#F7C325",
  mint:    "#3AB795",
  plum:    "#8B4B8C",
  navy:    "#1B2A4A",
  cream:   "#FBF8F2",
  sand:    "#F0EAD8",
  white:   "#FFFFFF",
  ink:     "#1A1A2E",
  gray:    "#6B7280",
  lgray:   "#E8E4DC",
};

// ── Phase config ─────────────────────────────────────────────────────────
const PHASES = [
  { id: 0, num: "00", label: "Opportunity\nTuning",  short: "Tune",      color: P.plum,  bg: "#F5EEF8", accent: "#D7BDE2" },
  { id: 1, num: "01", label: "Empathize",            short: "Empathize", color: P.coral, bg: "#FEF0EB", accent: "#F4C9BC" },
  { id: 2, num: "02", label: "Define",               short: "Define",    color: P.sky,   bg: "#EAF6FD", accent: "#AED6F1" },
  { id: 3, num: "03", label: "Ideate",               short: "Ideate",    color: P.sun,   bg: "#FEFBE8", accent: "#F9E79F" },
  { id: 4, num: "04", label: "Prototype",            short: "Proto",     color: P.mint,  bg: "#EAF8F4", accent: "#A9DFBF" },
  { id: 5, num: "05", label: "Test &\nLaunch",       short: "Test",      color: P.navy,  bg: "#EBF0F8", accent: "#AEC6E8" },
];

// ── SVG Illustrations ─────────────────────────────────────────────────────

const IlluOpportunity = () => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    {/* Background blobs */}
    <ellipse cx="140" cy="110" rx="110" ry="90" fill="#F5EEF8" opacity="0.6"/>
    {/* Radar circles */}
    <circle cx="140" cy="110" r="85" stroke={P.plum} strokeWidth="1" strokeDasharray="4 3" opacity="0.3"/>
    <circle cx="140" cy="110" r="55" stroke={P.plum} strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
    <circle cx="140" cy="110" r="28" fill="#D7BDE2" opacity="0.5"/>
    {/* Radar lines */}
    {[0,60,120,180,240,300].map(a => (
      <line key={a} x1="140" y1="110"
        x2={140+88*Math.cos(a*Math.PI/180)}
        y2={110+88*Math.sin(a*Math.PI/180)}
        stroke={P.plum} strokeWidth="1" opacity="0.2"/>
    ))}
    {/* Opportunity polygon */}
    <polygon points="140,28 210,75 195,165 100,170 75,75" fill={P.plum} opacity="0.15" stroke={P.plum} strokeWidth="2"/>
    {/* Dots */}
    {[[140,28],[210,75],[195,165],[100,170],[75,75]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="6" fill={P.plum} stroke="white" strokeWidth="2"/>
    ))}
    {/* Center */}
    <circle cx="140" cy="110" r="12" fill={P.plum}/>
    <text x="140" y="115" textAnchor="middle" fontSize="8" fill="white" fontFamily="Georgia" fontWeight="bold">★</text>
    {/* Labels */}
    {[["FRICTION",140,18],["FUTURE",222,72],["PATTERN",205,178],["STRANGER",92,185],["EDGE",58,68]].map(([t,x,y])=>(
      <text key={t} x={x} y={y} textAnchor="middle" fontSize="7.5" fill={P.plum} fontFamily="'Courier New'" fontWeight="500" letterSpacing="0.5">{t}</text>
    ))}
  </svg>
);

const IlluEmpathy = () => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill="#FEF0EB" opacity="0.7"/>
    {/* Person silhouette */}
    <circle cx="140" cy="70" r="28" fill={P.coral} opacity="0.15" stroke={P.coral} strokeWidth="2"/>
    <circle cx="140" cy="62" r="14" fill={P.coral} opacity="0.8"/>
    <path d="M110,110 Q140,95 170,110 L175,145 H105 Z" fill={P.coral} opacity="0.7"/>
    {/* Speech bubble */}
    <rect x="165" y="35" width="85" height="44" rx="10" fill="white" stroke={P.coral} strokeWidth="2"/>
    <polygon points="165,55 155,65 170,62" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <text x="207" y="54" textAnchor="middle" fontSize="8" fill={P.coral} fontFamily="Georgia" fontStyle="italic">"I hate when</text>
    <text x="207" y="66" textAnchor="middle" fontSize="8" fill={P.coral} fontFamily="Georgia" fontStyle="italic">it does this..."</text>
    {/* Empathy map quadrants */}
    <rect x="28" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <rect x="88" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <rect x="148" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <rect x="208" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    {[["SAYS",54],["THINKS",114],["DOES",174],["FEELS",234]].map(([t,x])=>(
      <text key={t} x={x} y="180" textAnchor="middle" fontSize="7" fill={P.coral} fontFamily="'Courier New'" fontWeight="bold">{t}</text>
    ))}
    {/* Listening ear */}
    <path d="M30,90 Q20,85 22,98 Q24,110 35,108 Q38,108 40,104" stroke={P.coral} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M30,94 Q26,94 26,100 Q26,106 32,105" stroke={P.coral} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const IlluDefine = () => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill="#EAF6FD" opacity="0.7"/>
    {/* Target */}
    <circle cx="140" cy="105" r="72" stroke={P.sky} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.3"/>
    <circle cx="140" cy="105" r="50" stroke={P.sky} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4"/>
    <circle cx="140" cy="105" r="28" fill={P.sky} opacity="0.15" stroke={P.sky} strokeWidth="2"/>
    <circle cx="140" cy="105" r="10" fill={P.sky} opacity="0.8"/>
    {/* Arrow hitting target */}
    <line x1="220" y1="35" x2="152" y2="100" stroke={P.coral} strokeWidth="3" strokeLinecap="round"/>
    <polygon points="148,97 156,88 163,103" fill={P.coral}/>
    {/* POV card */}
    <rect x="20" y="155" width="240" height="48" rx="10" fill="white" stroke={P.sky} strokeWidth="2"/>
    <text x="140" y="172" textAnchor="middle" fontSize="8.5" fill={P.sky} fontFamily="'Courier New'" fontWeight="bold" letterSpacing="0.5">[ USER ] NEEDS [ NEED ]</text>
    <text x="140" y="186" textAnchor="middle" fontSize="8.5" fill={P.navy} fontFamily="'Courier New'" fontWeight="bold" letterSpacing="0.5">BECAUSE [ INSIGHT ]</text>
    {/* Magnifying glass */}
    <circle cx="52" cy="80" r="20" stroke={P.sky} strokeWidth="2.5" fill="white" opacity="0.8"/>
    <line x1="66" y1="94" x2="76" y2="104" stroke={P.sky} strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="52" cy="80" r="8" fill={P.sky} opacity="0.15"/>
  </svg>
);

const IlluIdeate = () => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill="#FEFBE8" opacity="0.7"/>
    {/* Lightbulb */}
    <path d="M140,30 Q115,30 108,55 Q102,72 115,88 L115,105 Q115,112 122,115 L158,115 Q165,112 165,105 L165,88 Q178,72 172,55 Q165,30 140,30Z" fill={P.sun} opacity="0.85"/>
    <rect x="122" y="115" width="36" height="8" rx="3" fill={P.sun} opacity="0.6"/>
    <rect x="126" y="125" width="28" height="7" rx="3" fill={P.sun} opacity="0.4"/>
    {/* Rays */}
    {[0,45,90,135,180,225,270,315].map(a=>(
      <line key={a} x1={140+42*Math.cos(a*Math.PI/180)} y1={75+42*Math.sin(a*Math.PI/180)}
        x2={140+54*Math.cos(a*Math.PI/180)} y2={75+54*Math.sin(a*Math.PI/180)}
        stroke={P.sun} strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    ))}
    {/* DFV Venn */}
    <circle cx="95" cy="180" r="24" fill={P.coral} opacity="0.25" stroke={P.coral} strokeWidth="1.5"/>
    <circle cx="140" cy="180" r="24" fill={P.sky} opacity="0.25" stroke={P.sky} strokeWidth="1.5"/>
    <circle cx="185" cy="180" r="24" fill={P.mint} opacity="0.25" stroke={P.mint} strokeWidth="1.5"/>
    <text x="95" y="206" textAnchor="middle" fontSize="6.5" fill={P.coral} fontFamily="'Courier New'" fontWeight="bold">DESIRE</text>
    <text x="140" y="206" textAnchor="middle" fontSize="6.5" fill={P.sky} fontFamily="'Courier New'" fontWeight="bold">VIABLE</text>
    <text x="185" y="206" textAnchor="middle" fontSize="6.5" fill={P.mint} fontFamily="'Courier New'" fontWeight="bold">FEASIBLE</text>
    <circle cx="140" cy="177" r="7" fill={P.sun} stroke="white" strokeWidth="1.5"/>
  </svg>
);

const IlluPrototype = () => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill="#EAF8F4" opacity="0.7"/>
    {/* Phone wireframe */}
    <rect x="100" y="30" width="80" height="130" rx="10" fill="white" stroke={P.mint} strokeWidth="2.5"/>
    <rect x="108" y="45" width="64" height="80" rx="4" fill={P.mint} opacity="0.12"/>
    {/* Screen content placeholders */}
    <rect x="112" y="50" width="56" height="8" rx="3" fill={P.mint} opacity="0.4"/>
    <rect x="112" y="62" width="40" height="6" rx="3" fill={P.mint} opacity="0.25"/>
    <rect x="112" y="72" width="56" height="30" rx="4" fill={P.mint} opacity="0.15"/>
    <rect x="112" y="106" width="26" height="10" rx="5" fill={P.mint} opacity="0.5"/>
    {/* Paper stack */}
    <rect x="20" y="120" width="58" height="72" rx="4" fill="white" stroke={P.coral} strokeWidth="1.5" transform="rotate(-8,49,156)"/>
    <rect x="20" y="120" width="58" height="72" rx="4" fill="white" stroke={P.sun} strokeWidth="1.5" transform="rotate(-4,49,156)"/>
    <rect x="20" y="120" width="58" height="72" rx="4" fill="white" stroke={P.mint} strokeWidth="2"/>
    {/* Quick sketch on paper */}
    <rect x="27" y="128" width="44" height="28" rx="3" fill={P.mint} opacity="0.1"/>
    <path d="M30,148 Q38,138 46,145 Q54,152 62,140" stroke={P.mint} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <text x="49" y="180" textAnchor="middle" fontSize="7" fill={P.mint} fontFamily="Georgia" fontStyle="italic">sketch</text>
    {/* Arrow: paper to phone */}
    <path d="M78,155 Q95,148 100,130" stroke={P.navy} strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
    <polygon points="98,128 103,136 107,128" fill={P.navy} opacity="0.5"/>
    {/* Iteration arrow */}
    <path d="M185,75 Q210,75 215,100 Q218,120 195,130" stroke={P.mint} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <polygon points="192,132 198,124 203,133" fill={P.mint}/>
    <text x="215" y="103" fontSize="7" fill={P.mint} fontFamily="Georgia" fontStyle="italic">iterate</text>
  </svg>
);

const IlluTest = () => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill="#EBF0F8" opacity="0.7"/>
    {/* Launch rings */}
    <circle cx="140" cy="105" r="82" stroke={P.navy} strokeWidth="1" strokeDasharray="6 4" opacity="0.15"/>
    <circle cx="140" cy="105" r="54" stroke={P.navy} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.25"/>
    <circle cx="140" cy="105" r="28" stroke={P.navy} strokeWidth="2" opacity="0.4"/>
    <circle cx="140" cy="105" r="10" fill={P.navy} opacity="0.7"/>
    {/* Ring labels */}
    {[["Ring 1 · 10 users",140,84],["Ring 2 · 100 early",140,58],["Ring 3 · 1000+",140,30]].map(([t,x,y])=>(
      <text key={t} x={x} y={y} textAnchor="middle" fontSize="7" fill={P.navy} fontFamily="'Courier New'" opacity="0.6">{t}</text>
    ))}
    {/* Rocket */}
    <path d="M140,118 Q130,105 132,88 Q134,72 140,65 Q146,72 148,88 Q150,105 140,118Z" fill={P.coral}/>
    <path d="M132,100 Q124,108 128,115 L132,108Z" fill={P.sun}/>
    <path d="M148,100 Q156,108 152,115 L148,108Z" fill={P.sun}/>
    <circle cx="140" cy="88" r="5" fill="white" opacity="0.7"/>
    {/* Flame */}
    <path d="M136,118 Q138,128 140,135 Q142,128 144,118" fill={P.sun} opacity="0.8"/>
    {/* Checkmark */}
    <circle cx="200" cy="60" r="18" fill={P.mint} opacity="0.2" stroke={P.mint} strokeWidth="2"/>
    <path d="M190,60 L197,68 L212,50" stroke={P.mint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* User dots */}
    {[[60,165],[85,170],[110,165],[135,170],[160,165],[185,170],[210,165]].map(([x,y],i)=>(
      <g key={i}>
        <circle cx={x} cy={y-8} r={i<2?5:i<5?4:3.5} fill={i<2?P.navy:i<5?P.sky:P.lgray} opacity={i<2?0.9:i<5?0.6:0.4}/>
        <path d={`M${x-5},${y+2} Q${x},${y-3} ${x+5},${y+2}`} fill={i<2?P.navy:i<5?P.sky:P.lgray} opacity={i<2?0.9:i<5?0.6:0.4}/>
      </g>
    ))}
  </svg>
);

// ── Exercise illustration components ─────────────────────────────────────

const ExIllu = ({ type, color }) => {
  const s = { width: "100%", height: "100%" };
  if (type === "interview") return (
    <svg viewBox="0 0 120 80" style={s}>
      <rect x="5" y="10" width="50" height="60" rx="8" fill={color} opacity="0.15"/>
      <circle cx="30" cy="32" r="10" fill={color} opacity="0.7"/>
      <path d="M14,58 Q30,48 46,58" fill={color} opacity="0.5"/>
      <rect x="65" y="22" width="48" height="30" rx="6" fill="white" stroke={color} strokeWidth="1.5"/>
      <path d="M65,38 L58,44 L68,41" fill="white" stroke={color} strokeWidth="1"/>
      {[0,1,2].map(i=><rect key={i} x="72" y={28+i*8} width={i===1?28:20} height="4" rx="2" fill={color} opacity="0.4"/>)}
    </svg>
  );
  if (type === "observe") return (
    <svg viewBox="0 0 120 80" style={s}>
      <circle cx="40" cy="40" r="22" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="10" fill={color} opacity="0.35"/>
      <circle cx="40" cy="40" r="4" fill={color} opacity="0.8"/>
      <path d="M62,40 Q80,25 100,28 L100,52 Q80,55 62,40" fill={color} opacity="0.1" stroke={color} strokeWidth="1"/>
      <line x1="62" y1="40" x2="100" y2="40" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" opacity="0.5"/>
      <rect x="85" y="10" width="30" height="20" rx="4" fill="white" stroke={color} strokeWidth="1.5"/>
      {[0,1,2].map(i=><rect key={i} x="89" y={14+i*5} width={i===1?18:12} height="3" rx="1.5" fill={color} opacity="0.5"/>)}
    </svg>
  );
  if (type === "map") return (
    <svg viewBox="0 0 120 80" style={s}>
      {[["S",8,8,50,34],["T",62,8,50,34],["D",8,44,50,30],["F",62,44,50,30]].map(([l,x,y,w,h])=>(
        <g key={l}><rect x={x} y={y} width={w} height={h} rx="5" fill={color} opacity="0.12" stroke={color} strokeWidth="1.5"/>
        <text x={x+w/2} y={y+h/2+3} textAnchor="middle" fontSize="9" fill={color} fontFamily="Georgia" fontWeight="bold">{l}</text></g>
      ))}
    </svg>
  );
  if (type === "pov") return (
    <svg viewBox="0 0 120 80" style={s}>
      <rect x="8" y="14" width="104" height="52" rx="8" fill="white" stroke={color} strokeWidth="2"/>
      <rect x="8" y="14" width="104" height="16" rx="8" fill={color} opacity="0.8"/>
      <rect x="8" y="22" width="104" height="8" fill={color} opacity="0.8"/>
      <text x="60" y="26" textAnchor="middle" fontSize="7" fill="white" fontFamily="'Courier New'" fontWeight="bold">[USER] NEEDS [NEED]</text>
      <text x="60" y="44" textAnchor="middle" fontSize="7" fill={color} fontFamily="'Courier New'">BECAUSE</text>
      <rect x="20" y="50" width="80" height="9" rx="3" fill={color} opacity="0.2"/>
    </svg>
  );
  if (type === "hmw") return (
    <svg viewBox="0 0 120 80" style={s}>
      {[0,1,2,3].map(i=>(
        <rect key={i} x={10+i*27} y={i%2===0?12:25} width="22" height="48" rx="4" fill={color} opacity={0.2+i*0.12} stroke={color} strokeWidth="1" transform={`rotate(${-4+i*3},${21+i*27},36)`}/>
      ))}
      <text x="60" y="68" textAnchor="middle" fontSize="8" fill={color} fontFamily="Georgia" fontStyle="italic" fontWeight="bold">How might we...</text>
    </svg>
  );
  if (type === "crazy8") return (
    <svg viewBox="0 0 120 80" style={s}>
      {[[8,8],[42,8],[76,8],[8,44],[42,44],[76,44],[42,44]].slice(0,6).map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="30" height="30" rx="3" fill={color} opacity={0.1+i*0.07} stroke={color} strokeWidth="1.5"/>
      ))}
      <rect x="76" y="44" width="30" height="30" rx="3" fill={color} opacity="0.55" stroke={color} strokeWidth="1.5"/>
      <text x="91" y="64" textAnchor="middle" fontSize="14" fill="white">★</text>
    </svg>
  );
  if (type === "sketch") return (
    <svg viewBox="0 0 120 80" style={s}>
      <rect x="15" y="10" width="90" height="60" rx="4" fill="white" stroke={color} strokeWidth="2"/>
      <rect x="22" y="18" width="76" height="35" rx="3" fill={color} opacity="0.08"/>
      <path d="M28,42 Q42,28 55,38 Q65,46 78,30 Q86,22 90,35" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="22" y="57" width="40" height="6" rx="3" fill={color} opacity="0.3"/>
      <rect x="66" y="57" width="30" height="6" rx="3" fill={color} opacity="0.2"/>
    </svg>
  );
  if (type === "paper") return (
    <svg viewBox="0 0 120 80" style={s}>
      {[0,1,2].map(i=>(
        <rect key={i} x={14+i*3} y={12+i*3} width="72" height="55" rx="3" fill="white" stroke={color} strokeWidth="1.5" opacity={0.5+i*0.25} transform={`rotate(${-3+i*3},50,40)`}/>
      ))}
      <rect x="10" y="28" width="60" height="40" rx="6" fill="white" stroke={color} strokeWidth="2"/>
      {[0,1,2,3].map(i=><rect key={i} x="16" y={34+i*8} width={i%2===0?42:30} height="5" rx="2.5" fill={color} opacity="0.25"/>)}
      {/* Finger tapping */}
      <ellipse cx="88" cy="55" rx="7" ry="12" fill={P.coral} opacity="0.7" transform="rotate(-20,88,55)"/>
      <path d="M88,43 L88,30" stroke={P.coral} strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
  if (type === "rings") return (
    <svg viewBox="0 0 120 80" style={s}>
      <circle cx="60" cy="40" r="35" stroke={color} strokeWidth="1" strokeDasharray="4 3" opacity="0.2"/>
      <circle cx="60" cy="40" r="22" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.35"/>
      <circle cx="60" cy="40" r="11" fill={color} opacity="0.2" stroke={color} strokeWidth="2"/>
      <circle cx="60" cy="40" r="5" fill={color} opacity="0.8"/>
      {["10","100","1K+"].map((t,i)=>(
        <text key={t} x={60} y={40-(i===0?8:i===1?18:30)} textAnchor="middle" fontSize="6" fill={color} fontFamily="'Courier New'" opacity={0.8-i*0.2}>{t}</text>
      ))}
    </svg>
  );
  if (type === "metric") return (
    <svg viewBox="0 0 120 80" style={s}>
      <path d="M15,65 L35,45 L55,52 L75,28 L95,35 L110,18" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="110" cy="18" r="5" fill={color}/>
      <text x="110" y="10" textAnchor="middle" fontSize="7" fill={color} fontFamily="'Courier New'" fontWeight="bold">★</text>
      <line x1="15" y1="65" x2="110" y2="65" stroke={color} strokeWidth="1" opacity="0.3"/>
      <line x1="15" y1="15" x2="15" y2="65" stroke={color} strokeWidth="1" opacity="0.3"/>
      {[0,1,2,3].map(i=><line key={i} x1="13" y1={65-i*16} x2="110" y2={65-i*16} stroke={color} strokeWidth="0.5" strokeDasharray="3,3" opacity="0.2"/>)}
    </svg>
  );
  if (type === "pain") return (
    <svg viewBox="0 0 120 80" style={s}>
      {/* Signal wave */}
      <polyline points="8,40 22,38 30,42 38,36 46,44 54,12 62,40 70,38 78,42 86,14 94,40 102,38 112,40" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Spike labels */}
      <text x="54" y="8" textAnchor="middle" fontSize="6" fill={color} fontFamily="'Courier New'">"I hate..."</text>
      <text x="86" y="10" textAnchor="middle" fontSize="6" fill={color} fontFamily="'Courier New'">"Why can't</text>
      <text x="86" y="18" textAnchor="middle" fontSize="6" fill={color} fontFamily="'Courier New'">it just..."</text>
      <line x1="8" y1="40" x2="112" y2="40" stroke={color} strokeWidth="0.5" opacity="0.3"/>
    </svg>
  );
  if (type === "assumption") return (
    <svg viewBox="0 0 120 80" style={s}>
      {[["HIGH",P.coral,0],["MED",P.sun,1],["LOW",P.mint,2]].map(([l,c,i])=>(
        <g key={l}>
          <rect x="10" y={12+i*20} width={90-i*15} height="14" rx="4" fill={c} opacity={0.7-i*0.15}/>
          <text x="16" y={22+i*20} fontSize="7" fill="white" fontFamily="'Courier New'" fontWeight="bold">{l} IMPACT</text>
        </g>
      ))}
      <text x="110" y="22" textAnchor="end" fontSize="7" fill={P.coral} fontFamily="'Courier New'">TEST</text>
      <text x="110" y="22" textAnchor="end" fontSize="7" fill={P.coral} fontFamily="'Courier New'">TEST</text>
      <text x="95" y="22" textAnchor="end" fontSize="7" fill={P.coral} fontFamily="'Courier New'" fontWeight="bold">← TEST FIRST</text>
    </svg>
  );
  if (type === "globe") return (
    <svg viewBox="0 0 120 80" style={s}>
      <circle cx="60" cy="38" r="28" fill={color} opacity="0.1" stroke={color} strokeWidth="2"/>
      <ellipse cx="60" cy="38" rx="14" ry="28" stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
      <line x1="32" y1="38" x2="88" y2="38" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <line x1="60" y1="10" x2="60" y2="66" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      {[["🏥",25,25],["✈️",80,20],["🍕",20,55],["🎭",82,55]].map(([e,x,y])=>(
        <text key={e} x={x} y={y} fontSize="10">{e}</text>
      ))}
    </svg>
  );
  // Default
  return (
    <svg viewBox="0 0 120 80" style={s}>
      <rect x="10" y="10" width="100" height="60" rx="8" fill={color} opacity="0.15" stroke={color} strokeWidth="2"/>
      <text x="60" y="44" textAnchor="middle" fontSize="24" fill={color} opacity="0.6">◆</text>
    </svg>
  );
};

// ── Data ─────────────────────────────────────────────────────────────────

const CONTENT = {
  0: {
    tagline: "Before empathy research, before prototypes — train your brain to see opportunity in the noise everyone else has normalized.",
    lessons: [
      { title: "Why Most People Miss Opportunities", body: "The brain is an efficiency engine. It categorizes, habituates, and stops questioning familiar things. Every great business opportunity exists inside a frustration most people have accepted as normal. The skill is deliberately suspending normalization — looking at familiar systems and asking 'but why does it have to work this way?' as if for the first time." },
      { title: "Paul Graham: Live in the Future", body: "The future already exists — it's just unevenly distributed. Some people are already living 3–5 years ahead of the mainstream. When you notice something missing from that vantage point, that gap is a startup idea. Go deeper into your domain than anyone else, then look back at what's still broken." },
      { title: "MJ DeMarco: Tune to Pain Language", body: "Listen for: 'I hate when...' · 'Why can't it just...' · 'I always end up doing it manually.' That last one is gold — a workaround is a business hiding in plain sight. These signals are everywhere in Reddit, TikTok comments, App Store reviews. You just need to tune your frequency." },
      { title: "The 5 Opportunity Lenses", body: "Friction (pain language) · Stranger (question the normal) · Leading Edge (live in the future) · Workaround Audit (what do you do manually?) · Intersection (where do your domains collide?). Any one lens can find an opportunity. Used together, they form a radar." },
    ],
    exercises: [
      { num:"00.1", title:"Pain Language Hunt", desc:"Pick 3 communities in domains you're curious about. Spend 45 min tuned only to pain language. Capture every complaint, workaround, and 'why can't it just' you find.", time:"45 min", illu:"pain" },
      { num:"00.2", title:"Workaround Diary", desc:"For 7 days, every time you do something manually that should be automated, write it down. Which workaround appears most often? That frequency is your signal.", time:"7 days", illu:"observe" },
      { num:"00.3", title:"The 5 Lenses in Practice", desc:"For each of the 5 lenses, write what you look for and your specific observations this week. At least 2 observations per lens before moving to Phase 01.", time:"60 min", illu:"map" },
      { num:"00.4", title:"Alien Audit", desc:"Pick any industry. Write 10 things that would seem completely insane to someone seeing it for the first time. Each absurdity is a potential opportunity.", time:"30 min", illu:"globe" },
      { num:"00.5", title:"Edge User Interview", desc:"Find someone 3–5 years ahead of the mainstream in a domain you care about. Ask: 'What tools are you using that nobody else is? What's still missing?'", time:"60 min", illu:"interview" },
      { num:"00.6", title:"Opportunity Hypothesis", desc:"Write: 'I believe [type of person] has a problem with [situation] because [evidence]. Nobody has solved this well because [observation].' This is your entry to Phase 01.", time:"30 min", illu:"pov" },
    ],
    quote: { text: "The way to get startup ideas is not to try to think of startup ideas. It's to look for problems — preferably problems you have yourself.", attr: "Paul Graham · Y Combinator" },
  },
  1: {
    tagline: "Great businesses aren't born from spreadsheets. They're born from understanding people at a level that surprises even them.",
    lessons: [
      { title: "Empathy Is Competitive Advantage", body: "Most founders skip this phase. They have an idea, they think they know the customer, and they start building. This is why 90% of startups fail — not from bad execution, but from solving a problem nobody actually has. 10 hours of genuine user research can save you 6 months of building the wrong thing." },
      { title: "The Three Modes of Empathy", body: "Observe: Watch people in their natural environment without interrupting. Note workarounds and unexpected behaviors. Engage: Conduct deep interviews — ask 'why?' five times. Focus on stories, not opinions. The best question: 'Tell me about the last time this happened.' Immerse: Experience the problem yourself." },
      { title: "What You're Really Looking For", body: "Not what people say they want — what they actually do. The gap between what users say and what they do is where the real insight lives. Look for: workarounds (improvised fixes), normalizations (pains they've stopped mentioning), and moments of delight (unexpected positive reactions)." },
    ],
    exercises: [
      { num:"01.1", title:"The 5 Why's Interview", desc:"Interview one person for 30 minutes. For every answer they give, ask 'why?' five times. Document the full chain. The fifth why is almost always the real problem.", time:"60 min", illu:"interview" },
      { num:"01.2", title:"Fly on the Wall", desc:"Observe someone completing a task without speaking. Write 10 raw observations: behaviors, frustrations, workarounds, body language. Don't interpret yet — just capture.", time:"45 min", illu:"observe" },
      { num:"01.3", title:"Build an Empathy Map", desc:"Fill in what your user Says, Thinks, Does, and Feels using your research. Add Pains and Gains. Share with someone unfamiliar for a fresh perspective.", time:"30 min", illu:"map" },
      { num:"01.4", title:"Extreme User Interview", desc:"Find someone who experiences the problem intensely — a power user or someone completely excluded by existing solutions. Edge cases reveal what average users hide.", time:"90 min", illu:"interview" },
      { num:"01.5", title:"Immersion Challenge", desc:"For one day, live as your target user. Use only the tools they use. Navigate the friction they face. Write a reflection: what surprised you most?", time:"Full day", illu:"observe" },
      { num:"01.6", title:"Pattern Clustering", desc:"Write each key observation on a sticky note. Group similar notes. Name each cluster. The cluster that appears most often is your signal pointing toward the real problem.", time:"45 min", illu:"map" },
    ],
    quote: { text: "Empathy is the radical act of setting aside your own perspective to understand another person's reality — and it's the most powerful tool in business.", attr: "Tim Brown · CEO of IDEO" },
  },
  2: {
    tagline: "A brilliant solution to the wrong problem is still failure. Define the problem so precisely that the solution becomes almost obvious.",
    lessons: [
      { title: "The Point of View Statement", body: "[User] needs [need] because [insight]. A real person (not a demographic), a genuine need (not a feature), and an emotional insight. 'Maria needs an app' is a solution. 'Maria needs a way to share programming without admin overhead because it makes her feel like a secretary, not a coach' is a POV." },
      { title: "'How Might We' Questions", body: "HMW questions are born directly from great POV statements. They reframe the problem as an open, optimistic invitation to ideate — without locking in solutions. A good POV makes the HMW practically write itself. Generate 20 HMW questions before filtering to your top 3." },
      { title: "Map the Friction Peaks", body: "Draw your user's end-to-end journey and rate each step for friction. The highest-friction moments are your product opportunities. Your job is to own one peak pain point and eliminate it completely. The journey map also reveals your competition — the existing workarounds at each friction peak." },
    ],
    exercises: [
      { num:"02.1", title:"Write 5 POV Statements", desc:"Using your empathy research, write 5 different POV statements for the same user. Each emphasizes a different insight. Read them aloud — which makes you lean forward?", time:"45 min", illu:"pov" },
      { num:"02.2", title:'"How Might We" Sprint', desc:"Take your best POV. Generate 20 HMW questions in 10 minutes. No filtering. Circle the 3 most exciting. Those 3 questions drive your entire ideation session.", time:"30 min", illu:"hmw" },
      { num:"02.3", title:"Journey Map Audit", desc:"Draw your user's end-to-end journey. Rate each step 1–10 for friction. Circle the top 3 pain points. Your product opportunity lives at those friction peaks.", time:"60 min", illu:"observe" },
      { num:"02.4", title:"Problem Reframe Challenge", desc:"Take your POV and rewrite it 10 ways — zoom in, zoom out, flip it, look upstream, downstream. Which reframe reveals a more urgent or larger problem?", time:"30 min", illu:"pov" },
      { num:"02.5", title:"Existing Solutions Audit", desc:"List every way your user currently solves this problem: apps, spreadsheets, manual workarounds, ignoring it. Each alternative is a competitor. What do they all miss?", time:"45 min", illu:"observe" },
      { num:"02.6", title:"Market-Size Stress Test", desc:"How many people share this problem? What are they paying today? Multiply. Is this a $100K market or a $100M market? Your ambition level should match the evidence.", time:"45 min", illu:"metric" },
    ],
    quote: { text: "If I had one hour to save the world, I would spend 55 minutes defining the problem and only 5 minutes finding the solution.", attr: "Albert Einstein · cited in IDEO methodology" },
  },
  3: {
    tagline: "The best idea is rarely the first idea. Ideation is a discipline — defer judgment and generate until you surprise yourself.",
    lessons: [
      { title: "Quantity Is the Strategy", body: "The fundamental rule: defer judgment. The moment you evaluate an idea, you stop generating. The best idea is rarely #4 — it's usually #37, and it only exists because you pushed past #20. IDEO's brainstorming rules: go for volume, build on ideas ('yes, and...'), encourage wild ideas, stay on topic, and be visual." },
      { title: "IDEO's Three Lenses: DFV", body: "Desirability: Do people actually want this? Always first. Feasibility: Can we build it with available resources today? Viability: Can we build a sustainable business around it? The sweet spot where all three overlap is where great businesses live. Start with desirability and work outward." },
      { title: "Analogous Inspiration", body: "The best ideas often come from unrelated domains. IDEO asks: how does a hospital solve patient handoffs? How could a restaurant concept apply to software? Borrowing from unrelated industries breaks obvious thinking and reveals unexpected solutions. What would Amazon, Disney, the military, or a theme park do?" },
    ],
    exercises: [
      { num:"03.1", title:"Crazy 8s", desc:"Fold paper into 8 panels. 8-minute timer. One different concept per panel for your top HMW. No text — rough visuals only. Speed prevents self-censorship.", time:"20 min", illu:"crazy8" },
      { num:"03.2", title:"50 Ideas Sprint", desc:"Write 50 different ideas for your HMW. Wild, stupid, obvious, impossible — all welcome. The remarkable ideas only appear after you exhaust the obvious first 20.", time:"40 min", illu:"sketch" },
      { num:"03.3", title:"Reverse Brainstorm", desc:"Ask: 'How would I make this problem as bad as possible?' Write 20 terrible ideas. Then flip each one. Best concepts often hide inside the opposites of the worst ideas.", time:"30 min", illu:"pov" },
      { num:"03.4", title:"Analogous World Tour", desc:"Pick 5 unrelated industries. For each, write how they solve a similar problem. What would Amazon, Disney, the military, a hospital, and a pizza chain do? Borrow the best.", time:"45 min", illu:"globe" },
      { num:"03.5", title:"DFV Scoring", desc:"Take your top 10 ideas. Rate each on Desirability, Feasibility, and Viability (1–10). Highest combined score moves to prototype. Don't let feasibility kill desirability prematurely.", time:"30 min", illu:"metric" },
      { num:"03.6", title:"Concept Poster", desc:"For your top 2 ideas, create a one-page concept poster: sketch, target user, core benefit, and one empathy research quote that proves the need.", time:"60 min", illu:"sketch" },
    ],
    quote: { text: "Don't think outside the box. Find a better box. Constraints are gifts — they force creativity in directions that unconstrained thinking never reaches.", attr: "Stanford d.school · Design Thinking Bootcamp" },
  },
  4: {
    tagline: "A prototype is a question made physical. The faster you build, the faster you learn — and the less it costs to be wrong.",
    lessons: [
      { title: "The Prototype Mindset", body: "Prototypes are not finished products. They are learning artifacts. The critical question: 'What question am I testing?' If you can't state the question, you're building features, not learning. Never fall in love with your prototype — emotional attachment is the surest sign you've stopped learning." },
      { title: "The Prototype Spectrum", body: "Paper Prototype → Storyboard → Role-Play / Bodystorm → Clickable Wireframe → Concierge MVP → Coded MVP. Always start at the lowest-fidelity prototype that can answer your question. The fidelity of the prototype should match the risk of the assumption being tested." },
      { title: "The Concierge MVP", body: "Do manually what your product would automate. Zappos photographed shoes in stores before building e-commerce infrastructure. Airbnb's founders stayed in their own listings before building booking software. Prove the value, then build the system. The Minimum Lovable Product — not just viable, but genuinely delightful." },
    ],
    exercises: [
      { num:"04.1", title:"Assumption Inventory", desc:"List every assumption your business rests on. Rate by Impact (H/M/L) and Certainty (H/M/L). High-impact + low-certainty assumptions are your prototype targets — test those first.", time:"30 min", illu:"assumption" },
      { num:"04.2", title:"5-Minute Paper Prototype", desc:"Set a 5-minute timer. Draw every screen or touchpoint on paper. Show to a potential user without explanation. Watch them 'use' it. Note every pause and confusion.", time:"20 min", illu:"paper" },
      { num:"04.3", title:"Storyboard Your Story", desc:"Draw 8 frames: user's life before → discovers your product → first use → key value moment → transformation. This is your future pitch deck and product spec in one artifact.", time:"45 min", illu:"sketch" },
      { num:"04.4", title:"Concierge Experiment", desc:"Design the smallest manual version of your product. Deliver it to one real person this week. Document every observation. What did you learn that you couldn't have assumed?", time:"2–3 days", illu:"interview" },
      { num:"04.5", title:"Clickable Wireframe", desc:"Build 3–5 core screens in Figma or Keynote. Share with 3 users via screen recording. Watch where they pause, click wrong, or look confused. Every friction = design debt.", time:"3 hrs", illu:"sketch" },
      { num:"04.6", title:"Fake Door Test", desc:"Build a landing page before your product exists. Capture emails. Drive 100 visitors. If 10%+ sign up, you have real signal. Under 2%? Your problem definition needs revisiting.", time:"1 day", illu:"metric" },
    ],
    quote: { text: "Fail faster to succeed sooner. Every prototype that fails is a lesson at the lowest possible cost. Every product that fails at launch is a lesson purchased far too late.", attr: "David Kelley · Founder of IDEO & d.school" },
  },
  5: {
    tagline: "Testing is not validation-seeking. It's truth-seeking. The truth you find in testing is the foundation of everything you'll launch successfully.",
    lessons: [
      { title: "Test to Learn, Not to Confirm", body: "The most common mistake: showing your prototype to people who want to be nice, then interpreting generous feedback as validation. Real testing is uncomfortable. You're looking for what breaks, confuses, and disappoints. IDEO's principle: Show, don't tell. Put the prototype in front of users and watch — don't explain it." },
      { title: "The Think-Aloud Protocol", body: "Ask users to narrate their experience as they interact: 'What are you thinking right now?' 'What do you expect to happen if you tap that?' This surfaces mental models before they disappear. Three users reveal 85% of usability issues — no more needed at this early stage." },
      { title: "Three-Ring Launch Strategy", body: "Ring 1: 10 trusted users (weeks 1–2). Ring 2: 100 early adopters (months 1–2). Ring 3: 1,000+ mainstream (month 3+). Between each ring, collect data, iterate, and rebuild. Design thinking doesn't stop at launch — every support ticket is an empathy interview, every churn event is a failed POV." },
    ],
    exercises: [
      { num:"05.1", title:"3-Person Usability Test", desc:"Run your prototype in front of 3 real users with Think-Aloud Protocol. Three users reveal 85% of usability issues. Write a Top 5 Findings report after all sessions.", time:"3–4 hrs", illu:"interview" },
      { num:"05.2", title:"North Star Metric", desc:"What is the ONE metric that proves your product is working? Not revenue (lagging) — the action that creates revenue. Map all other metrics as inputs or outputs from this single north star.", time:"45 min", illu:"metric" },
      { num:"05.3", title:"Feedback Synthesis Grid", desc:"Organize testing findings: Worked Well vs. Needs Change, crossed with Easy vs. Hard to Fix. Prioritize top-left: needs change + easy to fix. That's your next sprint.", time:"30 min", illu:"map" },
      { num:"05.4", title:"Launch Ring Plan", desc:"Plan Ring 1 (10 trusted), Ring 2 (100 early adopters), Ring 3 (1000+ mainstream). For each: who, what to measure, what to learn, gate condition before moving forward.", time:"60 min", illu:"rings" },
      { num:"05.5", title:"Willingness-to-Pay Interview", desc:"'If this worked perfectly, what would you pay monthly?' + 'At what price would you question the quality?' Do this with 5 users. You now have a pricing range with evidence.", time:"30 min", illu:"interview" },
      { num:"05.6", title:"DT Operating Rhythm", desc:"Design your post-launch DT cadence: weekly (what feedback came in?), monthly (what needs redefining?), quarterly (are we solving the right problem?). Put it in your calendar now.", time:"30 min", illu:"rings" },
    ],
    quote: { text: "Design thinking is not a methodology. It's a mindset. Once you see the world as a series of human problems worth solving, you can't unsee it.", attr: "David Kelley · Founder of IDEO & Stanford d.school" },
  },
};

const ILLUS = { 0: IlluOpportunity, 1: IlluEmpathy, 2: IlluDefine, 3: IlluIdeate, 4: IlluPrototype, 5: IlluTest };

// ── Components ────────────────────────────────────────────────────────────

function PhaseChip({ phase, active, done, onClick }) {
  const p = PHASES[phase];
  return (
    <button onClick={onClick} style={{
      display:"flex",alignItems:"center",gap:"6px",
      padding:"6px 12px",borderRadius:"20px",border:"none",cursor:"pointer",
      fontFamily:"'Courier New',monospace",fontSize:"0.65rem",fontWeight:"bold",
      letterSpacing:"0.05em",textTransform:"uppercase",
      background: active ? p.color : done ? p.accent : "#E8E4DC",
      color: active ? "white" : done ? p.color : "#6B7280",
      transition:"all 0.2s",
    }}>
      <span style={{opacity:0.7}}>{p.num}</span>
      <span>{p.short}</span>
    </button>
  );
}

function ExerciseCard({ ex, phaseColor, phaseBg }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{
      background: open ? phaseBg : "white",
      border: `2px solid ${open ? phaseColor : "#E8E4DC"}`,
      borderRadius:"16px",padding:"0",
      cursor:"pointer",transition:"all 0.25s",
      overflow:"hidden",
    }}>
      <div style={{display:"flex",gap:"12px",padding:"16px",alignItems:"flex-start"}}>
        <div style={{
          width:80,height:60,flexShrink:0,
          background:phaseBg,borderRadius:"10px",
          display:"flex",alignItems:"center",justifyContent:"center",
          padding:"8px",
        }}>
          <ExIllu type={ex.illu} color={phaseColor}/>
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
            <span style={{fontFamily:"'Courier New',monospace",fontSize:"0.6rem",color:phaseColor,fontWeight:"bold"}}>EX {ex.num}</span>
            <span style={{fontFamily:"'Courier New',monospace",fontSize:"0.6rem",color:"#6B7280",background:"#F0EAD8",padding:"1px 6px",borderRadius:"8px"}}>{ex.time}</span>
          </div>
          <div style={{fontFamily:"Georgia,serif",fontSize:"0.9rem",fontWeight:"bold",color:"#1A1A2E",lineHeight:1.3}}>{ex.title}</div>
        </div>
        <div style={{color:phaseColor,fontSize:"1rem",flexShrink:0,marginTop:2}}>{open?"▲":"▼"}</div>
      </div>
      {open && (
        <div style={{padding:"0 16px 16px",borderTop:`1px solid ${phaseColor}22`}}>
          <p style={{fontFamily:"Georgia,serif",fontSize:"0.85rem",color:"#374151",lineHeight:1.7,margin:0}}>{ex.desc}</p>
        </div>
      )}
    </div>
  );
}

function PhaseView({ phaseId, onNext, onPrev, onHome }) {
  const p = PHASES[phaseId];
  const c = CONTENT[phaseId];
  const IlluComp = ILLUS[phaseId];

  return (
    <div style={{minHeight:"100vh",background:"white"}}>
      {/* Phase banner */}
      <div style={{
        background:`linear-gradient(135deg, ${p.color} 0%, ${p.color}DD 100%)`,
        padding:"32px 24px 28px",position:"relative",overflow:"hidden",
      }}>
        {/* Big number watermark */}
        <div style={{
          position:"absolute",right:"-10px",top:"-20px",
          fontFamily:"Georgia,serif",fontSize:"140px",fontWeight:"bold",
          color:"rgba(255,255,255,0.08)",lineHeight:1,pointerEvents:"none",userSelect:"none",
        }}>{p.num}</div>

        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px",position:"relative",zIndex:1}}>
          <div style={{flex:1}}>
            <div style={{fontFamily:"'Courier New',monospace",fontSize:"0.65rem",color:"rgba(255,255,255,0.7)",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"8px"}}>
              Phase {p.num} · {p.short}
            </div>
            <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",color:"white",margin:"0 0 12px",lineHeight:1.1,whiteSpace:"pre-line",fontWeight:"bold"}}>
              {p.label}
            </h1>
            <p style={{fontFamily:"Georgia,serif",fontSize:"0.85rem",color:"rgba(255,255,255,0.85)",margin:0,lineHeight:1.6,maxWidth:"420px",fontStyle:"italic"}}>
              {c.tagline}
            </p>
          </div>
          <div style={{width:"140px",flexShrink:0,opacity:0.95}}>
            <IlluComp/>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{padding:"24px"}}>

        {/* Lessons */}
        <div style={{marginBottom:"28px"}}>
          <div style={{fontFamily:"'Courier New',monospace",fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",color:p.color,marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"}}>
            <span style={{display:"inline-block",width:"24px",height:"2px",background:p.color}}/>
            Core Concepts
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {c.lessons.map((l, i) => (
              <div key={i} style={{
                background:p.bg,borderRadius:"14px",padding:"18px",
                borderLeft:`4px solid ${p.color}`,
              }}>
                <div style={{fontFamily:"Georgia,serif",fontSize:"1rem",fontWeight:"bold",color:"#1A1A2E",marginBottom:"8px"}}>{l.title}</div>
                <p style={{fontFamily:"Georgia,serif",fontSize:"0.83rem",color:"#374151",lineHeight:1.7,margin:0}}>{l.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div style={{
          background:`linear-gradient(135deg,${p.bg},white)`,
          border:`2px solid ${p.accent}`,
          borderRadius:"16px",padding:"20px 24px",
          marginBottom:"28px",
          position:"relative",
        }}>
          <div style={{fontFamily:"Georgia,serif",fontSize:"3rem",color:p.color,lineHeight:0.5,marginBottom:"8px",opacity:0.5}}>"</div>
          <p style={{fontFamily:"Georgia,serif",fontSize:"0.9rem",fontStyle:"italic",color:"#1A1A2E",lineHeight:1.7,margin:"0 0 10px"}}>{c.quote.text}</p>
          <div style={{fontFamily:"'Courier New',monospace",fontSize:"0.65rem",color:p.color,letterSpacing:"0.08em",textTransform:"uppercase"}}>{c.quote.attr}</div>
        </div>

        {/* Exercises */}
        <div style={{marginBottom:"28px"}}>
          <div style={{fontFamily:"'Courier New',monospace",fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",color:p.color,marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"}}>
            <span style={{display:"inline-block",width:"24px",height:"2px",background:p.color}}/>
            Exercises · Tap to expand
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            {c.exercises.map((ex, i) => (
              <ExerciseCard key={i} ex={ex} phaseColor={p.color} phaseBg={p.bg}/>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"16px",borderTop:"2px solid #F0EAD8"}}>
          <button onClick={onPrev} style={{
            padding:"10px 18px",borderRadius:"10px",border:"2px solid #E8E4DC",
            background:"white",fontFamily:"Georgia,serif",fontSize:"0.85rem",
            color:"#6B7280",cursor:"pointer",
          }}>← {phaseId === 0 ? "Home" : `Phase ${PHASES[phaseId-1].num}`}</button>
          <button onClick={onHome} style={{
            padding:"8px 14px",borderRadius:"10px",border:"none",
            background:"#F0EAD8",fontFamily:"'Courier New',monospace",fontSize:"0.6rem",
            color:"#6B7280",cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",
          }}>◉ Map</button>
          <button onClick={onNext} style={{
            padding:"10px 18px",borderRadius:"10px",border:"none",
            background:p.color,fontFamily:"Georgia,serif",fontSize:"0.85rem",
            color:"white",cursor:"pointer",
          }}>{phaseId === 5 ? "Complete ✓" : `Phase ${PHASES[phaseId+1].num} →`}</button>
        </div>
      </div>
    </div>
  );
}

function HomePage({ onStart, onPhase, progress }) {
  return (
    <div style={{background:P.cream,minHeight:"100vh"}}>
      {/* Hero */}
      <div style={{
        background:`linear-gradient(160deg,#1B2A4A 0%,#2D3E6A 60%,#3AB795 100%)`,
        padding:"36px 24px 32px",
      }}>
        <div style={{fontFamily:"'Courier New',monospace",fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.5)",marginBottom:"12px"}}>Stanford d.school × IDEO · Full Course</div>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(2rem,5vw,3.2rem)",color:"white",margin:"0 0 10px",lineHeight:1.05,fontWeight:"bold"}}>
          Design Thinking<br/><span style={{color:P.sun}}>for Bold Builders</span>
        </h1>
        <p style={{fontFamily:"Georgia,serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.75)",margin:"0 0 24px",lineHeight:1.6,fontStyle:"italic",maxWidth:"380px"}}>
          6 phases · 36 exercises · One outcome: a business built on evidence, not assumption.
        </p>
        <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"}}>
          {[["6","Phases"],["36","Exercises"],["15+","Frameworks"],["1","Business"]].map(([n,l])=>(
            <div key={l} style={{background:"rgba(255,255,255,0.1)",borderRadius:"10px",padding:"8px 14px",textAlign:"center"}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:"1.3rem",fontWeight:"bold",color:P.sun}}>{n}</div>
              <div style={{fontFamily:"'Courier New',monospace",fontSize:"0.55rem",color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.1em"}}>{l}</div>
            </div>
          ))}
        </div>
        <button onClick={onStart} style={{
          background:P.sun,color:P.navy,border:"none",
          padding:"12px 28px",borderRadius:"12px",
          fontFamily:"Georgia,serif",fontSize:"1rem",fontWeight:"bold",
          cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",
        }}>Begin Course →</button>
      </div>

      {/* Phase cards */}
      <div style={{padding:"24px"}}>
        <div style={{fontFamily:"'Courier New',monospace",fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"#6B7280",marginBottom:"16px"}}>Course Map · Tap any phase to jump in</div>
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          {PHASES.map((p, i) => {
            const Illu = ILLUS[i];
            const done = progress > i;
            const active = progress === i;
            return (
              <button key={i} onClick={() => onPhase(i)} style={{
                display:"flex",alignItems:"center",gap:"14px",
                background: done ? p.bg : active ? "white" : "white",
                border:`2px solid ${done ? p.color : active ? p.color : "#E8E4DC"}`,
                borderRadius:"14px",padding:"14px",cursor:"pointer",
                textAlign:"left",transition:"all 0.2s",
              }}>
                <div style={{
                  width:52,height:42,flexShrink:0,
                  background:p.bg,borderRadius:"10px",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  padding:"6px",
                }}>
                  <Illu/>
                </div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"2px"}}>
                    <span style={{fontFamily:"'Courier New',monospace",fontSize:"0.6rem",color:p.color,fontWeight:"bold"}}>PHASE {p.num}</span>
                    {done && <span style={{fontSize:"0.6rem",color:p.color}}>✓</span>}
                  </div>
                  <div style={{fontFamily:"Georgia,serif",fontSize:"0.95rem",fontWeight:"bold",color:"#1A1A2E",whiteSpace:"pre-line",lineHeight:1.2}}>{p.label}</div>
                </div>
                <div style={{color:p.color,fontSize:"0.9rem"}}>→</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("home"); // "home" | number
  const [progress, setProgress] = useState(0);

  const goPhase = (id) => {
    setView(id);
    if (id > progress) setProgress(id);
    window.scrollTo?.(0,0);
  };

  const goHome = () => { setView("home"); window.scrollTo?.(0,0); };

  return (
    <div style={{maxWidth:"680px",margin:"0 auto",fontFamily:"Georgia,serif"}}>
      {/* Top nav */}
      <div style={{
        position:"sticky",top:0,zIndex:100,
        background:"white",borderBottom:"2px solid #F0EAD8",
        padding:"8px 16px",
        display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",
      }}>
        <button onClick={goHome} style={{
          fontFamily:"'Courier New',monospace",fontSize:"0.6rem",
          color:"#6B7280",background:"none",border:"none",cursor:"pointer",
          marginRight:"4px",padding:"4px",
        }}>◉</button>
        {PHASES.map((p,i) => (
          <PhaseChip key={i} phase={i} active={view===i} done={progress>i && view!==i} onClick={()=>goPhase(i)}/>
        ))}
      </div>

      {view === "home"
        ? <HomePage onStart={()=>goPhase(0)} onPhase={goPhase} progress={progress}/>
        : <PhaseView
            phaseId={view}
            onNext={() => view < 5 ? goPhase(view+1) : goHome()}
            onPrev={() => view > 0 ? goPhase(view-1) : goHome()}
            onHome={goHome}
          />
      }
    </div>
  );
}
