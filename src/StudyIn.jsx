import StudyLayout from '@/study/StudyLayout.jsx'
import TechTemplate from '@/study/TechTemplate.jsx'
import HtmlPage from '@/study/html/HtmlPage.jsx'
import CssPage from '@/study/css/index.jsx'
import JavascriptPage from '@/study/javascript/index.jsx'
import ReactPage from '@/study/react/index.jsx'
import NodePage from '@/study/node/index.jsx'
import PrismaPage from '@/study/prisma/index.jsx'
import MysqlPage from '@/study/mysql/index.jsx'
import IaPage from '@/study/ia/index.jsx'
import { Navigate, Routes, Route } from 'react-router-dom'
import { technologies } from '@/study/techData.js'

// Acts as the parent routing element for nested technology pages
export default function StudyIn({ language='pt', setLanguage }) {
  const first = technologies[0].slug
  return (
    <Routes>
      <Route element={<StudyLayout language={language} setLanguage={setLanguage} />}>        
        <Route index element={<Navigate to={first} replace />} />
        {technologies.map(t => {
          let element
          switch(t.slug){
            case 'html': element = <HtmlPage />; break
            case 'css': element = <CssPage />; break
            case 'javascript': element = <JavascriptPage />; break
            case 'react': element = <ReactPage />; break
            case 'node': element = <NodePage />; break
            case 'prisma': element = <PrismaPage />; break
            case 'mysql': element = <MysqlPage />; break
            case 'ia': element = <IaPage />; break
            default: element = <TechTemplate slug={t.slug} />
          }
          return <Route key={t.slug} path={t.slug} element={element} />
        })}
        <Route path="*" element={<Navigate to={first} replace />} />
      </Route>
    </Routes>
  )
}