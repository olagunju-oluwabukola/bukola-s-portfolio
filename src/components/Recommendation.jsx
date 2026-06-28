import { ExternalLink } from 'lucide-react'

// ─────────────────────────────────────────────
// SWAP YOUR RECOMMENDATIONS HERE
// ─────────────────────────────────────────────
const RECOMMENDATIONS = [
  {
    id: 1,
    // ← Paste the full LinkedIn recommendation text here
    quote: "Ola is one of the very  product-minded persons  I've worked with. Even as a junior developer intern, she contributed meaningfully to roadmap discussions, feature planning, and product decisions. She consistently demonstrated a strong understanding of user needs,and ask questions on the feasibility of  technical execution and I am confident she will continue to thrive in product-focused roles",
    name: 'Commander',
    title: 'Technical Lead',
    company: 'Payd Money',

    linkedinUrl: null,
  },
  {
    id: 2,
    quote: 'Bukola was instrumental in shaping and driving the product success at Alerah. She demonstrated a remarkable ability to navigate ambiguity, define clear product requirements, and keep teams aligned around shared goals. Her user-centric approach, attention to detail were evident in every sprint. She took ownership of the product journey from concept to launch and consistently fostered productive collaboration across teams and I would work with her again without hesitation.'
,
    name: 'Victor',
    title: 'Senior Engineer',
    company: 'Alerah',
    linkedinUrl: null,
  },
]


function QuoteCard({ rec }) {
  return (
    <div className="bg-white border border-border-custom rounded-2xl p-6 flex flex-col gap-5">
      {/* Quote mark */}
      <span className="text-[28px] leading-none text-ink-muted/40 font-serif select-none">"</span>

      {/* Quote body */}
      <p className="text-[15px] text-ink leading-relaxed flex-1">
        "{rec.quote}"
      </p>



      {/* Divider */}
      <div className="border-t border-border-custom" />

      {/* Recommender */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[14px] font-semibold text-ink">{rec.name}</div>
          <div className="text-[12px] text-ink-muted mt-0.5">
            {rec.title} · {rec.company}
          </div>
        </div>
        {rec.linkedinUrl && (
        <a
            href={rec.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center rounded border border-border-custom text-ink-muted hover:text-ink hover:border-ink-muted transition-colors flex-shrink-0 mt-0.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}


export default function RecommendationsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-20">
      <div className="text-[11px] font-medium text-ink-muted tracking-widest uppercase mb-4">
        Recommendations
      </div>
      <h2 className="font-serif text-[clamp(28px,4vw,44px)] leading-tight text-ink mb-12">
        What people I've worked with say.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RECOMMENDATIONS.map(rec => (
          <QuoteCard key={rec.id} rec={rec} />
        ))}
      </div>
    </section>
  )
}