import { useState, useEffect } from 'react'
import CourseApp from '../design-thinking-course.jsx'
import WorkbookApp from './Workbook.jsx'

export default function App() {
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('dtc-mode') || 'course'; } catch { return 'course'; }
  })
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('dtc-dark') === '1'; } catch { return false; }
  })

  useEffect(() => {
    try { localStorage.setItem('dtc-mode', mode); } catch {}
  }, [mode])

  useEffect(() => {
    try { localStorage.setItem('dtc-dark', dark ? '1' : '0'); } catch {}
  }, [dark])

  const toggleDark = () => setDark(d => !d)

  return (
    <div style={{
      filter: dark ? 'invert(1) hue-rotate(180deg)' : 'none',
      minHeight: '100vh',
    }}>
      {mode === 'course'
        ? <CourseApp
            onWorkbook={() => setMode('workbook')}
            dark={dark}
            onToggleDark={toggleDark}
          />
        : <WorkbookApp
            onCourse={() => setMode('course')}
            dark={dark}
            onToggleDark={toggleDark}
          />
      }
    </div>
  )
}
