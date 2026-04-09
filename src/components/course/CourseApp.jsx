import { useTheme } from '../../ThemeContext';
import { usePersisted } from '../../hooks/usePersisted';
import PhaseChip from '../PhaseChip';
import HomePage from './HomePage';
import PhaseView from './PhaseView';

function HomeIcon() {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="currentColor">
      <path d="M7.5 1.5L1.5 6.5V13H5.5V9.5H9.5V13H13.5V6.5L7.5 1.5Z" strokeLinejoin="round"/>
    </svg>
  );
}

export default function CourseApp({ onWorkbook, onToggleDark }) {
  const [view, setView] = usePersisted('dtc-view', 'home');
  const [progress, setProgress] = usePersisted('dtc-progress', 0);
  const { dark, t, phases } = useTheme();

  const goPhase = (id) => {
    setView(id);
    if (id > progress) setProgress(id);
    window.scrollTo?.(0, 0);
  };
  const goHome = () => { setView("home"); window.scrollTo?.(0, 0); };

  const ctrlBtn = {
    display:"flex", alignItems:"center", gap:"4px",
    padding:"5px 10px", borderRadius:"20px",
    border:`1.5px solid ${t.border}`, background:t.surface,
    fontFamily:"'Courier New',monospace", fontSize:"0.6rem", fontWeight:"bold",
    letterSpacing:"0.05em", textTransform:"uppercase",
    color:t.textMuted, cursor:"pointer", flexShrink:0,
  };

  return (
    <div style={{maxWidth:"680px", margin:"0 auto", fontFamily:"Georgia,serif", background:t.pageBg, minHeight:"100vh"}}>
      {/* ── Sticky 2-row nav ── */}
      <div style={{
        position:"sticky", top:0, zIndex:100,
        background:t.navBg, borderBottom:`2px solid ${t.borderLight}`,
      }}>
        {/* Row 1: home + phase chips */}
        <div style={{
          padding:"8px 14px",
          display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap",
        }}>
          <button onClick={goHome} title="Home" style={{
            display:"flex", alignItems:"center", justifyContent:"center",
            width:30, height:30, borderRadius:"8px",
            border:`1.5px solid ${t.border}`, background:t.surface,
            color:t.textMuted, cursor:"pointer", flexShrink:0,
            padding:0,
          }}>
            <HomeIcon/>
          </button>
          {phases.map((p, i) => (
            <PhaseChip key={i} phase={i} active={view === i} done={progress > i && view !== i} onClick={() => goPhase(i)}/>
          ))}
        </div>
        {/* Row 2: controls right-aligned */}
        <div style={{
          padding:"4px 14px 8px",
          display:"flex", justifyContent:"flex-end", alignItems:"center", gap:"6px",
          borderTop:`1px solid ${t.borderLight}`,
        }}>
          <button onClick={onToggleDark} style={{...ctrlBtn, padding:"5px 8px", fontSize:"0.9rem"}}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={onWorkbook} style={ctrlBtn}>
            ✏️ <span>Workbook</span>
          </button>
        </div>
      </div>

      {view === "home"
        ? <HomePage onStart={() => goPhase(0)} onPhase={goPhase} progress={progress}/>
        : <PhaseView
            phaseId={view}
            onNext={() => view < 5 ? goPhase(view + 1) : goHome()}
            onPrev={() => view > 0 ? goPhase(view - 1) : goHome()}
            onHome={goHome}
          />
      }
    </div>
  );
}
