import { P } from '../../theme';

// Small 80×80 phase icons for the workbook nav and headers.
// Accepts `bg` prop (resolved dark/light by caller via useTheme phases[id].bg).
export default function WorkbookPhaseIllu({ id, bg, size = 80 }) {
  const phases = [
    { color: P.plum },
    { color: P.coral },
    { color: P.sky },
    { color: P.sun },
    { color: P.mint },
    { color: P.navy },
  ];
  const c = phases[id].color;
  const bgFill = bg || ["#F5EEF8","#FEF0EB","#EAF6FD","#FEFBE8","#EAF8F4","#EBF0F8"][id];

  if (id === 0) return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill={bgFill}/>
      <circle cx="40" cy="40" r="28" stroke={c} strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.4"/>
      <circle cx="40" cy="40" r="16" stroke={c} strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.5"/>
      <circle cx="40" cy="40" r="7" fill={c} opacity="0.7"/>
      <polygon points="40,12 55,28 55,52 40,62 25,52 25,28" fill={c} opacity="0.12" stroke={c} strokeWidth="1.5"/>
      {[[40,12],[55,28],[55,52],[40,62],[25,52],[25,28]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3.5" fill={c} stroke="white" strokeWidth="1.5"/>
      ))}
    </svg>
  );
  if (id === 1) return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill={bgFill}/>
      <circle cx="40" cy="30" r="11" fill={c} opacity="0.7"/>
      <path d="M22,58 Q40,46 58,58" fill={c} opacity="0.5"/>
      <rect x="46" y="14" width="28" height="18" rx="5" fill="white" stroke={c} strokeWidth="1.5"/>
      <path d="M46,22 L42,26 L48,24" fill="white" stroke={c} strokeWidth="1"/>
      <rect x="50" y="18" width="18" height="3" rx="1.5" fill={c} opacity="0.4"/>
      <rect x="50" y="23" width="12" height="3" rx="1.5" fill={c} opacity="0.3"/>
    </svg>
  );
  if (id === 2) return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill={bgFill}/>
      <circle cx="40" cy="36" r="22" stroke={c} strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.3"/>
      <circle cx="40" cy="36" r="14" stroke={c} strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5"/>
      <circle cx="40" cy="36" r="7" fill={c} opacity="0.2" stroke={c} strokeWidth="2"/>
      <circle cx="40" cy="36" r="3" fill={c} opacity="0.9"/>
      <line x1="58" y1="22" x2="45" y2="33" stroke={P.coral} strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="43,31 46,38 50,32" fill={P.coral}/>
      <rect x="14" y="58" width="52" height="14" rx="5" fill="white" stroke={c} strokeWidth="1.5"/>
      <text x="40" y="68" textAnchor="middle" fontSize="6" fill={c} fontFamily="'Courier New'" fontWeight="bold">[USER] NEEDS [NEED]</text>
    </svg>
  );
  if (id === 3) return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill={bgFill}/>
      <path d="M40,14 Q28,14 24,28 Q20,38 28,46 L28,54 Q28,57 31,58 L49,58 Q52,57 52,54 L52,46 Q60,38 56,28 Q52,14 40,14Z" fill={c} opacity="0.75"/>
      <rect x="31" y="58" width="18" height="4" rx="2" fill={c} opacity="0.5"/>
      <rect x="33" y="63" width="14" height="4" rx="2" fill={c} opacity="0.3"/>
      {[0,45,90,135,180,225,270,315].map(a=>(
        <line key={a} x1={40+26*Math.cos(a*Math.PI/180)} y1={35+26*Math.sin(a*Math.PI/180)} x2={40+32*Math.cos(a*Math.PI/180)} y2={35+32*Math.sin(a*Math.PI/180)} stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      ))}
    </svg>
  );
  if (id === 4) return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill={bgFill}/>
      <rect x="28" y="14" width="24" height="40" rx="5" fill="white" stroke={c} strokeWidth="2"/>
      <rect x="32" y="20" width="16" height="22" rx="2" fill={c} opacity="0.1"/>
      <rect x="32" y="22" width="16" height="3" rx="1.5" fill={c} opacity="0.4"/>
      <rect x="32" y="27" width="10" height="2.5" rx="1" fill={c} opacity="0.25"/>
      <rect x="32" y="31" width="16" height="8" rx="2" fill={c} opacity="0.15"/>
      <rect x="10" y="50" width="18" height="22" rx="4" fill="white" stroke={P.coral} strokeWidth="1.5" transform="rotate(-6,19,61)"/>
      <rect x="10" y="50" width="18" height="22" rx="4" fill="white" stroke={c} strokeWidth="2"/>
      <rect x="13" y="54" width="12" height="8" rx="2" fill={c} opacity="0.1"/>
      <path d="M28,60 Q32,56 34,50" stroke={P.navy} strokeWidth="1.5" strokeDasharray="3,2" fill="none" opacity="0.4"/>
    </svg>
  );
  if (id === 5) return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill={bgFill}/>
      <circle cx="40" cy="36" r="28" stroke={c} strokeWidth="1" strokeDasharray="5 3" opacity="0.18"/>
      <circle cx="40" cy="36" r="18" stroke={c} strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3"/>
      <circle cx="40" cy="36" r="9" stroke={c} strokeWidth="2" opacity="0.5"/>
      <circle cx="40" cy="36" r="3" fill={c} opacity="0.8"/>
      <path d="M40,42 Q35,40 36,33 Q37,26 40,24 Q43,26 44,33 Q45,40 40,42Z" fill={P.coral} opacity="0.85"/>
      <path d="M36,42 Q32,45 33,48 L36,45Z" fill={P.sun} opacity="0.8"/>
      <path d="M44,42 Q48,45 47,48 L44,45Z" fill={P.sun} opacity="0.8"/>
      <path d="M38,42 Q39,48 40,52 Q41,48 42,42" fill={P.sun} opacity="0.7"/>
    </svg>
  );
  return <svg width={size} height={size} viewBox="0 0 80 80"><circle cx="40" cy="40" r="36" fill={bgFill}/></svg>;
}
