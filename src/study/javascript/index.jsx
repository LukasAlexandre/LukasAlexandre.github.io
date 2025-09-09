import './javascript.css'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Code, Database, FileText, Globe, Zap, Cpu, RefreshCw, GitBranch, Settings, Terminal, Braces, Sparkles, CheckCircle, ChevronUp, Eye, ArrowRight, Download, Check, Copy, Trophy, Book, X } from 'lucide-react'

// ensure linter sees motion as used in JSX
void motion;

const sections = [
  { id:'fundamentos', title:'Fundamentos', icon:<Code className="w-5 h-5"/>, topics:['Variáveis','Tipos primitivos','Operadores','Coerção','typeof','Hoisting'], color: '#FFD23F' },
  { id:'estruturas', title:'Estruturas de Dados', icon:<Database className="w-5 h-5"/>, topics:['Arrays','Objects','Map/Set','WeakMap/WeakSet','Destructuring','Spread/Rest'], color: '#FF6B35' },
  { id:'funcoes', title:'Funções', icon:<Braces className="w-5 h-5"/>, topics:['Function declaration','Arrow functions','Closures','IIFE','Callbacks','Parameters'], color: '#F7931E' },
  { id:'controle', title:'Controle de Fluxo', icon:<GitBranch className="w-5 h-5"/>, topics:['if/else','switch','for/while','break/continue','try/catch','throw'], color: '#FFD23F' },
  { id:'dom', title:'DOM Manipulation', icon:<Globe className="w-5 h-5"/>, topics:['Seletores','Manipulação','Event listeners','Bubbling/Capturing','Forms','Storage'], color: '#FF6B35' },
  { id:'assincrono', title:'JavaScript Assíncrono', icon:<Zap className="w-5 h-5"/>, topics:['setTimeout','Promises','async/await','fetch','XMLHttpRequest','Error handling'], color: '#F7931E' },
  { id:'classes', title:'Classes & OOP', icon:<Braces className="w-5 h-5"/>, topics:['class syntax','constructor','extends','super','static','private fields'], color: '#FFD23F' },
  { id:'modulos', title:'Módulos ES6+', icon:<Package className="w-5 h-5"/>, topics:['import/export','default export','dynamic import','CommonJS vs ES6','bundlers'], color: '#FF6B35' },
  { id:'apis', title:'APIs Web', icon:<Settings className="w-5 h-5"/>, topics:['localStorage','geolocation','Canvas','Worker','Notification','WebSocket'], color: '#F7931E' },
  { id:'regex', title:'Regular Expressions', icon:<Terminal className="w-5 h-5"/>, topics:['Padrões','Flags','test/exec','match/replace','grupos','lookahead'], color: '#FFD23F' },
  { id:'json', title:'JSON & Serialização', icon:<FileText className="w-5 h-5"/>, topics:['stringify','parse','serialização','deep clone','replacer','reviver'], color: '#FF6B35' },
  { id:'performance', title:'Performance', icon:<Cpu className="w-5 h-5"/>, topics:['Event loop','Debounce/Throttle','Memory leaks','requestAnimationFrame','Web Workers'], color: '#F7931E' },
  { id:'debugging', title:'Debugging', icon:<Terminal className="w-5 h-5"/>, topics:['console methods','debugger','DevTools','Stack traces','Source maps'], color: '#FFD23F' },
  { id:'testing', title:'Testing', icon:<CheckCircle className="w-5 h-5"/>, topics:['Unit tests','Jest basics','Mocking','TDD/BDD','E2E basics'], color: '#FF6B35' },
  { id:'es6plus', title:'ES6+ Features', icon:<RefreshCw className="w-5 h-5"/>, topics:['let/const','Template literals','Symbols','Iterators','Generators','Proxy'], color: '#F7931E' },
  { id:'patterns', title:'Design Patterns', icon:<Settings className="w-5 h-5"/>, topics:['Module','Observer','Factory','Singleton','MVC','Pub/Sub'], color: '#FFD23F' },
  { id:'frameworks', title:'Frameworks', icon:<Braces className="w-5 h-5"/>, topics:['React basics','Vue basics','Angular basics','Node.js intro','NPM/Yarn'], color: '#FF6B35' },
  { id:'ferramentas', title:'Build Tools', icon:<Settings className="w-5 h-5"/>, topics:['Babel','Webpack','ESLint','Prettier','Vite','TypeScript intro'], color: '#F7931E' },
  { id:'projetos', title:'Projetos Práticos', icon:<Terminal className="w-5 h-5"/>, topics:['TODO app','Calculator','Weather app','Quiz app','API consumer','Simple SPA'], color: '#FFD23F' },
  { id:'avancado', title:'Conceitos Avançados', icon:<Trophy className="w-5 h-5"/>, topics:['Metaprogramming','AST','Custom events','Micro/Macro tasks','Security','PWA'], color: '#FF6B35' }
]

export default function JavascriptPage(){
  const [active, setActive] = useState('')
  const [done, setDone] = useState(new Set())
  const [showTop, setShowTop] = useState(false)
  const [mini, setMini] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShowTop(y > 400)
      const els = sections.map(s => document.getElementById(s.id)).filter(Boolean)
      const current = els.find(el => { 
        const r = el.getBoundingClientRect() 
        return r.top <= 110 && r.bottom >= 110 
      })
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const mark = id => setDone(prev => new Set([...prev, id]))
  const progress = (done.size / sections.length) * 100

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(247,223,30,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(247,147,30,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Floating JS Symbols */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl font-bold opacity-5 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: i % 3 === 0 ? '#F7DF1E' : i % 3 === 1 ? '#FF6B35' : '#F7931E'
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {['{}', '[]', '()', '=>', '&&', '||', '==', '!='][i % 8]}
          </motion.div>
        ))}
      </div>

  <div className={`relative z-10 w-full px-6 md:px-10 pt-2 pb-10`}>
        <div className="xl:grid xl:grid-cols-[18rem,1fr] xl:gap-8 xl:items-start">
          <div className="hidden xl:block self-start">
            <SideNav sections={sections} active={active} done={done} />
          </div>
          <div>
            <motion.div style={{ opacity, scale }}>
              <Hero progress={progress} count={`${done.size}/${sections.length}`} />
            </motion.div>
            <div className="space-y-0">
              {sections.map((s, i) => (
                <React.Fragment key={s.id}>
                  <SectionBlock section={s} index={i} complete={() => mark(s.id)} completed={done.has(s.id)} first={i===0} />
                </React.Fragment>
              ))}
            </div>
            {done.size === sections.length && <Certificate />}
          </div>
        </div>
        <Floating showTop={showTop} onTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} toggleMini={() => setMini(m => !m)} />
        <MiniProgress show={mini} onClose={() => setMini(false)} sections={sections} done={done} progress={progress} />
      </div>
    </div>
  )
}

function Hero({ progress, count }) {
  return (
    <motion.section 
  className="text-center pt-8 pb-16 relative max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Large JS Logo */}
      <motion.div 
        className="relative mx-auto w-40 h-40 mb-12"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-transparent to-black/20" />
          <div className="absolute inset-4 flex items-center justify-center">
            <span className="text-6xl font-bold text-black font-mono tracking-tighter">JS</span>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-white/20 to-yellow-400/0"
            animate={{ x: [-200, 200] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
        </div>
        
        {/* Orbiting Elements */}
        {['{}', '[]', '()'].map((symbol, i) => (
          <motion.div
            key={symbol}
            className="absolute w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center text-black font-bold text-sm shadow-lg"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: 360,
              x: Math.cos((i * 120 * Math.PI) / 180) * 100 - 16,
              y: Math.sin((i * 120 * Math.PI) / 180) * 100 - 16,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black px-6 py-3 rounded-full mb-8 shadow-2xl">
          <Sparkles className="w-4 h-4 mr-2" />
          JAVASCRIPT MASTERY GUIDE
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 font-mono">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            JavaScript
          </span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-300">do Zero ao Avançado</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
          Domine a linguagem mais popular do mundo • Sintaxe moderna • Conceitos avançados • Projetos reais
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('fundamentos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-6 h-6 mr-3" />
            Começar Agora
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg rounded-2xl transition-all duration-300"
          >
            <Download className="w-6 h-6 mr-3" />
            Download PDF
          </Button>
        </div>
      </motion.div>

      {/* Progress Section */}
      <motion.div 
        className="mx-auto max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="relative">
          <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700 mb-4">
            <motion.div 
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 relative"
              initial={{ width: 0 }} 
              animate={{ width: `${progress}%` }} 
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 via-white/20 to-orange-400/50"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Progresso</span>
            <span className="font-bold text-yellow-400">{Math.round(progress)}% • {count}</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

function SideNav({ sections, active, done }) {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="sticky top-[calc(4rem+12px)] z-30 w-[18rem] pointer-events-none"
    >
      <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-4 border border-yellow-400/20 shadow-2xl pointer-events-auto">
        <h3 className="font-black text-yellow-400 text-sm tracking-wider uppercase mb-6 flex items-center gap-3">
          <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Book className="w-4 h-4 text-black" />
          </div>
          Seções
        </h3>
        <div className="space-y-1.5">
          {sections.map((s, index) => (
            <motion.button
              key={s.id}
              onClick={() => {
                const el = document.getElementById(s.id)
                if (!el) return
                const y = el.getBoundingClientRect().top + window.scrollY - 120
                window.scrollTo({ top: y, behavior: 'smooth' })
              }}
              className={`group flex items-center gap-3 w-full p-2.5 rounded-xl text-left transition-all duration-300 ${
                active === s.id
                  ? 'bg-gradient-to-r from-yellow-400/15 to-orange-500/15 text-yellow-400 shadow-lg border border-yellow-400/30'
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.02, x: 5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`p-1.5 rounded-lg ${active === s.id ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-400'}`}>
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-sm font-semibold leading-5 truncate">{s.title}</span>
                <span className="block text-[11px] text-gray-500 leading-4 truncate">{s.topics.length} tópicos</span>
              </div>
              {done.has(s.id) ? (
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              ) : (
                <div className="w-4 h-4 border-2 border-gray-600 rounded-full flex-shrink-0" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.aside>
  )
}

function SectionBlock({ section, index, complete, completed, first }) {
  const [show, setShow] = useState(false)
  const [exampleIndex, setExampleIndex] = useState(0)
  
  return (
    <motion.section 
      id={section.id} 
      className={`py-20 relative ${first ? 'mt-6' : ''}`}
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: '-100px' }} 
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-6">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1 }}
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: section.color }}
            >
              <div className="relative z-10 text-black">
                {section.icon}
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: [-64, 64] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-50" />
          </motion.div>
          
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-black mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className="ml-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {section.title}
              </span>
            </motion.h2>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {section.topics.slice(0, 4).map((topic, i) => (
                <span 
                  key={i} 
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {topic}
                </span>
              ))}
              {section.topics.length > 4 && (
                <span className="text-xs text-gray-500">
                  +{section.topics.length - 4} more
                </span>
              )}
            </motion.div>
          </div>
        </div>
        
        <motion.button
          onClick={complete}
          className={`p-4 rounded-2xl transition-all duration-300 ${
            completed
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl'
              : 'bg-gray-800 border-2 border-gray-700 text-gray-400 hover:border-yellow-400 hover:text-yellow-400'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <CheckCircle className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-300 uppercase tracking-wider mb-6">Conceitos</h3>
          {section.topics.map((topic, i) => (
            <motion.div
              key={i}
              className="group relative p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              onClick={() => setExampleIndex(i)}
              whileHover={{ scale: 1.02, x: 10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-3 h-3 rounded-full shadow-lg"
                  style={{ backgroundColor: section.color }}
                />
                <span className="text-white group-hover:text-yellow-400 transition-colors font-medium">
                  {topic}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 group-hover:text-yellow-400 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-300 uppercase tracking-wider">Exemplo</h3>
            <Button
              onClick={() => setShow(s => !s)}
              className={`${show ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' : 'bg-gray-800 text-gray-300 border border-gray-700'} px-6 py-3 rounded-xl transition-all duration-300`}
            >
              <Eye className="w-5 h-5 mr-2" />
              {show ? 'Ocultar' : 'Ver'} Código
            </Button>
          </div>
          <Example section={section} index={exampleIndex} show={show} />
        </motion.div>
      </div>

      {/* Divider */}
      {index < sections.length - 1 && (
        <motion.div 
          className="flex items-center justify-center py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <motion.div
              className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}

function Example({ section, index, show }) {
  const [copied, setCopied] = useState(false)
  
  const examples = {
    fundamentos: [
  'let linguagem = "JavaScript";\nconst ano = 2024;\nconst ativo = true;\n\nconsole.log(`${linguagem} ${ano}: ${ativo}`);',
      'const numeros = [1, 2, 3, 4, 5];\nconst pessoa = {\n  nome: "Ana",\n  idade: 25,\n  ativa: true\n};',
      '// Coerção implícita\nconsole.log(5 + "3"); // "53"\nconsole.log(+"5");   // 5\nconsole.log(!!"");   // false'
    ],
    estruturas: [
      'const arr = [1, 2, 3, 4, 5];\nconst [primeiro, segundo, ...resto] = arr;\nconsole.log(primeiro, segundo, resto);',
      'const usuario = { nome: "João", idade: 30, cidade: "SP" };\nconst { nome, idade, ...outros } = usuario;\nconsole.log(nome, idade, outros);',
      'const mapa = new Map();\nmapa.set("chave", "valor");\nmapa.set(1, "número");\nconsole.log(mapa.get("chave"));'
    ],
    funcoes: [
      'function somar(a, b) {\n  return a + b;\n}\n\nconst resultado = somar(10, 5);\nconsole.log(resultado); // 15',
      'const multiplicar = (x, y) => x * y;\nconst quadrado = x => x * x;\n\nconsole.log(multiplicar(4, 3));\nconsole.log(quadrado(5));',
      'function criarContador() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\n\nconst contador = criarContador();\nconsole.log(contador()); // 1\nconsole.log(contador()); // 2'
    ],
    controle: [
      'let x = 10;\nif (x > 5) {\n  console.log("x é maior que 5");\n} else {\n  console.log("x não é maior que 5");\n}',
      'let dia = "Segunda";\nswitch (dia) {\n  case "Segunda": console.log("Dia de trabalho"); break;\n  case "Domingo": console.log("Dia de descanso"); break;\n  default: console.log("Outro dia");\n}',
      'for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n\nlet j = 0;\nwhile (j < 3) {\n  console.log(j); j++;\n}'
    ],
    dom: [
      'const elemento = document.getElementById("meuId");\nelemento.textContent = "Olá, DOM!";',
      'document.querySelector(".minhaClasse").addEventListener("click", () => {\n  alert("Elemento clicado!");\n});',
      'localStorage.setItem("username", "dev");\nconsole.log(localStorage.getItem("username"));'
    ],
    assincrono: [
      'setTimeout(() => {\n  console.log("Executado após 1 segundo");\n}, 1000);',
      'new Promise(resolve => {\n  setTimeout(() => resolve("Dados"), 500);\n}).then(data => console.log(data));',
      'async function getData() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n  console.log(data);\n}'
    ],
    classes: [
  'class Animal {\n  constructor(nome) { this.nome = nome; }\n  falar() { console.log(`${this.nome} faz um som.`); }\n}\nconst cachorro = new Animal("Rex");\ncachorro.falar();',
  'class Cachorro extends Animal {\n  constructor(nome, raca) {\n    super(nome); this.raca = raca;\n  }\n  falar() { console.log(`${this.nome} late.`); }\n}',
      'class Utils {\n  static soma(a, b) { return a + b; }\n}\nconsole.log(Utils.soma(2, 3));'
    ],
    modulos: [
      '// arquivo: utils.js\nexport const PI = 3.14;\nexport function sum(a, b) { return a + b; }\n\n// arquivo: main.js\nimport { PI, sum } from "./utils.js";\nconsole.log(PI, sum(1, 2));',
      '// arquivo: component.js\nexport default class Component { /* ... */ }\n\n// arquivo: app.js\nimport MyComponent from "./component.js";\nconst comp = new MyComponent();'
    ],
    apis: [
      'localStorage.setItem("theme", "dark");\nconsole.log(localStorage.getItem("theme"));',
      'navigator.geolocation.getCurrentPosition(position => {\n  console.log(position.coords.latitude, position.coords.longitude);\n});',
      'const ws = new WebSocket("wss://echo.websocket.events");\nws.onopen = () => ws.send("Hello");\nws.onmessage = event => console.log(event.data);'
    ],
    regex: [
      'const texto = "Hello 123 World";\nconst padrao = /\\d+/;\nconsole.log(padrao.test(texto)); // true\nconsole.log(texto.match(/o/g)); // ["o", "o"]',
      'const email = "test@example.com";\nconst emailRegex = /^[\\w.-]+@([\\w-]+\\.)+[\\w-]{2,4}$/;\nconsole.log(emailRegex.test(email));',
      'const str = "banana";\nconsole.log(str.replace(/a/g, "x")); // "bxnxnx"'
    ],
    json: [
      'const obj = { name: "Alice", age: 30 };\nconst jsonString = JSON.stringify(obj);\nconsole.log(jsonString);',
      `const json = '{"product":"Book", "price":25}';\nconst data = JSON.parse(json);\nconsole.log(data.product);`,
      'const original = { a: 1, b: { c: 2 } };\nconst clone = JSON.parse(JSON.stringify(original));\nclone.b.c = 3; // Não afeta original\nconsole.log(original.b.c);'
    ],
    performance: [
      'let count = 0;\nfunction throttle(func, delay) {\n  let timeoutId = null;\n  return function(...args) {\n    if (!timeoutId) {\n      timeoutId = setTimeout(() => {\n        func.apply(this, args);\n        timeoutId = null;\n      }, delay);\n    }\n  };\n}\n\nconst increment = throttle(() => { count++; console.log(count); }, 100);',
      'function animate() {\n  // Atualizar UI\n  requestAnimationFrame(animate);\n}\nanimate();',
      '// Exemplo de Web Worker para computação pesada\nconst worker = new Worker("worker.js");\nworker.postMessage({ number: 1000000 });\nworker.onmessage = e => console.log(e.data);'
    ],
    debugging: [
      'console.log("Variável:", myVar);\nconsole.error("Algo deu errado!");\nconsole.warn("Isso é um aviso.");',
      'function calculate(a, b) {\n  debugger; // Pausa a execução aqui\n  return a * b;\n}\ncalculate(5, 10);',
      '// No navegador, abra DevTools (F12) -> Sources -> Adicione um breakpoint'
    ],
    testing: [
      '// Exemplo simples com Jest\n// my_module.js\nexport function sum(a, b) { return a + b; }\n\n// my_module.test.js\nimport { sum } from "./my_module";\ntest("adds 1 + 2 to equal 3", () => {\n  expect(sum(1, 2)).toBe(3);\n});',
      '// Mocking de função\nconst mockFunc = jest.fn(() => "mocked value");\nconsole.log(mockFunc());'
    ],
    es6plus: [
  'let idade = 30;\nconst nome = "Maria";\n\nconst mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;\nconsole.log(mensagem);',
      'const sym = Symbol("minhaDescricao");\nconst obj = { [sym]: "valor secreto" };\nconsole.log(obj[sym]);',
      'function* idGenerator() {\n  let id = 1;\n  while (true) yield id++;\n}\n\nconst gen = idGenerator();\nconsole.log(gen.next().value);'
    ],
    patterns: [
      '// Padrão Módulo (IIFE)\nconst MyModule = (() => {\n  let privateVar = "Eu sou privado";\n  function privateMethod() { console.log(privateVar); }\n  return { publicMethod: privateMethod };\n})();\nMyModule.publicMethod();',
      '// Padrão Observer\nclass Subject {\n  constructor() { this.observers = []; }\n  addObserver(obs) { this.observers.push(obs); }\n  notify(data) { this.observers.forEach(obs => obs.update(data)); }\n}',
      '// Padrão Factory\nfunction createProduct(type) {\n  if (type === "car") return { type: "car", wheels: 4 };\n  if (type === "bike") return { type: "bike", wheels: 2 };\n}'
    ],
    frameworks: [
      '// Exemplo React (componente funcional)\nimport React from \'react\';\nfunction MyComponent() {\n  return <div>Olá, React!</div>;\n}\nexport default MyComponent;',
      '// Exemplo Vue (instância)\nnew Vue({\n  el: \'#app\',\n  data: { message: \'Olá, Vue!\' }\n});',
      '// Exemplo básico Node.js (servidor HTTP)\nconst http = require(\'http\');\nhttp.createServer((req, res) => {\n  res.writeHead(200, {\'Content-Type\': \'text/plain\'});\n  res.end(\'Olá, Node.js!\');\n}).listen(3000);'
    ],
    ferramentas: [
      '// Exemplo de configuração Babel (banco.babelrc)\n// { "presets": ["@babel/preset-env", "@babel/preset-react"] }',
      '// Exemplo de configuração Webpack (webpack.config.js)\n// module.exports = {\n//   entry: \'./src/index.js\',\n//   output: { filename: \'bundle.js\', path: __dirname + \'/dist\' }\n// };',
  '// Exemplo básico TypeScript\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\nlet user = "TypeScript";\nconsole.log(greet(user));'
    ],
    projetos: [
      '// Exemplo de TODO app (adicionar item)\nconst todos = [];\nfunction addTodo(text) {\n  todos.push({ id: Date.now(), text, completed: false });\n}',
      '// Função de calculadora simples\nfunction calculate(op, a, b) {\n  if (op === "+") return a + b;\n  if (op === "-") return a - b;\n  // ...\n}',
  '// Fetch de dados de API\nasync function fetchWeather(city) {\n  const apiKey = "YOUR_API_KEY";\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;\n  const response = await fetch(url);\n  const data = await response.json();\n  console.log(data);\n}'
    ],
    avancado: [
      '// Exemplo de Proxy para validação\nconst handler = {\n  set: (target, prop, value) => {\n    if (prop === "age" && typeof value !== "number") {\n      throw new Error("Age must be a number.");\n    }\n    target[prop] = value;\n    return true;\n  }\n};\nconst person = new Proxy({}, handler);\nperson.age = 25; // OK\n// person.age = "abc"; // Erro!',
      '// Custom Event\nconst myEvent = new CustomEvent("dataLoaded", { detail: { data: "sample" } });\ndocument.addEventListener("dataLoaded", e => console.log(e.detail.data));\ndocument.dispatchEvent(myEvent);'
    ]
  }

  const code = (examples[section.id] || ['// Exemplo em desenvolvimento...'])[index] || (examples[section.id] || ['// Exemplo'])[0]
  
  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-between border-b border-gray-600">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-400 font-mono font-semibold">
                  {section.topics[index] || 'example.js'}
                </span>
              </div>
              <motion.button
                onClick={copy}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </motion.button>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm leading-relaxed text-gray-100 font-mono">
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!show && (
        <motion.div 
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-2 border-dashed border-gray-600 rounded-2xl p-12 text-center backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          </motion.div>
          <p className="text-gray-400 text-lg">Clique em "Ver Código" para visualizar o exemplo</p>
        </motion.div>
      )}
    </div>
  )
}

function Certificate() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-20 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-yellow-400/10 rounded-3xl blur-3xl" />
      
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-center border-2 border-yellow-400/30 shadow-2xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400" />
        
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Trophy className="w-12 h-12 text-black" />
        </motion.div>
        
        <motion.h3
          className="text-5xl font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Parabéns! 🎉
          </span>
        </motion.h3>
        
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Você completou todas as seções do guia JavaScript! Agora você domina desde os conceitos básicos até técnicas avançadas. Está pronto para criar aplicações incríveis!
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Download className="w-6 h-6 mr-3" />
            Baixar Certificado
          </Button>
          <Button variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg rounded-2xl transition-all duration-300">
            <ArrowRight className="w-6 h-6 mr-3" />
            Próximo: React.js
          </Button>
        </motion.div>
        
        {/* Floating Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

function Floating({ showTop, onTop, toggleMini }) {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl shadow-2xl font-bold"
        onClick={toggleMini}
        title="Ver Progresso"
      >
        <CheckCircle className="w-6 h-6" />
      </motion.button>
      
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onTop}
            className="p-4 bg-gray-800 border-2 border-gray-700 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

function MiniProgress({ show, onClose, sections, done, progress }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 400, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 400, y: 20 }}
          className="fixed bottom-32 right-8 bg-black/90 backdrop-blur-xl border-2 border-yellow-400/30 rounded-3xl p-8 w-80 shadow-2xl z-50"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-yellow-400 text-lg">Progresso Geral</h4>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-400">Seções Completadas</span>
              <span className="text-yellow-400 font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>
          
          <div className="space-y-3 pr-1">
            {sections.slice(0, 8).map((s, index) => (
              <motion.div
                key={s.id}
                className="flex items-center gap-3 text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {done.has(s.id) ? (
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 border-2 border-gray-600 rounded-full flex-shrink-0" />
                )}
                <span className="text-gray-300 truncate">{s.title}</span>
              </motion.div>
            ))}
            {sections.length > 8 && (
              <div className="text-xs text-gray-500 text-center pt-2">
                +{sections.length - 8} seções restantes
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Package icon component
function Package({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z"/>
      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  )
}
