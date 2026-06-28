import { Link } from 'react-router-dom'
import { Mail, Linkedin, FileText } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-bg border-t border-border-custom px-[clamp(1.5rem,5vw,4rem)] pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-10">
        {/* Brand */}
        <div>
          <div className="font-serif text-xl text-ink mb-2">Oluwabukola Olagunju</div>
          <p className="text-sm text-ink-mid leading-relaxed font-light max-w-[300px] mb-5">
            Product Manager & Frontend Engineer. Building products people actually want to use.
          </p>
          <div className="flex gap-3">
            <a href="mailto:greatoluwabukola@gmail.com" className="w-[34px] h-[34px] bg-bg-card border border-border-custom rounded-lg flex items-center justify-center text-ink-mid no-underline transition-all duration-200 hover:bg-ink hover:text-white hover:border-ink" title="Email">
              <Mail className="w-[15px] h-[15px]" />
            </a>
            <a href="https://www.linkedin.com/in/oluwabukola-olagunju-sussanah" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] bg-bg-card border border-border-custom rounded-lg flex items-center justify-center text-ink-mid no-underline transition-all duration-200 hover:bg-ink hover:text-white hover:border-ink" title="LinkedIn">
              <Linkedin className="w-[15px] h-[15px]" />
            </a>
            <a href="https://medium.com/@olagunjuoluwabukola2018" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] bg-bg-card border border-border-custom rounded-lg flex items-center justify-center text-ink-mid no-underline transition-all duration-200 hover:bg-ink hover:text-white hover:border-ink" title="Substack">
              <FileText className="w-[15px] h-[15px]" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-ink-muted mb-4">Navigation</div>
          <div className="flex flex-col gap-2.5">
            <Link to="/work" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink">Work</Link>
            <Link to="/about" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink">About</Link>
            <Link to="/blog" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink">Blog</Link>
            <Link to="/gallery" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink">Gallery</Link>
            <Link to="/resume" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink">Resume</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-ink-muted mb-4">Contact</div>
          <div className="flex flex-col gap-2.5">
            <a href="mailto:greatoluwabukola@gmail.com" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink">Email me</a>
            <a href="https://www.linkedin.com/in/oluwabukola-olagunju-sussanah" target="_blank" rel="noopener noreferrer" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink">LinkedIn</a>
            <a href="https://docs.google.com/document/d/1AkqRkyEm32c-R2EX1XHHOfe_rVZ4tVjcaeDsKDpUo7c/export?format=pdf" className="text-sm text-ink-mid no-underline transition-colors duration-200 hover:text-ink" download>Download CV</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-border-custom pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-[13px] text-ink-muted font-light">© 2026 Oluwabukola Olagunju. Built with intent.</p>
        <p className="text-[13px] text-ink-muted font-light">Product Manager</p>
      </div>
    </footer>
  )
}

export default Footer