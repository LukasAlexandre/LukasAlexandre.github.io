import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import StudyIn from './StudyIn.jsx'

export default function AppRouter() {
  const [language, setLanguage] = useState('pt')
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectsPage language={language} setLanguage={setLanguage} />} />
      <Route path="/study-in/*" element={<StudyIn language={language} setLanguage={setLanguage} />} />
    </Routes>
  )
}
