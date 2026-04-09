import { useTheme } from '../../ThemeContext';
import { P } from '../../theme';
import { ILLUS } from './PhaseIllustrations';

export default function HomePage({ onStart, onPhase, progress }) {
  const { t, phases } = useTheme();
  return (
    <div style={{background:t.pageBg, minHeight:"100vh"}}>
      {/* Hero */}
      <div style={{
        background:`linear-gradient(160deg,#1B2A4A 0%,#2D3E6A 60%,#3AB795 100%)`,
        padding:"36px 24px 32px",
      }}>
        <div style={{fontFamily:"'Courier New',monospace", fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", marginBottom:"12px"}}>
          Stanford d.school × IDEO · Full Course
        </div>
        <h1 style={{fontFamily:"Georgia,serif", fontSize:"clamp(2rem,5vw,3.2rem)", color:"white", margin:"0 0 10px", lineHeight:1.05, fontWeight:"bold"}}>
          Design Thinking<br/><span style={{color:P.sun}}>for Bold Builders</span>
        </h1>
        <p style={{fontFamily:"Georgia,serif", fontSize:"0.88rem", color:"rgba(255,255,255,0.75)", margin:"0 0 24px", lineHeight:1.6, fontStyle:"italic", maxWidth:"380px"}}>
          6 phases · 36 exercises · One outcome: a business built on evidence, not assumption.
        </p>
        <div style={{display:"flex", gap:"8px", flexWrap:"wrap", marginBottom:"20px"}}>
          {[["6","Phases"],["36","Exercises"],["15+","Frameworks"],["1","Business"]].map(([n,l])=>(
            <div key={l} style={{background:"rgba(255,255,255,0.1)", borderRadius:"10px", padding:"8px 14px", textAlign:"center"}}>
              <div style={{fontFamily:"Georgia,serif", fontSize:"1.3rem", fontWeight:"bold", color:P.sun}}>{n}</div>
              <div style={{fontFamily:"'Courier New',monospace", fontSize:"0.55rem", color:"rgba(255,255,255,0.6)", textTransform:"uppercase", letterSpacing:"0.1em"}}>{l}</div>
            </div>
          ))}
        </div>
        <button onClick={onStart} style={{
          background:P.sun, color:P.navy, border:"none",
          padding:"12px 28px", borderRadius:"12px",
          fontFamily:"Georgia,serif", fontSize:"1rem", fontWeight:"bold",
          cursor:"pointer", display:"flex", alignItems:"center", gap:"8px",
        }}>Begin Course →</button>
      </div>

      {/* Phase cards */}
      <div style={{padding:"24px"}}>
        <div style={{fontFamily:"'Courier New',monospace", fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:t.textMuted, marginBottom:"16px"}}>
          Course Map · Tap any phase to jump in
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
          {phases.map((p, i) => {
            const Illu = ILLUS[i];
            const done = progress > i;
            const active = progress === i;
            return (
              <button key={i} onClick={() => onPhase(i)} style={{
                display:"flex", alignItems:"center", gap:"14px",
                background: done ? p.bg : t.surface,
                border:`2px solid ${done ? p.color : active ? p.color : t.border}`,
                borderRadius:"14px", padding:"14px", cursor:"pointer",
                textAlign:"left", transition:"all 0.2s",
              }}>
                <div style={{
                  width:52, height:42, flexShrink:0,
                  background:p.bg, borderRadius:"10px",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  padding:"6px",
                }}>
                  <Illu bg={p.bg}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"2px"}}>
                    <span style={{fontFamily:"'Courier New',monospace", fontSize:"0.6rem", color:p.color, fontWeight:"bold"}}>PHASE {p.num}</span>
                    {done && <span style={{fontSize:"0.6rem", color:p.color}}>✓</span>}
                  </div>
                  <div style={{fontFamily:"Georgia,serif", fontSize:"0.95rem", fontWeight:"bold", color:t.textHeading, whiteSpace:"pre-line", lineHeight:1.2}}>{p.label}</div>
                </div>
                <div style={{color:p.color, fontSize:"0.9rem"}}>→</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
