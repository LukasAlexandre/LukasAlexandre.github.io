import Header from '@/components/Header.jsx'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { technologies } from './techData.js'
import { motion, AnimatePresence } from 'framer-motion'
import StudySubnav from './StudySubnav.jsx'

export default function StudyLayout({ language, setLanguage }) {
  const { pathname } = useLocation()
  const activeTech = technologies.find(t=> pathname.endsWith(t.slug))
  // Força tema claro customizado para StudyIn
  useEffect(()=>{
    const root = document.documentElement
    if (!root.classList.contains('dark')) root.classList.add('dark')
  },[])

  const isHtml = activeTech?.slug === 'html'
  return (
    <div className={`relative min-h-screen w-full flex flex-col transition-colors duration-500 text-foreground pt-0 dark ${isHtml?'html-theme':'bg-[#0b0e13]'}`}>
      {!isHtml && (
        <>
          <div aria-hidden className="pointer-events-none fixed inset-0 z-0 mix-blend-soft-light opacity-[.22] [background:linear-gradient(0deg,transparent_0,rgba(255,255,255,.04)_1px),linear-gradient(90deg,transparent_0,rgba(255,255,255,.04)_1px)] [background-size:12px_12px]" />
          <div aria-hidden className="fixed inset-0 z-0 bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(99,102,241,.13),transparent),radial-gradient(900px_600px_at_90%_10%,rgba(14,165,233,.13),transparent)]" />
        </>
      )}

      <div className="relative z-10">
        <Header language={language} setLanguage={setLanguage} />
        <StudySubnav />
        <main className="flex-1 w-full">
          <div className={`${isHtml?'w-full max-w-none px-8 sm:px-14 lg:px-40':'max-w-4xl mx-auto'} w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12`}>            
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

      {/* Animação flutuante para badge, se quiser usar */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  )
}
