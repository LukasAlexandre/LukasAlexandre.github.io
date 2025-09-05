import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Code, Database, FileText, Globe, Image, Play, Edit, Shield, Search, Smartphone, Copy, Check, ChevronUp, Eye, CheckCircle, ArrowRight, Download, Link, Table, Zap, Languages, Wrench, Target, Trophy, Mail, Book, X, Layers } from 'lucide-react'
import './html.css'

// Seções ampliadas (adaptadas para paleta vermelha existente)
const sections = [
  { id:'base', title:'1. Base', icon:<Database className="w-4 h-4"/>, topics:['DOM','Elemento / Atributo','Conteúdo','Fluxos','Árvore / Nós'] },
  { id:'documento', title:'2. Documento', icon:<FileText className="w-4 h-4"/>, topics:['<!doctype html>','<html lang>','<head> metas','title / description','Landmarks','1× <main>'] },
  { id:'semantica', title:'3. Semântica', icon:<Globe className="w-4 h-4"/>, topics:['header/nav/main','section/article','aside/footer','h1–h6','figure + figcaption','time datetime'] },
  { id:'texto', title:'4. Texto', icon:<FileText className="w-4 h-4"/>, topics:['p','strong / em','q / blockquote','cite / abbr','code / pre','mark'] },
  { id:'links-nav', title:'5. Links & Nav', icon:<Link className="w-4 h-4"/>, topics:['<a href>','_blank + rel="noopener"','Skip link','Foco visível','Breadcrumbs'] },
  { id:'imagens', title:'6. Imagens', icon:<Image className="w-4 h-4"/>, topics:['alt útil','width / height','srcset / sizes','<picture>','loading="lazy"'] },
  { id:'midia', title:'7. Mídia', icon:<Play className="w-4 h-4"/>, topics:['<audio>/<video>','controls','<track> legendas','poster','preload="none"'] },
  { id:'formularios', title:'8. Formulários', icon:<Edit className="w-4 h-4"/>, topics:['label for','Tipos nativos','required / min / max','pattern / inputmode','autocomplete','fieldset / legend'] },
  { id:'tabelas', title:'9. Tabelas', icon:<Table className="w-4 h-4"/>, topics:['caption','thead / tbody / tfoot','th scope','headers/id (complexas)'] },
  { id:'a11y', title:'10. A11y & ARIA', icon:<Shield className="w-4 h-4"/>, topics:['Semântica > ARIA','Landmarks','aria-expanded','aria-live','aria-current','tabindex'] },
  { id:'metadados', title:'11. Metadados', icon:<FileText className="w-4 h-4"/>, topics:['charset','viewport','Favicon','Open Graph / Twitter','canonical','meta robots'] },
  { id:'performance', title:'12. Performance', icon:<Zap className="w-4 h-4"/>, topics:['preload','preconnect','lazy images','defer JS','cache headers'] },
  { id:'seo', title:'13. SEO', icon:<Search className="w-4 h-4"/>, topics:['h1 único','Headings coerentes','title/description','Links internos','Conteúdo útil','JSON-LD'] },
  { id:'seguranca', title:'14. Segurança', icon:<Shield className="w-4 h-4"/>, topics:['noopener noreferrer','referrerpolicy','download','nofollow ugc','Sanitização'] },
  { id:'i18n', title:'15. i18n', icon:<Languages className="w-4 h-4"/>, topics:['lang por trecho','dir="rtl"','hreflang','Encoding correto'] },
  { id:'jsonld', title:'16. JSON-LD', icon:<Code className="w-4 h-4"/>, topics:['BreadcrumbList','Article / Product','Organization / WebSite','FAQPage'] },
  { id:'pwa', title:'17. PWA', icon:<Smartphone className="w-4 h-4"/>, topics:['manifest','theme-color','Ícones','Service Worker','Offline básico'] },
  { id:'email', title:'18. HTML Email', icon:<Mail className="w-4 h-4"/>, topics:['Layout tabelas','CSS inline','Largura 600px','Fallbacks','alt adequado'] },
  { id:'checklist', title:'19. Checklist', icon:<CheckCircle className="w-4 h-4"/>, topics:['lang + main','Headings ok','Imagens alt+dim','Links externos seguros','Form label+autocomplete','Resource hints'] },
  { id:'ferramentas', title:'20. Ferramentas', icon:<Wrench className="w-4 h-4"/>, topics:['Validator','Lighthouse','axe DevTools','NVDA/VoiceOver','Coverage/Network'] },
  { id:'katas', title:'21. Katas', icon:<Target className="w-4 h-4"/>, topics:['Blog semântico','Menu acessível','Checkout nativo','Tabela financeira','Hero srcset','Página pt-BR/en','OG/Twitter debug','Preload fontes'] }
]

export default function HtmlPage(){
  const [active,setActive] = useState('')
  const [done,setDone] = useState(new Set())
  const [showTop,setShowTop] = useState(false)
  const [showSide,setShowSide] = useState(false)
  const [mini,setMini] = useState(false)

  useEffect(()=>{
    const onScroll=()=>{
      const y = window.scrollY
      setShowTop(y>400)
      setShowSide(y>320)
      const els = sections.map(s=>document.getElementById(s.id)).filter(Boolean)
      const current = els.find(el=>{ const r = el.getBoundingClientRect(); return r.top<=110 && r.bottom>=110 })
      if(current) setActive(current.id)
    }
    window.addEventListener('scroll',onScroll)
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])

  const mark = id => setDone(prev=> new Set([...prev,id]))
  const progress = (done.size/sections.length)*100

  return (
    <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-10 pt-14">
      <Hero progress={progress} count={`${done.size}/${sections.length}`}/>
      {showSide && <SideNav sections={sections} active={active} done={done} />}
      {sections.map((s,i)=>(
        <React.Fragment key={s.id}>
          <SectionBlock section={s} index={i} complete={()=>mark(s.id)} completed={done.has(s.id)} />
          {i<sections.length-1 && <Divider />}
        </React.Fragment>
      ))}
      {done.size===sections.length && <Certificate />}
      <Floating showTop={showTop} onTop={()=>window.scrollTo({top:0,behavior:'smooth'})} toggleMini={()=>setMini(m=>!m)} />
      <MiniProgress show={mini} onClose={()=>setMini(false)} sections={sections} done={done} progress={progress} />
    </div>
  )
}

function Hero({progress,count}){
  return (
    <motion.section className="text-center py-14" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
      <div className="inline-flex items-center bg-gradient-html-accent text-white text-[11px] font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase shadow-lg">
        <Trophy className="w-4 h-4 mr-2"/> HTML5 Mastery
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-5 font-mono gradient-title">Guia HTML Completo</h1>
      <p className="text-html-text-soft text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-7">Da base à prática moderna. Estrutura, semântica, acessibilidade, performance e SEO – tudo em um só lugar.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
        <Button size="lg" className="bg-gradient-html-accent text-white" onClick={()=>document.getElementById('base')?.scrollIntoView({behavior:'smooth'})}>
          <Play className="w-5 h-5 mr-2"/> Começar
        </Button>
        <Button variant="outline" size="lg" className="border-html-border text-html-accent hover:bg-html-code-bg">
          <Download className="w-5 h-5 mr-2"/> PDF
        </Button>
      </div>
      <div className="mx-auto max-w-md">
        <div className="w-full h-2 bg-html-code-bg rounded-full overflow-hidden border border-html-border mb-2">
          <motion.div className="h-full bg-gradient-to-r from-orange-500 to-amber-400" initial={{width:0}} animate={{width:`${progress}%`}} transition={{duration:.6}}/>
        </div>
        <span className="text-[11px] text-html-text-soft">{Math.round(progress)}% • {count}</span>
      </div>
    </motion.section>
  )
}

function SideNav({sections,active,done}){
  return (
    <motion.aside initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40 w-64">
      <div className="bg-html-code-bg/90 backdrop-blur-xl rounded-xl p-5 border border-html-border max-h-[75vh] overflow-y-auto space-y-1 shadow-lg">
        <h3 className="font-semibold text-html-text-soft text-xs tracking-wide uppercase mb-3 flex items-center gap-2"><Book className="w-3 h-3"/> Seções</h3>
        {sections.map(s=> (
          <button key={s.id} onClick={()=>document.getElementById(s.id)?.scrollIntoView({behavior:'smooth'})} className={`group flex items-center gap-3 w-full p-2.5 rounded-lg text-left text-[13px] transition-all ${active===s.id? 'bg-html-code-bg text-html-accent shadow-lg':'text-html-text-soft hover:bg-html-code-bg/60 hover:text-html-text'}`}>
            <span className="text-html-accent">{s.icon}</span>
            <span className="flex-1">{s.title}</span>
            {done.has(s.id)? <CheckCircle className="w-4 h-4 text-orange-400"/> : <div className="w-4 h-4 border border-html-border rounded-full opacity-30"/>}
            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
          </button>
        ))}
      </div>
    </motion.aside>
  )
}

function SectionBlock({section,index,complete,completed}){
  const [show,setShow] = useState(false)
  const [exampleIndex,setExampleIndex] = useState(0)
  return (
    <motion.section id={section.id} className="py-14" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-120px'}} transition={{duration:.55, delay:index*0.04}}>
      <div className="flex items-center mb-8">
        <div className="mr-4 p-3 rounded-xl bg-html-code-bg text-html-accent">{section.icon}</div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold gradient-title mb-2">{section.title}</h2>
          <div className="flex flex-wrap gap-2">
            {section.topics.slice(0,3).map((t,i)=>(<span key={i} className="text-[11px] tracking-wide px-3 py-1 rounded-full bg-html-code-bg text-html-text-soft">{t}</span>))}
            {section.topics.length>3 && <span className="text-[11px] text-html-text-soft">+{section.topics.length-3} more</span>}
          </div>
        </div>
        <button onClick={complete} className={`p-3 rounded-xl transition-all ${completed? 'bg-orange-500 text-white shadow-lg':'bg-html-code-bg border border-html-border text-html-text-soft hover:text-html-text'}`} aria-label="Concluir seção">
          <CheckCircle className="w-5 h-5"/>
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wide text-html-text-soft uppercase">Conceitos</h3>
          {section.topics.map((topic,i)=>(
            <motion.div key={i} className="flex items-center gap-3 p-4 bg-html-code-bg rounded-lg border border-html-border hover:border-html-accent/40 transition-all cursor-pointer group" whileHover={{scale:1.02}} onClick={()=>setExampleIndex(i)}>
              <div className="w-2 h-2 rounded-full bg-orange-400"/>
              <span className="text-html-text group-hover:text-orange-300 text-sm">{topic}</span>
              <ArrowRight className="w-4 h-4 text-html-text-soft ml-auto opacity-0 group-hover:opacity-100 transition-opacity"/>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wide text-html-text-soft uppercase">Exemplo</h3>
            <Button variant="outline" size="sm" onClick={()=>setShow(s=>!s)} className="border-html-border text-html-accent hover:bg-html-code-bg">
              <Eye className="w-4 h-4 mr-2"/> {show? 'Ocultar':'Ver'} Código
            </Button>
          </div>
          <Example section={section} index={exampleIndex} show={show} />
        </div>
      </div>
    </motion.section>
  )
}

function Example({section,index,show}){
  const [copied,setCopied] = useState(false)
  const examples = {
    base:['<!DOCTYPE html>\n<html lang="pt-BR">...</html>','<img src="img.jpg" alt="Descrição" loading="lazy"/>'],
    documento:['<head>\n  <meta charset="UTF-8">...','<title>Página</title>'],
    semantica:['<header>...</header>','<section><article>...</article></section>'],
    imagens:['<img src="hero.jpg" alt="Hero" width="800" height="400"/>','<picture>...</picture>'],
    performance:['<link rel="preload" as="font" href="font.woff2" crossorigin>', '<script src="app.js" defer></script>']
  }
  const code = (examples[section.id]||['// Exemplo em breve'])[index] || (examples[section.id]||['// Exemplo'])[0]
  const copy=()=>{navigator.clipboard.writeText(code).then(()=>{setCopied(true); setTimeout(()=>setCopied(false),1500)})}
  return (
    <div className="relative">
      <AnimatePresence>
        {show && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="bg-html-code-bg border border-html-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 flex items-center justify-between border-b border-html-border">
              <span className="text-xs text-html-text-soft font-mono truncate max-w-[60%]">{section.topics[index]}</span>
              <button onClick={copy} className="text-html-text-soft hover:text-html-text transition-colors" title="Copiar">{copied? <Check className="w-4 h-4"/>:<Copy className="w-4 h-4"/>}</button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-xs leading-relaxed text-html-text font-mono"><code>{code}</code></pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!show && (
        <div className="bg-html-code-bg border border-html-border rounded-lg p-8 text-center">
          <Code className="w-10 h-10 text-html-text-soft mx-auto mb-3 opacity-50"/>
          <p className="text-html-text-soft text-sm">Clique em "Ver Código" para visualizar o exemplo</p>
        </div>
      )}
    </div>
  )
}

function Divider(){
  return (
    <div className="flex items-center gap-3 py-8">
      <div className="flex-1 h-px bg-gradient-html-border"/>
      <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"/>
      <div className="flex-1 h-px bg-gradient-html-border"/>
    </div>
  )
}

function Certificate(){
  return (
    <motion.div initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="mt-16 bg-gradient-html rounded-2xl p-8 text-center border border-html-border relative overflow-hidden">
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-html-accent rounded-full mb-6 shadow-lg">
          <Trophy className="w-12 h-12 text-white"/>
        </div>
        <h3 className="text-3xl font-bold mb-4 bg-gradient-html-accent bg-clip-text text-transparent">Parabéns! 🎉</h3>
        <p className="text-html-text-soft mb-6 max-w-lg mx-auto">Você completou todas as seções deste guia. Continue praticando e avance para CSS e JavaScript.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-html-accent text-white"><Download className="w-4 h-4 mr-2"/> Certificado</Button>
          <Button variant="outline" className="border-html-border text-html-text-soft hover:text-html-text hover:bg-html-code-bg"><ArrowRight className="w-4 h-4 mr-2"/> Próximo: CSS</Button>
        </div>
      </div>
    </motion.div>
  )
}

function Floating({showTop,onTop,toggleMini}){
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.button whileHover={{scale:1.08}} whileTap={{scale:.9}} className="p-3 bg-html-code-bg border border-html-border rounded-full text-html-text-soft hover:text-html-text" onClick={toggleMini} title="Progresso">
        <CheckCircle className="w-5 h-5"/>
      </motion.button>
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.8}} whileHover={{scale:1.08}} whileTap={{scale:.9}} onClick={onTop} className="p-3 bg-html-code-bg border border-html-border rounded-full text-html-text-soft hover:text-html-text" aria-label="Voltar ao topo">
            <ChevronUp className="w-5 h-5"/>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

function MiniProgress({show,onClose,sections,done,progress}){
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{opacity:0,x:300}} animate={{opacity:1,x:0}} exit={{opacity:0,x:300}} className="fixed bottom-24 right-6 bg-html-code-bg/95 backdrop-blur-xl border border-html-border rounded-xl p-6 w-72 shadow-2xl z-40">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-html-text">Progresso</h4>
            <button onClick={onClose} className="text-html-text-soft hover:text-html-text transition-colors"><X className="w-4 h-4"/></button>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-html-text-soft">Completado</span>
              <span className="text-html-accent-warm font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-html-code-bg rounded-full overflow-hidden border border-html-border">
              <motion.div className="h-full bg-gradient-to-r from-orange-500 to-amber-400" initial={{width:0}} animate={{width:`${progress}%`}} transition={{duration:.5}}/>
            </div>
          </div>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
            {sections.slice(0,6).map(s=>(
              <div key={s.id} className="flex items-center gap-3 text-xs">
                {done.has(s.id)? <CheckCircle className="w-4 h-4 text-orange-400"/>:<div className="w-4 h-4 border border-html-border rounded-full"/>}
                <span className="text-html-text-soft truncate">{s.title}</span>
              </div>
            ))}
            {sections.length>6 && <div className="text-[11px] text-html-text-soft text-center pt-1">+{sections.length-6} seções…</div>}
          </div>
        </motion.div>
      )} 
      //
    </AnimatePresence>
  )
}

function MediaSection() {
  return (
    <Section id="midia" title="Imagens e Multimídia" icon={<Layers className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <CodeBlock code={`<!-- Imagem responsiva com lazy loading -->\n<img src="imagem-pequena.jpg"\n     srcset="imagem-pequena.jpg 400w,\n             imagem-media.jpg 800w,\n             imagem-grande.jpg 1200w"\n     sizes="(max-width: 600px) 100vw,\n            (max-width: 1200px) 50vw,\n            33vw"\n     alt="Descrição detalhada da imagem"\n     loading="lazy"\n     decoding="async" />\n\n<!-- Imagem com fallback -->\n<picture>\n  <source srcset="imagem.webp" type="image/webp">\n  <source srcset="imagem.jpg" type="image/jpeg">\n  <img src="imagem.jpg" alt="Descrição da imagem">\n</picture>\n\n<!-- Vídeo com controles -->\n<video controls \n       width="640" \n       height="360"\n       poster="thumbnail.jpg"\n       preload="metadata">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  <track src="legendas-pt.vtt" \n         kind="subtitles" \n         srclang="pt" \n         label="Português">\n  Seu navegador não suporta vídeo HTML5.\n</video>\n\n<!-- Áudio -->\n<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  <source src="audio.ogg" type="audio/ogg">\n  Seu navegador não suporta áudio HTML5.\n</audio>`} />
        <div className="space-y-4">
          <KeyItem label="srcset" description="Múltiplas resoluções de imagem" />
          <KeyItem label="sizes" description="Tamanhos da imagem para diferentes telas" />
          <KeyItem label="loading='lazy'" description="Carregamento sob demanda" />
          <KeyItem label="decoding='async'" description="Decodificação assíncrona" />
          <KeyItem label="<picture>" description="Imagens responsivas com fallback" />
          <KeyItem label="poster" description="Imagem de capa para vídeos" />
          <KeyItem label="preload" description="Controla pré-carregamento de mídia" />
          <KeyItem label="<track>" description="Legendas e descrições para vídeos" />
        </div>
      </div>
    </Section>
  )
}

function AccessibilitySection() {
  return (
    <Section id="acessibilidade" title="Acessibilidade (ARIA)" icon={<Shield className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <CodeBlock code={`<!-- Landmark roles -->\n<header role="banner">\n  <nav role="navigation" aria-label="Menu principal">\n    <ul>\n      <li><a href="#" aria-current="page">Home</a></li>\n      <li><a href="#">Sobre</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main role="main">\n  <!-- Botão com estado -->\n  <button aria-pressed="false" \n          aria-expanded="false"\n          aria-controls="menu-dropdown">\n    Menu\n  </button>\n  \n  <!-- Lista com descrição -->\n  <ul aria-labelledby="lista-titulo">\n    <li>Item 1</li>\n    <li>Item 2</li>\n  </ul>\n  <h3 id="lista-titulo">Título da Lista</h3>\n  \n  <!-- Input com descrição -->\n  <label for="senha">Senha:</label>\n  <input type="password" \n         id="senha"\n         aria-describedby="senha-help"\n         aria-required="true" />\n  <div id="senha-help">\n    Mínimo 8 caracteres com letras e números\n  </div>\n  \n  <!-- Conteúdo oculto para leitores -->\n  <span aria-hidden="true">👍</span>\n  <span class="sr-only">Curtir</span>\n</main>`} />
        <div className="space-y-4">
          <KeyItem label="aria-label" description="Rótulo acessível para o elemento" />
          <KeyItem label="aria-labelledby" description="ID do elemento que rotula" />
          <KeyItem label="aria-describedby" description="ID da descrição adicional" />
          <KeyItem label="aria-expanded" description="Estado expandido/colapsado" />
          <KeyItem label="aria-pressed" description="Estado pressionado de botão" />
          <KeyItem label="aria-current" description="Item atual em navegação" />
          <KeyItem label="aria-hidden" description="Oculta conteúdo decorativo" />
          <KeyItem label="role" description="Define o papel semântico" />
          <KeyItem label="tabindex" description="Controla ordem de navegação" />
        </div>
      </div>
    </Section>
  )
}

function SeoSection() {
  return (
    <Section id="seo" title="Otimização para SEO" icon={<Search className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <CodeBlock code={`<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  \n  <!-- SEO Básico -->\n  <title>Título da Página - Palavra-chave Principal</title>\n  <meta name="description" content="Descrição otimizada com palavras-chave em até 160 caracteres">\n  <meta name="keywords" content="html, seo, otimização, web">\n  <meta name="author" content="Seu Nome">\n  <link rel="canonical" href="https://seusite.com/pagina">\n  \n  <!-- Open Graph (Facebook) -->\n  <meta property="og:title" content="Título para Redes Sociais">\n  <meta property="og:description" content="Descrição para redes sociais">\n  <meta property="og:image" content="https://seusite.com/imagem.jpg">\n  <meta property="og:url" content="https://seusite.com/pagina">\n  <meta property="og:type" content="website">\n  \n  <!-- Twitter Card -->\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="Título para Twitter">\n  <meta name="twitter:description" content="Descrição para Twitter">\n  <meta name="twitter:image" content="https://seusite.com/imagem.jpg">\n  \n  <!-- Structured Data (JSON-LD) -->\n  <script type="application/ld+json">\n  {\n    "@context": "https://schema.org",\n    "@type": "WebPage",\n    "name": "Nome da Página",\n    "description": "Descrição da página"\n  }\n  </script>\n</head>`} />
        <div className="space-y-4">
          <KeyItem label="<title>" description="Título único, descritivo (50-60 caracteres)" />
          <KeyItem label="meta description" description="Resumo atrativo (150-160 caracteres)" />
            <KeyItem label="canonical" description="URL canônica para evitar conteúdo duplicado" />
          <KeyItem label="Open Graph" description="Otimização para Facebook e LinkedIn" />
          <KeyItem label="Twitter Card" description="Previsualizações no Twitter" />
          <KeyItem label="JSON-LD" description="Dados estruturados para Google" />
          <KeyItem label="alt em imagens" description="Descrições para indexação de imagens" />
          <KeyItem label="URLs semânticas" description="URLs descritivas e amigáveis" />
        </div>
      </div>
    </Section>
  )
}

function ResponsiveSection() {
  return (
    <Section id="responsivo" title="Design Responsivo" icon={<Smartphone className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <CodeBlock code={`<!-- Meta viewport obrigatória -->\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n<!-- Imagens responsivas -->\n<img src="pequena.jpg"\n     srcset="pequena.jpg 320w,\n             media.jpg 768w,\n             grande.jpg 1200w"\n     sizes="(max-width: 768px) 100vw,\n            (max-width: 1200px) 50vw,\n            33vw"\n     alt="Imagem responsiva" />\n\n<!-- Tabelas responsivas -->\n<div class="table-container">\n  <table>\n    <thead>\n      <tr>\n        <th>Coluna 1</th>\n        <th>Coluna 2</th>\n        <th>Coluna 3</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td data-label="Coluna 1">Dados 1</td>\n        <td data-label="Coluna 2">Dados 2</td>\n        <td data-label="Coluna 3">Dados 3</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- Navegação mobile -->\n<nav class="mobile-nav">\n  <button class="menu-toggle" aria-expanded="false">\n    <span class="sr-only">Abrir menu</span>\n    <span class="hamburger"></span>\n  </button>\n  <ul class="menu-items">\n    <li><a href="#">Home</a></li>\n    <li><a href="#">Sobre</a></li>\n    <li><a href="#">Contato</a></li>\n  </ul>\n</nav>`} />
        <div className="space-y-4">
          <KeyItem label="viewport" description="Meta tag essencial para responsividade" />
          <KeyItem label="srcset/sizes" description="Imagens que se adaptam ao dispositivo" />
          <KeyItem label="Mobile-first" description="Desenvolver primeiro para mobile" />
          <KeyItem label="Touch-friendly" description="Elementos tocáveis de 44px+" />
          <KeyItem label="data-label" description="Rótulos para tabelas em mobile" />
          <KeyItem label="Navegação adaptável" description="Menus que funcionam em qualquer tela" />
          <KeyItem label="Performance" description="Otimizar para conexões lentas" />
        </div>
      </div>
    </Section>
  )
}

function BestPractices() {
  return (
    <Section id="boas-praticas" title="Melhores Práticas" icon={<Zap className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-html-accent-warm mb-3">✅ Faça Sempre</h4>
            <ul className="space-y-2 text-sm text-html-text-soft">
              <li>• Use elementos semânticos (header, nav, main, footer)</li>
              <li>• Inclua atributos alt em todas as imagens</li>
              <li>• Mantenha hierarquia correta de headings (h1→h2→h3)</li>
              <li>• Use labels associados aos inputs</li>
              <li>• Valide seu HTML no W3C Validator</li>
              <li>• Teste com leitores de tela</li>
              <li>• Otimize para performance (lazy loading)</li>
              <li>• Use HTTPS sempre</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-html-accent mb-3">❌ Evite</h4>
            <ul className="space-y-2 text-sm text-html-text-soft">
              <li>• Divitis (usar divs desnecessariamente)</li>
              <li>• Estilos inline excessivos</li>
              <li>• Pular níveis de heading</li>
              <li>• Usar tabelas para layout</li>
              <li>• Elementos vazios apenas para estilo</li>
              <li>• IDs e classes não descritivos</li>
              <li>• Autoplay em mídia</li>
            </ul>
          </div>
        </div>
        <CodeBlock code={`<!-- ✅ HTML Bem Estruturado -->\n<article class="blog-post">\n  <header>\n    <h1>Título do Artigo</h1>\n    <time datetime="2024-01-15">15 de Janeiro, 2024</time>\n    <address>Por <a href="/autor">Nome do Autor</a></address>\n  </header>\n  \n  <main>\n    <section>\n      <h2>Introdução</h2>\n      <p>Conteúdo da introdução...</p>\n    </section>\n    \n    <section>\n      <h2>Desenvolvimento</h2>\n      <p>Conteúdo principal...</p>\n      \n      <figure>\n        <img src="diagrama.jpg" \n             alt="Diagrama mostrando a estrutura HTML" />\n        <figcaption>\n          Estrutura básica de um documento HTML\n        </figcaption>\n      </figure>\n    </section>\n  </main>\n  \n  <footer>\n    <nav aria-label="Artigos relacionados">\n      <h3>Leia também:</h3>\n      <ul>\n        <li><a href="/css">Guia de CSS</a></li>\n        <li><a href="/js">JavaScript Básico</a></li>\n      </ul>\n    </nav>\n  </footer>\n</article>`} />
      </div>
    </Section>
  )
}

function ModernHtmlSection() {
  return (
    <Section id="html-moderno" title="HTML Moderno e Futuro" icon={<Zap className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <CodeBlock code={`<!-- Web Components -->\n<my-custom-element data-value="123">\n  <template>\n    <style>\n      /* Estilos isolados */\n    </style>\n    <div class="component-content">\n      <slot></slot>\n    </div>\n  </template>\n</my-custom-element>\n\n<!-- Progressive Web App -->\n<link rel="manifest" href="/manifest.json">\n<meta name="theme-color" content="#000000">\n<link rel="apple-touch-icon" href="/icon-192.png">\n\n<!-- Lazy loading nativo -->\n<img src="imagem.jpg" loading="lazy" decoding="async" />\n<iframe src="video.html" loading="lazy"></iframe>\n\n<!-- CSS Container Queries -->\n<div class="card-container">\n  <article class="card">\n    <h3>Cartão Responsivo</h3>\n    <p>Se adapta ao contêiner, não à viewport</p>\n  </article>\n</div>\n\n<!-- Preload crítico -->\n<link rel="preload" href="font.woff2" as="font" crossorigin>\n<link rel="preload" href="hero.jpg" as="image">\n\n<!-- Service Worker -->\n<script>\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.register('/sw.js');\n  }\n</script>`} />
        <div className="space-y-4">
          <KeyItem label="Web Components" description="Elementos customizados reutilizáveis" />
          <KeyItem label="Shadow DOM" description="Isolamento de estilos e comportamento" />
          <KeyItem label="PWA" description="Progressive Web Apps com manifest" />
          <KeyItem label="Loading='lazy'" description="Lazy loading nativo do HTML" />
          <KeyItem label="Preload/Prefetch" description="Otimizações de carregamento" />
          <KeyItem label="Container Queries" description="Queries baseadas no contêiner" />
          <KeyItem label="Service Workers" description="Funcionalidade offline e cache" />
          <KeyItem label="WebAssembly" description="Performance próxima ao nativo" />
        </div>
      </div>
      <div className="mt-8 bg-html-code-bg border border-html-border rounded-lg p-6">
        <h4 className="font-semibold text-html-accent-warm mb-3">🚀 Próximos Passos</h4>
        <p className="text-html-text-soft mb-4">
          Para dominar completamente o desenvolvimento web moderno, continue estudando:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Button variant="html" className="justify-start">
            <Code className="w-4 h-4" />
            CSS Grid e Flexbox
          </Button>
          <Button variant="html" className="justify-start">
            <Zap className="w-4 h-4" />
            JavaScript ES2024+
          </Button>
          <Button variant="html" className="justify-start">
            <Globe className="w-4 h-4" />
            APIs Web Modernas
          </Button>
          <Button variant="html" className="justify-start">
            <Shield className="w-4 h-4" />
            Web Security
          </Button>
        </div>
      </div>
    </Section>
  )
}

function Section({ id, title, icon, children }) {
  return (
    <motion.section
      id={id}
      className="py-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center mb-6 relative">
        {icon && <div className="text-html-accent-warm mr-3">{icon}</div>}
        <h2 className="text-2xl font-semibold bg-gradient-html-accent bg-clip-text text-transparent flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-html-accent-warm shadow-[0_0_0_3px_rgba(255,127,81,0.25)]" />
          {title}
        </h2>
        <a href={`#${id}`} className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity text-html-accent text-sm">#</a>
        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-html-border" />
      </div>
      {children}
    </motion.section>
  )
}

// (Removed duplicate Divider definition to avoid redeclaration)

function CodeBlock({ code }) {
  const [copied, setCopied] = React.useState(false)
  function handleCopy(){
    navigator.clipboard.writeText(code).then(()=>{
      setCopied(true); setTimeout(()=>setCopied(false), 1800)
    })
  }
  return (
    <div className="bg-html-code-bg border border-html-border rounded-xl p-4 pt-3 relative overflow-auto group">
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 bg-html-accent rounded-full"></div>
        <div className="w-3 h-3 bg-html-accent-warm rounded-full"></div>
        <div className="w-3 h-3 bg-html-accent-soft rounded-full"></div>
      </div>
      <button onClick={handleCopy} className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2 text-html-text-soft hover:text-html-text bg-html-code-bg/60 backdrop-blur-sm border border-html-border px-2 py-1 rounded-md text-[10px] inline-flex items-center gap-1">
        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />} {copied ? 'Copiado' : 'Copiar'}
      </button>
      <pre className="text-xs leading-relaxed text-html-text font-mono overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function KeyItem({ label, description }) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="font-semibold text-html-accent-warm font-mono">{label}</span>
      <span className="text-html-text-soft flex-1">{description}</span>
    </div>
  )
}
