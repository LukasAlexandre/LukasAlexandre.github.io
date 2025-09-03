import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Globe, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { translations } from '@/lib/i18n.js'

export default function Header({ language, setLanguage }) {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const currentLang = translations[language]

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const handleStudyInClick = (targetId) => {
    const btn = document.getElementById(targetId)
    if (!btn) return
    btn.classList.add('animate__bounceOut')
    btn.addEventListener('animationend', () => {
      navigate('/study-in')
    }, { once: true })
  }

  const goHomeOrScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Delay scroll until home loaded
      setTimeout(() => {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div initial={{ opacity:0, x:-20}} animate={{opacity:1,x:0}} className="font-bold text-xl gradient-text">Lukas</motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={()=>goHomeOrScroll('home')} className="nav-link text-sm font-medium hover:text-emerald-400 focus:outline-none">Home</button>
            <button onClick={()=>navigate('/projects')} className="nav-link text-sm font-medium hover:text-emerald-400 focus:outline-none">{currentLang.nav.projects}</button>
            <button id="studyin-desktop" onClick={()=>handleStudyInClick('studyin-desktop')} className="nav-link text-sm font-medium gradient-animate animate__animated rainbow-hover focus:outline-none">Study-in</button>
          </div>
          <div className="flex items-center space-x-4">
            {/* Hide global theme toggle inside study section (each page has its own theme) */}
            {!location.pathname.startsWith('/study-in') && (
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="p-2">
              <Globe className="h-4 w-4" />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={()=>setIsMenuOpen(p=>!p)} className="md:hidden p-2">
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-2">
              <button onClick={()=>goHomeOrScroll('home')} className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-emerald-400 hover:bg-muted rounded-md">Home</button>
              <button onClick={()=>{navigate('/projects'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-emerald-400 hover:bg-muted rounded-md">{currentLang.nav.projects}</button>
              <button id="studyin-mobile" onClick={()=>handleStudyInClick('studyin-mobile')} className="block w-full text-left px-3 py-2 text-sm font-medium gradient-animate hover:bg-muted rounded-md animate__animated rainbow-hover">Study-in</button>
              {/* Language toggle kept; theme toggle intentionally omitted on study pages */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}