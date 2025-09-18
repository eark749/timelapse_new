import React from 'react'
import './certifications.css'

type Cert = { title: string; issuer: string; year: string }

const featured: Cert[] = [
  { title: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2024' },
  { title: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2023' },
  { title: 'Deep Learning Specialization', issuer: 'deeplearning.ai', year: '2022' },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section certs-root" aria-label="Certifications">
      <div className="certs-header">
        <h2>Certifications</h2>
        <a className="show-all" href="#/certifications" aria-label="Show all certifications">Show all →</a>
      </div>

      <ul className="certs-list" role="list">
        {featured.map((c, i) => (
          <li className="cert-item" key={i}>
            <div className="cert-icon" aria-hidden="true" />
            <div className="cert-meta">
              <div className="cert-title">{c.title}</div>
              <div className="cert-sub">{c.issuer} · {c.year}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}


