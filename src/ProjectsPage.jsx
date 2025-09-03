import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { translations } from '@/lib/i18n.js'
import { buildProjects } from '@/data/projects.js'
import Header from '@/components/Header.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'

// Category definitions as requested
const CATEGORIES = [
  { key: 'ALL', label: 'Todos', match: () => true },
  { key: 'HTMLCSS', label: 'Html + CSS', match: p => p.technologies.includes('HTML') && p.technologies.includes('CSS') && !p.technologies.includes('React') },
  { key: 'JS', label: 'Javascript', match: p => p.technologies.includes('JavaScript') && !p.technologies.includes('React') && !p.technologies.includes('Node.js') },
  { key: 'MYSQL', label: 'Mysql', match: p => p.technologies.includes('MySQL') },
  { key: 'NODE', label: 'Node.js', match: p => p.technologies.includes('Node.js') },
  { key: 'PRISMA', label: 'Prisma', match: p => p.technologies.includes('Prisma') },
  { key: 'REACT', label: 'React', match: p => p.technologies.includes('React') },
  { key: 'IA', label: 'IA', match: p => p.technologies.includes('IA') },
  { key: 'COMPLEX', label: 'Projetos Complexos', match: p => p.technologies.includes('React') && p.technologies.includes('Node.js') && p.technologies.includes('Prisma') && p.technologies.includes('MySQL') }
]

export default function ProjectsPage({ language = 'pt', setLanguage }) {
  const navigate = useNavigate()
  const currentLang = translations[language]
  const projects = useMemo(() => buildProjects(currentLang), [currentLang])
  const [category, setCategory] = useState('ALL')
  const active = CATEGORIES.find(c => c.key === category)
  const filtered = projects.filter(p => active.match(p))
  const handleBack = () => navigate('/')

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-4 sm:px-6 lg:px-8">
      <Header language={language} setLanguage={setLanguage} />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-2">{currentLang.projects.title}</h1>
            <p className="text-muted-foreground">{currentLang.projects.subtitle}</p>
          </div>
          <Button variant="outline" onClick={handleBack} className="hidden md:inline-flex"><ArrowLeft className="h-4 w-4 mr-2"/>Home</Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <Button key={cat.key} size="sm" variant={category===cat.key?'default':'outline'} onClick={()=>setCategory(cat.key)}>{cat.label}</Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div key={project.id} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:index*0.05}}>
              <Card className="project-card h-full overflow-hidden flex flex-col">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover object-top" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.github && (
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4 mr-2" />{currentLang.projects.viewCode}</a>
                      </Button>)}
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-2" />{currentLang.projects.viewLive}</a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}