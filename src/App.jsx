import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import CourseApp from './components/course/CourseApp'
import WorkbookApp from './components/workbook/WorkbookApp'

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
    <ThemeContext.Provider value={{ dark }}>
      {mode === 'course'
        ? <CourseApp
            onWorkbook={() => setMode('workbook')}
            onToggleDark={toggleDark}
          />
        : <WorkbookApp
            onCourse={() => setMode('course')}
            onToggleDark={toggleDark}
          />
      }
    </ThemeContext.Provider>
  )
}
