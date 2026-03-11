import React from 'react'
import './skills.css'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

type SkillSize = 'sm' | 'lg' | 'wide' | 'tall'
type Skill = { name: string; size: SkillSize; level: number }
const skills: Skill[] = [
  { name: 'Python', size: 'lg', level: 92 },
  { name: 'AWS', size: 'lg', level: 75 },
  { name: 'TensorFlow', size: 'lg', level: 78 },
  { name: 'Docker', size: 'lg', level: 72 },
  { name: 'PostgreSQL', size: 'lg', level: 68 },
  { name: 'Hugging Face', size: 'wide', level: 82 },
  { name: 'Keras', size: 'sm', level: 76 },
  { name: 'Scikit-learn', size: 'sm', level: 80 },
  { name: 'LangChain', size: 'sm', level: 84 },
  { name: 'LlamaIndex', size: 'sm', level: 74 },
  { name: 'LangGraph', size: 'sm', level: 62 },
  { name: 'Postman', size: 'sm', level: 70 },
  { name: 'Git', size: 'sm', level: 88 },
  { name: 'Portkey', size: 'sm', level: 60 },
  { name: 'Apollo', size: 'sm', level: 58 },
  { name: 'Weka', size: 'sm', level: 55 },
  { name: 'PyCharm', size: 'sm', level: 86 },
  { name: 'n8n', size: 'sm', level: 64 },
  { name: 'Wireshark', size: 'lg', level: 56 },
  { name: 'Azure', size: 'lg', level: 70 },
  { name: 'Rust', size: 'sm', level: 20 },
  { name: 'Cisco Packet Tracer', size: 'wide', level: 62 },
]

const iconMap: Record<string, string> = {
  'PYTHON': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'TENSORFLOW': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  'DOCKER': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'POSTGRESQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'HUGGING FACE': 'https://cdn.simpleicons.org/huggingface/FFD21E',
  'KERAS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
  'SCIKIT-LEARN': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'LANGCHAIN': 'https://cdn.simpleicons.org/langchain/1C3C3C',
  'LLAMAINDEX': 'https://cdn.simpleicons.org/llamaindex/000000',
  'LANGGRAPH': 'https://cdn.simpleicons.org/langchain/2B2B2B',
  'POSTMAN': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'GIT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'APOLLO': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
  'PYCHARM': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg',
  'N8N': 'https://cdn.simpleicons.org/n8n/EA3D4B',
  'WIRESHARK': 'https://cdn.simpleicons.org/wireshark/1679A7',
  'AZURE': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'RUST': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
  'CISCO PACKET TRACER': 'https://cdn.simpleicons.org/cisco/049FD9',
}

function SkillIcon({ name }: { name: string }) {
  const [error, setError] = React.useState(false)
  const id = name.toUpperCase()
  const url = iconMap[id]
  
  const getHashColor = () => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${Math.abs(hash) % 360}, 65%, 45%)`;
  }

  if (url && !error) {
    return <img src={url} alt={`${name} icon`} className="icon" onError={() => setError(true)} draggable="false" />
  }

  const baseProps = {
    className: "icon",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    style: { color: getHashColor() }
  };

  return (
    <svg {...baseProps}>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        {name.charAt(0).toUpperCase()}
      </text>
    </svg>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-root" aria-label="Skills">
      <ScrollAnimation>
        <h2>Skills</h2>
      </ScrollAnimation>

      <ScrollAnimation className="scale-up">
        <div className="skills-board">
          {skills.map((s) => (
            <div
              key={s.name}
              className={`skill is-${s.size}`}
              aria-label={s.name}
              title={s.name}
              style={{ ['--level' as any]: `${s.level}%` }}
            >
              <div className="content">
                <SkillIcon name={s.name} />
                <span className="label">{s.name}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  )
}


