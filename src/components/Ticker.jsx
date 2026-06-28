
const items = [
  'Product Strategy', 'UX Research', 'User Interviews', 'Roadmapping',
  'Case Studies', 'Product Documentation', 'Technical Writing',
  'Data Analysis',
]

function Ticker() {
  const allItems = [...items, ...items]

  return (
    <div className="overflow-hidden bg-accent py-3.5 border-t border-white/10 border-b border-white/10">
      <div className="flex whitespace-nowrap animate-ticker hover:[animation-play-state:paused]">
        {allItems.map((item, i) => (
          <span key={i} className="text-[13px] font-medium tracking-[0.1em] uppercase text-white/85 px-10 inline-flex items-center gap-10">
            {item}
            <span className="text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker