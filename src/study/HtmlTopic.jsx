import { motion } from 'framer-motion'

export default function HtmlTopic() {
  return (
    <div className="theme-html">
      <section className="topic-hero">
        <div className="pill-badge mb-4">HTML5</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">HTML5 - Tudo sobre a Linguagem</h1>
        <p className="text-sm max-w-2xl text-[var(--study-text-soft)] leading-relaxed">
          HyperText Markup Language - Linguagem padrão usada para criar e projetar páginas da web. Nesta página você vai encontrar fundamentos, estrutura semântica, boas práticas e exemplos práticos.
        </p>
      </section>

      <div className="ref-card rounded-xl p-6 md:p-8 mb-12">
        <h2 className="text-xl font-semibold mb-3">Referências de Estudo</h2>
        <p className="text-xs md:text-sm leading-relaxed mb-4">
          Os dados que serão explicados e estudados na página abaixo estão com a sua referência a uma planilha de estudos que deixarei no link abaixo.
        </p>
        <button className="btn-outline focus-ring rounded-md px-4 py-2 transition-colors">Planilha</button>
      </div>

      <Section id="estrutura" title="Estrutura HTML" >
        <div className="grid md:grid-cols-2 gap-10">
          <CodeBlock code={`<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Documento</title>\n  </head>\n  <body>\n    <!-- Conteúdo -->\n  </body>\n</html>`} />
          <div className="key-list">
            <div className="key"><b>&lt;!DOCTYPE html&gt;</b><span>Declara o tipo de documento.</span></div>
            <div className="key"><b>&lt;html&gt;</b><span>Raiz do documento.</span></div>
            <div className="key"><b>&lt;head&gt;</b><span>Metadados e configurações.</span></div>
            <div className="key"><b>&lt;meta charset="UTF-8"&gt;</b><span>Define codificação.</span></div>
            <div className="key"><b>&lt;title&gt;</b><span>Título exibido na aba.</span></div>
            <div className="key"><b>&lt;body&gt;</b><span>Conteúdo visível.</span></div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section id="semantica" title="Semântica Essencial">
        <p className="mb-4">Usar tags corretas melhora acessibilidade, SEO e manutenção.</p>
        <CodeBlock code={`<header>Topo do site</header>\n<nav>Links</nav>\n<main>Conteúdo principal</main>\n<aside>Complemento</aside>\n<footer>Rodapé</footer>`} />
      </Section>

      <Divider />

      <Section id="melhores-praticas" title="Boas Práticas">
        <ul className="list-disc pl-6 space-y-1 text-sm text-[var(--study-text-soft)]">
          <li>Usar tags semânticas sempre que possível.</li>
          <li>Manter indentação consistente.</li>
          <li>Adicionar atributos alt em imagens.</li>
          <li>Agrupar conteúdo relacionado com &lt;section&gt; ou &lt;article&gt;.</li>
          <li>Evitar divs desnecessárias (divitis).</li>
        </ul>
      </Section>
    </div>
  )
}

function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="topic-section"
      initial={{opacity:0, y:24}}
      whileInView={{opacity:1, y:0}}
      viewport={{ once:true, margin:'-80px' }}
      transition={{duration:.5, ease:'easeOut'}}
    >
      <div className="flex items-center mb-2">
        <h2>{title}</h2>
        <a href={`#${id}`} className="anchor-link text-[var(--study-accent)]">#</a>
      </div>
      {children}
    </motion.section>
  )
}

function Divider(){
  return <div className="topic-divider" />
}

function CodeBlock({ code }) {
  return (
    <div className="code-block">
      <div className="code-header"><span /></div>
      <pre><code>{code}</code></pre>
    </div>
  )
}
