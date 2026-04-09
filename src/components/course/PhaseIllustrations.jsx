import { P } from '../../theme';

export const IlluOpportunity = ({ bg = "#F5EEF8" }) => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="110" ry="90" fill={bg} opacity="0.6"/>
    <circle cx="140" cy="110" r="85" stroke={P.plum} strokeWidth="1" strokeDasharray="4 3" opacity="0.3"/>
    <circle cx="140" cy="110" r="55" stroke={P.plum} strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
    <circle cx="140" cy="110" r="28" fill="#D7BDE2" opacity="0.5"/>
    {[0,60,120,180,240,300].map(a => (
      <line key={a} x1="140" y1="110"
        x2={140+88*Math.cos(a*Math.PI/180)}
        y2={110+88*Math.sin(a*Math.PI/180)}
        stroke={P.plum} strokeWidth="1" opacity="0.2"/>
    ))}
    <polygon points="140,28 210,75 195,165 100,170 75,75" fill={P.plum} opacity="0.15" stroke={P.plum} strokeWidth="2"/>
    {[[140,28],[210,75],[195,165],[100,170],[75,75]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="6" fill={P.plum} stroke="white" strokeWidth="2"/>
    ))}
    <circle cx="140" cy="110" r="12" fill={P.plum}/>
    <text x="140" y="115" textAnchor="middle" fontSize="8" fill="white" fontFamily="Georgia" fontWeight="bold">★</text>
    {[["FRICTION",140,18],["FUTURE",222,72],["PATTERN",205,178],["STRANGER",92,185],["EDGE",58,68]].map(([t,x,y])=>(
      <text key={t} x={x} y={y} textAnchor="middle" fontSize="7.5" fill={P.plum} fontFamily="'Courier New'" fontWeight="500" letterSpacing="0.5">{t}</text>
    ))}
  </svg>
);

export const IlluEmpathy = ({ bg = "#FEF0EB" }) => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill={bg} opacity="0.7"/>
    <circle cx="140" cy="70" r="28" fill={P.coral} opacity="0.15" stroke={P.coral} strokeWidth="2"/>
    <circle cx="140" cy="62" r="14" fill={P.coral} opacity="0.8"/>
    <path d="M110,110 Q140,95 170,110 L175,145 H105 Z" fill={P.coral} opacity="0.7"/>
    <rect x="165" y="35" width="85" height="44" rx="10" fill="white" stroke={P.coral} strokeWidth="2"/>
    <polygon points="165,55 155,65 170,62" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <text x="207" y="54" textAnchor="middle" fontSize="8" fill={P.coral} fontFamily="Georgia" fontStyle="italic">"I hate when</text>
    <text x="207" y="66" textAnchor="middle" fontSize="8" fill={P.coral} fontFamily="Georgia" fontStyle="italic">it does this..."</text>
    <rect x="28" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <rect x="88" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <rect x="148" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    <rect x="208" y="155" width="52" height="40" rx="6" fill="white" stroke={P.coral} strokeWidth="1.5"/>
    {[["SAYS",54],["THINKS",114],["DOES",174],["FEELS",234]].map(([t,x])=>(
      <text key={t} x={x} y="180" textAnchor="middle" fontSize="7" fill={P.coral} fontFamily="'Courier New'" fontWeight="bold">{t}</text>
    ))}
    <path d="M30,90 Q20,85 22,98 Q24,110 35,108 Q38,108 40,104" stroke={P.coral} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M30,94 Q26,94 26,100 Q26,106 32,105" stroke={P.coral} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const IlluDefine = ({ bg = "#EAF6FD" }) => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill={bg} opacity="0.7"/>
    <circle cx="140" cy="105" r="72" stroke={P.sky} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.3"/>
    <circle cx="140" cy="105" r="50" stroke={P.sky} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4"/>
    <circle cx="140" cy="105" r="28" fill={P.sky} opacity="0.15" stroke={P.sky} strokeWidth="2"/>
    <circle cx="140" cy="105" r="10" fill={P.sky} opacity="0.8"/>
    <line x1="220" y1="35" x2="152" y2="100" stroke={P.coral} strokeWidth="3" strokeLinecap="round"/>
    <polygon points="148,97 156,88 163,103" fill={P.coral}/>
    <rect x="20" y="155" width="240" height="48" rx="10" fill="white" stroke={P.sky} strokeWidth="2"/>
    <text x="140" y="172" textAnchor="middle" fontSize="8.5" fill={P.sky} fontFamily="'Courier New'" fontWeight="bold" letterSpacing="0.5">[ USER ] NEEDS [ NEED ]</text>
    <text x="140" y="186" textAnchor="middle" fontSize="8.5" fill={P.navy} fontFamily="'Courier New'" fontWeight="bold" letterSpacing="0.5">BECAUSE [ INSIGHT ]</text>
    <circle cx="52" cy="80" r="20" stroke={P.sky} strokeWidth="2.5" fill="white" opacity="0.8"/>
    <line x1="66" y1="94" x2="76" y2="104" stroke={P.sky} strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="52" cy="80" r="8" fill={P.sky} opacity="0.15"/>
  </svg>
);

export const IlluIdeate = ({ bg = "#FEFBE8" }) => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill={bg} opacity="0.7"/>
    <path d="M140,30 Q115,30 108,55 Q102,72 115,88 L115,105 Q115,112 122,115 L158,115 Q165,112 165,105 L165,88 Q178,72 172,55 Q165,30 140,30Z" fill={P.sun} opacity="0.85"/>
    <rect x="122" y="115" width="36" height="8" rx="3" fill={P.sun} opacity="0.6"/>
    <rect x="126" y="125" width="28" height="7" rx="3" fill={P.sun} opacity="0.4"/>
    {[0,45,90,135,180,225,270,315].map(a=>(
      <line key={a} x1={140+42*Math.cos(a*Math.PI/180)} y1={75+42*Math.sin(a*Math.PI/180)}
        x2={140+54*Math.cos(a*Math.PI/180)} y2={75+54*Math.sin(a*Math.PI/180)}
        stroke={P.sun} strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    ))}
    <circle cx="95" cy="180" r="24" fill={P.coral} opacity="0.25" stroke={P.coral} strokeWidth="1.5"/>
    <circle cx="140" cy="180" r="24" fill={P.sky} opacity="0.25" stroke={P.sky} strokeWidth="1.5"/>
    <circle cx="185" cy="180" r="24" fill={P.mint} opacity="0.25" stroke={P.mint} strokeWidth="1.5"/>
    <text x="95" y="206" textAnchor="middle" fontSize="6.5" fill={P.coral} fontFamily="'Courier New'" fontWeight="bold">DESIRE</text>
    <text x="140" y="206" textAnchor="middle" fontSize="6.5" fill={P.sky} fontFamily="'Courier New'" fontWeight="bold">VIABLE</text>
    <text x="185" y="206" textAnchor="middle" fontSize="6.5" fill={P.mint} fontFamily="'Courier New'" fontWeight="bold">FEASIBLE</text>
    <circle cx="140" cy="177" r="7" fill={P.sun} stroke="white" strokeWidth="1.5"/>
  </svg>
);

export const IlluPrototype = ({ bg = "#EAF8F4" }) => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill={bg} opacity="0.7"/>
    <rect x="100" y="30" width="80" height="130" rx="10" fill="white" stroke={P.mint} strokeWidth="2.5"/>
    <rect x="108" y="45" width="64" height="80" rx="4" fill={P.mint} opacity="0.12"/>
    <rect x="112" y="50" width="56" height="8" rx="3" fill={P.mint} opacity="0.4"/>
    <rect x="112" y="62" width="40" height="6" rx="3" fill={P.mint} opacity="0.25"/>
    <rect x="112" y="72" width="56" height="30" rx="4" fill={P.mint} opacity="0.15"/>
    <rect x="112" y="106" width="26" height="10" rx="5" fill={P.mint} opacity="0.5"/>
    <rect x="20" y="120" width="58" height="72" rx="4" fill="white" stroke={P.coral} strokeWidth="1.5" transform="rotate(-8,49,156)"/>
    <rect x="20" y="120" width="58" height="72" rx="4" fill="white" stroke={P.sun} strokeWidth="1.5" transform="rotate(-4,49,156)"/>
    <rect x="20" y="120" width="58" height="72" rx="4" fill="white" stroke={P.mint} strokeWidth="2"/>
    <rect x="27" y="128" width="44" height="28" rx="3" fill={P.mint} opacity="0.1"/>
    <path d="M30,148 Q38,138 46,145 Q54,152 62,140" stroke={P.mint} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <text x="49" y="180" textAnchor="middle" fontSize="7" fill={P.mint} fontFamily="Georgia" fontStyle="italic">sketch</text>
    <path d="M78,155 Q95,148 100,130" stroke={P.navy} strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
    <polygon points="98,128 103,136 107,128" fill={P.navy} opacity="0.5"/>
    <path d="M185,75 Q210,75 215,100 Q218,120 195,130" stroke={P.mint} strokeWidth="2" fill="none" strokeLinecap="round"/>
    <polygon points="192,132 198,124 203,133" fill={P.mint}/>
    <text x="215" y="103" fontSize="7" fill={P.mint} fontFamily="Georgia" fontStyle="italic">iterate</text>
  </svg>
);

export const IlluTest = ({ bg = "#EBF0F8" }) => (
  <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
    <ellipse cx="140" cy="110" rx="115" ry="95" fill={bg} opacity="0.7"/>
    <circle cx="140" cy="105" r="82" stroke={P.navy} strokeWidth="1" strokeDasharray="6 4" opacity="0.15"/>
    <circle cx="140" cy="105" r="54" stroke={P.navy} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.25"/>
    <circle cx="140" cy="105" r="28" stroke={P.navy} strokeWidth="2" opacity="0.4"/>
    <circle cx="140" cy="105" r="10" fill={P.navy} opacity="0.7"/>
    {[["Ring 1 · 10 users",140,84],["Ring 2 · 100 early",140,58],["Ring 3 · 1000+",140,30]].map(([t,x,y])=>(
      <text key={t} x={x} y={y} textAnchor="middle" fontSize="7" fill={P.navy} fontFamily="'Courier New'" opacity="0.6">{t}</text>
    ))}
    <path d="M140,118 Q130,105 132,88 Q134,72 140,65 Q146,72 148,88 Q150,105 140,118Z" fill={P.coral}/>
    <path d="M132,100 Q124,108 128,115 L132,108Z" fill={P.sun}/>
    <path d="M148,100 Q156,108 152,115 L148,108Z" fill={P.sun}/>
    <circle cx="140" cy="88" r="5" fill="white" opacity="0.7"/>
    <path d="M136,118 Q138,128 140,135 Q142,128 144,118" fill={P.sun} opacity="0.8"/>
    <circle cx="200" cy="60" r="18" fill={P.mint} opacity="0.2" stroke={P.mint} strokeWidth="2"/>
    <path d="M190,60 L197,68 L212,50" stroke={P.mint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {[[60,165],[85,170],[110,165],[135,170],[160,165],[185,170],[210,165]].map(([x,y],i)=>(
      <g key={i}>
        <circle cx={x} cy={y-8} r={i<2?5:i<5?4:3.5} fill={i<2?P.navy:i<5?P.sky:P.lgray} opacity={i<2?0.9:i<5?0.6:0.4}/>
        <path d={`M${x-5},${y+2} Q${x},${y-3} ${x+5},${y+2}`} fill={i<2?P.navy:i<5?P.sky:P.lgray} opacity={i<2?0.9:i<5?0.6:0.4}/>
      </g>
    ))}
  </svg>
);

export const ILLUS = { 0: IlluOpportunity, 1: IlluEmpathy, 2: IlluDefine, 3: IlluIdeate, 4: IlluPrototype, 5: IlluTest };
