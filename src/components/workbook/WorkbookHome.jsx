import { useTheme } from '../../ThemeContext';
import { EXERCISES } from '../../data/workbookData';
import { P } from '../../theme';
import WorkbookPhaseIllu from './WorkbookPhaseIllu';

export default function WorkbookHome({ onPhase, progress }) {
  const { t, phases } = useTheme();

  return (
    <div style={{ background: t.pageBg, minHeight: "100vh" }}>
      {/* Hero banner */}
      <div style={{ background: `linear-gradient(160deg,${P.navy} 0%,#2D4A7A 60%,${P.mint} 100%)`, padding: "36px 24px 32px" }}>
        <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "10px" }}>
          Design Thinking · Interactive Workbook
        </div>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.8rem,5vw,2.8rem)", color: "white", margin: "0 0 10px", lineHeight: 1.05, fontWeight: "bold" }}>
          The Founder's<br/><span style={{ color: P.sun }}>Workbook</span>
        </h1>
        <p style={{ fontFamily: "Georgia,serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.6, fontStyle: "italic", maxWidth: "360px" }}>
          36 exercises across 6 phases. Write directly into each workspace. Your responses are saved locally on your device.
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[["6","Phases"],["36","Exercises"],["100%","Interactive"],["💾","Auto-saved"]].map(([n, l]) => (
            <div key={l} style={{ background: "rgba(255,255,255,0.1)", borderRadius: "10px", padding: "8px 14px", textAlign: "center" }}>
              <div style={{ fontFamily: "Georgia,serif", fontSize: "1.2rem", fontWeight: "bold", color: P.sun }}>{n}</div>
              <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.52rem", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase list */}
      <div style={{ padding: "24px" }}>
        <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: t.textMuted, marginBottom: "16px" }}>
          Workbook Contents · Tap any phase to open exercises
        </div>
        {phases.map((ph, i) => {
          const exCount = EXERCISES[i]?.length ?? 0;
          return (
            <button key={i} onClick={() => onPhase(i)} style={{
              width: "100%", display: "flex", alignItems: "center", gap: "14px",
              background: t.surface, border: `2px solid ${progress > i ? ph.color : t.border}`,
              borderRadius: "14px", padding: "14px", cursor: "pointer",
              textAlign: "left", transition: "all 0.2s", marginBottom: "8px",
            }}>
              <WorkbookPhaseIllu id={i} bg={ph.bg} size={52}/>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                  <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.58rem", color: ph.color, fontWeight: "bold" }}>PHASE {ph.num}</span>
                  <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.55rem", color: t.textMuted, background: t.sand, padding: "1px 6px", borderRadius: "8px" }}>{exCount} exercises</span>
                  {progress > i && <span style={{ fontSize: "0.7rem", color: ph.color }}>✓</span>}
                </div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "0.95rem", fontWeight: "bold", color: t.textHeading }}>{ph.label.replace('\n', ' ')}</div>
              </div>
              <div style={{ color: ph.color, fontSize: "0.9rem" }}>→</div>
            </button>
          );
        })}
      </div>

      {/* How to use */}
      <div style={{ margin: "0 24px 32px", padding: "20px", background: P.navy, borderRadius: "16px" }}>
        <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.6rem", color: P.sun, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>How to use this workbook</div>
        {[
          ["Work sequentially", "Each phase builds on the one before. Phase 00 before Phase 01."],
          ["Tap to expand", "Each exercise opens with full instructions and a write-in workspace."],
          ["Type your answers", "Your responses are automatically saved to your device as you type."],
          ["Mark complete", "Use the button at the bottom of each exercise when done."],
        ].map(([title, desc]) => (
          <div key={title} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: P.sun, flexShrink: 0, marginTop: 5 }}/>
            <div>
              <span style={{ fontFamily: "Georgia,serif", fontSize: "0.85rem", fontWeight: "bold", color: "white" }}>{title} — </span>
              <span style={{ fontFamily: "Georgia,serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
