import React, { useState } from 'react'
import './certifications.css'

type Cert = { title: string; issuer: string; year: string; proofUrl?: string; image?: string }
type Badge = { name: string; platform: string; issuedOn: string; proofUrl: string; image?: string }

const featured: Cert[] = [
  { title: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2024' },
  { title: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2023' },
  { title: 'Deep Learning Specialization', issuer: 'deeplearning.ai', year: '2022' },
]

const badgesSample: Badge[] = [
  { name: 'AWS Certified: Cloud Practitioner', platform: 'Credly', issuedOn: '2023', proofUrl: '#', image: '' },
  { name: 'Docker Essentials', platform: 'Docker', issuedOn: '2020', proofUrl: '#', image: '' },
]

export default function CertificationsSection() {
  const [tab, setTab] = useState<'certs' | 'badges'>('certs')
  return (
    <section id="certifications" className="section certs-root" aria-label="Certifications">
      <div className="certs-header">
        <h2>Credentials</h2>
        <div className="tabs" role="tablist">
          <button className={`tab ${tab==='certs'?'active':''}`} role="tab" aria-selected={tab==='certs'} onClick={()=>setTab('certs')}>Certifications</button>
          <button className={`tab ${tab==='badges'?'active':''}`} role="tab" aria-selected={tab==='badges'} onClick={()=>setTab('badges')}>Badges</button>
          {/* removed separate page link */}
        </div>
      </div>

      {tab==='certs' ? (
        <ul className="certs-list" role="list">
          {featured.map((c, i) => (
            <li className="cert-item" key={i}>
              <div className="cert-logo" aria-hidden="true">{c.image ? <img src={c.image} alt=""/> : <span className="badge-fallback">{c.title[0]}</span>}</div>
              <div className="cert-meta">
                <div className="cert-title">{c.title}</div>
                <div className="cert-sub">{c.issuer} · {c.year}</div>
              </div>
              {c.proofUrl && <a className="proof" href={c.proofUrl} target="_blank" rel="noreferrer">View</a>}
            </li>
          ))}
        </ul>
      ) : (
        <div className="badge-grid">
          {badgesSample.map((b, i) => (
            <a className="badge" key={i} href={b.proofUrl} target="_blank" rel="noreferrer" title={`${b.name} · ${b.platform}`}>
              <div className="badge-img" aria-hidden="true">{b.image ? <img src={b.image} alt=""/> : <span className="badge-fallback">{b.name[0]}</span>}</div>
              <div className="badge-meta">
                <div className="badge-title">{b.name}</div>
                <div className="badge-sub">{b.platform} · {b.issuedOn}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}


