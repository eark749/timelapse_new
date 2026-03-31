import React, { useEffect, useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'
import Hero from './components/Hero/Hero'
import WorkSection from './components/Work/WorkSection'
import SkillsSection from './components/Skills/SkillsSection'
import CertificationsSection from './components/Certifications/CertificationsSection'
import ExperienceSection from './components/Experience/ExperienceSection'
import ContactSection from './components/Contact/ContactSection'
 

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [revealHero, setRevealHero] = useState(false)
  const [route, setRoute] = useState<string>(typeof window !== 'undefined' ? (window.location.hash || '#/') : '#/')

  useEffect(() => {
    function onHashChange() {
      setRoute(window.location.hash || '#/')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isCertsPage = false

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
        {isCertsPage ? (
          <></>
        ) : (
          <>
            <Hero />
            <WorkSection />
            <SkillsSection />
            <CertificationsSection />
            <ExperienceSection />
            <ContactSection />
          </>
        )}
      </main>
    </div>
  )
}


