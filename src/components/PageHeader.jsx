function PageHeader({ label, title, subtitle }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-16 pb-10 animate-fade-up">
      <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-2.5">{label}</p>
      <h1 className="font-serif text-2xl md:text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] tracking-tight text-ink mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base text-ink-mid font-light max-w-[540px] leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export default PageHeader