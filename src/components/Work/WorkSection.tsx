import React from 'react'
import './work.css'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

type Project = {
  title: string
  description: string
  videoSrc?: string
  poster?: string
  theme: 'a' | 'b' | 'c' | 'd' | 'e'
  link?: string
}

const projects: Project[] = [
  {
    title: 'Timeline Studio',
    description: 'Desktop timeline editor. Fast scrubbing, multi-track export.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/111/fff.png&text=Desktop+Preview',
    theme: 'a',
    link: '#',
  },
  {
    title: 'Insight Dashboard',
    description: 'Real-time analytics for product usage.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/222/fff.png&text=Desktop+Preview',
    theme: 'b',
    link: '#',
  },
  {
    title: 'GenAI Designer',
    description: 'Generate UI layouts with prompts.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/333/fff.png&text=Desktop+Preview',
    theme: 'c',
    link: '#',
  },
  {
    title: 'Ops Orchestrator',
    description: 'Automate fleet tasks across environments.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/444/fff.png&text=Desktop+Preview',
    theme: 'd',
    link: '#',
  },
  {
    title: 'Media Pipeline',
    description: 'GPU-accelerated transcode with presets.',
    videoSrc: '',
    poster: 'https://dummyimage.com/1280x800/555/fff.png&text=Desktop+Preview',
    theme: 'e',
    link: '#',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="section work-root" aria-label="Work">
      <ScrollAnimation>
        <h2>Work</h2>
      </ScrollAnimation>

      <div className="work-grid">
        {projects.map((p, idx) => (
          <ScrollAnimation key={idx} delay={idx * 100}>
            <article
              className={`work-card theme-${p.theme} is-sticky`}
              aria-label={p.title}
              style={{ zIndex: projects.length - idx }}
            >
              {p.link && (
                <a 
                  href={p.link} 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} project`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              )}
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
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}


