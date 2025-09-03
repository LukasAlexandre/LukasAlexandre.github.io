import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { technologies } from './techData.js'

export default function StudySubnav() {
  const { pathname } = useLocation()
  return (
    <div className="study-subnav sticky top-16 z-30">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex gap-3 overflow-x-auto custom-scroll justify-center"
        initial="hidden" animate="show"
        variants={{hidden:{opacity:0, x:-60}, show:{opacity:1, x:0, transition:{staggerChildren:0.06, delayChildren:0.1, duration:0.4}}}}
      >
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
