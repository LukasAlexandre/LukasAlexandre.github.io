
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { technologies } from './techData.js'

export default function StudySubnav() {
  const { pathname } = useLocation()
  const isHtml = pathname.endsWith('/html') || pathname === '/study-in/html'
  const baseStyle = {
    background: 'rgba(18,22,34,0.82)',
    boxShadow: '0 2px 24px 0 rgba(0,0,0,0.13)',
    backdropFilter: 'blur(12px)',
    borderRadius: '1.5rem',
    border: '1px solid rgba(60,60,80,0.18)'
  }
  const htmlStyle = {
    background: 'linear-gradient(140deg,var(--html-bg) 0%, var(--html-bg-alt) 65%)',
    boxShadow: '0 4px 22px -6px rgba(0,0,0,0.55), 0 0 0 1px var(--html-border)',
    backdropFilter: 'blur(14px) saturate(140%)',
    borderRadius: '1.5rem',
    border: '1px solid var(--html-border)'
  }
  return (
    <div className="study-subnav sticky top-16 z-30">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3 overflow-x-auto custom-scroll justify-center"
        style={isHtml ? htmlStyle : baseStyle}
        initial="hidden" animate="show"
        variants={{hidden:{opacity:0, x:-60}, show:{opacity:1, x:0, transition:{staggerChildren:0.06, delayChildren:0.1, duration:0.4}}}}
      >
        {/* Card Home */}
        <motion.div key="home" variants={{hidden:{opacity:0, x:-40}, show:{opacity:1, x:0}}}>
          <NavLink
            to="/study-in"
            end
            className={({isActive})=>
              `relative group flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 `+
              (pathname === '/study-in'
                ? 'text-white bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg'
                : 'bg-muted/40 hover:bg-muted text-foreground/80 hover:text-foreground')
            }
          >
            <span className="relative z-10">Home</span>
            {pathname === '/study-in' && (
              <motion.span
                layoutId="pill-glow"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-80 blur-md mix-blend-screen pointer-events-none"
                transition={{type:'spring', stiffness:350, damping:30}}
              />
            )}
          </NavLink>
        </motion.div>
        {technologies.map(tech => (
          <motion.div key={tech.slug} variants={{hidden:{opacity:0, x:-40}, show:{opacity:1, x:0}}}>
            <NavLink
              to={`/study-in/${tech.slug}`}
              className={({isActive})=>
                `relative group flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 `+
                (pathname.endsWith(tech.slug)
                  ? 'text-white bg-gradient-to-r '+tech.color+' shadow-lg'
                  : 'bg-muted/40 hover:bg-muted text-foreground/80 hover:text-foreground')
              }
            >
              <span className="relative z-10">{tech.label}</span>
              {pathname.endsWith(tech.slug) && (
                <motion.span
                  layoutId="pill-glow"
                  className="absolute inset-0 rounded-full bg-gradient-to-r opacity-80 blur-md mix-blend-screen pointer-events-none"
                  style={{background: undefined}}
                  transition={{type:'spring', stiffness:350, damping:30}}
                />
              )}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
