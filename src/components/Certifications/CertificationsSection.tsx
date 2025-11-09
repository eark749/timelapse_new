import React, { useState } from 'react'
import './certifications.css'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

type Cert = { title: string; issuer: string; year: string; proofUrl?: string; image?: string }
type Badge = { name: string; platform: string; issuedOn: string; proofUrl: string; image?: string }

const featured: Cert[] = [
  { 
    title: 'LLM Applications With Prompt Engineering', 
    issuer: 'NVIDIA', 
    year: 'October 2025',
    proofUrl: 'https://learn.nvidia.com/certificates?id=HCQrbDVNREas0mefmsQKIQ#'
  },
  { 
    title: 'AI Automation: Build LLM Apps & AI-Agents with n8n & API\'s', 
    issuer: 'Udemy', 
    year: 'July 2025',
    proofUrl: 'https://www.udemy.com/certificate/UC-2d869174-096f-46a9-bac6-91da8ed5215e/'
  },
  { 
    title: 'AWS AI Practitioner', 
    issuer: 'Udemy', 
    year: '2025',
    proofUrl: 'https://www.udemy.com/certificate/UC-af593463-84ce-4ee1-ab7a-789d2e019723/'
  },
  { 
    title: 'Azure AI Fundamentals', 
    issuer: 'neo4j', 
    year: 'November 2025',
    proofUrl: 'https://www.udemy.com/certificate/UC-c1f0eb7a-25f4-49db-812e-75293f2e939d/'
  },
  { 
    title: 'Neo4j Certified Professional', 
    issuer: 'Udemy', 
    year: 'November 2025',
    proofUrl: 'https://graphacademy.neo4j.com/c/757eeadf-22c7-473d-ac26-f21797a40206/'
  },
  { 
    title: 'Complete Generative AI Course With Langchain and Huggingface', 
    issuer: 'Udemy', 
    year: 'November 2025',
    proofUrl: 'https://www.udemy.com/certificate/UC-c82f6b0c-d371-46e5-a9e6-c2d55338007c/'
  },
  { 
    title: 'Supervised Machine Learning: Regression and Classification', 
    issuer: 'DeepLearning.AI', 
    year: 'June 2024',
    proofUrl: 'https://www.coursera.org/account/accomplishments/records/8S3UFPCB5M69'
  },
  { 
    title: 'Data Processing and Manipulation', 
    issuer: 'University of Colorado Boulder', 
    year: 'June 2024',
    proofUrl: 'https://www.coursera.org/account/accomplishments/records/TAG2ZBKW3NDC'
  },
  { 
    title: 'Ethical Hacking', 
    issuer: 'NPTEL', 
    year: 'October 2023',
    proofUrl: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS75S83050103720010286'
  },
]

const badgesSample: Badge[] = [
  { 
    name: 'Generative AI Fundamentals', 
    platform: 'Databricks', 
    issuedOn: '2025', 
    proofUrl: 'https://credentials.databricks.com/e8d6d80f-81c7-4c4a-90ea-051df2e3791d#acc.aLkhMJ4m'
  },
  { 
    name: 'Vertex AI', 
    platform: 'Google', 
    issuedOn: '2025', 
    proofUrl: 'https://www.credly.com/badges/eedb49a6-01cc-4e06-89e7-b48e2ad02baf/public_url'
  },
  { 
    name: 'Cloud Foundations', 
    platform: 'AWS', 
    issuedOn: '2025', 
    proofUrl: 'https://www.credly.com/badges/85de4f60-c9bd-4219-b44b-09fb48acc35d/print'
  },
]

export default function CertificationsSection() {
  const [tab, setTab] = useState<'certs' | 'badges'>('certs')
  return (
    <section id="certifications" className="section certs-root" aria-label="Certifications">
      <ScrollAnimation>
        <div className="certs-header">
          <h2>Certifications</h2>
          <div className="tabs" role="tablist">
            <button className={`tab ${tab==='certs'?'active':''}`} role="tab" aria-selected={tab==='certs'} onClick={()=>setTab('certs')}>Certifications</button>
            <button className={`tab ${tab==='badges'?'active':''}`} role="tab" aria-selected={tab==='badges'} onClick={()=>setTab('badges')}>Badges</button>
            {/* removed separate page link */}
          </div>
        </div>
      </ScrollAnimation>

      {tab==='certs' ? (
        <ScrollAnimation>
          <ul className="certs-list" role="list">
            {featured.map((c, i) => (
              <li className="cert-item" key={i}>
                <div className="cert-logo" aria-hidden="true">{c.image ? <img src={c.image} alt=""/> : <span className="badge-fallback">{c.title[0]}</span>}</div>
                <div className="cert-meta">
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-sub">{c.issuer} · {c.year}</div>
                </div>
                {c.proofUrl && (
                  <a className="cert-arrow" href={c.proofUrl} target="_blank" rel="noreferrer" aria-label="View certificate">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </ScrollAnimation>
      ) : (
        <ScrollAnimation>
          <div className="badge-grid">
            {badgesSample.map((b, i) => (
              <a className="badge" key={i} href={b.proofUrl} target="_blank" rel="noreferrer" title={`${b.name} · ${b.platform}`}>
                <div className="badge-img" aria-hidden="true">{b.image ? <img src={b.image} alt=""/> : <span className="badge-fallback">{b.name[0]}</span>}</div>
                <div className="badge-meta">
                  <div className="badge-title">{b.name}</div>
                  <div className="badge-sub">{b.platform} · {b.issuedOn}</div>
                </div>
                <span className="badge-arrow" aria-label="View badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </ScrollAnimation>
      )}
    </section>
  )
}


