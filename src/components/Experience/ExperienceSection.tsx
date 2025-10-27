import React, { useEffect, useRef } from 'react'
import './experience.css'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

type Role = {
  title: string
  company: string
  location: string
  dates: string
  summary: string
  icon: 'code' | 'brain' | 'server' | 'chart' | 'bolt'
}

const roles: Role[] = [
  {
    title: 'AI Engineer',
    company: 'Rysysth Technology',
    location: 'Bangalore',
    dates: 'July 2025 – Present',
    summary:
      'Developed and deployed AI-powered solutions, integrated models into apps, built scalable infrastructure, and monitored systems for performance.',
    icon: 'server',
  },
  {
    title: 'AI Engineer',
    company: 'Zensible',
    location: 'Bangalore',
    dates: 'April 2025 – July 2025',
    summary:
      'Built practical AI applications; created an HRMS bot automating HR functions and chat-based employee support.',
    icon: 'code',
  },
  {
    title: 'AI Consultant',
    company: 'Amaze Inc',
    location: 'Bangalore',
    dates: 'Jan 2025 – April 2025',
    summary:
      'Transformed datasets into insights; architected custom AI solutions enabling data-driven decisions that drive business value.',
    icon: 'chart',
  },
  {
    title: 'AI Engineer Intern',
    company: 'Brand Shark',
    location: 'Bangalore',
    dates: 'Nov 2024 – Jan 2025',
    summary:
      'Analyzed and visualized data; developed problem-solving skills and delivered insights to support business decisions.',
    icon: 'bolt',
  },
  {
    title: 'Data Analyst Intern',
    company: 'Plusinfosys',
    location: 'Ahmedabad',
    dates: 'June 2024 – Oct 2024',
    summary:
      'Identified leads, qualified prospects, and scheduled meetings between qualified prospects and team leadership.',
    icon: 'brain',
  },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('show'))
    }, { threshold: 0.15 })
    Array.from(el.querySelectorAll('.xp-card')).forEach(n => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="section exp-root" aria-label="Experience">
      <ScrollAnimation>
        <h2>Experience</h2>
      </ScrollAnimation>
      <ul className="exp-list" ref={ref}>
        {roles.map((r, i) => (
          <ScrollAnimation key={i} delay={i * 100}>
            <li className="glass-item">
              <div className="glass-head">
                <div className="glass-icon"><Icon name={r.icon} /></div>
                <div className="glass-title">
                  <div className="xp-title">{r.title}</div>
                  <div className="xp-meta">{r.company} · {r.location}</div>
                  <div className="xp-dates">{r.dates}</div>
                </div>
              </div>
              <p className="xp-summary">{r.summary}</p>
            </li>
          </ScrollAnimation>
        ))}
      </ul>
    </section>
  )
}

function Icon({ name }: { name: Role['icon'] }){
  switch(name){
    case 'code':
      return (
        <svg className="xp-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'server':
      return (
        <svg className="xp-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="18" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="7" cy="7" r="1" fill="currentColor"/>
          <circle cx="7" cy="17" r="1" fill="currentColor"/>
        </svg>
      )
    case 'chart':
      return (
        <svg className="xp-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12h4v8H3zM10 8h4v12h-4zM17 4h4v16h-4z" fill="currentColor"/>
        </svg>
      )
    case 'bolt':
      return (
        <svg className="xp-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor"/>
        </svg>
      )
    case 'brain':
    default:
      return (
        <svg className="xp-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 6a3 3 0 0 1 6 0 3 3 0 0 1 3 5 3 3 0 0 1-3 5 3 3 0 0 1-6 0 3 3 0 0 1-3-5 3 3 0 0 1 3-5z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
  }
}



