import { P } from '../../theme';

export default function ExIllu({ type, color }) {
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
      {[[8,8],[42,8],[76,8],[8,44],[42,44],[76,44]].map(([x,y],i)=>(
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
      <polyline points="8,40 22,38 30,42 38,36 46,44 54,12 62,40 70,38 78,42 86,14 94,40 102,38 112,40" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
  return (
    <svg viewBox="0 0 120 80" style={s}>
      <rect x="10" y="10" width="100" height="60" rx="8" fill={color} opacity="0.15" stroke={color} strokeWidth="2"/>
      <text x="60" y="44" textAnchor="middle" fontSize="24" fill={color} opacity="0.6">◆</text>
    </svg>
  );
}
