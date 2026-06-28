import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, X, ExternalLink, FileText, ArrowUpRight } from 'lucide-react'

// ─────────────────────────────────────────────
// PROJECTS DATA
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'ResumeRx',
    tagline: 'An AI-powered career tools platform that helps job seekers build tailored resumes, generate cover letters, and prep for interviews — from 0 to 1.',
    status: 'Live',
    thumbnail: '/assets/Screenshot 2026-05-06 113857.png',
    thumbnailBg: '#e8f0fe',
    prd: {
      label: 'OPEN PRD',
      company: 'PERSONAL PROJECT',
      title: 'ResumeRx — AI Career Tools Platform',
      description: 'An end-to-end AI career platform built to help job seekers craft tailored resumes, generate cover letters, and simulate interview prep using Groq as the AI engine.',
      status: 'Live',
      sections: {
        'Problem': {
          title: 'Problem',
          content: 'The job search and application process today is a lot fragmanted. Many job seekers submit generic resumes that fail to meet hiring process expectations, lack visibility into the skills and other requirement for their target roles,rely on no or  disconnected tools for resume building, cover letters, and application tracking. For entry-level candidates or recent graduates, the challenge is even greater, they often have valuable skills and experiences but are not  to present them in a way that reflects their potential. Moving between multiple tools causes them to lose content, context, and consistency throughout the application process, reducing their chances of securing interviews and ultimately landing a job.'
        },
        'Users': {
          title: 'Target Users',
          content: [
            {
              name: 'The Intern / Fresh Graduate',
              desc: 'Has valuable academic projects and transferable skills but lacks experience structuring them for professional roles. Does not know how to position themselves for a specific opportunity.'
            },
            {
              name: 'The Active Job Seeker',
              desc: 'Entry-to-mid-level professional applying to multiple roles simultaneously. Frustrated by the repetitive, manual effort of customizing each application and tracking progress across spreadsheets and email threads.'
            },
            {
              name: 'The Career-Conscious Professional',
              desc: 'Wants confidence that their skills genuinely match a role before investing time in the application. Focused on targeted, high-quality applications rather than volume.'
            }
          ]
        },
        'Success Metrics': {
          title: 'Success Metrics',
          content: [
            { metric: 'Time saved per application', target: '≥50% reduction in manual resume and cover letter writing time (survey)' },
            { metric: 'User satisfaction (CSAT)', target: '≥4.2 / 5.0 average rating within 60 days of launch' },
            { metric: 'Weekly active users (WAU)', target: '≥100 WAU running core AI features within 90 days of MVP launch' },
            { metric: 'Free-to-premium conversion', target: '≥8% of registered free users convert to premium within 30 days' },
            { metric: 'ATS score improvement', target: 'Average tailored resume has ≥15 ATS score points higher than original' },
            { metric: 'Retention (D30)', target: '≥40% of registered users return within 30 days of sign-up' },
            { metric: 'API error rate', target: '<1% of AI requests result in a user-facing error' },
          ]
        },
        'Scope': {
          title: 'Scope',
          content: [
            {
              phase: 'MVP (Month 1–2)',
              items: [
                'Document Upload and Parsing - .docx, .pdf, .txt support with AI-powered extraction of contact info, summary, experience, education, skills, certifications',
                'AI-Driven Resume Tailoring - LLM analysis of resume + job description, keyword alignment, tone matching, ATS score before/after',
                'Cover Letter Generation - One-click generation tied to specific job, editable in-browser, downloadable in .docx and .pdf',
                'Application Tracking (Basic) - Log applications with company, role, date, URL, status (Applied, Screening, Interview, Offer, Rejected, Withdrawn), notes field'
              ]
            },
            {
              phase: 'Full Release (Month 3–5)',
              items: [
                'Skill Gap Analysis - Compare job description skills vs. resume skills, gap report (Missing, Underrepresented, Matched), suggested learning resources',
                'Interview Preparation - Role-specific question generation based on job description and resume, common behavioral and technical questions per industry',
                'Application Tracking (Enhanced) - Reminder and nudge system for follow-ups based on application age and status',
                'Activity Analytics Dashboard - Applications over time, ATS score trend, skill gap frequency across target roles'
              ]
            }
          ]
        },
        'Risks': {
          title: 'Risks & Mitigation',
          content: 'AI hallucination in resume content -  user review to ensure what is generated is not overselling or exageration applicants capacity. Groq API rate limits -  build caching layer and fallback to local templates. Data privacy concerns - clear data retention policies ensuring that the data remains in the local storage, no external sources.'
        },
      },
      caseStudyUrl: '/work',
    },
  },
{
  id: 2,
  title: 'Bemvinda',
  tagline:
    'A community-powered local discovery platform that helps people find trusted places through AI-powered recommendations and real local insights.',
  status: 'In Progress',
  thumbnail: '/assets/Screenshot 2026-06-28 192639.png',
  thumbnailBg: '',

  prd: {
    label: 'OPEN PRD',
    company: 'PERSONAL PROJECT',
    title: 'Bemvinda - Community Local Discovery Platform',
    description:
      'Bemvinda helps people confidently discover nearby places through trusted community recommendations, structured reviews, and AI-powered local search. Instead of simply showing locations, it helps users decide where to go based on real experiences and practical insights.',

    status: 'In Progress',

    sections: {

      'Problem': {
        title: 'Problem',
        content:
          'Finding places is easy, but choosing the right one is difficult. Existing map platforms provide locations, ratings, and generic reviews but rarely answer practical questions users actually care about, such as waiting times, safety, affordability, accessibility, or suitability for families. Informal recommendations from friends are equally unreliable because they are difficult to verify, become outdated, and offer no transparent feedback loop. Users need a trusted way to discover places through real, continuously updated community knowledge.'
      },

      'Users': {
        title: 'Target Users',
        content: [
          {
            name: 'New Residents',
            desc: 'People relocating to a new city who need trusted places for everyday essentials.'
          },
          {
            name: 'Travellers & Visitors',
            desc: 'Visitors looking for authentic local recommendations beyond tourist attractions.'
          },
          {
            name: 'Local Explorers',
            desc: 'Residents discovering hidden gems, new businesses, and highly recommended places nearby.'
          },
          {
            name: 'Families & Professionals',
            desc: 'Users searching for places that match specific needs such as child-friendly parks, quiet cafés, or trusted healthcare.'
          }
        ]
      },

      'Success Metrics': {
        title: 'Success Metrics',
        content: [
          {
            metric: 'Verified community recommendations',
            target: '1000+ in first year'
          },
          {
            metric: 'Monthly active users',
            target: '>60% returning monthly'
          },
          {
            metric: 'Recommendation engagement',
            target: '>70% of users interact with tips or reviews'
          },
          {
            metric: 'Places with structured insights',
            target: '80% of listings'
          }
        ]
      },

      'Scope': {
        title: 'Scope',
        content: [
          {
            phase: 'MVP',
            items: [
              'Nearby place discovery',
              'Categories',
              'Community reviews',
              'Saved places',
              'Search',
              'Place details'
            ]
          },
          {
            phase: 'V1',
            items: [
              'AI-powered place recommendations',
              'Verified visits',
              'Community tips',
              'Personalized discovery',
              'Follow reviewers',
              'Local guides'
            ]
          },
          {
            phase: 'V2',
            items: [
              'Business claiming',
              'Creator-generated city guides',
              'Recommendation reputation system',
              'Tourism partnerships',
              'Community events'
            ]
          }
        ]
      },

      'Risks': {
        title: 'Risks & Mitigation',
        content:
          'Cold-start content is the primary risk. The platform addresses this by importing public place data while encouraging community-generated recommendations through gamification and verified visits. Trust is reinforced using structured reviews, reputation scores, and community voting to reduce spam and outdated information.'
      }

    },

    caseStudyUrl: '/work',
  },
},
  {
    id: 3,
    title: 'Sterling Bank UX Teardown',
    tagline: 'Authentication friction, transfer flow gaps, and support chat issues — with a prioritised fix roadmap.',
    status: 'Case Study',
    thumbnail: 'assets/Screenshot 2026-06-12 152842.png',
    thumbnailBg: '#1a0a0a',
    prd: {
      label: 'TEARDOWN · V1',
      company: 'STERLING BANK',
      title: 'Sterling (Onebank) Bank Mobile App — UX Teardown',
      description: 'A structured UX teardown covering authentication friction, transfer flow issues, navigation labelling, and support chat persistence — with a prioritised metrics-backed fix roadmap.',
      status: 'Case Study',
      sections: {
        'Problem': {
          title: 'Problem Statement',
          content: 'Sterling OneBank has strong product offerings, but several usability issues get in the way of the overall experience. While customers benefit from offerings like zero transfer charges, yet there are friction across core aspects like  authentication, in-app navigation, transaction flow, and support which  makes common banking tasks harder to complete and weakens both perception and value the product delivers.'

        },
        'Users': {
          title: 'User Segments',
          content: [
          {
    name: 'Daily Transactor',
    desc: 'Ages 25–45. Uses the app regularly for transfers, bill payments, airtime purchases, and balance checks. Values speed, reliability, and quick access to everyday banking.'
  },
  {
    name: 'Business Owner',
    desc: 'Manages personal or business finances through the app, performs frequent transfers, and needs a secure, efficient, and dependable banking experience.'
  },
  {
    name: 'Traditional Banking Customer',
    desc: 'Often older or less digitally confident. Trusts Sterling Bank but needs simple, predictable flows, clear navigation, and reliable support to complete everyday banking tasks with confidence.'
  }
          ]
        },
        'Key Findings': {
          title: 'Key Findings',
          content: '4 key usability issues identified: a high-friction authentication and account recovery flow, unclear transaction confirmation states, inefficient home screen navigation and iconography, and an unreliable in-app support experience that loses conversation context.'

        },
        'Prioritisation': {
          title: 'Prioritisation',
          content: 'P0: PIN authentication, improved transfer confirmation, and persistent support conversations. P1: Home screen reorganization and intuitive iconography. P2: Quick access to banking essentials (recent transactions, transfer history, beneficiary list, and transfer limits). Prioritized based on user impact, frequency, severity, and implementation effort.'
        },
        'Recommendations': {
          title: 'Recommendations',
        content: 'Simplify authentication with PIN login and self-service recovery, redesign transfer confirmation with clear completion states, improve home screen navigation by surfacing high-frequency actions and meaningful icons, and ensure support conversations persist until resolution.'
        },
      },
      caseStudyUrl: 'https://medium.com/@olagunjuoluwabukola2018/product-case-study-sterling-bank-3d31cddefe51',
    },
  },
]

const statusStyles = {
  Live:           { dot: '#16a34a', bg: 'rgba(22,163,74,0.12)',   text: '#15803d' },
  'In Progress':  { dot: '#d97706', bg: 'rgba(217,119,6,0.12)',   text: '#b45309' },
  'Case Study':   { dot: '#7c3aed', bg: 'rgba(124,58,237,0.12)', text: '#6d28d9' },
}

function StatusBadge({ status }) {
  const s = statusStyles[status] || statusStyles['Case Study']
  return (
    <span
      style={{ background: s.bg, color: s.text }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
    >
      <span style={{ background: s.dot }} className="w-1.5 h-1.5 rounded-full" />
      {status}
    </span>
  )
}


function ContentRenderer({ content }) {

  if (Array.isArray(content)) {
    return (
      <div className="space-y-5">
        {content.map((item, i) => {
          // Persona object
          if (item.name && item.desc) {
            return (
              <div key={i} className="pb-4 border-b border-[#e5e2dc]/60 last:border-0">
                <h4 className="text-[14px] font-semibold text-[#1C1916] mb-1.5">{item.name}</h4>
                <p className="text-[14px] text-[#5C5750] leading-relaxed font-light">{item.desc}</p>
              </div>
            )
          }
          // Metric object
          if (item.metric && item.target) {
            return (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-[#e5e2dc]/60 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7A3B1E] mt-2 flex-shrink-0" />
                <div>
                  <span className="text-[14px] font-medium text-[#1C1916]">{item.metric}</span>
                  <span className="text-[14px] text-[#5C5750] font-light"> <span className='font-bold'>:</span> {item.target}</span>
                </div>
              </div>
            )
          }
          // Scope phase object
          if (item.phase && item.items) {
            return (
              <div key={i} className="pb-4 border-b border-[#e5e2dc]/60 last:border-0">
                <h4 className="text-[13px] font-semibold text-[#7A3B1E] tracking-wide uppercase mb-2.5">{item.phase}</h4>
                <ul className="space-y-2">
                  {item.items.map((subItem, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#9C9890] mt-2 flex-shrink-0" />
                      <span className="text-[14px] text-[#5C5750] leading-relaxed font-light">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
          // Fallback for plain strings in array
          return (
            <div key={i} className="flex items-start gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[#9C9890] mt-2 flex-shrink-0" />
              <span className="text-[14px] text-[#5C5750] leading-relaxed font-light">{item}</span>
            </div>
          )
        })}
      </div>
    )
  }


  return (
    <p className="text-[15px] text-[#5C5750] leading-[1.85] font-light">
      {content}
    </p>
  )
}


function PrdModal({ project, onClose }) {
  const navigate = useNavigate()
  const { prd } = project
  const sections = Object.keys(prd.sections)
  const [activeSection, setActiveSection] = useState(sections[0])
  const currentContent = prd.sections[activeSection]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[850px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ maxHeight: '88vh' }}
        onClick={e => e.stopPropagation()}
      >

        <div className="bg-[#faf8f5] px-6 pt-5 pb-4 border-b border-[#e5e2dc] flex-shrink-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#9C9890] tracking-widest uppercase">
              <FileText className="w-3.5 h-3.5 text-[#7A3B1E]" />
              {prd.label} · {prd.company}
            </div>
            <button onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe3] transition-colors">
              <X className="w-4 h-4 text-[#5C5750]" />
            </button>
          </div>
          <h2 className="font-serif text-[20px] leading-snug text-[#1C1916] font-semibold mb-1">
            {prd.title}
          </h2>
          <p className="text-[13px] text-[#5C5750] leading-relaxed">{prd.description}</p>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-[196px] bg-[#faf8f5] border-r border-[#e5e2dc] flex-shrink-0 overflow-y-auto py-3">
            {sections.map(section => {
              const isActive = section === activeSection
              return (
                <button key={section} onClick={() => setActiveSection(section)}
                  className={`w-full text-left px-4 py-2.5 flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase transition-all duration-150
                    ${isActive
                      ? 'text-[#7A3B1E] border-r-2 border-[#7A3B1E]'
                      : 'text-[#9C9890] hover:text-[#5C5750] hover:bg-[#f0ebe3]'
                    }`}
                  style={isActive ? { background: 'rgba(122,59,30,0.06)' } : {}}
                >
                  <span className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 transition-colors
                    ${isActive ? 'border-[#7A3B1E]' : 'border-[#9C9890]/40'}`}
                    style={isActive ? { background: 'rgba(122,59,30,0.2)' } : {}}
                  />
                  {section}
                </button>
              )
            })}
          </div>
          <div className="flex-1 overflow-y-auto p-7">
            <h3 className="font-serif text-[22px] text-[#1C1916] font-semibold mb-3">
              {currentContent.title}
            </h3>
            <div className="h-px bg-[#e5e2dc] mb-5" />
            <ContentRenderer content={currentContent.content} />
            <div className="mt-10 flex items-center gap-2">
              {sections.map(s => (
                <button key={s} onClick={() => setActiveSection(s)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    s === activeSection ? 'w-6 bg-[#7A3B1E]' : 'w-1.5 bg-[#e5e2dc] hover:bg-[#7A3B1E]/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#e5e2dc] flex items-center justify-between bg-white flex-shrink-0">
          <span className="text-[11px] text-[#9C9890] tracking-widest uppercase">Document · V1</span>
          <button
            onClick={() => { onClose(); navigate(prd.caseStudyUrl) }}
            className="inline-flex items-center gap-2 bg-[#7A3B1E] text-white px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-[#5E2C13] transition-colors"
          >
            View more
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onOpen, className = '' }) {
  return (
    <div
      onClick={() => onOpen(project)}
      className={`group rounded-[20px] overflow-hidden cursor-pointer bg-bg-card
        border-[1.5px] border-border-custom hover:border-accent transition-colors duration-150 ${className}`}
    >
      {/* Image — contained, padded on all sides */}
      <div className="p-3.5 pb-2.5 aspect-[4/3] flex items-center justify-center">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-contain rounded-xl"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-accent-soft flex items-center justify-center
            font-serif text-5xl font-bold text-accent/50 select-none">
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      {/* Badges */}
      <div className="flex items-center justify-between px-3.5 pb-2.5">
        <span className="inline-flex items-center gap-1.5 bg-accent-soft text-accent
          border border-accent/20 px-2.5 py-1 rounded-full text-[11px] font-medium">
          <FileText className="w-3 h-3" />
          {project.prd.label}
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* Divider */}
      <div className="h-px bg-border-custom mx-3.5" />

      {/* Text */}
      <div className="px-3.5 pt-3 pb-3.5">
        <p className="text-[10px] font-medium tracking-[0.09em] uppercase text-ink-mid/60 mb-1">
          {project.company || 'Personal project'}
        </p>
        <h3 className="text-sm font-medium text-ink leading-snug mb-2.5">
          {project.title}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1.5 flex-wrap">
            {project.tags?.map(tag => (
              <span key={tag} className="text-[11px] text-accent bg-accent-soft rounded-md px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <div className="w-7 h-7 rounded-full border-[1.5px] border-border-custom flex items-center
            justify-center text-ink-mid shrink-0 group-hover:bg-accent group-hover:text-white
            group-hover:border-accent transition-all duration-150">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default function SelectedWorkSection() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <>
      <section className="max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[11px] font-medium text-[#9C9890] tracking-widest uppercase mb-3">
              Selected Work
            </div>
            <h2 className="font-serif text-[clamp(32px,5vw,52px)] leading-tight text-[#1C1916]">
              A few things I've worked on.
            </h2>
            {/* <p className="text-[16px] text-[#5C5750] font-light mt-3 max-w-[500px]">
              from PRD to launch.
            </p> */}
          </div>
          <a
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5C5750] hover:text-[#1C1916] transition-colors whitespace-nowrap"
          >
            All Projects<ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => (
            <div key={project.id} >
              <ProjectCard
                project={project}
                onOpen={setActiveModal}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <PrdModal project={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  )
}