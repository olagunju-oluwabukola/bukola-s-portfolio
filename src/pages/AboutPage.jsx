import { GraduationCap, BadgeCheck, Search, Package } from 'lucide-react'
import profile from "../assets/profile.jpg"
import oluwabukola from "../assets/oluwabukola.jpg"
const skills = [
  'Product Strategy', 'UX Research', 'User Interviews', 'Data Analysis',
  'Roadmapping', 'PRD Writing', 'Technical Writing', 'Jira', 'Trello',
  'React', 'TypeScript', 'Firebase',
]

const learnings = [
  {
    icon: GraduationCap,
    title: 'B.Ed. Educational Management',
    org: 'Obafemi Awolowo University',
    type: 'Degree',
  },
  {
    icon: BadgeCheck,
    title: 'AI for Product Managers',
    org: 'Pendo.io',
    type: 'Certification',
  },
  {
    icon: BadgeCheck,
    title: 'User Research 101',
    org: 'User Interviews',
    type: 'Course',
  },
  {
    icon: BadgeCheck,
    title: 'Fundamentals of Product Management',
    org: 'Simplilearn',
    type: 'Certification',
  },
]

function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">

      {/* SECTION 1: Who I am — image left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 pb-20 border-b border-border-custom">

        {/* Photo */}
        <div>
          <div className="bg-bg-card rounded-[24px] overflow-hidden">
            <img src= {profile} alt="Bukola" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-3">About me</p>
          <h1 className="font-serif text-[clamp(30px,4vw,48px)] leading-[1.15] tracking-tight text-ink mb-6">
            Product strategy, user research, and a healthy obsession with the right problem.
          </h1>
          <div className="space-y-4">
            <p className="text-base text-ink-mid leading-[1.8] font-light">
              Product Manager with 3 years of experience building digital products, with a background in frontend engineering. Skilled in product discovery, user research, requirements gathering, and cross-functional collaboration while translating customer needs into impactful solutions across the full product lifecycle.
            </p>
            <p className="text-base text-ink-mid leading-[1.8] font-light">
              I sharpen my product thinking through hands-on experience with product teardowns, case studies, user research, and building products from concept to launch. My engineering background allows me to bridge business goals with technical execution, evaluate feasibility, and make informed product trade-offs that balance user value with delivery.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: My path — text left, image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 border-b border-border-custom">

        {/* Text */}
        <div className="order-2 lg:order-1">
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-3">My path</p>
          <h2 className="font-serif text-[clamp(26px,3.5vw,40px)] leading-[1.2] tracking-tight text-ink mb-6">
            My Transition into Product
          </h2>
          <div className="space-y-4">
            <p className="text-base text-ink-mid leading-[1.8] font-light">
              I have had the experience of working with two early-stage startups that did not make it — and not for the reason most people assume. Both were solving real problems. The ideas were valid, the intent was there, and the products were being built. But that was not enough.
            </p>
            <p className="text-base text-ink-mid leading-[1.8] font-light">
              What got in the way was a combination of overconfidence bias, premature execution, and insufficient market and user research. The teams moved fast without asking the harder questions first: <span className="text-ink font-medium italic">Is the market actually ready for this? Do users want it the way we are building it? Are we solving the right problem, or just the most obvious one?</span>
            </p>
            <p className="text-base text-ink-mid leading-[1.8] font-light">
              Those experiences shaped how I think about product work. I am slower to assume and quicker to validate. I believe the most dangerous thing in product is building confidently in the wrong direction — and I have seen it happen up close.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="bg-bg-card rounded-[24px] overflow-hidden aspect-[4/5]">
            <img src= {oluwabukola} alt="Bukola" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>

      {/* SECTION 3: Education & Certifications */}
      <div className="py-20 border-b border-border-custom">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-3">Education & Training</p>
        <h2 className="font-serif text-[clamp(26px,3.5vw,40px)] leading-[1.2] tracking-tight text-ink mb-3">
          Always learning.
        </h2>
        <p className="text-base text-ink-mid font-light mb-12 max-w-[520px]">
          Formal education, structured courses, and certifications that have shaped how I think about product, people, and systems.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {learnings.map((item, i) => (
            <div key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-border-custom bg-bg-card hover:border-[#7A3B1E]/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-white border border-border-custom flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-[#7A3B1E]" />
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-ink-muted mb-0.5">
                  {item.type}
                </div>
                <div className="text-[14px] font-semibold text-ink leading-snug mb-0.5">
                  {item.title}
                </div>
                <div className="text-[12px] text-ink-muted">{item.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: Skills */}
      <div className="py-20">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-3">Skills & Tools</p>
        <h2 className="font-serif text-[clamp(26px,3.5vw,40px)] leading-[1.2] tracking-tight text-ink mb-3">
          What I work with.
        </h2>
        <p className="text-base text-ink-mid font-light mb-10 max-w-[520px]">
          A mix of product, research, and engineering skills built across projects, roles, and a lot of trial and error.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <span key={i} className="text-[13px] px-4 py-2 rounded-full bg-bg-card text-ink-mid border border-border-custom hover:border-[#7A3B1E]/40 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default AboutPage