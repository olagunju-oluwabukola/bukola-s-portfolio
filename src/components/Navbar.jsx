import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Resume', path: '/resume' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-[60px] bg-bg/92 backdrop-blur-md border-b border-border-custom z-50 flex items-center justify-between px-[clamp(1.5rem,5vw,4rem)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-ink no-underline">
          <div className="w-8 h-8 bg-ink rounded-md flex items-center justify-center">
            <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-bg">
              <circle cx="6" cy="9" r="3"/><circle cx="12" cy="9" r="3"/>
            </svg>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-normal transition-colors duration-200 ${
                  isActive(link.path) ? 'text-ink' : 'text-ink-mid hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-none border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-ink" />
          ) : (
            <Menu className="w-5 h-5 text-ink" />
          )}
        </button>

        {/* Download CV (Desktop) */}
        <a
          href="https://docs.google.com/document/d/1AkqRkyEm32c-R2EX1XHHOfe_rVZ4tVjcaeDsKDpUo7c/export?format=pdf"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent text-white rounded-full text-[13px] font-medium no-underline transition-colors duration-200 hover:bg-accent-hover"
          download
        >
          <Download className="w-[13px] h-[13px]" />
          Download CV
        </a>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[60px] left-0 right-0 bg-bg border-b border-border-custom z-40 flex flex-col px-[clamp(1.5rem,5vw,4rem)] py-5 transition-all duration-200 md:hidden ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className="text-[15px] text-ink-mid no-underline py-3 border-b border-border-custom last:border-none"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Navbar