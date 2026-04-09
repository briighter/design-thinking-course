import { useTheme } from '../../ThemeContext';
import { CONTENT } from '../../data/courseContent';
import { ILLUS } from './PhaseIllustrations';
import ExerciseCard from './ExerciseCard';

export default function PhaseView({ phaseId, onNext, onPrev, onHome }) {
  const { t, phases } = useTheme();
  const p = phases[phaseId];
  const c = CONTENT[phaseId];
  const IlluComp = ILLUS[phaseId];

  return (
    <div style={{minHeight:"100vh", background:t.pageBg}}>
      {/* Phase banner */}
      <div style={{
        background:`linear-gradient(135deg, ${p.color} 0%, ${p.color}DD 100%)`,
        padding:"32px 24px 28px", position:"relative", overflow:"hidden",
      }}>
        <div style={{
          position:"absolute", right:"-10px", top:"-20px",
          fontFamily:"Georgia,serif", fontSize:"140px", fontWeight:"bold",
          color:"rgba(255,255,255,0.08)", lineHeight:1,
          pointerEvents:"none", userSelect:"none",
        }}>{p.num}</div>

        <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"16px", position:"relative", zIndex:1}}>
          <div style={{flex:1}}>
            <div style={{fontFamily:"'Courier New',monospace", fontSize:"0.65rem", color:"rgba(255,255,255,0.7)", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"8px"}}>
              Phase {p.num} · {p.short}
            </div>
            <h1 style={{fontFamily:"Georgia,serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", color:"white", margin:"0 0 12px", lineHeight:1.1, whiteSpace:"pre-line", fontWeight:"bold"}}>
              {p.label}
            </h1>
            <p style={{fontFamily:"Georgia,serif", fontSize:"0.85rem", color:"rgba(255,255,255,0.85)", margin:0, lineHeight:1.6, maxWidth:"420px", fontStyle:"italic"}}>
              {c.tagline}
            </p>
          </div>
          <div style={{width:"140px", flexShrink:0, opacity:0.95}}>
            <IlluComp bg={p.bg}/>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{padding:"24px"}}>

        {/* Lessons */}
        <div style={{marginBottom:"28px"}}>
          <div style={{fontFamily:"'Courier New',monospace", fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:p.color, marginBottom:"14px", display:"flex", alignItems:"center", gap:"8px"}}>
            <span style={{display:"inline-block", width:"24px", height:"2px", background:p.color}}/>
            Core Concepts
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"12px"}}>
            {c.lessons.map((l, i) => (
              <div key={i} style={{
                background:p.bg, borderRadius:"14px", padding:"18px",
                borderLeft:`4px solid ${p.color}`,
              }}>
                <div style={{fontFamily:"Georgia,serif", fontSize:"1rem", fontWeight:"bold", color:t.textHeading, marginBottom:"8px"}}>{l.title}</div>
                <p style={{fontFamily:"Georgia,serif", fontSize:"0.83rem", color:t.textBody, lineHeight:1.7, margin:0}}>{l.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div style={{
          background:`linear-gradient(135deg,${p.bg},${t.surface})`,
          border:`2px solid ${p.accent}`,
          borderRadius:"16px", padding:"20px 24px",
          marginBottom:"28px", position:"relative",
        }}>
          <div style={{fontFamily:"Georgia,serif", fontSize:"3rem", color:p.color, lineHeight:0.5, marginBottom:"8px", opacity:0.5}}>"</div>
          <p style={{fontFamily:"Georgia,serif", fontSize:"0.9rem", fontStyle:"italic", color:t.textHeading, lineHeight:1.7, margin:"0 0 10px"}}>{c.quote.text}</p>
          <div style={{fontFamily:"'Courier New',monospace", fontSize:"0.65rem", color:p.color, letterSpacing:"0.08em", textTransform:"uppercase"}}>{c.quote.attr}</div>
        </div>

        {/* Exercises */}
        <div style={{marginBottom:"28px"}}>
          <div style={{fontFamily:"'Courier New',monospace", fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:p.color, marginBottom:"14px", display:"flex", alignItems:"center", gap:"8px"}}>
            <span style={{display:"inline-block", width:"24px", height:"2px", background:p.color}}/>
            Exercises · Tap to expand
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            {c.exercises.map((ex, i) => (
              <ExerciseCard key={i} ex={ex} phaseColor={p.color} phaseBg={p.bg}/>
            ))}
          </div>
        </div>

        {/* Prev / Home / Next nav */}
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:"16px", borderTop:`2px solid ${t.borderLight}`}}>
          <button onClick={onPrev} style={{
            padding:"10px 18px", borderRadius:"10px", border:`2px solid ${t.border}`,
            background:t.surface, fontFamily:"Georgia,serif", fontSize:"0.85rem",
            color:t.textMuted, cursor:"pointer",
          }}>← {phaseId === 0 ? "Home" : `Phase ${phases[phaseId-1].num}`}</button>
          <button onClick={onHome} style={{
            padding:"8px 14px", borderRadius:"10px", border:"none",
            background:t.sand, fontFamily:"'Courier New',monospace", fontSize:"0.6rem",
            color:t.textMuted, cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase",
          }}>◉ Map</button>
          <button onClick={onNext} style={{
            padding:"10px 18px", borderRadius:"10px", border:"none",
            background:p.color, fontFamily:"Georgia,serif", fontSize:"0.85rem",
            color:"white", cursor:"pointer",
          }}>{phaseId === 5 ? "Complete ✓" : `Phase ${phases[phaseId+1].num} →`}</button>
        </div>
      </div>
    </div>
  );
}
