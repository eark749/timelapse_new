import React from 'react'
import './skills.css'

type SkillSize = 'sm' | 'lg' | 'wide' | 'tall'
type Skill = { name: string; size: SkillSize }
const skills: Skill[] = [
  { name: 'Python', size: 'lg' },
  { name: 'AWS', size: 'lg' },
  { name: 'TensorFlow', size: 'lg' },
  { name: 'Docker', size: 'lg' },
  { name: 'PostgreSQL', size: 'tall' },
  { name: 'Hugging Face', size: 'wide' },
  { name: 'Keras', size: 'sm' },
  { name: 'Scikit-learn', size: 'sm' },
  { name: 'LangChain', size: 'sm' },
  { name: 'LlamaIndex', size: 'sm' },
  { name: 'LangGraph', size: 'sm' },
  { name: 'Postman', size: 'sm' },
  { name: 'Git', size: 'sm' },
  { name: 'Portkey', size: 'sm' },
  { name: 'Apollo', size: 'sm' },
  { name: 'Weka', size: 'sm' },
  { name: 'PyCharm', size: 'sm' },
  { name: 'n8n', size: 'sm' },
  { name: 'Wireshark', size: 'tall' },
  { name: 'Cisco Packet Tracer', size: 'wide' },
]

function SkillIcon({ name }: { name: string }) {
  const id = name.toUpperCase()
  switch (id) {
    case 'PYTHON':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 12a5 5 0 015-5h3a2 2 0 012 2v2H9a2 2 0 00-2 2v1H7v-2z" fill="currentColor" />
          <path d="M17 12a5 5 0 01-5 5H9a2 2 0 01-2-2v-2h8a2 2 0 002-2v-1h1v2z" fill="currentColor" opacity=".8" />
        </svg>
      )
    case 'AWS':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 13c0-3.3 3-6 7-6s7 2.7 7 6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 16c2 2 5 3 8 3s6-1 8-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'TENSORFLOW':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 9l8-4 8 4-3 1.5V18l-3-1.5V11l-2-1-2 1v5.5L7 18v-7.5L4 9z" fill="currentColor" />
        </svg>
      )
    case 'DOCKER':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="12" width="3" height="3" fill="currentColor" />
          <rect x="7" y="12" width="3" height="3" fill="currentColor" />
          <rect x="11" y="12" width="3" height="3" fill="currentColor" />
          <rect x="7" y="8" width="3" height="3" fill="currentColor" />
          <rect x="11" y="8" width="3" height="3" fill="currentColor" />
          <path d="M3 16c0 2.5 2 4 5.5 4H16c3 0 5-1.5 5-4h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'POSTGRESQL':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="8" rx="7" ry="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M5 8v6c0 2.2 3.1 4 7 4s7-1.8 7-4V8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case 'HUGGING FACE':
    case 'HUGGING FACE'.toUpperCase():
    case 'HUGGINGFACE':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
          <path d="M8 14c1.2 1 2.4 1.5 4 1.5s2.8-.5 4-1.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'GIT':
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 14a2 2 0 1 0 2-2v-4a2 2 0 1 1 2 2v4a2 2 0 1 0 2 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-root" aria-label="Skills">
      <h2>Skills</h2>

      <div className="skills-board">
        {skills.map((s) => (
          <div key={s.name} className={`skill is-${s.size}`} aria-label={s.name} title={s.name}>
            <div className="content">
              <SkillIcon name={s.name} />
              <span className="label">{s.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


