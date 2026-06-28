import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { ArrowUpRight, FileText, ExternalLink } from 'lucide-react'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'project', label: 'Projects' },
  { id: 'article', label: 'Articles' },
]

const featuredWork = {
  type: 'project',
  title: 'ResumeRx',
  label: 'Personal Project · AI-Powered Platform',
  desc: 'An AI-powered career platform that helps job seekers tailor their resumes to specific roles, generate cover letters, identify skill gaps, prepare for interviews, and track applications, all in one place.',
  href: 'https://resume-writer-eight.vercel.app/',
  tags: [
    { label: 'Product Manager', href: null },
    { label: 'Case Study ↗', href: 'https://docs.google.com/document/d/1PMv2eFxR0Qdf1NEqqqpvdAYezHbzWnhY5n12VUjCz9s/edit?usp=sharing' },
    { label: 'PRD ↗', href: 'https://docs.google.com/document/d/1PjxNtcIhNArxNAW7zNjUbsSPJWPHYyJu/edit?usp=sharing' },
    { label: 'React · TypeScript', href: null },
    { label: 'Firebase · Groq AI', href: null },
  ],
}

const workCards = [
  {
    type: 'case-study',
    client: 'Fintech · UX Analysis',
    title: 'Sterling Bank Mobile App',
    desc: 'Identifying four critical friction points across authentication, transaction flow, navigation, and support chat — with user personas, research, success metrics, and redesign proposals.',
    href: 'https://medium.com/p/3d31cddefe51?postPublishedType=initial',
    tags: ['UX Analysis', 'Information Architecture', 'Fintech'],
    icon: 'bank',
    accent: '#5C4A30',
    bg: '#F0EBE0',
  },
  {
    type: 'case-study',
    client: 'Consumer Apps · User Research',
    title: 'Spotify User Dissatisfaction',
    desc: 'Examining challenges around offline playback, subscription management, load time, and customer support — with actionable recommendations for improving satisfaction.',
    href: 'https://substack.com/home/post/p-199301526',
    tags: ['User Research', 'Product Strategy', 'Consumer Apps'],
    icon: 'spotify',
    accent: '#5C4A30',
    bg: '#F0EBE0',
  },
  {
    type: 'case-study',
    client: 'Mobility & Logistics · Trust',
    title: 'Closing the Trust Gap: inDrive',
    desc: 'Examining commission-avoidance cancellations, delivery tracking manipulation, and vehicle safety verification — with recommendations for improving platform trust and retention.',
    href: 'https://medium.com/@olagunjuoluwabukola2018/closing-the-trust-gap-an-indrive-case-study-2ed07cdce6e5',
    tags: ['User Research', 'Product Strategy', 'Mobility'],
    icon: 'drive',
    accent: '#5C4A30',
    bg: '#F0EBE0',
  },
  {
    type: 'case-study',
    client: 'Consumer Apps · UX Teardown',
    title: 'TikTok Case Study',
    desc: 'Comprehensive UX teardown identifying five friction points across onboarding, navigation, feed personalisation, cognitive load, and privacy — with data-driven redesign proposals.',
    href: '#',
    tags: ['UX Teardown', 'Consumer Apps', 'Personalisation'],
    icon: 'tiktok',
    accent: '#5C4A30',
    bg: '#F0EBE0',
  },
]

const articles = [
  {
    type: 'article',
    title: 'Distributed to millions, adopted by few',
    desc: "What Copilot's 3% problem reveals about how products actually earn their place in people's lives.",
    href: 'https://substack.com/home/post/p-200195227',
    tags: ['AI', 'Adoption', 'User Psychology'],
  },
  {
    type: 'article',
    title: 'Why trust is the most important thing a digital product can earn',
    desc: 'The signals your product sends before you say anything at all.',
    href: 'https://substack.com/home/post/p-199891092',
    tags: ['Product Thinking', 'Strategy', 'Branding'],
  },
]

function WorkIcon({ type, color }) {
  const cls = `w-10 h-8`
  const icons = {
    bank: (
      <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2" className={cls}>
        <rect x="8" y="6" width="32" height="36" rx="3"/>
        <path d="M16 16h16M16 22h16M16 28h10"/>
        <path d="M14 6l10-4 10 4"/>
      </svg>
    ),
    spotify: (
      <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2" className={cls}>
        <circle cx="24" cy="24" r="18"/>
        <path d="M13 20c7-2.5 15-2.5 22 0"/>
        <path d="M15 27c5.5-2 12.5-2 18 0"/>
        <path d="M17 34c4-1.5 10-1.5 14 0"/>
      </svg>
    ),
    drive: (
      <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2" className={cls}>
        <circle cx="24" cy="20" r="10"/>
        <path d="M10 42c0-7.73 6.27-14 14-14s14 6.27 14 14"/>
        <circle cx="24" cy="20" r="3" fill={color} stroke="none"/>
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.2" className={cls}>
        <path d="M28 8c1 5 4 8 8 9"/>
        <path d="M28 8v22a6 6 0 1 1-6-6"/>
        <path d="M36 17v8"/>
      </svg>
    ),
  }
  return icons[type] || null
}

function WorkPage() {
  const [activeTab, setActiveTab] = useState('all')
  const isVisible = (type) => activeTab === 'all' || activeTab === type

  return (
    <div>
      <PageHeader
        label="Selected Work"
        title="Case studies, teardowns, and the things I build."
        subtitle="Real products. Real problems. Research-backed analysis and hands-on building, from PRD to shipped MVP."
      />

      {/* Tabs */}
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-normal cursor-pointer transition-all duration-200 border ${
              activeTab === tab.id
                ? 'bg-ink text-white border-ink font-medium'
                : 'bg-transparent text-ink-mid border-border-custom hover:border-ink-muted'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Featured */}
        {isVisible('project') && (
          <a
            href={featuredWork.href}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 bg-accent text-white rounded-2xl overflow-hidden no-underline transition-colors duration-200 hover:bg-accent-hover grid grid-cols-1 md:grid-cols-[1fr_auto]"
          >
            <div className="p-10">
              <p className="text-[11px] tracking-widest uppercase text-white/50 mb-3 font-medium">{featuredWork.label}</p>
              <h2 className="font-serif text-[30px] text-white leading-[1.15] mb-3">{featuredWork.title}</h2>
              <p className="text-[15px] text-white/65 leading-relaxed font-light max-w-[520px] mb-5">{featuredWork.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {featuredWork.tags.map((tag, i) =>
                  tag.href ? (
                    <a key={i} href={tag.href} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] px-3 py-1 rounded-full bg-white/12 text-white/80 no-underline hover:bg-white/20 transition-colors">
                      {tag.label}
                    </a>
                  ) : (
                    <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-white/12 text-white/80">{tag.label}</span>
                  )
                )}
              </div>
            </div>
            <div className="flex items-center justify-center p-10">
              <div className="w-[52px] h-[52px] border border-white/25 rounded-full flex items-center justify-center text-white">
                <ArrowUpRight className="w-[18px] h-[18px]" />
              </div>
            </div>
          </a>
        )}

        {/* Case Study Cards — services-style */}
        {workCards.map((card, i) =>
          isVisible(card.type) ? (
            <a
              key={i}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-border-custom no-underline text-inherit transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex flex-col p-7"
              style={{ background: card.bg }}
            >
              {/* Icon + label row */}
              <div className="flex items-start justify-between mb-6">
                <WorkIcon type={card.icon} color={card.accent} />
                <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                  style={{ color: card.accent, borderColor: `${card.accent}30`, background: 'rgba(255,255,255,0.5)' }}>
                  Case Study
                </span>
              </div>

              {/* Text */}
              <p className="text-[11px] font-medium tracking-widest uppercase mb-2" style={{ color: `${card.accent}99` }}>
                {card.client}
              </p>
              <h3 className="text-[18px] font-semibold leading-snug mb-3" style={{ color: card.accent }}>
                {card.title}
              </h3>
              <p className="text-[13px] leading-relaxed font-light flex-1" style={{ color: `${card.accent}cc` }}>
                {card.desc}
              </p>

              {/* Tags + arrow */}
              <div className="flex items-center justify-between mt-5 gap-2 flex-wrap">
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] px-2.5 py-1 rounded-full"
                      style={{ color: card.accent, background: 'rgba(255,255,255,0.5)', border: `1px solid ${card.accent}25` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  style={{ color: card.accent }} />
              </div>
            </a>
          ) : null
        )}
      </div>

      {/* Articles */}
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-16 flex flex-col">
        {articles.map((article, i) =>
          isVisible(article.type) ? (
            <a key={i} href={article.href} target="_blank" rel="noopener noreferrer"
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center py-7 border-t border-border-custom no-underline text-inherit transition-opacity duration-200 hover:opacity-70 group">
              <div>
                <p className="text-[11px] font-medium tracking-widest uppercase text-ink-muted mb-1">Article</p>
                <h3 className="text-lg font-medium text-ink leading-tight mb-1">{article.title}</h3>
                <p className="text-sm text-ink-mid font-light leading-relaxed max-w-[520px]">{article.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {article.tags.map((tag, j) => (
                    <span key={j} className="text-[11px] px-2.5 py-[3px] rounded-full bg-bg-card text-ink-mid border border-border-custom">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="w-9 h-9 border border-border-custom rounded-full flex items-center justify-center text-ink-mid flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ) : null
        )}

        {/* <a href="https://greatoluwbukola.substack.com/" target="_blank" rel="noopener noreferrer"
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center py-7 border-t border-b border-border-custom no-underline text-inherit transition-opacity duration-200 hover:opacity-70 group">
          <div>
            <h3 className="text-lg font-medium text-ink leading-tight mb-1">More on Substack →</h3>
            <p className="text-sm text-ink-mid font-light leading-relaxed">All articles, essays, and product thinking pieces.</p>
          </div>
          <div className="w-9 h-9 border border-border-custom rounded-full flex items-center justify-center text-ink-mid flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a> */}
      </div>
    </div>
  )
}

export default WorkPage