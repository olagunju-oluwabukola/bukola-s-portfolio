import { Target, BarChart3, Users, Lightbulb } from 'lucide-react'

const PHILOSOPHY = [
  {
    icon: Target,
    title: 'Strategic ownership',
    body: 'I believe product managers should take responsibility for outcomes, not just requirements. I stay involved throughout the product lifecycle, helping teams stay aligned and focused on delivering value.',
  },
  {
    icon: BarChart3,
    title: 'Data-informed decisions',
    body: 'I combine user feedback with product data to guide decisions. Metrics help me validate ideas, measure impact, and identify opportunities to improve the user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration first',
    body: 'Building great products is a team effort. I value open communication and work closely with cross-functional teams to solve problems and keep everyone moving toward the same goal.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous improvement',
    body: 'I enjoy finding ways to make products and processes better. Whether it\'s identifying usability issues, improving workflows, or refining features after launch, I believe small improvements add up over time.',
  },
]

export default function ProductPhilosophy() {
  return (
    <section className="px-[clamp(5vw,1rem)] py-20">
      <div className="max-w-[1500px] ">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-medium text-[#9C9890] tracking-widest uppercase mb-3">
            Philosophy
          </div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] leading-tight text-[#1C1916]">
            My approach to product management.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PHILOSOPHY.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5E2DC] p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#F0E6DF] flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-[#7A3B1E]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-[#1C1916] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Body */}
              <p className="text-[14px] text-[#5C5750] leading-relaxed font-light">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}