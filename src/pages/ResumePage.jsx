import { Download } from 'lucide-react'

const experience = [
  {
    org: 'Radease Limited',
    location: 'Nigeria',
    period: 'June 2025 – May 2026',
    role: 'Frontend Developer & Product Owner ·',
    bullets: [
      'Owned end-to-end delivery of the doctors\' dashboard and Alerah\'s marketing website, driving product planning, defining requirements, prioritizing features, and coordinating cross-functional execution from concept to launch.',
      'Collaborated with product and engineering teams to translate business requirements and user needs into well-defined features, workflows, and user experiences.',
      'Designed and implemented role-based access control (RBAC), defining user permissions and access levels across the platform.',
      'Built and designed a real-time analytics dashboard that enabled doctors to monitor patient engagement, health trends, and performance metrics remotely, significantly reducing the need for physical hospital visits.',
      'Developed and maintained AI evaluation frameworks to measure response quality, accuracy, and consistency, improving the reliability of the AI assistant.',
      'Contributed to the design and implementation of AI guardrails, ensuring responses adhered to safety, compliance, and healthcare-specific requirements.',
      'Facilitated User Acceptance Testing (UAT), validating features against requirements, identifying edge cases, and ensuring quality releases before launch.',
      'Analyzed user interactions and AI performance data to identify improvement opportunities and inform product decisions around conversational experiences.',
    ],
  },
  {
    org: 'Payd Biashara',
    location: 'Kenya',
    period: 'February 2025 – June 2025',
    role: 'Junior Frontend Developer · Internship',
    bullets: [
      'Contributed to the development of Biashara\'s MVP, a fintech product enabling users to send money at scale and support multiple recipients in a single transaction, reducing payroll cost and time.',
      'Designed and developed a bill tracking and spending categorisation feature, helping users monitor expenses and manage finances effectively.',
      'Contributed to the development of the product\'s analytics dashboard to visualise transaction history, spending patterns, and financial insights.',
    ],
  },
  {
    org: 'InstamediRX',
    location: 'Nigeria',
    period: 'Aug 2024 – Apr 2025',
    role: 'Frontend Developer · Volunteer',
    bullets: [
      'Contributed to the development of a healthcare web application supporting real-time appointment booking and virtual consultation workflows to improve patient access to care.',
      'Built responsive, mobile-first user interfaces and collaborated with UX designers through design reviews and usability testing to refine user journeys and accessibility.',
      'Delivered key features including appointment scheduling, prescription management, and e-commerce functionality, partnering with backend engineers to integrate APIs.',
      'Supported product delivery by identifying usability improvements, validating feature behaviour, and contributing to discussions on feature prioritisation.',
    ],
  },
  {
    org: 'Expansion Cyber Tech',
    location: 'Nigeria',
    period: 'August 2024 – October 2024',
    role: 'Frontend Developer · Intern',
    bullets: [
      'Collaborated closely with designers to convert Figma prototypes into production-ready, type-safe JavaScript components.',
      'Developed responsive landing pages using Vue.js and Tailwind CSS, improving overall site performance by 30%.',
      'Built reusable UI components (navigation bars, modals, forms), reducing code redundancy by 40%.',
    ],
  },
]

const projects = [
  {
    title: 'ResumeRx',
    desc: 'AI-powered career platform that helps job seekers tailor resumes to specific roles, generate cover letters, identify skill gaps, prepare for interviews, and track applications — all in one place.',
  },
  {
    title: 'Sterling Bank App - Product Teardown',
    desc: 'UX teardown identifying four critical friction points across authentication, transaction flow, navigation, and support chat, with user personas, user research, success metrics, and redesign proposals.',
  },
  {
    title: 'Spotify Users Dissatisfaction',
    desc: 'Analysis of Spotify\'s user experience examining challenges around offline playback, subscription management, load time, and customer support, with recommendations for improving overall user satisfaction.',
  },
  {
    title: 'inDrive Case Study',
    desc: 'Analysed inDrive\'s rider experience and marketplace dynamics to uncover friction points impacting revenue, trust, and safety. Prioritised initiatives using an Impact-Effort framework with measurable success metrics.',
  },
  {
    title: 'TikTok Case Study',
    desc: 'Comprehensive UX teardown identifying five friction points across onboarding, navigation, feed personalisation, cognitive load, and privacy with data-driven redesign proposals.',
  },
]

const education = [
  {
    institution: 'Obafemi Awolowo University',
    period: '2018 – 2024',
    degree: 'Bachelor of Education (B.Ed) — Educational Management & English Language',
  },
  {
    institution: 'Simplilearn',
    period: '',
    degree: 'Fundamentals of Product Management',
  },
  {
    institution: 'User Interviews',
    period: '',
    degree: 'User Research 101',
  },
  {
    institution: 'Pendo.io',
    period: '',
    degree: 'AI for Product Managers',
  },
]

function ResumePage() {
  return (
    <div className="max-w-[800px] mx-auto px-[clamp(1.5rem,5vw,4rem)] py-16 animate-fade-up">

      {/* Download Banner */}
      <div className="bg-accent text-white rounded-[14px] p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-[22px] mb-1">Oluwabukola Olagunju</h3>
          <p className="text-sm text-white/70 font-light">Product Manager </p>
        </div>
        <a
          href="https://docs.google.com/document/d/1AkqRkyEm32c-R2EX1XHHOfe_rVZ4tVjcaeDsKDpUo7c/export?format=pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-accent rounded-full text-sm font-semibold no-underline whitespace-nowrap flex-shrink-0 transition-opacity duration-200 hover:opacity-90"
          download
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-12 pb-8 border-b-2 border-ink">
        <div>
          <div className="font-serif text-[40px] text-ink leading-none">Oluwabukola Olagunju</div>
          <div className="text-[15px] text-ink-mid mt-1.5 font-light">Product Manager · Frontend Engineer</div>
        </div>
        <div className="text-right text-[13px] text-ink-mid leading-relaxed">
          <div>+234 803 858 1725</div>
          <div><a href="mailto:greatoluwabukola@gmail.com" className="text-accent no-underline">greatoluwabukola@gmail.com</a></div>
          <div><a href="https://www.linkedin.com/in/oluwabukola-olagunju-sussanah" target="_blank" rel="noopener noreferrer" className="text-accent no-underline">LinkedIn</a></div>
          <div>Lagos, Nigeria</div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-10">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-muted mb-4 pb-1.5 border-b border-border-custom">Summary</div>
        <p className="text-sm text-ink-mid leading-[1.7] font-light">
          Product Manager with 2+ years of experience building digital products, with a background in frontend engineering. Skilled in product discovery, user research, requirements gathering, and cross-functional collaboration — translating customer needs into impactful solutions across the full product lifecycle. My engineering background allows me to bridge business goals with technical execution, evaluate feasibility, and make informed product trade-offs that balance user value with delivery.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-muted mb-4 pb-1.5 border-b border-border-custom">Experience</div>
        {experience.map((exp, i) => (
          <div key={i} className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1 mb-0.5">
              <div className="text-[15px] font-semibold text-ink">{exp.org} <span className="text-ink-muted font-light text-[13px]">· {exp.location}</span></div>
              <div className="text-[13px] text-ink-muted flex-shrink-0">{exp.period}</div>
            </div>
            <div className="text-sm text-ink-mid mb-3 italic">{exp.role}</div>
            <ul className="list-none p-0 space-y-1.5">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="text-sm text-ink-mid leading-relaxed pl-5 relative font-light">
                  <span className="absolute left-0 text-ink-muted">–</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-10">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-muted mb-4 pb-1.5 border-b border-border-custom">Skills</div>
        <div className="space-y-2 text-sm text-ink-mid font-light leading-[1.8]">
          <p><span className="font-medium text-ink">Product & Strategy:</span> Product Discovery, Roadmap Creation, PRD Writing, User Research, User Interviews, Feature Prioritisation, Market Research, A/B Testing, Wireframing (Figma), Stakeholder Management, Agile/Scrum.</p>
          <p><span className="font-medium text-ink">Data & Analytics:</span> Metabase, Product Metrics, Funnel Analysis, KPI Tracking, User Behaviour Analysis, Dashboard Reporting.</p>
          <p><span className="font-medium text-ink">Technical:</span> Vue.js, React, JavaScript, TypeScript, Tailwind CSS, REST APIs, Postman, Git/GitHub, Firebase, Technical Documentation.</p>
          <p><span className="font-medium text-ink">AI-Native Workflows:</span> Claude Code, MCP Integrations, AI-Assisted PRD Authoring, Prompt Engineering, Rapid Prototyping (Lovable, Claude Code).</p>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-muted mb-4 pb-1.5 border-b border-border-custom">Projects</div>
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div key={i} className="pl-5 relative">
              <span className="absolute left-0 text-ink-muted text-sm">–</span>
              <div className="text-sm font-medium text-ink mb-0.5">{p.title}</div>
              <div className="text-sm text-ink-mid font-light leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-10">
        <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-muted mb-4 pb-1.5 border-b border-border-custom">Education & Certifications</div>
        <div className="space-y-4">
          {education.map((e, i) => (
            <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1">
              <div>
                <div className="text-sm font-medium text-ink">{e.degree}</div>
                <div className="text-[13px] text-ink-muted font-light">{e.institution}</div>
              </div>
              {e.period && <div className="text-[13px] text-ink-muted flex-shrink-0">{e.period}</div>}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ResumePage