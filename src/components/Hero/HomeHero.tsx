import React from 'react'
import './home-hero.css'
import heroAvatar from '../../../Gemini_Generated_Image_t81kr0t81kr0t81k.png'

export default function HomeHero(){
  return (
    <section className="home-hero-root">
      <div className="home-hero-shell">
        <div className="home-left">
          <div className="eyebrow">I’m</div>
          <h1 className="home-title">Vansh Soni</h1>
          <div className="title-underline" aria-hidden="true" />
          <p className="home-sub">I designed and implemented a Retrieval‑Augmented Generation (RAG) pipeline. This involved setting up a Pinecone vector database</p>
        </div>

        <div className="home-center">
          <div className="avatar-wrap">
            <img src={heroAvatar} alt="Vansh avatar" />
          </div>
        </div>

        <aside className="home-right">
          <p className="right-text">Let’s build together something thing bla bla bla type text</p>
          <a className="resume-link" href="/cv.pdf" target="_blank" rel="noreferrer">View Resume <span aria-hidden>→</span></a>
          <div className="icon-row" role="group" aria-label="Social links">
            <a className="icon-btn" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="icon"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.64 4.74 6.07V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4Z"/></svg>
            </a>
            <a className="icon-btn" href="tel:+1-000-000-0000" aria-label="Call">
              <svg viewBox="0 0 24 24" className="icon"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.27.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
            </a>
            <a className="icon-btn" href="mailto:vansh@example.com" aria-label="Email">
              <svg viewBox="0 0 24 24" className="icon"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 12l8-5.99V6l-8 6-8-6Z"/></svg>
            </a>
            <span className="icon-btn dot" aria-hidden="true"></span>
            <span className="icon-btn dot" aria-hidden="true"></span>
          </div>
        </aside>
      </div>
    </section>
  )
}


