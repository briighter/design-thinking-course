import { useTheme } from '../../ThemeContext';
import { EXERCISES } from '../../data/workbookData';
import WorkbookPhaseIllu from './WorkbookPhaseIllu';
import WorkbookExercise from './WorkbookExercise';

export default function PhaseWorkbook({ phaseId, onNext, onPrev, onHome }) {
  const { t, phases } = useTheme();
  const p = phases[phaseId];
  const exercises = EXERCISES[phaseId] || [];

  return (
    <div style={{ minHeight: "100vh", background: t.pageBg }}>
      {/* Phase banner */}
      <div style={{
        background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}CC 100%)`,
        padding: "28px 20px 24px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -10, top: -20,
          fontFamily: "Georgia,serif", fontSize: "130px", fontWeight: "bold",
          color: "rgba(255,255,255,0.07)", lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>{p.num}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative", zIndex: 1 }}>
          <WorkbookPhaseIllu id={phaseId} bg={p.bg} size={72}/>
          <div>
            <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
              Phase {p.num} Workbook
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "white", margin: "0 0 6px", lineHeight: 1.1, fontWeight: "bold", whiteSpace: "pre-line" }}>{p.label}</h2>
            <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.65)" }}>
              {exercises.length} exercises · Tap to open each workspace
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        {exercises.map((ex, i) => (
          <WorkbookExercise key={i} ex={ex} defaultOpen={i === 0}/>
        ))}
      </div>

      <div style={{ padding: "16px 20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `2px solid ${t.borderLight}` }}>
        <button onClick={onPrev} style={{
          padding: "10px 16px", borderRadius: "10px",
          border: `2px solid ${t.border}`, background: t.surface,
          fontFamily: "Georgia,serif", fontSize: "0.85rem", color: t.textMuted, cursor: "pointer",
        }}>
          ← {phaseId === 0 ? "Home" : `Phase ${phases[phaseId - 1].num}`}
        </button>
        <button onClick={onHome} style={{
          padding: "8px 12px", borderRadius: "10px", border: "none",
          background: t.sand, fontFamily: "'Courier New',monospace",
          fontSize: "0.6rem", color: t.textMuted, cursor: "pointer",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>◉ Contents</button>
        <button onClick={onNext} style={{
          padding: "10px 16px", borderRadius: "10px", border: "none",
          background: p.color, fontFamily: "Georgia,serif",
          fontSize: "0.85rem", color: "white", cursor: "pointer",
        }}>
          {phaseId === 5 ? "Complete ✓" : `Phase ${phases[phaseId + 1].num} →`}
        </button>
      </div>
    </div>
  );
}
