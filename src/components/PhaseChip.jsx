import { useTheme } from '../ThemeContext';

export default function PhaseChip({ phase, active, done, onClick }) {
  const { dark, t, phases } = useTheme();
  const p = phases[phase];
  return (
    <button onClick={onClick} style={{
      display:"flex", alignItems:"center", gap:"6px",
      padding:"6px 12px", borderRadius:"20px", border:"none", cursor:"pointer",
      fontFamily:"'Courier New',monospace", fontSize:"0.65rem", fontWeight:"bold",
      letterSpacing:"0.05em", textTransform:"uppercase",
      background: active ? p.color : done ? (dark ? p.darkBg : p.accent) : t.sand,
      color: active ? "white" : done ? p.color : t.textMuted,
      transition:"all 0.2s",
    }}>
      <span style={{opacity:0.7}}>{p.num}</span>
      <span>{p.short}</span>
    </button>
  );
}
