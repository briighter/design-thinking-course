import { useState, useEffect } from "react";

// ── Color palette ─────────────────────────────────────────────────────────
const P = {
  coral:  "#F4623A",
  sky:    "#2DAAE2",
  sun:    "#F7C325",
  mint:   "#3AB795",
  plum:   "#8B4B8C",
  navy:   "#1B2A4A",
  cream:  "#FBF8F2",
  sand:   "#F0EAD8",
  white:  "#FFFFFF",
  ink:    "#1A1A2E",
  gray:   "#6B7280",
  lgray:  "#E8E4DC",
  border: "#E0DBD1",
};

const PHASES = [
  { id:0, num:"00", label:"Opportunity Tuning", short:"Tune",      color:P.plum,  bg:"#F5EEF8", accent:"#D7BDE2" },
  { id:1, num:"01", label:"Empathize",          short:"Empathize", color:P.coral, bg:"#FEF0EB", accent:"#F4C9BC" },
  { id:2, num:"02", label:"Define",             short:"Define",    color:P.sky,   bg:"#EAF6FD", accent:"#AED6F1" },
  { id:3, num:"03", label:"Ideate",             short:"Ideate",    color:P.sun,   bg:"#FEFBE8", accent:"#F9E79F" },
  { id:4, num:"04", label:"Prototype",          short:"Proto",     color:P.mint,  bg:"#EAF8F4", accent:"#A9DFBF" },
  { id:5, num:"05", label:"Test & Launch",      short:"Test",      color:P.navy,  bg:"#EBF0F8", accent:"#AEC6E8" },
];

// ── Phase illustrations ───────────────────────────────────────────────────

const PhaseIllu = ({ id, size = 80 }) => {
  const p = PHASES[id];
  const c = p.color;
  if (id === 0) return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="36" fill={p.bg}/>
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
      <circle cx="40" cy="40" r="36" fill={p.bg}/>
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
      <circle cx="40" cy="40" r="36" fill={p.bg}/>
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
      <circle cx="40" cy="40" r="36" fill={p.bg}/>
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
      <circle cx="40" cy="40" r="36" fill={p.bg}/>
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
      <circle cx="40" cy="40" r="36" fill={p.bg}/>
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
  return <svg width={size} height={size} viewBox="0 0 80 80"><circle cx="40" cy="40" r="36" fill={p.bg}/></svg>;
};

// ── localStorage persistence hook ─────────────────────────────────────────

function usePersisted(key, defaultValue) {
  const [val, setVal] = useState(() => {
    if (!key) return defaultValue;
    try {
      const s = localStorage.getItem(key);
      return s !== null ? JSON.parse(s) : defaultValue;
    } catch { return defaultValue; }
  });
  useEffect(() => {
    if (!key) return;
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  }, [key, val]);
  return [val, setVal];
}

// ── Workspace input components ────────────────────────────────────────────

function WriteBox({ label, lines = 5, color, storageKey }) {
  const [val, setVal] = usePersisted(storageKey, "");
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{
        background: color + "18",
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
          color: P.ink,
          background: "white",
          resize: "vertical",
          lineHeight: 1.7,
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

function TwoColBox({ label1, label2, color, height = 120, storageKey }) {
  const [vals, setVals] = usePersisted(storageKey, ["", ""]);
  const update = (i, v) => { const n = [...vals]; n[i] = v; setVals(n); };
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", gap: "2px" }}>
        {[[label1, 0], [label2, 1]].map(([lbl, idx]) => (
          <div key={idx} style={{ flex: 1 }}>
            <div style={{
              background: color + "18",
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
                color: P.ink,
                background: "white",
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

function FourQuadrant({ labels, color, storageKey }) {
  const [vals, setVals] = usePersisted(storageKey, ["","","",""]);
  const update = (i, v) => { const n = [...vals]; n[i] = v; setVals(n); };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", marginBottom: "16px" }}>
      {labels.map((lbl, i) => (
        <div key={i}>
          <div style={{
            background: color + "22",
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
              color: P.ink, background: "white", resize: "vertical",
              outline: "none", boxSizing: "border-box", lineHeight: 1.6,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function TableBox({ headers, rows = 6, color, colWidths, storageKey }) {
  const [data, setData] = usePersisted(
    storageKey,
    Array.from({ length: rows }, () => Array(headers.length).fill(""))
  );
  const update = (r, c, v) => {
    const n = data.map(row => [...row]);
    n[r][c] = v;
    setData(n);
  };
  return (
    <div style={{ marginBottom: "16px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                background: color + "22",
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
                      color: P.ink, background: r % 2 === 0 ? "white" : "#FAFAF8",
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

function StoryboardGrid({ color, storageKey }) {
  const frames = [
    "Life Before","The Problem","Discovery","First Use",
    "Core Value","The Aha","Transformation","Telling a Friend"
  ];
  const [notes, setNotes] = usePersisted(storageKey, Array(8).fill(""));
  const update = (i, v) => { const n = [...notes]; n[i] = v; setNotes(n); };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
      {frames.map((f, i) => (
        <div key={i} style={{ border: `2px solid ${color}33`, borderRadius: "10px", overflow: "hidden" }}>
          <div style={{
            background: color + "15",
            padding: "6px 10px",
            fontFamily: "'Courier New',monospace",
            fontSize: "0.55rem", color: color,
            letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: "bold",
            borderBottom: `1px solid ${color}22`,
          }}>Frame {i + 1} · {f}</div>
          <div style={{
            height: "60px", background: "#FAFAFA",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderBottom: `1px solid ${color}22`,
          }}>
            <span style={{ fontSize: "1.6rem", opacity: 0.2 }}>✎</span>
          </div>
          <input
            value={notes[i]}
            onChange={e => update(i, e.target.value)}
            placeholder="Note..."
            style={{
              width: "100%", border: "none", outline: "none",
              padding: "7px 10px",
              fontFamily: "Georgia,serif", fontSize: "0.75rem",
              color: P.ink, background: "white", boxSizing: "border-box",
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ── Exercise data ─────────────────────────────────────────────────────────

const EXERCISES = {
  0: [
    {
      num: "00.1", title: "Pain Language Hunt", time: "45 min",
      desc: "Pick 3 communities in domains you're curious about. Spend 45 minutes tuned only to pain language. Capture every complaint, workaround, and 'why can't it just' you find.",
      color: P.plum, bg: "#F5EEF8",
      workspace: ({ kp }) => (
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Pain Phrase Heard","Source / Where Found","Problem Hypothesis"]} rows={8} color={P.plum} colWidths={["35%","30%","35%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Top 3 patterns I noticed" lines={3} color={P.plum}/>
        </>
      ),
    },
    {
      num: "00.2", title: "Workaround Diary", time: "7 days",
      desc: "For 7 days, every time you do something manually that should be automated, write it down. Which workaround appears most often? That frequency is your signal.",
      color: P.plum, bg: "#F5EEF8",
      workspace: ({ kp }) => (
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Day","Manual Task","How Often","Potential Solution"]} rows={10} color={P.plum} colWidths={["10%","35%","20%","35%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Most frequent workaround & what it signals" lines={3} color={P.plum}/>
        </>
      ),
    },
    {
      num: "00.3", title: "The 5 Lenses in Practice", time: "60 min",
      desc: "For each of the 5 lenses, write what you look for and your specific observations. At least 2 observations per lens before moving to Phase 01.",
      color: P.plum, bg: "#F5EEF8",
      workspace: ({ kp }) => (
        <>
          {["Friction (Pain Language)","Stranger (Question Normal)","Leading Edge (Live in Future)","Workaround Audit","Intersection (Domain Collision)"].map((lens,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i}`} label={`Lens ${i+1} · ${lens}`} lines={3} color={P.plum}/>
          ))}
        </>
      ),
    },
    {
      num: "00.4", title: "Alien Audit", time: "30 min",
      desc: "Pick any industry or daily process. Write 10 things that would seem completely insane to someone seeing it for the first time. Each absurdity is a potential opportunity.",
      color: P.plum, bg: "#F5EEF8",
      workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Industry or process I'm auditing" lines={1} color={P.plum}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","The Absurdity","Why We Accept It","Opportunity Hidden Inside"]} rows={10} color={P.plum} colWidths={["6%","30%","30%","34%"]}/>
        </>
      ),
    },
    {
      num: "00.5", title: "Edge User Interview", time: "60 min",
      desc: "Find someone 3–5 years ahead of the mainstream in a domain you care about. Ask: 'What tools are you using that nobody else is? What's still missing? What do you do manually?'",
      color: P.plum, bg: "#F5EEF8",
      workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Who I interviewed & their context" lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-1`} label="Tools they use that nobody else does" lines={3} color={P.plum}/>
          <WriteBox storageKey={`${kp}-2`} label="What's still missing in their world" lines={3} color={P.plum}/>
          <WriteBox storageKey={`${kp}-3`} label="What they still do manually" lines={3} color={P.plum}/>
        </>
      ),
    },
    {
      num: "00.6", title: "Opportunity Hypothesis", time: "30 min",
      desc: "Write: 'I believe [type of person] has a problem with [situation] because [evidence]. Nobody has solved this well because [observation].' This is your entry to Phase 01.",
      color: P.plum, bg: "#F5EEF8",
      workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="I believe [type of person]..." lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-1`} label="...has a problem with [specific situation]..." lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-2`} label="...because [evidence from my research]..." lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-3`} label="Nobody has solved this well because [observation]" lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-4`} label="Full hypothesis (combine above into one sentence)" lines={3} color={P.plum}/>
        </>
      ),
    },
  ],
  1: [
    { num:"01.1", title:"The 5 Why's Interview", time:"60 min", desc:"Interview one person for 30 minutes. For every answer they give, ask 'why?' five times. Document the chain. The fifth why is almost always the real problem.", color:P.coral, bg:"#FEF0EB",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="Who I interviewed & their context" lines={2} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="Initial statement (what they said first)" lines={2} color={P.coral}/>
          {["Why #1","Why #2","Why #3","Why #4","Why #5 (the real problem)"].map((l,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i+2}`} label={l} lines={2} color={P.coral}/>
          ))}
          <WriteBox storageKey={`${kp}-7`} label="Key insight from this chain" lines={2} color={P.coral}/>
        </>
      )
    },
    { num:"01.2", title:"Fly on the Wall", time:"45 min", desc:"Observe someone completing a task without speaking. Write 10 raw observations: behaviors, frustrations, workarounds, body language. Don't interpret — just capture.", color:P.coral, bg:"#FEF0EB",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="Context — who, what task, environment" lines={2} color={P.coral}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","Raw Observation","Friction Level (1–10)","Workaround?"]} rows={10} color={P.coral} colWidths={["6%","50%","22%","22%"]}/>
          <WriteBox storageKey={`${kp}-2`} label="Most surprising observation" lines={2} color={P.coral}/>
        </>
      )
    },
    { num:"01.3", title:"Build an Empathy Map", time:"30 min", desc:"Fill in what your user Says, Thinks, Does, and Feels using your research. Then add Pains and Gains below.", color:P.coral, bg:"#FEF0EB",
      workspace:({ kp })=>(
        <>
          <FourQuadrant storageKey={`${kp}-0`} labels={["Says (direct quotes)","Thinks (internal beliefs)","Does (behaviors & actions)","Feels (emotions & states)"]} color={P.coral}/>
          <TwoColBox storageKey={`${kp}-1`} label1="Pains (frustrations, fears)" label2="Gains (goals, desires, wins)" color={P.coral} height={100}/>
        </>
      )
    },
    { num:"01.4", title:"Extreme User Interview", time:"90 min", desc:"Find someone who experiences the problem intensely — a power user or someone completely excluded by existing solutions. Edge cases reveal what average users hide.", color:P.coral, bg:"#FEF0EB",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="Who this person is & why they are 'extreme'" lines={2} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="What they do differently from average users" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-2`} label="What existing solutions completely fail them" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-3`} label="Key insights not found in average user research" lines={3} color={P.coral}/>
        </>
      )
    },
    { num:"01.5", title:"Immersion Challenge", time:"Full day", desc:"For one day, live as your target user. Use only the tools they use. Navigate the friction they face. Write a reflection: what surprised you most?", color:P.coral, bg:"#FEF0EB",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="What I did to immerse (tools used, tasks attempted)" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="Moments of friction I experienced" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-2`} label="What surprised me most" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-3`} label="What I would fix first if I could" lines={2} color={P.coral}/>
        </>
      )
    },
    { num:"01.6", title:"Pattern Clustering", time:"45 min", desc:"Write each key observation on a sticky note. Group similar notes. Name each cluster. The cluster that appears most often is your signal pointing toward the real problem.", color:P.coral, bg:"#FEF0EB",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="Cluster 1 — Name & what it suggests" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="Cluster 2 — Name & what it suggests" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-2`} label="Cluster 3 — Name & what it suggests" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-3`} label="The most frequent cluster & what it means for my product" lines={3} color={P.coral}/>
        </>
      )
    },
  ],
  2: [
    { num:"02.1", title:"Write 5 POV Statements", time:"45 min", desc:"Using your empathy research, write 5 different POV statements. [User] needs [need] because [insight]. Each emphasizes a different insight. Which one makes you lean forward?", color:P.sky, bg:"#EAF6FD",
      workspace:({ kp })=>(
        <>
          {[1,2,3,4,5].map(n=>(
            <WriteBox key={n} storageKey={`${kp}-${n-1}`} label={`POV ${n} — [User] needs [need] because [insight]`} lines={2} color={P.sky}/>
          ))}
          <WriteBox storageKey={`${kp}-5`} label="The one I chose & why it resonates" lines={2} color={P.sky}/>
        </>
      )
    },
    { num:"02.2", title:'"How Might We" Sprint', time:"30 min", desc:"Take your best POV. Generate 20 HMW questions in 10 minutes. No filtering. Then circle your top 3. Those questions drive your entire ideation session.", color:P.sky, bg:"#EAF6FD",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="My POV statement going in" lines={2} color={P.sky}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","How Might We...","★ Top 3?"]} rows={20} color={P.sky} colWidths={["8%","78%","14%"]}/>
          <WriteBox storageKey={`${kp}-2`} label="My top 3 HMW questions & why" lines={3} color={P.sky}/>
        </>
      )
    },
    { num:"02.3", title:"Journey Map Audit", time:"60 min", desc:"Draw your user's end-to-end journey. Rate each step 1–10 for friction. Circle the top 3 pain points. Your product opportunity lives at those friction peaks.", color:P.sky, bg:"#EAF6FD",
      workspace:({ kp })=>(
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Step","What User Does","Emotion","Friction (1–10)","Workaround Used"]} rows={10} color={P.sky} colWidths={["6%","26%","20%","16%","32%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Top 3 friction peaks & why they matter" lines={3} color={P.sky}/>
          <WriteBox storageKey={`${kp}-2`} label="Existing workarounds at each peak (= my competition)" lines={3} color={P.sky}/>
        </>
      )
    },
    { num:"02.4", title:"Problem Reframe Challenge", time:"30 min", desc:"Take your POV and rewrite it 10 ways — zoom in, zoom out, flip it, look upstream, downstream. Which reframe reveals a more urgent or larger problem?", color:P.sky, bg:"#EAF6FD",
      workspace:({ kp })=>(
        <>
          {["Zoom in (narrower)","Zoom out (bigger)","Flip it (opposite)","Upstream (root cause)","Downstream (consequence)","From user's boss perspective","From user's customer perspective","5 years from now","With unlimited budget","With zero budget"].map((l,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i}`} label={`Reframe ${i+1} — ${l}`} lines={1} color={P.sky}/>
          ))}
          <WriteBox storageKey={`${kp}-10`} label="Best reframe & what it reveals" lines={2} color={P.sky}/>
        </>
      )
    },
    { num:"02.5", title:"Existing Solutions Audit", time:"45 min", desc:"List every way your user currently solves this problem: apps, spreadsheets, workarounds, ignoring it. Each is a competitor. What do they all miss?", color:P.sky, bg:"#EAF6FD",
      workspace:({ kp })=>(
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Existing Solution","What It Does Well","What It Misses","User's Frustration With It"]} rows={8} color={P.sky} colWidths={["22%","26%","26%","26%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="The gap ALL existing solutions share — this is my opportunity" lines={3} color={P.sky}/>
        </>
      )
    },
    { num:"02.6", title:"Market-Size Stress Test", time:"45 min", desc:"How many people share this problem? What are they paying today? Multiply. Is this a $100K or $100M market? Your ambition level should match the evidence.", color:P.sky, bg:"#EAF6FD",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="Number of people with this problem (estimate + source)" lines={2} color={P.sky}/>
          <WriteBox storageKey={`${kp}-1`} label="What they pay today (apps, time, hiring someone, doing manually)" lines={2} color={P.sky}/>
          <WriteBox storageKey={`${kp}-2`} label="Annual market size estimate (people × spend)" lines={2} color={P.sky}/>
          <WriteBox storageKey={`${kp}-3`} label="My realistic slice of that market in year 1 / year 3" lines={2} color={P.sky}/>
        </>
      )
    },
  ],
  3: [
    { num:"03.1", title:"Crazy 8s", time:"20 min", desc:"Fold paper into 8 panels. 8-minute timer. One different concept per panel for your top HMW. No text — rough visuals only. Speed prevents self-censorship.", color:P.sun, bg:"#FEFBE8",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="My HMW question going in" lines={1} color={P.sun}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"16px"}}>
            {[1,2,3,4,5,6,7,8].map(n=>(
              <div key={n} style={{border:`2px solid ${P.sun}44`,borderRadius:"10px",padding:"8px",minHeight:"80px",background:"white",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <span style={{fontFamily:"'Courier New',monospace",fontSize:"0.55rem",color:P.sun,fontWeight:"bold"}}>CONCEPT {n}</span>
                <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:P.sun,opacity:0.2,fontSize:"1.4rem"}}>✎</div>
              </div>
            ))}
          </div>
          <WriteBox storageKey={`${kp}-1`} label="Which 2 surprised me most & what I'd combine" lines={3} color={P.sun}/>
        </>
      )
    },
    { num:"03.2", title:"50 Ideas Sprint", time:"40 min", desc:"Write 50 different ideas for your HMW. Wild, stupid, obvious, impossible — all welcome. The remarkable ideas only appear after you exhaust the ordinary first 20.", color:P.sun, bg:"#FEFBE8",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="My HMW question" lines={1} color={P.sun}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","Idea","#","Idea"]} rows={25} color={P.sun} colWidths={["5%","45%","5%","45%"]}/>
          <WriteBox storageKey={`${kp}-2`} label="Top 5 ideas that surprised me (circle the ones that came after #20)" lines={3} color={P.sun}/>
        </>
      )
    },
    { num:"03.3", title:"Reverse Brainstorm", time:"30 min", desc:"Ask: 'How would I make this problem as bad as possible?' Write 20 terrible ideas. Then flip each one. Best concepts often hide in the opposites.", color:P.sun, bg:"#FEFBE8",
      workspace:({ kp })=>(
        <>
          <TwoColBox storageKey={`${kp}-0`} label1="Terrible Ideas (make it worse)" label2="Flipped — Turn Each Around" color={P.sun} height={300}/>
          <WriteBox storageKey={`${kp}-1`} label="Best insight from the flip exercise" lines={2} color={P.sun}/>
        </>
      )
    },
    { num:"03.4", title:"Analogous World Tour", time:"45 min", desc:"Pick 5 unrelated industries. For each, write how they solve a similar problem. What would Amazon, Disney, the military, a hospital, and a pizza chain do?", color:P.sun, bg:"#FEFBE8",
      workspace:({ kp })=>(
        <>
          {["Amazon / Retail","Disney / Experience Design","Military / Operations","Hospital / Patient Flow","Pizza Chain / Speed & Scale"].map((ind,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i}`} label={`${ind} — How they'd solve my problem`} lines={2} color={P.sun}/>
          ))}
          <WriteBox storageKey={`${kp}-5`} label="Elements I'm borrowing from other industries" lines={3} color={P.sun}/>
        </>
      )
    },
    { num:"03.5", title:"DFV Scoring", time:"30 min", desc:"Take your top 10 ideas. Rate each on Desirability, Feasibility, and Viability (1–10). Highest combined score moves to prototype.", color:P.sun, bg:"#FEFBE8",
      workspace:({ kp })=>(
        <TableBox storageKey={`${kp}-0`} headers={["Idea","Desirability /10","Feasibility /10","Viability /10","Total /30"]} rows={10} color={P.sun} colWidths={["40%","15%","15%","15%","15%"]}/>
      )
    },
    { num:"03.6", title:"Concept Poster", time:"60 min", desc:"For your top 2 ideas, create a one-page concept poster: sketch, target user, core benefit, and one empathy quote that proves the need.", color:P.sun, bg:"#FEFBE8",
      workspace:({ kp })=>(
        <>
          {[1,2].map(n=>(
            <div key={n} style={{marginBottom:16}}>
              <div style={{background:P.sun+"22",borderTop:`3px solid ${P.sun}`,padding:"8px 12px",fontFamily:"'Courier New',monospace",fontSize:"0.6rem",color:P.sun,fontWeight:"bold",letterSpacing:"0.1em",textTransform:"uppercase"}}>Concept Poster {n}</div>
              <div style={{border:`1px solid ${P.sun}33`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:12,background:"white"}}>
                <WriteBox storageKey={`${kp}-${(n-1)*4+0}`} label="Concept name & sketch description" lines={2} color={P.sun}/>
                <WriteBox storageKey={`${kp}-${(n-1)*4+1}`} label="Target user" lines={1} color={P.sun}/>
                <WriteBox storageKey={`${kp}-${(n-1)*4+2}`} label="Core benefit" lines={1} color={P.sun}/>
                <WriteBox storageKey={`${kp}-${(n-1)*4+3}`} label="Empathy quote that proves the need" lines={2} color={P.sun}/>
              </div>
            </div>
          ))}
        </>
      )
    },
  ],
  4: [
    { num:"04.1", title:"Assumption Inventory", time:"30 min", desc:"List every assumption your business rests on. Rate by Impact (H/M/L) and Certainty (H/M/L). High-impact + low-certainty = prototype targets.", color:P.mint, bg:"#EAF8F4",
      workspace:({ kp })=>(
        <TableBox storageKey={`${kp}-0`} headers={["Assumption","Impact","Certainty","Test How?"]} rows={10} color={P.mint} colWidths={["46%","14%","14%","26%"]}/>
      )
    },
    { num:"04.2", title:"5-Minute Paper Prototype", time:"20 min", desc:"Set a 5-minute timer. Draw every screen or touchpoint on paper. Show to a potential user without explanation. Watch them 'use' it. Note every pause and confusion.", color:P.mint, bg:"#EAF8F4",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="Question I'm testing with this prototype" lines={1} color={P.mint}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:16}}>
            {["Screen 1","Screen 2","Screen 3","Screen 4"].map(s=>(
              <div key={s} style={{border:`2px solid ${P.mint}44`,borderRadius:"10px",minHeight:"90px",background:"white",display:"flex",flexDirection:"column",padding:"8px"}}>
                <span style={{fontFamily:"'Courier New',monospace",fontSize:"0.55rem",color:P.mint,fontWeight:"bold",marginBottom:4}}>{s}</span>
                <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:P.mint,opacity:0.2,fontSize:"1.4rem"}}>✎</div>
              </div>
            ))}
          </div>
          <WriteBox storageKey={`${kp}-1`} label="User reactions — every pause, confusion, surprise" lines={4} color={P.mint}/>
          <WriteBox storageKey={`${kp}-2`} label="What I learned vs. what I assumed" lines={3} color={P.mint}/>
        </>
      )
    },
    { num:"04.3", title:"Storyboard Your Story", time:"45 min", desc:"Draw 8 frames: user's life before → discovers your product → first use → key value moment → transformation. This is your pitch deck and product spec in one.", color:P.mint, bg:"#EAF8F4",
      workspace:({ kp })=>(
        <StoryboardGrid storageKey={`${kp}-0`} color={P.mint}/>
      )
    },
    { num:"04.4", title:"Concierge Experiment", time:"2–3 days", desc:"Design the smallest manual version of your product. Deliver it to one real person this week. Document every observation. What did you learn that you couldn't have assumed?", color:P.mint, bg:"#EAF8F4",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="My concierge plan — what I'll do manually, for whom, how" lines={4} color={P.mint}/>
          <WriteBox storageKey={`${kp}-1`} label="What happened — step by step" lines={4} color={P.mint}/>
          <WriteBox storageKey={`${kp}-2`} label="What I learned that I couldn't have assumed" lines={3} color={P.mint}/>
          <WriteBox storageKey={`${kp}-3`} label="What I'll change in the next iteration" lines={2} color={P.mint}/>
        </>
      )
    },
    { num:"04.5", title:"Clickable Wireframe Test", time:"3 hrs", desc:"Build 3–5 core screens in Figma or Keynote. Share with 3 users via screen recording. Watch where they pause, click wrong, or look confused.", color:P.mint, bg:"#EAF8F4",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="Screens I built & the flow they cover" lines={2} color={P.mint}/>
          {[1,2,3].map(n=>(
            <WriteBox key={n} storageKey={`${kp}-${n}`} label={`User ${n} — observations, pauses, confusions`} lines={3} color={P.mint}/>
          ))}
          <WriteBox storageKey={`${kp}-4`} label="Top 5 friction points across all 3 users" lines={3} color={P.mint}/>
        </>
      )
    },
    { num:"04.6", title:"Fake Door Test", time:"1 day", desc:"Build a landing page before your product exists. Capture emails. Drive 100 visitors. If 10%+ sign up, you have real signal. Under 2%? Problem definition needs revisiting.", color:P.mint, bg:"#EAF8F4",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="My headline & core value proposition" lines={2} color={P.mint}/>
          <WriteBox storageKey={`${kp}-1`} label="How I drove traffic (source & method)" lines={2} color={P.mint}/>
          <WriteBox storageKey={`${kp}-2`} label="Results — visitors, signups, signup rate" lines={2} color={P.mint}/>
          <WriteBox storageKey={`${kp}-3`} label="What I conclude from the data" lines={3} color={P.mint}/>
        </>
      )
    },
  ],
  5: [
    { num:"05.1", title:"3-Person Usability Test", time:"3–4 hrs", desc:"Run your prototype in front of 3 real users with Think-Aloud Protocol. Three users reveal 85% of usability issues. Write a Top 5 Findings report after all sessions.", color:P.navy, bg:"#EBF0F8",
      workspace:({ kp })=>(
        <>
          {[1,2,3].map(n=>(
            <WriteBox key={n} storageKey={`${kp}-${n-1}`} label={`User ${n} — observations & key moments`} lines={4} color={P.navy}/>
          ))}
          <WriteBox storageKey={`${kp}-3`} label="Top 5 synthesis findings across all sessions" lines={5} color={P.navy}/>
        </>
      )
    },
    { num:"05.2", title:"North Star Metric", time:"45 min", desc:"What is the ONE metric that proves your product is working? Not revenue — the action that creates revenue. Map all other metrics as inputs or outputs.", color:P.navy, bg:"#EBF0F8",
      workspace:({ kp })=>(
        <>
          <WriteBox storageKey={`${kp}-0`} label="My North Star Metric (the action, not revenue)" lines={2} color={P.navy}/>
          <WriteBox storageKey={`${kp}-1`} label="Why this metric proves real value is being delivered" lines={2} color={P.navy}/>
          <TwoColBox storageKey={`${kp}-2`} label1="Input Metrics (lead to North Star)" label2="Output Metrics (result from North Star)" color={P.navy} height={120}/>
        </>
      )
    },
    { num:"05.3", title:"Feedback Synthesis Grid", time:"30 min", desc:"Organize testing findings: Worked Well vs. Needs Change, crossed with Easy vs. Hard to Fix. Prioritize top-left: needs change + easy to fix.", color:P.navy, bg:"#EBF0F8",
      workspace:({ kp })=>(
        <>
          <FourQuadrant storageKey={`${kp}-0`} labels={["Worked Well","Needs Change (Easy to Fix)","Worked Well (Enhance)","Needs Change (Hard to Fix)"]} color={P.navy}/>
          <WriteBox storageKey={`${kp}-1`} label="My next sprint priorities (from top-left quadrant)" lines={3} color={P.navy}/>
        </>
      )
    },
    { num:"05.4", title:"Launch Ring Plan", time:"60 min", desc:"Plan Ring 1 (10 trusted users), Ring 2 (100 early adopters), Ring 3 (1000+ mainstream). For each: who, measure, learn, gate condition.", color:P.navy, bg:"#EBF0F8",
      workspace:({ kp })=>(
        <>
          {[["Ring 1","10 Trusted Users","Weeks 1–2"],["Ring 2","100 Early Adopters","Months 1–2"],["Ring 3","1000+ Mainstream","Month 3+"]].map(([r,l,t],ri)=>(
            <div key={r} style={{marginBottom:12}}>
              <div style={{background:P.navy+"18",borderTop:`3px solid ${P.navy}`,padding:"8px 12px",fontFamily:"'Courier New',monospace",fontSize:"0.6rem",color:P.navy,fontWeight:"bold",letterSpacing:"0.1em",textTransform:"uppercase"}}>{r} · {l} · {t}</div>
              <div style={{border:`1px solid ${P.navy}33`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:10,background:"white",display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {["Who to target","What to measure","What to learn","Gate condition to advance"].map((f,fi)=>(
                  <WriteBox key={fi} storageKey={`${kp}-${ri*4+fi}`} label={f} lines={2} color={P.navy}/>
                ))}
              </div>
            </div>
          ))}
        </>
      )
    },
    { num:"05.5", title:"Willingness-to-Pay Interview", time:"30 min", desc:"'If this worked perfectly, what would you pay monthly?' + 'At what price would you question quality?' Do with 5 users. You now have a pricing range with evidence.", color:P.navy, bg:"#EBF0F8",
      workspace:({ kp })=>(
        <>
          <TableBox storageKey={`${kp}-0`} headers={["User","Would Pay (monthly)","Too Cheap Threshold","Notes"]} rows={5} color={P.navy} colWidths={["20%","25%","25%","30%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Price range with evidence & my pricing hypothesis" lines={3} color={P.navy}/>
        </>
      )
    },
    { num:"05.6", title:"DT Operating Rhythm", time:"30 min", desc:"Design your post-launch design thinking cadence: weekly, monthly, quarterly. Put it in your calendar today. This is how you build a company that never stops learning.", color:P.navy, bg:"#EBF0F8",
      workspace:({ kp })=>(
        <>
          {[["Weekly","What user feedback came in this week?"],["Monthly","What needs redefining based on data?"],["Quarterly","Are we still solving the right problem?"]].map(([cadence,q],i)=>(
            <WriteBox key={cadence} storageKey={`${kp}-${i}`} label={`${cadence} — ${q}`} lines={3} color={P.navy}/>
          ))}
          <WriteBox storageKey={`${kp}-3`} label="Calendar commitment — specific day/time for each cadence" lines={2} color={P.navy}/>
        </>
      )
    },
  ],
};

// ── Exercise accordion ─────────────────────────────────────────────────────

function WorkbookExercise({ ex, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [done, setDone] = usePersisted(`wb-${ex.num}-done`, false);
  const Workspace = ex.workspace;
  return (
    <div style={{
      border: `2px solid ${open ? ex.color : P.border}`,
      borderRadius: "16px",
      overflow: "hidden",
      marginBottom: "12px",
      transition: "border-color 0.2s",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", gap: "12px",
        padding: "14px 16px", background: open ? ex.bg : "white",
        border: "none", cursor: "pointer", textAlign: "left",
        transition: "background 0.2s",
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: "8px",
          background: ex.color + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontSize: "1rem" }}>{done ? "✅" : "✎"}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
            <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.58rem", color: ex.color, fontWeight: "bold" }}>EX {ex.num}</span>
            <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.58rem", color: P.gray, background: P.sand, padding: "1px 6px", borderRadius: "8px" }}>{ex.time}</span>
          </div>
          <div style={{ fontFamily: "Georgia,serif", fontSize: "0.9rem", fontWeight: "bold", color: P.ink, lineHeight: 1.2 }}>{ex.title}</div>
        </div>
        <div style={{ color: ex.color, fontSize: "0.85rem", flexShrink: 0 }}>{open ? "▲" : "▼"}</div>
      </button>

      {open && (
        <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${ex.color}22` }}>
          <div style={{
            background: ex.bg,
            borderRadius: "10px",
            padding: "12px 14px",
            marginBottom: "16px",
            marginTop: "12px",
            borderLeft: `3px solid ${ex.color}`,
          }}>
            <p style={{ fontFamily: "Georgia,serif", fontSize: "0.83rem", color: "#374151", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{ex.desc}</p>
          </div>
          {Workspace && <Workspace kp={`wb-${ex.num}`} />}
          <button onClick={() => setDone(!done)} style={{
            marginTop: "8px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: `2px solid ${done ? ex.color : P.border}`,
            background: done ? ex.color : "white",
            color: done ? "white" : P.gray,
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

// ── Phase workbook view ───────────────────────────────────────────────────

function PhaseWorkbook({ phaseId, onNext, onPrev, onHome }) {
  const p = PHASES[phaseId];
  const exercises = EXERCISES[phaseId] || [];

  return (
    <div style={{ minHeight: "100vh", background: "white" }}>
      <div style={{
        background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}CC 100%)`,
        padding: "28px 20px 24px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", right: -10, top: -20, fontFamily: "Georgia,serif", fontSize: "130px", fontWeight: "bold", color: "rgba(255,255,255,0.07)", lineHeight: 1, pointerEvents: "none" }}>{p.num}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative", zIndex: 1 }}>
          <PhaseIllu id={phaseId} size={72}/>
          <div>
            <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
              Phase {p.num} Workbook
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "white", margin: "0 0 6px", lineHeight: 1.1, fontWeight: "bold" }}>{p.label}</h2>
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

      <div style={{ padding: "16px 20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `2px solid ${P.sand}` }}>
        <button onClick={onPrev} style={{ padding: "10px 16px", borderRadius: "10px", border: `2px solid ${P.border}`, background: "white", fontFamily: "Georgia,serif", fontSize: "0.85rem", color: P.gray, cursor: "pointer" }}>
          ← {phaseId === 0 ? "Home" : `Phase ${PHASES[phaseId - 1].num}`}
        </button>
        <button onClick={onHome} style={{ padding: "8px 12px", borderRadius: "10px", border: "none", background: P.sand, fontFamily: "'Courier New',monospace", fontSize: "0.6rem", color: P.gray, cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          ◉ Contents
        </button>
        <button onClick={onNext} style={{ padding: "10px 16px", borderRadius: "10px", border: "none", background: p.color, fontFamily: "Georgia,serif", fontSize: "0.85rem", color: "white", cursor: "pointer" }}>
          {phaseId === 5 ? "Complete ✓" : `Phase ${PHASES[phaseId + 1].num} →`}
        </button>
      </div>
    </div>
  );
}

// ── Workbook home ─────────────────────────────────────────────────────────

function WorkbookHome({ onPhase, progress }) {
  return (
    <div style={{ background: P.cream, minHeight: "100vh" }}>
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

      <div style={{ padding: "24px" }}>
        <div style={{ fontFamily: "'Courier New',monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: P.gray, marginBottom: "16px" }}>
          Workbook Contents · Tap any phase to open exercises
        </div>
        {PHASES.map((ph, i) => {
          const exCount = EXERCISES[i]?.length ?? 0;
          return (
            <button key={i} onClick={() => onPhase(i)} style={{
              width: "100%", display: "flex", alignItems: "center", gap: "14px",
              background: "white", border: `2px solid ${progress > i ? ph.color : P.border}`,
              borderRadius: "14px", padding: "14px", cursor: "pointer",
              textAlign: "left", transition: "all 0.2s", marginBottom: "8px",
            }}>
              <PhaseIllu id={i} size={52}/>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                  <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.58rem", color: ph.color, fontWeight: "bold" }}>PHASE {ph.num}</span>
                  <span style={{ fontFamily: "'Courier New',monospace", fontSize: "0.55rem", color: P.gray, background: P.sand, padding: "1px 6px", borderRadius: "8px" }}>{exCount} exercises</span>
                  {progress > i && <span style={{ fontSize: "0.7rem", color: ph.color }}>✓</span>}
                </div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "0.95rem", fontWeight: "bold", color: P.ink }}>{ph.label}</div>
              </div>
              <div style={{ color: ph.color, fontSize: "0.9rem" }}>→</div>
            </button>
          );
        })}
      </div>

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

// ── Nav chip ──────────────────────────────────────────────────────────────

function NavChip({ phase, active, done, onClick }) {
  const p = PHASES[phase];
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: "5px",
      padding: "5px 10px", borderRadius: "20px", border: "none",
      cursor: "pointer",
      fontFamily: "'Courier New',monospace", fontSize: "0.6rem", fontWeight: "bold",
      letterSpacing: "0.04em", textTransform: "uppercase",
      background: active ? p.color : done ? p.bg : "#F0EAD8",
      color: active ? "white" : done ? p.color : P.gray,
      transition: "all 0.2s",
    }}>
      <span style={{ opacity: 0.7 }}>{p.num}</span>
      <span>{p.short}</span>
    </button>
  );
}

// ── Root workbook app ─────────────────────────────────────────────────────

export default function WorkbookApp({ onCourse = () => {}, dark = false, onToggleDark = () => {} }) {
  const [view, setView] = usePersisted('wb-view', 'home');
  const [progress, setProgress] = usePersisted('wb-progress', 0);

  const goPhase = (id) => {
    setView(id);
    if (id > progress) setProgress(id);
    window.scrollTo?.(0, 0);
  };
  const goHome = () => { setView('home'); window.scrollTo?.(0, 0); };

  const navBtnBase = {
    display: "flex", alignItems: "center", gap: "4px",
    padding: "5px 10px", borderRadius: "20px",
    border: "2px solid #E8E4DC", background: "white",
    fontFamily: "'Courier New',monospace", fontSize: "0.6rem", fontWeight: "bold",
    letterSpacing: "0.05em", textTransform: "uppercase",
    color: "#6B7280", cursor: "pointer", flexShrink: 0,
  };

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", fontFamily: "Georgia,serif" }}>
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "white", borderBottom: `2px solid ${P.sand}`,
        padding: "8px 14px",
        display: "flex", alignItems: "center", gap: "5px",
      }}>
        <button onClick={goHome} style={{
          fontFamily: "'Courier New',monospace", fontSize: "0.85rem",
          color: P.gray, background: "none", border: "none",
          cursor: "pointer", marginRight: "2px", padding: "4px", flexShrink: 0,
        }}>✏️</button>
        <div style={{ display: "flex", alignItems: "center", gap: "5px", flexWrap: "wrap", flex: 1 }}>
          {PHASES.map((p, i) => (
            <NavChip key={i} phase={i} active={view === i} done={progress > i && view !== i} onClick={() => goPhase(i)}/>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "6px" }}>
          <button onClick={onToggleDark} style={{ ...navBtnBase, padding: "5px 8px", fontSize: "0.85rem" }}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={onCourse} style={navBtnBase}>
            📘 <span>Course</span>
          </button>
        </div>
      </div>

      {view === 'home'
        ? <WorkbookHome onPhase={goPhase} progress={progress}/>
        : <PhaseWorkbook
            phaseId={view}
            onNext={() => view < 5 ? goPhase(view + 1) : goHome()}
            onPrev={() => view > 0 ? goPhase(view - 1) : goHome()}
            onHome={goHome}
          />
      }
    </div>
  );
}
