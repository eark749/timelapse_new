import React, { useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'
import Hero from './components/Hero/Hero'

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
      </main>
    </div>
  )
}


