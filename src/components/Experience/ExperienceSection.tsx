import React, { useEffect, useRef } from 'react'
import './experience.css'

type Role = {
  title: string
  company: string
  location: string
  dates: string
  summary: string
}

const roles: Role[] = [
  {
    title: 'AI Engineer',
    company: 'Rysysth Technology',
    location: 'Bangalore',
    dates: 'July 2025 – Present',
    summary:
      'Developed and deployed AI-powered solutions, integrated models into apps, built scalable infrastructure, and monitored systems for performance.',
  },
  {
    title: 'AI Engineer',
    company: 'Zensible',
    location: 'Bangalore',
    dates: 'April 2025 – July 2025',
    summary:
      'Built practical AI applications; created an HRMS bot automating HR functions and chat-based employee support.',
  },
  {
    title: 'AI Consultant',
    company: 'Amaze Inc',
    location: 'Bangalore',
    dates: 'Jan 2025 – April 2025',
    summary:
      'Transformed datasets into insights; architected custom AI solutions enabling data-driven decisions that drive business value.',
  },
  {
    title: 'AI Engineer Intern',
    company: 'Brand Shark',
    location: 'Bangalore',
    dates: 'Nov 2024 – Jan 2025',
    summary:
      'Analyzed and visualized data; developed problem-solving skills and delivered insights to support business decisions.',
  },
  {
    title: 'Data Analyst Intern',
    company: 'Plusinfosys',
    location: 'Ahmedabad',
    dates: 'June 2024 – Oct 2024',
    summary:
      'Identified leads, qualified prospects, and scheduled meetings between qualified prospects and team leadership.',
  },
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const cards = Array.from(el.querySelectorAll('.exp-card'))
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('show')
          }
        })
      },
      { threshold: 0.16 }
    )
    cards.forEach(c => io.observe(c))
    return () => io.disconnect()
  }, [])

  return (
    <section id="experience" className="section exp-root" aria-label="Experience">
      <h2>Experience</h2>
      <div className="exp-timeline" ref={containerRef}>
        {roles.map((r, i) => (
          <article key={i} className="exp-card">
            <div className="dot" aria-hidden="true" />
            <div className="exp-header">
              <h3>{r.title}</h3>
              <div className="meta">{r.company} · {r.location} · {r.dates}</div>
            </div>
            <p className="exp-summary">{r.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}



