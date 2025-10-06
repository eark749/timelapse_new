import React from 'react'
import './hero.css'
import heroAvatar from '../../../Gemini_Generated_Image_t81kr0t81kr0t81k.png'
 

export default function Hero() {
  return (
    <section className="hero-root" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <nav className="hero-nav" aria-label="Primary">
        <div className="nav-left">
          <a href="#top" aria-label="Go to top" className="avatar">VS</a>
        </div>
        <ul className="nav-center">
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Credentials</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
        <div className="nav-right">
          <a className="contact-btn" href="#contact">Contact Me</a>
        </div>
      </nav>

      {/* Spacer to prevent content from sitting beneath the fixed nav */}
      <div className="nav-spacer" aria-hidden="true" />

      <div className="home-hero-shell">
        <div className="home-left">
          <div className="eyebrow">I’m</div>
          <h1 className="home-title">Vansh Soni</h1>
          <div className="title-underline" aria-hidden="true" />
          <p className="home-sub">AI Engineer specializing in machine learning and neural networks, with expertise in building and fine-tuning LLM models. I combine strong data processing capabilities with advanced AI techniques to develop intelligent solutions.</p>
        </div>

        <div className="home-center">
          <div className="avatar-wrap" aria-hidden="false">
            <img src={heroAvatar} alt="Vansh avatar" />
          </div>
        </div>

        <aside className="home-right">
          <p className="right-text">Let’s build together something together</p>
          <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume <span aria-hidden>→</span></a>
          <div className="icon-row" role="group" aria-label="Social links">
            <a className="icon-btn" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.64 4.74 6.07V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4Z"/></svg>
            </a>
            <a className="icon-btn" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.17-3.37-1.17-.46-1.18-1.11-1.5-1.11-1.5-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03 .9 1.52 2.36 1.08 2.94.83.09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.39.21 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
            </a>
            <a className="icon-btn" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h3.7l5.03 6.9L16.3 3H21l-7.7 9.9L21 21h-3.7l-5.03-6.9L7.7 21H3l7.7-8.1L3 3Z"/></svg>
            </a>
            
          </div>
        </aside>
      </div>
    </section>
  )
}


