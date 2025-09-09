import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function TopicCard({ title, description, icon, difficulty, topics = [], onClick }) {
  return (
    <Card className="interactive-card h-full">
      <div className="px-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          </div>
          {difficulty && (
            <span className="text-[11px] px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
              {difficulty}
            </span>
          )}
        </div>

        {description && (
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
        )}

        {topics?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.slice(0, 4).map((t, i) => (
              <span key={i} className="text-[11px] px-2 py-1 rounded-full bg-accent/10 text-accent-foreground/90 border border-accent/20">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <Button variant="outline" className="w-full group" onClick={onClick}>
            Explorar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default TopicCard
