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
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
        <div className="nav-right">
          <a className="contact-btn" href="#contact">Contact Me</a>
        </div>
      </nav>

      {/* Spacer to prevent content from sitting beneath the fixed nav */}
      <div className="nav-spacer" aria-hidden="true" />

      <div className="hero-content">
        <h1>Vansh Soni</h1>
        <div className="hero-avatar" aria-hidden="false">
          <img src={heroAvatar} alt="Vansh avatar" />
        </div>
        <p>Applied AI Engineer</p>
      </div>

      <section className="hero-about" aria-label="About">
        <p>
          AI Engineer specializing in machine learning and neural networks, with expertise in
          building and fine-tuning LLM models. I combine strong data processing capabilities with
          advanced AI techniques to develop intelligent solutions. My background in supervised
          learning, feature extraction, and RAG architectures enables me to create impactful AI
          systems that solve complex business challenges.
        </p>
        <div className="hero-cta">
          <a className="download-btn" href="/cv.pdf" download>Download CV</a>
        </div>
      </section>
    </section>
  )
}


