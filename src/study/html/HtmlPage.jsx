import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ExternalLink, Book, Code, Layers, FileText, Globe, Zap, Shield, Search, Smartphone, Copy, Check } from "lucide-react"
import './html.css'

export default function HtmlPage() {
  return (
    <div className="html-theme min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Hero />
        <ReferenceCard />
        <StructureSection />
        <Divider />
        <SemanticSection />
        <Divider />
        <ElementsSection />
        <Divider />
        <AttributesSection />
        <Divider />
        <FormsSection />
        <Divider />
        <MediaSection />
        <Divider />
        <AccessibilitySection />
        <Divider />
        <SeoSection />
        <Divider />
        <ResponsiveSection />
        <Divider />
        <BestPractices />
        <Divider />
        <ModernHtmlSection />
      </div>
    </div>
  )
}

function Hero() {
  return (
    <motion.section 
      className="pt-16 pb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center bg-gradient-html-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
        <Code className="w-3 h-3 mr-2" />
        HTML5 Completo
      </div>
  <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 font-mono">
        HTML - Guia Completo
      </h1>
  <p className="text-html-text-soft text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-7">
        HyperText Markup Language - A linguagem padrão para criar e estruturar páginas da web. 
        Descubra tudo sobre elementos, semântica, acessibilidade, SEO e as melhores práticas modernas.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button variant="html" size="lg">
          <Book className="w-4 h-4" />
          Começar Estudos
        </Button>
        <Button variant="html" size="lg">
          <ExternalLink className="w-4 h-4" />
          Documentação MDN
        </Button>
      </div>
    </motion.section>
  )
}

function ReferenceCard() {
  return (
    <motion.div 
      className="bg-gradient-html rounded-xl p-6 md:p-8 mb-12 border border-html-border shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-3 text-html-text">Referências de Estudo</h2>
      <p className="text-xs md:text-sm leading-relaxed mb-4 text-html-text-soft">
        Todos os conceitos explicados nesta página estão baseados nas especificações oficiais do W3C e melhores práticas da comunidade. 
        Acesse nossa planilha completa de estudos para acompanhar seu progresso.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button variant="html">
          <FileText className="w-4 h-4" />
          Planilha de Estudos
        </Button>
        <Button variant="html">
          <ExternalLink className="w-4 h-4" />
          Especificação W3C
        </Button>
      </div>
    </motion.div>
  )
}

function StructureSection() {
  return (
    <Section id="estrutura" title="Estrutura Básica do HTML" icon={<Layers className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <CodeBlock code={`<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta name="description" content="Descrição da página" />\n    <title>Título da Página</title>\n    <link rel="stylesheet" href="styles.css" />\n  </head>\n  <body>\n    <header>\n      <h1>Cabeçalho Principal</h1>\n      <nav>Menu de Navegação</nav>\n    </header>\n    <main>\n      <section>Conteúdo Principal</section>\n    </main>\n    <footer>Rodapé</footer>\n  </body>\n</html>`} />
        <div className="space-y-4">
          <KeyItem label="<!DOCTYPE html>" description="Declara o documento como HTML5" />
          <KeyItem label="<html>" description="Elemento raiz que contém todo o conteúdo" />
          <KeyItem label="<head>" description="Metadados invisíveis ao usuário" />
          <KeyItem label="<meta charset>" description="Define a codificação de caracteres" />
          <KeyItem label="<meta viewport>" description="Controla a visualização em dispositivos móveis" />
          <KeyItem label="<title>" description="Título exibido na aba do navegador" />
          <KeyItem label="<body>" description="Conteúdo visível da página" />
        </div>
      </div>
      <div className="bg-html-code-bg border border-html-border rounded-lg p-4 text-sm text-html-text-soft">
        <strong className="text-html-accent-warm">Dica:</strong> Sempre inclua a declaração DOCTYPE e defina o idioma no elemento html para melhor acessibilidade e SEO.
      </div>
    </Section>
  )
}

function SemanticSection() {
  return (
    <Section id="semantica" title="HTML Semântico" icon={<Globe className="w-5 h-5" />}>
      <p className="mb-6 text-html-text-soft">
        Usar elementos semânticos corretos melhora significativamente a acessibilidade, SEO e manutenibilidade do código.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <CodeBlock code={`<header>\n  <h1>Logo da Empresa</h1>\n  <nav>\n    <ul>\n      <li><a href="#home">Home</a></li>\n      <li><a href="#sobre">Sobre</a></li>\n      <li><a href="#contato">Contato</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <section>\n    <h2>Seção Principal</h2>\n    <article>\n      <h3>Artigo 1</h3>\n      <p>Conteúdo do artigo...</p>\n    </article>\n  </section>\n  \n  <aside>\n    <h3>Conteúdo Relacionado</h3>\n    <p>Informações complementares...</p>\n  </aside>\n</main>\n\n<footer>\n  <p>&copy; 2024 Empresa</p>\n</footer>`} />
        <div className="space-y-4">
          <KeyItem label="<header>" description="Cabeçalho da página ou seção" />
          <KeyItem label="<nav>" description="Links de navegação principais" />
          <KeyItem label="<main>" description="Conteúdo principal único da página" />
          <KeyItem label="<section>" description="Seção temática do conteúdo" />
          <KeyItem label="<article>" description="Conteúdo independente e reutilizável" />
          <KeyItem label="<aside>" description="Conteúdo complementar ou relacionado" />
          <KeyItem label="<footer>" description="Rodapé da página ou seção" />
          <KeyItem label="<figure>" description="Conteúdo ilustrativo com legenda" />
        </div>
      </div>
    </Section>
  )
}

function ElementsSection() {
  return (
    <Section id="elementos" title="Elementos Essenciais" icon={<Code className="w-5 h-5" />}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold text-html-accent-warm">Texto e Tipografia</h4>
          <CodeBlock code={`<h1>Título Principal</h1>\n<h2>Subtítulo</h2>\n<p>Parágrafo de texto.</p>\n<strong>Texto importante</strong>\n<em>Texto enfatizado</em>\n<mark>Texto destacado</mark>\n<small>Texto pequeno</small>\n<del>Texto deletado</del>\n<ins>Texto inserido</ins>`} />
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-html-accent-warm">Listas</h4>
          <CodeBlock code={`<!-- Lista não ordenada -->\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n\n<!-- Lista ordenada -->\n<ol>\n  <li>Primeiro</li>\n  <li>Segundo</li>\n</ol>\n\n<!-- Lista de definições -->\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>`} />
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-html-accent-warm">Links e Navegação</h4>
          <CodeBlock code={`<!-- Link externo -->\n<a href="https://example.com" \n   target="_blank" \n   rel="noopener">\n  Link Externo\n</a>\n\n<!-- Link interno -->\n<a href="#secao">Ir para Seção</a>\n\n<!-- Download -->\n<a href="arquivo.pdf" download>\n  Baixar PDF\n</a>\n\n<!-- Email -->\n<a href="mailto:email@example.com">\n  Enviar Email\n</a>`} />
        </div>
      </div>
    </Section>
  )
}

function AttributesSection() {
  return (
    <Section id="atributos" title="Atributos Fundamentais" icon={<FileText className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-html-accent-warm mb-3">Atributos Globais</h4>
            <div className="space-y-2">
              <KeyItem label="id" description="Identificador único do elemento" />
              <KeyItem label="class" description="Classes CSS para estilização" />
              <KeyItem label="data-*" description="Dados personalizados para JavaScript" />
              <KeyItem label="title" description="Informação adicional em tooltip" />
              <KeyItem label="lang" description="Define o idioma do conteúdo" />
              <KeyItem label="style" description="Estilos CSS inline (evitar)" />
            </div>
          </div>
        </div>
        <CodeBlock code={`<!-- Exemplos de uso de atributos -->\n<div id="container" \n     class="main-content highlighted"\n     data-user-id="123"\n     title="Container principal"\n     lang="pt-BR">\n  \n  <img src="imagem.jpg"\n       alt="Descrição da imagem"\n       width="300"\n       height="200"\n       loading="lazy" />\n  \n  <input type="email"\n         name="email"\n         placeholder="Digite seu email"\n         required\n         aria-label="Campo de email" />\n         \n  <button type="submit"\n          disabled\n          aria-pressed="false">\n    Enviar\n  </button>\n</div>`} />
      </div>
    </Section>
  )
}

function FormsSection() {
  return (
    <Section id="formularios" title="Formulários e Entrada de Dados" icon={<FileText className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-8">
        <CodeBlock code={`<form action="/submit" method="POST" novalidate>\n  <fieldset>\n    <legend>Informações Pessoais</legend>\n    \n    <label for="nome">Nome Completo:</label>\n    <input type="text" \n           id="nome" \n           name="nome" \n           required\n           autocomplete="name"\n           placeholder="Digite seu nome" />\n    \n    <label for="email">Email:</label>\n    <input type="email" \n           id="email" \n           name="email" \n           required\n           autocomplete="email" />\n    \n    <label for="telefone">Telefone:</label>\n    <input type="tel" \n           id="telefone" \n           name="telefone"\n           pattern="[0-9]{11}"\n           autocomplete="tel" />\n  </fieldset>\n  \n  <fieldset>\n    <legend>Preferências</legend>\n    \n    <input type="checkbox" \n           id="newsletter" \n           name="newsletter" />\n    <label for="newsletter">Receber newsletter</label>\n    \n    <input type="radio" \n           id="particular" \n           name="tipo" \n           value="particular" />\n    <label for="particular">Pessoa Física</label>\n    \n    <input type="radio" \n           id="empresa" \n           name="tipo" \n           value="empresa" />\n    <label for="empresa">Pessoa Jurídica</label>\n  </fieldset>\n  \n  <button type="submit">Enviar Formulário</button>\n</form>`} />
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-html-accent-warm mb-3">Tipos de Input</h4>
            <div className="space-y-2 text-sm">
              <KeyItem label="text" description="Texto simples" />
              <KeyItem label="email" description="Email com validação" />
              <KeyItem label="password" description="Senha (texto oculto)" />
              <KeyItem label="tel" description="Número de telefone" />
              <KeyItem label="number" description="Números com controles" />
              <KeyItem label="date" description="Seletor de data" />
              <KeyItem label="file" description="Upload de arquivos" />
              <KeyItem label="checkbox" description="Múltipla seleção" />
              <KeyItem label="radio" description="Seleção única" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-html-accent-warm mb-3">Atributos Importantes</h4>
            <div className="space-y-2 text-sm">
              <KeyItem label="required" description="Campo obrigatório" />
              <KeyItem label="placeholder" description="Texto de exemplo" />
              <KeyItem label="autocomplete" description="Preenchimento automático" />
              <KeyItem label="pattern" description="Regex para validação" />
              <KeyItem label="min/max" description="Valores mínimo/máximo" />
            </div>
          </div>
        </div>
      </div>
    </Section>
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

function Divider() {
  return <div className="h-px bg-gradient-html-border my-12" />
}

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
