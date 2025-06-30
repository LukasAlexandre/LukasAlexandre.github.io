import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Globe, Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Database, Wrench, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import './App.css'

// Assets imports
import profileImage from './100711785.jpeg'
import thamis01 from './assets/images/thamis-01.png'
import fokus01 from './assets/images/fokus-01.png'
import aluraDev01 from './assets/images/alura-dev-01.png'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState('pt')
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  // Load theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedLanguage = localStorage.getItem('language')

    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }

    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Toggle language
  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Translations
  const t = {
    pt: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Tecnologias',
        projects: 'Projetos',
        experience: 'Experiência',
        contact: 'Contato'
      },
      hero: {
        greeting: 'Olá, eu sou',
        name: 'Lukas Alexandre',
        title: 'Desenvolvedor FullStack',
        description: 'Apaixonado por criar experiências digitais incríveis e soluções inovadoras',
        cta: 'Vamos conversar'
      },
      about: {
        title: 'Sobre Mim',
        subtitle: 'Minha jornada na programação',
        text1: 'Sou estudante de Engenharia de Software e desenvolvedor FullStack autodidata, apaixonado por criar experiências incríveis e envolventes para os usuários. Estou sempre buscando aperfeiçoar minhas habilidades e aprender novas tecnologias.',
        text2: 'Minha paixão por computadores começou cedo, mas foi em 2022 que conheci a programação, apresentado por um amigo de trabalho. Motivado por ele, iniciei meus estudos em algoritmos e lógica de programação, e desde então, não consigo mais parar.',
        text3: 'Atualmente adiquiro conhecimento em front-end, ao mesmo tempo em que estudo back-end em paralelo. Estou constantemente buscando novas oportunidades para aplicar meus conhecimentos e contribuir para projetos desafiadores.',
        experience: 'Anos de experiência',
        projects: 'Projetos concluídos',
        technologies: 'Tecnologias dominadas'
      },
      skills: {
        title: 'Tecnologias',
        subtitle: 'Ferramentas que uso para criar soluções',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Ferramentas'
      },
      projects: {
        title: 'Projetos',
        subtitle: 'Alguns dos meus trabalhos recentes',
        viewCode: 'Ver Código',
        viewLive: 'Ver Projeto',
        thamis: {
          title: 'Thamis Cake',
          description: 'Site de confeitaria especializado em bolos artesanais. Desenvolvido como projeto de extensão universitária para ajudar a comunidade local.',
          tech: ['HTML', 'CSS', 'JavaScript']
        },
        fokus: {
          title: 'Fokus',
          description: 'Aplicação de produtividade baseada na técnica Pomodoro. Ajuda usuários a manter o foco durante estudos e trabalho.',
          tech: ['HTML', 'CSS', 'JavaScript']
        },
        aluraDev: {
          title: 'Alura Dev',
          description: 'Plataforma para compartilhamento de código com syntax highlighting. Permite aos desenvolvedores compartilhar snippets de código.',
          tech: ['HTML', 'CSS', 'JavaScript']
        }
      },
      experience: {
        title: 'Experiência',
        subtitle: 'Minha trajetória profissional',
        current: 'Atual',
        student: {
          title: 'Estudante de Engenharia de Software',
          company: 'Universidade',
          period: '2022 - Atual',
          description: 'Cursando Engenharia de Software com foco em desenvolvimento web e mobile. Participando de projetos de extensão e pesquisa.'
        },
        selfTaught: {
          title: 'Desenvolvedor Autodidata',
          company: 'Estudos Independentes',
          period: '2022 - Atual',
          description: 'Aprendizado contínuo através de cursos online, documentações e projetos práticos. Foco em tecnologias web modernas.'
        },
        earlyCareer: {
          title: 'Início da Carreira',
          company: 'Experiência Profissional',
          period: '16 anos - Atual',
          description: 'Comecei minha carreira profissional aos 16 anos, desenvolvendo habilidades de trabalho em equipe e resolução de problemas.'
        }
      },
      contact: {
        title: 'Contato',
        subtitle: 'Vamos trabalhar juntos',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        info: {
          email: 'larosa2019@hotmail.com',
          location: 'Brasil',
          availability: 'Disponível para projetos'
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hello, I am',
        name: 'Lukas Alexandre',
        title: 'FullStack Developer',
        description: 'Passionate about creating amazing digital experiences and innovative solutions',
        cta: 'Let\'s talk'
      },
      about: {
        title: 'About Me',
        subtitle: 'My programming journey',
        text1: 'I am a Software Engineering student and self-taught FullStack developer, passionate about creating incredible and engaging user experiences. I am always looking to improve my skills and learn new technologies.',
        text2: 'My passion for computers started early, but it was in 2022 that I discovered programming, introduced by a work colleague. Motivated by him, I started studying algorithms and programming logic, and since then, I can\'t stop.',
        text3: 'Currently I specialize in front-end, while studying back-end in parallel. I am constantly seeking new opportunities to apply my knowledge and contribute to challenging projects.',
        experience: 'Years of experience',
        projects: 'Completed projects',
        technologies: 'Technologies mastered'
      },
      skills: {
        title: 'Technologies',
        subtitle: 'Tools I use to create solutions',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools'
      },
      projects: {
        title: 'Projects',
        subtitle: 'Some of my recent work',
        viewCode: 'View Code',
        viewLive: 'View Project',
        thamis: {
          title: 'Thamis Cake',
          description: 'Bakery website specialized in handcrafted cakes. Developed as a university extension project to help the local community.',
          tech: ['HTML', 'CSS', 'JavaScript']
        },
        fokus: {
          title: 'Fokus',
          description: 'Productivity application based on the Pomodoro technique. Helps users maintain focus during studies and work.',
          tech: ['HTML', 'CSS', 'JavaScript']
        },
        aluraDev: {
          title: 'Alura Dev',
          description: 'Code sharing platform with syntax highlighting. Allows developers to share code snippets.',
          tech: ['HTML', 'CSS', 'JavaScript']
        }
      },
      experience: {
        title: 'Experience',
        subtitle: 'My professional journey',
        current: 'Current',
        student: {
          title: 'Software Engineering Student',
          company: 'University',
          period: '2022 - Current',
          description: 'Studying Software Engineering with focus on web and mobile development. Participating in extension and research projects.'
        },
        selfTaught: {
          title: 'Self-taught Developer',
          company: 'Independent Studies',
          period: '2022 - Current',
          description: 'Continuous learning through online courses, documentation and practical projects. Focus on modern web technologies.'
        },
        earlyCareer: {
          title: 'Early Career',
          company: 'Professional Experience',
          period: '16 years old - Current',
          description: 'Started my professional career at 16, developing teamwork and problem-solving skills.'
        }
      },
      contact: {
        title: 'Contact',
        subtitle: 'Let\'s work together',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        info: {
          email: 'larosa2019@hotmail.com',
          location: 'Brazil',
          availability: 'Available for projects'
        }
      }
    }
  }

  const currentLang = t[language]

  // Technologies data
  const technologies = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 65 },
      { name: 'Tailwind CSS', level: 60 },
      { name: 'Bootstrap', level: 50 }
    ],
    backend: [
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 60 },
      { name: 'C#', level: 60 },
      { name: 'PHP', level: 50 },
      { name: 'Java', level: 45 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 75 },
      { name: 'MySQL/SQL', level: 65 },
      { name: 'Prisma', level: 50 },
      { name: 'MongoDB', level: 50 },
      { name: 'Vite', level: 60 }
    ]
  }

  // Projects data
  const projects = [
    {
      id: 1,
      title: currentLang.projects.thamis.title,
      description: currentLang.projects.thamis.description,
      image: thamis01,
      technologies: currentLang.projects.thamis.tech,
      github: 'https://github.com/LukasAlexandre/Thamis-cake',
      live: 'https://thamis-cake-toyl-jjo22c952-lukas-projects-72e77d7d.vercel.app/index.html'
    },
    {
      id: 2,
      title: currentLang.projects.fokus.title,
      description: currentLang.projects.fokus.description,
      image: fokus01,
      technologies: currentLang.projects.fokus.tech,
      github: 'https://github.com/LukasAlexandre/Fokus',
      live: 'https://fokus-b2prbbs8e-lukas-projects-72e77d7d.vercel.app/'
    },
    {
      id: 3,
      title: currentLang.projects.aluraDev.title,
      description: currentLang.projects.aluraDev.description,
      image: aluraDev01,
      technologies: currentLang.projects.aluraDev.tech,
      github: 'https://github.com/LukasAlexandre/Challenge-Front-end-First-Edition',
      live: 'https://challenge-front-end-first-edition-2jt0ji5k5.vercel.app/'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl gradient-text"
            >
              Lukas
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(currentLang.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="nav-link text-sm font-medium hover:text-emerald-400"
                >
                  {value}
                </button>
              ))}
            </div>

            {/* Theme and Language toggles */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="p-2"
              >
                <Globe className="h-4 w-4" />
                <span className="ml-1 text-xs">{language.toUpperCase()}</span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-2 space-y-2">
                {Object.entries(currentLang.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-emerald-400 hover:bg-muted rounded-md"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">{currentLang.about.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">{currentLang.about.projects}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">8+</div>
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
                      className="w-full h-48 object-cover"
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
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    2
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
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold mb-2">{currentLang.experience.earlyCareer.title}</h3>
                    <p className="text-purple-500 font-medium mb-2">{currentLang.experience.earlyCareer.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentLang.experience.earlyCareer.period}</p>
                    <p className="text-muted-foreground">{currentLang.experience.earlyCareer.description}</p>
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

