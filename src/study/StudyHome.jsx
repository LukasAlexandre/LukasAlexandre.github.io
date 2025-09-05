import React from "react"
import { BookOpen } from "lucide-react"

export default function StudyHome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="inline-flex items-center bg-gradient-html-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
        <BookOpen className="w-4 h-4 mr-2" />
        StudyIn
      </div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-mono">Bem-vindo ao StudyIn</h1>
      <p className="text-html-text-soft text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
        Escolha uma tecnologia acima para começar a explorar o conteúdo detalhado de cada uma.<br />
        Clique em <span className="font-semibold text-html-accent">HTML</span>, <span className="font-semibold text-html-accent">CSS</span>, <span className="font-semibold text-html-accent">JavaScript</span> e mais!
      </p>
      <div className="opacity-60 text-xs">Dica: Você pode navegar entre as tecnologias a qualquer momento.</div>
    </div>
  )
}
