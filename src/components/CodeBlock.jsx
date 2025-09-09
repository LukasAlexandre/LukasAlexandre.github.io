import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function CodeBlock({ code = '', title = 'Exemplo', executable = false }) {
  const [output, setOutput] = useState('')

  const run = () => {
    try {
      // Isola console.log
      const logs = []
      const original = console.log
      console.log = (...args) => {
        logs.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '))
      }
      const fn = new Function(code)
      fn()
      console.log = original
      setOutput(logs.join('\n'))
    } catch (e) {
      setOutput(String(e))
    }
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch (e) {
      setOutput('Falha ao copiar código: ' + String(e))
    }
  }

  return (
    <div className="rounded-lg border bg-muted/10">
      <div className="flex items-center justify-between px-4 py-2 border-b text-sm">
        <span className="text-muted-foreground">{title}</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copy}>Copiar</Button>
          {executable && (
            <Button size="sm" onClick={run} className="bg-gradient-accent text-accent-foreground">Executar</Button>
          )}
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed"><code>{code}</code></pre>
      {executable && (
        <div className="border-t p-4">
          <div className="text-xs text-muted-foreground mb-1">Saída:</div>
          <pre className="text-sm whitespace-pre-wrap">{output || '—'}</pre>
        </div>
      )}
    </div>
  )
}

export default CodeBlock
