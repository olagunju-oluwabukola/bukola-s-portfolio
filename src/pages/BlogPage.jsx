import PageHeader from '../components/PageHeader'
import { ArrowUpRight } from 'lucide-react'

const posts = [
  {
    type: 'Article',
    tag: 'AI & Adoption',
    title: 'Distributed to millions, adopted by few',
    desc: "What Copilot's 3% problem reveals about how products actually earn their place in people's lives.",
    href: 'https://substack.com/home/post/p-200195227',
    platform: 'Substack',
  },
  {
    type: 'Article',
    tag: 'Product Thinking',
    title: 'Why trust is the most important thing a digital product can earn',
    desc: 'The signals your product sends before you say anything at all.',
    href: 'https://substack.com/home/post/p-199891092',
    platform: 'Substack',
  },
  {
    type: 'Article',
    tag: 'Product Sustainability',
    title: 'Can Your Product Actually Survive Without You Holding It Up?',
    desc: 'On what it means to build something that stands on its own — and the uncomfortable signs when it cannot.',
    href: 'https://medium.com/@olagunjuoluwabukola2018/can-your-product-actually-survive-without-you-holding-it-up-894ef8033ab6',
    platform: 'Medium',
  },
  {
    type: 'Article',
    tag: 'Product Strategy',
    title: 'The Assumption of Success for a Product',
    desc: 'Why teams confuse early traction with validation — and what that mistake costs them later.',
    href: 'https://medium.com/@olagunjuoluwabukola2018/the-assumption-of-success-for-a-product-f6982c09355b',
    platform: 'Medium',
  },
  {
    type: 'Article',
    tag: 'Branding',
    title: 'Brand Perception and Product Success',
    desc: 'How the way users feel about your brand shapes whether they ever trust your product enough to use it.',
    href: 'https://medium.com/@olagunjuoluwabukola2018/brand-perception-and-product-success-e04ff16cc009',
    platform: 'Medium',
  },
]

const typeStyles = {
  'Article':    { color: '#7A3B1E', bg: 'rgba(122,59,30,0.08)' },
  'Case Study': { color: '#1d4ed8', bg: 'rgba(29,78,216,0.08)' },
}

function BlogPage() {
  return (
    <div>
      <PageHeader
        label="Blog"
        title="The documentation of my thoughts around product thinking, user behaviour, and what it actually takes to build things that matter."
      />

      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] pb-20">

        {/* List */}
        <div className="flex flex-col">
          {posts.map((post, i) => {
            const s = typeStyles[post.type] || typeStyles['Article']
            return (
              <a
                key={i}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-6 border-b border-border-custom no-underline text-inherit transition-all duration-150 hover:bg-bg-card rounded-lg px-3 -mx-3"
              >
                {/* Left — number */}
                <span className="text-[13px] text-ink-muted font-light w-6 flex-shrink-0 pt-0.5 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Middle — content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ color: s.color, background: s.bg }}
                    >
                      {post.type}
                    </span>
                    <span className="text-[11px] text-ink-muted">· {post.tag}</span>
                  </div>
                  <h3 className="text-sm md:text-[16px] font-medium text-ink leading-snug mb-1.5 group-hover:text-[#7A3B1E] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-ink-mid leading-relaxed font-light line-clamp-2">
                    {post.desc}
                  </p>
                </div>

                {/* Right — platform + arrow */}
                <div className="flex-shrink-0 flex flex-col items-end gap-2 pt-0.5">
                  <span className="text-[11px] text-ink-muted font-medium">{post.platform}</span>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-[#7A3B1E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            )
          })}
        </div>

        {/* Archive link */}
        <div className="mt-10">
          <a
            href="https://medium.com/@olagunjuoluwabukola2018"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-muted hover:text-[#7A3B1E] transition-colors"
          >
            Read more on Medium <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default BlogPage