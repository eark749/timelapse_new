import React, { useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'
import Hero from './components/Hero/Hero'
import WorkSection from './components/Work/WorkSection'
import SkillsSection from './components/Skills/SkillsSection'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [revealHero, setRevealHero] = useState(false)

  return (
    <div className="app-root">
      {showIntro && (
        <IntroScreen
          onExplore={() => {
            setRevealHero(true)
            window.setTimeout(() => setShowIntro(false), 500)
          }}
        />
      )}
      <main className={"site-content" + (revealHero ? " show" : "" )} style={{ padding: 0 }}>
        <Hero />
        <WorkSection />
        <SkillsSection />
        <section id="certifications" className="section" aria-label="Certifications">
          <h2>Certifications</h2>
        </section>
        <section id="experience" className="section" aria-label="Experience">
          <h2>Experience</h2>
        </section>
      </main>
    </div>
  )
}


