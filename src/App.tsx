import React, { useState } from 'react'
import IntroScreen from './components/IntroScreen/IntroScreen'

export default function App() {
  const [explored, setExplored] = useState(false)

  return (
    <div className="app-root">
      {!explored && <IntroScreen onExplore={() => setExplored(true)} />}
      <main className="site-content" style={{ display: explored ? 'block' : 'none' }}>
        <h1>Welcome to the site</h1>
        <p>Replace this with your real homepage.</p>
      </main>
    </div>
  )
}


