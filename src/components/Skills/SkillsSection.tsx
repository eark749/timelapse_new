import React from 'react'
import './skills.css'

type SkillGroup = {
  title: string
  items: string[]
  icon: React.ReactNode
}

function IconChip({ gradient }: { gradient: string }) {
  return (
    <span className="icon-chip" aria-hidden="true" style={{ ['--chip']: gradient } as React.CSSProperties } />
  )
}

const groups: SkillGroup[] = [
  {
    title: 'Programming & Scripting',
    items: ['Python'],
    icon: <IconChip gradient="linear-gradient(135deg,#ff7a59,#ffcd3c)" />,
  },
  {
    title: 'Cloud Platforms',
    items: ['AWS'],
    icon: <IconChip gradient="linear-gradient(135deg,#7fda89,#1cb0f6)" />,
  },
  {
    title: 'Data Engineering',
    items: ['Data pipelines','ETL','Data preprocessing'],
    icon: <IconChip gradient="linear-gradient(135deg,#6a85ff,#b46bff)" />,
  },
  {
    title: 'Machine Learning & AI',
    items: ['Machine Learning','Deep Learning','Generative AI','Reinforcement Learning','LLMs'],
    icon: <IconChip gradient="linear-gradient(135deg,#ff5ea3,#7a5cff)" />,
  },
  {
    title: 'Frameworks & Libraries',
    items: ['TensorFlow','Keras','Scikit-learn','LangChain','LlamaIndex','LangGraph','Hugging Face'],
    icon: <IconChip gradient="linear-gradient(135deg,#36d1dc,#5b86e5)" />,
  },
  {
    title: 'Softwares & Tools',
    items: ['Postman','Git','Portkey','Apollo','Weka','PyCharm','PostgreSQL','Docker','n8n','Wireshark','Cisco Packet Tracer'],
    icon: <IconChip gradient="linear-gradient(135deg,#f7971e,#f953c6)" />,
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-root" aria-label="Skills">
      <h2>Skills</h2>

      <div className="skills-grid" onMouseMove={(e) => {
        const target = (e.target as HTMLElement).closest('.skill-card') as HTMLElement | null
        if (!target) return
        const rect = target.getBoundingClientRect()
        const mx = e.clientX - rect.left
        const my = e.clientY - rect.top
        target.style.setProperty('--mx', `${mx}px`)
        target.style.setProperty('--my', `${my}px`)
      }}>
        {groups.map((g, i) => (
          <article className="skill-card" key={i}>
            <div className="skill-header">
              {g.icon}
              <h3>{g.title}</h3>
            </div>
            <ul className="skill-list">
              {g.items.map((s, j) => (
                <li key={j} className="skill-pill">{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}


