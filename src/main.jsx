import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import 'animate.css'
import App from './App.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import StudyIn from './StudyIn.jsx'
import { translations } from '@/lib/i18n.js'

function AppRouter() {
  const [language, setLanguage] = useState('pt')
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectsPage language={language} setLanguage={setLanguage} />} />
  <Route path="/study-in/*" element={<StudyIn language={language} setLanguage={setLanguage} />} />
    </Routes>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
)
