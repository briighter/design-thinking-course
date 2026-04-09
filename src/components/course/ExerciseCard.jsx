import { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import ExIllu from './ExerciseIllustrations';

export default function ExerciseCard({ ex, phaseColor, phaseBg }) {
  const [open, setOpen] = useState(false);
  const { t } = useTheme();
  return (
    <div onClick={() => setOpen(!open)} style={{
      background: open ? phaseBg : t.surface,
      border: `2px solid ${open ? phaseColor : t.border}`,
      borderRadius:"16px", padding:"0",
      cursor:"pointer", transition:"all 0.25s",
      overflow:"hidden",
    }}>
      <div style={{display:"flex", gap:"12px", padding:"16px", alignItems:"flex-start"}}>
        <div style={{
          width:80, height:60, flexShrink:0,
          background:phaseBg, borderRadius:"10px",
          display:"flex", alignItems:"center", justifyContent:"center",
          padding:"8px",
        }}>
          <ExIllu type={ex.illu} color={phaseColor}/>
        </div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"4px"}}>
            <span style={{fontFamily:"'Courier New',monospace", fontSize:"0.6rem", color:phaseColor, fontWeight:"bold"}}>EX {ex.num}</span>
            <span style={{fontFamily:"'Courier New',monospace", fontSize:"0.6rem", color:t.textMuted, background:t.sand, padding:"1px 6px", borderRadius:"8px"}}>{ex.time}</span>
          </div>
          <div style={{fontFamily:"Georgia,serif", fontSize:"0.9rem", fontWeight:"bold", color:t.textHeading, lineHeight:1.3}}>{ex.title}</div>
        </div>
        <div style={{color:phaseColor, fontSize:"1rem", flexShrink:0, marginTop:2}}>{open?"▲":"▼"}</div>
      </div>
      {open && (
        <div style={{padding:"0 16px 16px", borderTop:`1px solid ${phaseColor}22`}}>
          <p style={{fontFamily:"Georgia,serif", fontSize:"0.85rem", color:t.textBody, lineHeight:1.7, margin:0}}>{ex.desc}</p>
        </div>
      )}
    </div>
  );
}
