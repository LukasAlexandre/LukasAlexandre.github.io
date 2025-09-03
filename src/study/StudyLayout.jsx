import Header from '@/components/Header.jsx'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { technologies } from './techData.js'
import { motion, AnimatePresence } from 'framer-motion'
import StudySubnav from './StudySubnav.jsx'

export default function StudyLayout({ language, setLanguage }) {
  const { pathname } = useLocation()
  const activeTech = technologies.find(t=> pathname.endsWith(t.slug))
  // Force custom per-page theme (disable global dark/light toggle inside study section)
  useEffect(()=>{
    const root = document.documentElement
    const hadDark = root.classList.contains('dark')
    if (hadDark) root.classList.remove('dark')
    // Do not restore dark mode on unmount to keep user's preference cleared for study section only
    // If you want to restore, uncomment below:
    // return () => { if (hadDark) root.classList.add('dark') }
  },[])
  return (
  <div className={`min-h-screen study-bg ${activeTech?activeTech.bg:''} ${activeTech?.slug==='html'?'theme-html':''} text-foreground pt-0 flex flex-col transition-colors duration-500`}>    
      <Header language={language} setLanguage={setLanguage} />
  <StudySubnav />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-10}}
              transition={{duration:0.35, ease:'easeOut'}}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
