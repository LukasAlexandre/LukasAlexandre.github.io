import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Database, Wrench, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import './App.css'
import { translations } from '@/lib/i18n.js'
import { buildProjects } from '@/data/projects.js'
import Header from '@/components/Header.jsx'

// Assets imports
import profileImage from './100711785.jpeg'

// Mark motion as used for ESLint (we use member expressions like <motion.div/>)
const MOTION = motion

function App() {
  const [language, setLanguage] = useState('pt')


  // Load theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedLanguage = localStorage.getItem('language')

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Scroll utility still used inside sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Translations
  const currentLang = translations[language]

  // Technologies data
  const technologies = {
    frontend: [
      { name: 'HTML5', level: 80 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 60 },
    ],
    backend: [
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 60 },
      { name: 'Prisma', level: 60 },
      { name: 'C#', level: 40 },
    ],
    tools: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'MySQL/SQL', level: 65 },
      { name: 'Prisma', level: 50 },
      { name: 'MongoDB', level: 50 },
      { name: 'Vite', level: 70 }
    ]
  }

  const projects = useMemo(() => buildProjects(currentLang), [currentLang])
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
  <Header language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-muted-foreground mb-4">{currentLang.hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{currentLang.hero.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 typing-animation">
              {currentLang.hero.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {currentLang.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3"
              >
                {currentLang.hero.cta}
              </Button>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/LukasAlexandre" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/lukas-alexandre-rosa/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:larosa2019@hotmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="scroll-indicator"
            >
              <ChevronDown className="h-6 w-6 mx-auto text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentLang.about.title}</h2>
            <p className="text-lg text-muted-foreground">{currentLang.about.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-xl ring-2 ring-emerald-500/40">
                <img
                  src={profileImage}
                  alt="Lukas Alexandre"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-400/10 to-blue-500/10 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">{currentLang.about.text1}</p>
              <p className="text-lg leading-relaxed">{currentLang.about.text2}</p>
              <p className="text-lg leading-relaxed">{currentLang.about.text3}</p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">1+</div>
                  <div className="text-sm text-muted-foreground">{currentLang.about.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">6+</div>
                  <div className="text-sm text-muted-foreground">{currentLang.about.projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-muted-foreground">{currentLang.about.technologies}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentLang.skills.title}</h2>
            <p className="text-lg text-muted-foreground">{currentLang.skills.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="tech-card h-full">
                <CardHeader className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 text-emerald-500" />
                  <CardTitle>{currentLang.skills.frontend}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {technologies.frontend.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-emerald-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="tech-card h-full">
                <CardHeader className="text-center">
                  <Database className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <CardTitle>{currentLang.skills.backend}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {technologies.backend.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-blue-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="tech-card h-full">
                <CardHeader className="text-center">
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                  <CardTitle>{currentLang.skills.tools}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {technologies.tools.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-purple-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentLang.projects.title}</h2>
            <p className="text-lg text-muted-foreground">{currentLang.projects.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {currentLang.projects.viewCode}
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {currentLang.projects.viewLive}
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentLang.experience.title}</h2>
            <p className="text-lg text-muted-foreground">{currentLang.experience.subtitle}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Experience items */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                  <div className="ml-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold">{currentLang.experience.selfTaught.title}</h3>
                      <Badge variant="outline">{currentLang.experience.current}</Badge>
                    </div>
                    <p className="text-blue-500 font-medium mb-2">{currentLang.experience.selfTaught.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentLang.experience.selfTaught.period}</p>
                    <p className="text-muted-foreground">{currentLang.experience.selfTaught.description}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                  <div className="ml-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold">{currentLang.experience.student.title}</h3>
                      <Badge variant="outline">{currentLang.experience.current}</Badge>
                    </div>
                    <p className="text-emerald-500 font-medium mb-2">{currentLang.experience.student.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentLang.experience.student.period}</p>
                    <p className="text-muted-foreground">{currentLang.experience.student.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2">{currentLang.experience.earlyCareer.title}</h3>
                    <p className="text-purple-500 font-medium mb-2">{currentLang.experience.earlyCareer.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentLang.experience.earlyCareer.period}</p>
                    <p className="text-muted-foreground">{currentLang.experience.earlyCareer.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    2
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2">{currentLang.experience.monitor.title}</h3>
                    <p className="text-purple-500 font-medium mb-2">{currentLang.experience.monitor.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentLang.experience.monitor.period}</p>
                    <p className="text-muted-foreground">{currentLang.experience.monitor.description}</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2">{currentLang.experience.teste.title}</h3>
                    <p className="text-purple-500 font-medium mb-2">{currentLang.experience.teste.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentLang.experience.teste.period}</p>
                    <p className="text-muted-foreground">{currentLang.experience.teste.description}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    4
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2">{currentLang.experience.Auxiliar.title}</h3>
                    <p className="text-purple-500 font-medium mb-2">{currentLang.experience.Auxiliar.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentLang.experience.Auxiliar.period}</p>
                    <p className="text-muted-foreground">{currentLang.experience.Auxiliar.description}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentLang.contact.title}</h2>
            <p className="text-lg text-muted-foreground">{currentLang.contact.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{currentLang.contact.info.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{currentLang.contact.info.location}</h3>
                  <p className="text-muted-foreground">{currentLang.contact.info.availability}</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-8">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/LukasAlexandre" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/lukas-alexandre-rosa/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:larosa2019@hotmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder={currentLang.contact.name}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder={currentLang.contact.email}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder={currentLang.contact.message}
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                      <Send className="h-4 w-4 mr-2" />
                      {currentLang.contact.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Lukas Alexandre. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

