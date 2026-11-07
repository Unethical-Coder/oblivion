import { useState, useEffect, useRef } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ resumeUrl }) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  // Direction-aware scroll tracking
  useEffect(() => {
    lastScrollY.current = window.scrollY || 0

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY || 0)
          const diff = currentScrollY - lastScrollY.current
          const threshold = 8

          // 1. At or near top of page: always visible
          if (currentScrollY <= 40) {
            setVisible(true)
            setIsScrolled(false)
            lastScrollY.current = currentScrollY
          } else {
            setIsScrolled(true)

            // 2. Beyond top: evaluate directional scroll
            if (Math.abs(diff) > threshold) {
              if (diff > 0) {
                // Scrolling down -> hide navbar (unless mobile menu is actively open)
                if (!open) {
                  setVisible(false)
                }
              } else {
                // Scrolling up -> immediately reveal navbar
                setVisible(true)
              }
              lastScrollY.current = currentScrollY
            }
          }

          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [open])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header
      className={`nav ${visible ? 'nav--visible' : 'nav--hidden'} ${
        isScrolled ? 'nav--scrolled' : ''
      } ${open ? 'nav--open' : ''}`}
    >
      <div className="nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          OBLIVION
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>

        <nav
          className={`nav__links ${open ? 'nav__links--open' : ''}`}
          aria-label="Primary navigation"
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="nav__resume"
              onClick={() => setOpen(false)}
            >
              Resume ↗
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}
