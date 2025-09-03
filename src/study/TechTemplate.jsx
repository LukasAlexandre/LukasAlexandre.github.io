import { getTech } from './techData.js'
import { motion } from 'framer-motion'

export default function TechTemplate({ slug }) {
  const tech = getTech(slug)
  if(!tech) return <p>Tecnologia não encontrada.</p>
  return (
    <div>
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${tech.color} text-transparent bg-clip-text`}>{tech.label}</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">{tech.description}</p>
      {/* Placeholder learning sections */}
      <div className="space-y-8">
        {[1,2,3].map(i=> (
          <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}} transition={{delay:i*0.1}} className="p-6 rounded-xl bg-gradient-to-br from-background/60 to-background/10 border border-border/50 backdrop-blur-sm shadow-lg/30">
            <h2 className="text-2xl font-semibold mb-3">Seção {i}</h2>
            <p className="leading-relaxed text-foreground/80">Conteúdo futuro sobre {tech.label}. Aqui você poderá detalhar fundamentos, exemplos de código, melhores práticas e exercícios. Substitua este bloco com seu material real.</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
