import React, { useState, useEffect } from 'react'
import './hero.css'
import heroAvatar from '../../../avvatar.png'
 

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('vanshsoniofficial@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element
        if (!target.closest('.mobile-nav') && !target.closest('.mobile-menu-btn')) {
          closeMobileMenu()
        }
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <section className="hero-root" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <nav className="hero-nav" aria-label="Primary">
        <div className="nav-left">
          <a href="#top" aria-label="Go to top" className="avatar">VS</a>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="nav-center desktop-nav">
          <li><a href="#work" onClick={closeMobileMenu}>Work</a></li>
          <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
          <li><a href="#certifications" onClick={closeMobileMenu}>Credentials</a></li>
          <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="nav-right desktop-nav">
          <a className="contact-btn" href="#contact" onClick={closeMobileMenu}>Contact Me</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li><a href="#work" onClick={closeMobileMenu}>Work</a></li>
            <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#certifications" onClick={closeMobileMenu}>Credentials</a></li>
            <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#contact" onClick={closeMobileMenu} className="mobile-contact-btn">Contact Me</a></li>
          </ul>
        </nav>
      </div>

      {/* Spacer to prevent content from sitting beneath the fixed nav */}
      <div className="nav-spacer" aria-hidden="true" />

      <div className="home-hero-shell">
        <div className="hero-content-center">
          <div className="avatar-wrap" aria-hidden="false">
            <img src={heroAvatar} alt="Vansh avatar" />
          </div>
          
          <h1 className="hero-main-title">Building intelligent AI<br/>solutions, scalable systems,<br/>and innovative experiences.</h1>
          
          <div className="hero-actions">
            <a className="resume-link-new" href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
          
          <div className="hero-footer">
            <div className="footer-left">
              <span>vanshsoniofficial@gmail.com</span>
              <button className="copy-btn" onClick={copyEmail} aria-label="Copy email">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="icon-row" role="group" aria-label="Social links">
              <a className="icon-btn" href="https://www.linkedin.com/in/vansh-soni-7b918524a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.64 4.74 6.07V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4Z"/></svg>
              </a>
              <a className="icon-btn" href="https://github.com/eark749" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.17-3.37-1.17-.46-1.18-1.11-1.5-1.11-1.5-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03 .9 1.52 2.36 1.08 2.94.83.09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.39.21 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
              </a>
              <a className="icon-btn" href="https://www.youtube.com/@vansh_soni_ai" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a className="icon-btn" href="https://x.com/_VanshSoni_" target="_blank" rel="noreferrer" aria-label="X">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h3.7l5.03 6.9L16.3 3H21l-7.7 9.9L21 21h-3.7l-5.03-6.9L7.7 21H3l7.7-8.1L3 3Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#work" className="scroll-down" aria-label="Scroll to work section">
        <svg className="scroll-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </a>
    </section>
  )
}


