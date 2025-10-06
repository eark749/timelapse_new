import React from 'react'
import './work.css'

type Project = {
  title: string
  description: string
  videoSrc?: string
  poster?: string
  theme: 'a' | 'b' | 'c' | 'd' | 'e'
}

const projects: Project[] = [
  {
    title: 'Timeline Studio',
    description: 'Desktop timeline editor. Fast scrubbing, multi-track export.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/111/fff.png&text=Desktop+Preview',
    theme: 'a',
  },
  {
    title: 'Insight Dashboard',
    description: 'Real-time analytics for product usage.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/222/fff.png&text=Desktop+Preview',
    theme: 'b',
  },
  {
    title: 'GenAI Designer',
    description: 'Generate UI layouts with prompts.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/333/fff.png&text=Desktop+Preview',
    theme: 'c',
  },
  {
    title: 'Ops Orchestrator',
    description: 'Automate fleet tasks across environments.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/444/fff.png&text=Desktop+Preview',
    theme: 'd',
  },
  {
    title: 'Media Pipeline',
    description: 'GPU-accelerated transcode with presets.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/555/fff.png&text=Desktop+Preview',
    theme: 'e',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="section work-root" aria-label="Work">
      <h2>Work</h2>

      <div className="work-grid">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className={`work-card theme-${p.theme} is-sticky`}
            aria-label={p.title}
            style={{ zIndex: projects.length - idx }}
          >
            <div className="work-media" aria-hidden={!p.videoSrc && !p.poster}>
              <video
                className="work-video"
                autoPlay
                muted
                loop
                playsInline
                poster={p.poster}
              >
                {p.videoSrc ? <source src={p.videoSrc} type="video/mp4" /> : null}
              </video>
            </div>
            <div className="work-meta">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


