import { useTheme } from '../../ThemeContext';
import { usePersisted } from '../../hooks/usePersisted';

export function WriteBox({ label, lines = 5, color, storageKey }) {
  const [val, setVal] = usePersisted(storageKey, "");
  const { dark, t } = useTheme();
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{
        background: color + (dark ? "30" : "18"),
        borderTop: `3px solid ${color}`,
        borderLeft: `1px solid ${color}33`,
        borderRight: `1px solid ${color}33`,
        padding: "8px 12px",
        fontFamily: "'Courier New',monospace",
        fontSize: "0.6rem",
        color: color,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}>{label}</div>
      <textarea
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder="Write your response here..."
        style={{
          width: "100%",
          minHeight: `${lines * 38}px`,
          border: `1px solid ${color}33`,
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
          padding: "12px",
          fontFamily: "Georgia,serif",
          fontSize: "0.85rem",
          color: t.textBody,
          background: t.surface,
          resize: "vertical",
          lineHeight: 1.7,
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export function TwoColBox({ label1, label2, color, height = 120, storageKey }) {
  const [vals, setVals] = usePersisted(storageKey, ["", ""]);
  const { dark, t } = useTheme();
  const update = (i, v) => { const n = [...vals]; n[i] = v; setVals(n); };
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", gap: "2px" }}>
        {[[label1, 0], [label2, 1]].map(([lbl, idx]) => (
          <div key={idx} style={{ flex: 1 }}>
            <div style={{
              background: color + (dark ? "30" : "18"),
              borderTop: `3px solid ${color}`,
              borderLeft: `1px solid ${color}33`,
              borderRight: `1px solid ${color}33`,
              padding: "8px 10px",
              fontFamily: "'Courier New',monospace",
              fontSize: "0.58rem",
              color: color,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}>{lbl}</div>
            <textarea
              value={vals[idx]}
              onChange={e => update(idx, e.target.value)}
              placeholder="..."
              style={{
                width: "100%",
                minHeight: `${height}px`,
                border: `1px solid ${color}33`,
                borderTop: "none",
                borderRadius: idx === 0 ? "0 0 0 8px" : "0 0 8px 0",
                padding: "10px",
                fontFamily: "Georgia,serif",
                fontSize: "0.82rem",
                color: t.textBody,
                background: t.surface,
                resize: "vertical",
                outline: "none",
                boxSizing: "border-box",
                lineHeight: 1.6,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FourQuadrant({ labels, color, storageKey }) {
  const [vals, setVals] = usePersisted(storageKey, ["","","",""]);
  const { dark, t } = useTheme();
  const update = (i, v) => { const n = [...vals]; n[i] = v; setVals(n); };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", marginBottom: "16px" }}>
      {labels.map((lbl, i) => (
        <div key={i}>
          <div style={{
            background: color + (dark ? "33" : "22"),
            borderTop: `3px solid ${color}`,
            borderLeft: `1px solid ${color}33`,
            borderRight: `1px solid ${color}33`,
            padding: "7px 10px",
            fontFamily: "'Courier New',monospace",
            fontSize: "0.6rem",
            color: color,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}>{lbl}</div>
          <textarea
            value={vals[i]}
            onChange={e => update(i, e.target.value)}
            placeholder="..."
            style={{
              width: "100%", minHeight: "90px",
              border: `1px solid ${color}33`, borderTop: "none",
              borderRadius: i===2?"0 0 0 8px":i===3?"0 0 8px 0":"0",
              padding: "8px 10px",
              fontFamily: "Georgia,serif", fontSize: "0.8rem",
              color: t.textBody, background: t.surface, resize: "vertical",
              outline: "none", boxSizing: "border-box", lineHeight: 1.6,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function TableBox({ headers, rows = 6, color, colWidths, storageKey }) {
  const [data, setData] = usePersisted(
    storageKey,
    Array.from({ length: rows }, () => Array(headers.length).fill(""))
  );
  const { dark, t } = useTheme();
  const update = (r, c, v) => {
    const n = data.map(row => [...row]);
    n[r][c] = v;
    setData(n);
  };
  const oddBg = dark ? t.sand : "#FAFAF8";
  return (
    <div style={{ marginBottom: "16px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                background: color + (dark ? "33" : "22"),
                borderTop: `3px solid ${color}`,
                border: `1px solid ${color}33`,
                padding: "8px 10px",
                fontFamily: "'Courier New',monospace",
                fontSize: "0.58rem",
                color: color,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: "bold",
                textAlign: "left",
                width: colWidths ? colWidths[i] : undefined,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c} style={{ border: `1px solid ${color}22`, padding: 0 }}>
                  <input
                    value={cell}
                    onChange={e => update(r, c, e.target.value)}
                    style={{
                      width: "100%", border: "none", outline: "none",
                      padding: "9px 10px",
                      fontFamily: "Georgia,serif", fontSize: "0.8rem",
                      color: t.textBody,
                      background: r % 2 === 0 ? t.surface : oddBg,
                      boxSizing: "border-box",
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StoryboardGrid({ color, storageKey }) {
  const frames = [
    "Life Before","The Problem","Discovery","First Use",
    "Core Value","The Aha","Transformation","Telling a Friend"
  ];
  const [notes, setNotes] = usePersisted(storageKey, Array(8).fill(""));
  const { dark, t } = useTheme();
  const update = (i, v) => { const n = [...notes]; n[i] = v; setNotes(n); };
  const sketchBg = dark ? t.sand : "#FAFAFA";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
      {frames.map((f, i) => (
        <div key={i} style={{ border: `2px solid ${color}33`, borderRadius: "10px", overflow: "hidden" }}>
          <div style={{
            background: color + (dark ? "30" : "15"),
            padding: "6px 10px",
            fontFamily: "'Courier New',monospace",
            fontSize: "0.55rem", color: color,
            letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: "bold",
            borderBottom: `1px solid ${color}22`,
          }}>Frame {i + 1} · {f}</div>
          <div style={{
            height: "60px", background: sketchBg,
            display: "flex", alignItems: "center", justifyContent: "center",
            borderBottom: `1px solid ${color}22`,
          }}>
            <span style={{ fontSize: "1.6rem", opacity: 0.2, color: t.textMuted }}>✎</span>
          </div>
          <input
            value={notes[i]}
            onChange={e => update(i, e.target.value)}
            placeholder="Note..."
            style={{
              width: "100%", border: "none", outline: "none",
              padding: "7px 10px",
              fontFamily: "Georgia,serif", fontSize: "0.75rem",
              color: t.textBody, background: t.surface, boxSizing: "border-box",
            }}
          />
        </div>
      ))}
    </div>
  );
}
