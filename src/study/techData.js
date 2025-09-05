// Metadata for StudyIn technology sections
export const technologies = [
  { slug: 'html', label: 'HTML', color: 'from-orange-500 to-amber-500', description: 'Fundamentos de estruturação semântica da web.', bg: 'tech-bg-html' },
  { slug: 'css', label: 'CSS', color: 'from-sky-500 to-blue-600', description: 'Estilos modernos, layout responsivo e animações.', bg: 'tech-bg-css' },
  { slug: 'javascript', label: 'JavaScript', color: 'from-yellow-400 to-yellow-600', description: 'Linguagem dinâmica para o frontend e além.', bg: 'tech-bg-js' },
  { slug: 'php', label: 'PHP', color: 'from-violet-500 to-indigo-600', description: 'Linguagem para backend web dinâmico e APIs.', bg: 'tech-bg-php' },
  { slug: 'react', label: 'React', color: 'from-cyan-400 to-blue-500', description: 'Biblioteca para interfaces declarativas e componentização.', bg: 'tech-bg-react' },
  { slug: 'node', label: 'Node.js', color: 'from-emerald-500 to-green-600', description: 'JavaScript no servidor, APIs e tooling.', bg: 'tech-bg-node' },
  { slug: 'prisma', label: 'Prisma', color: 'from-fuchsia-500 to-purple-600', description: 'ORM moderno para bancos relacionais e produtividade.', bg: 'tech-bg-prisma' },
  { slug: 'mysql', label: 'MySQL', color: 'from-indigo-500 to-blue-700', description: 'Banco de dados relacional: modelagem e queries.', bg: 'tech-bg-mysql' },
  { slug: 'ia', label: 'IA', color: 'from-pink-500 via-rose-500 to-red-500', description: 'Fundamentos de inteligência artificial e aplicações.', bg: 'tech-bg-ia' },
]

export function getTech(slug){
  return technologies.find(t=>t.slug===slug)
}
