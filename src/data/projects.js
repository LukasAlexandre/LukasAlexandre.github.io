// Returns an array of project objects (language-agnostic core details)
// Each project includes a technologies array used for filtering by language / tech
import thamis01 from '@/assets/images/thamis-01.png'
import fokus01 from '@/assets/images/fokus-01.png'
import aluraDev01 from '@/assets/images/alura-dev-01.png'
import davi01 from '@/assets/images/dave01.png'
import optimus01 from '@/assets/images/optimus.png'
import alurabooks01 from '@/assets/images/books.png'

export function buildProjects(currentLang) {
  return [
    {
      id: 1,
      title: currentLang.projects.thamis.title,
      description: currentLang.projects.thamis.description,
      image: thamis01,
      technologies: currentLang.projects.thamis.tech,
      github: 'https://github.com/LukasAlexandre/Thamis-cake',
      live: 'https://thamis-cake-toyl-jjo22c952-lukas-projects-72e77d7d.vercel.app/index.html',
    },
    {
      id: 2,
      title: currentLang.projects.fokus.title,
      description: currentLang.projects.fokus.description,
      image: fokus01,
      technologies: currentLang.projects.fokus.tech,
      github: 'https://github.com/LukasAlexandre/Fokus',
      live: 'https://fokus-b2prbbs8e-lukas-projects-72e77d7d.vercel.app/',
    },
    {
      id: 3,
      title: currentLang.projects.aluraDev.title,
      description: currentLang.projects.aluraDev.description,
      image: aluraDev01,
      technologies: currentLang.projects.aluraDev.tech,
      github: 'https://github.com/LukasAlexandre/Challenge-Front-end-First-Edition',
      live: 'https://challenge-front-end-first-edition-2jt0ji5k5.vercel.app/',
    },
    {
      id: 4,
      title: 'Imobiliária Davi',
      description: 'Sistema completo para gestão de imóveis com frontend em React, backend com Node.js e banco de dados MySQL via Prisma. Projeto robusto, desenvolvido para uma imobiliária real.',
      image: davi01,
  technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'Prisma', 'MySQL', 'HTML', 'CSS', 'IA'],
      github: '',
      live: 'https://front-8gckb436q-lukas-projects-72e77d7d.vercel.app/',
    },
    {
      id: 5,
      title: 'Optimus Tech',
      description: 'Landing page institucional responsiva para uma agência fictícia do setor de tecnologia. Criada com HTML semântico e estilização moderna em CSS puro.',
      image: optimus01,
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/LukasAlexandre/7-Days-of-Code-HTML-e-CSS-Optimus-Tech',
      live: 'https://optimus-tech-egh1tr6ca-lukas-projects-72e77d7d.vercel.app/',
    },
    {
      id: 6,
      title: 'Alura Books',
      description: 'Interface de uma livraria digital com foco em livros de tecnologia. Projeto realizado como desafio da plataforma Alura, aplicando conceitos de layout e responsividade.',
      image: alurabooks01,
      technologies: ['HTML', 'CSS'],
      github: 'https://github.com/LukasAlexandre/Alurabooks',
      live: 'https://alurabooks-green-delta.vercel.app/',
    }
  ]
}

export function extractAllTechnologies(projects) {
  const set = new Set()
  projects.forEach(p => p.technologies.forEach(t => set.add(t)))
  return Array.from(set).sort()
}