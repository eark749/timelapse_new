import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero-root">
      <div className="hero-grid" aria-hidden="true" />
      <nav className="hero-nav" aria-label="Primary">
        <div className="nav-left">
          <div className="avatar">VS</div>
        </div>
        <ul className="nav-center">
          <li><a href="#work">Work</a></li>
          <li><a href="#cert">Certification</a></li>
          <li><a href="#skills">Skill</a></li>
          <li><a href="#exp">Experience</a></li>
        </ul>
        <div className="nav-right">
          <a className="contact-btn" href="#contact">Contact Me</a>
        </div>
      </nav>

      <div className="hero-content">
        <h1>Vansh Soni</h1>
        <p>Applied AI Engineer</p>
      </div>
    </section>
  )
}


