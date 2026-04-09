import { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { usePersisted } from '../../hooks/usePersisted';

export default function WorkbookExercise({ ex, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [done, setDone] = usePersisted(`wb-${ex.num}-done`, false);
  const { dark, t } = useTheme();
  const { Workspace } = ex;
  const bg = dark ? ex.darkBg : ex.lightBg;

  return (
    <div style={{
      border: `2px solid ${open ? ex.color : t.border}`,
      borderRadius: "16px",
      overflow: "hidden",
      marginBottom: "12px",
      transition: "border-color 0.2s",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", gap: "12px",
        padding: "14px 16px", background: open ? bg : t.surface,
        border: "none", cursor: "pointer", textAlign: "left",
        transition: "background 0.2s",
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: "8px",
          background: ex.color + (dark ? "33" : "22"),
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: "1rem" }}>{done ? "✅" : "✎"}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
            <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.58rem", color: ex.color, fontWeight: "bold" }}>EX {ex.num}</span>
            <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.58rem", color: t.textMuted, background: t.sand, padding: "1px 6px", borderRadius: "8px" }}>{ex.time}</span>
          </div>
          <div style={{ fontFamily: "Georgia,serif", fontSize: "0.9rem", fontWeight: "bold", color: t.textHeading, lineHeight: 1.2 }}>{ex.title}</div>
        </div>
        <div style={{ color: ex.color, fontSize: "0.85rem", flexShrink: 0 }}>{open ? "▲" : "▼"}</div>
      </button>

      {open && (
        <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${ex.color}22` }}>
          <div style={{
            background: bg,
            borderRadius: "10px",
            padding: "12px 14px",
            marginBottom: "16px",
            marginTop: "12px",
            borderLeft: `3px solid ${ex.color}`,
          }}>
            <p style={{ fontFamily: "Georgia,serif", fontSize: "0.83rem", color: t.textBody, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{ex.desc}</p>
          </div>
          {Workspace && <Workspace kp={`wb-${ex.num}`} />}
          <button onClick={() => setDone(!done)} style={{
            marginTop: "8px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: `2px solid ${done ? ex.color : t.border}`,
            background: done ? ex.color : t.surface,
            color: done ? "white" : t.textMuted,
            fontFamily: "'Courier New',monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s",
          }}>{done ? "✓ Completed" : "Mark Complete"}</button>
        </div>
      )}
    </div>
  );
}
