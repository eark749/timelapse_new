import React from 'react'
import '../components/Certifications/certifications.css'

const allCerts = [
  'AWS Certified Solutions Architect – Associate (2024)',
  'AWS Certified Cloud Practitioner (2023)',
  'TensorFlow Developer Certificate (2023)',
  'Deep Learning Specialization – deeplearning.ai (2022)',
  'Machine Learning – Stanford/ Coursera (2021)',
  'Docker Essentials (2020)',
]

export default function CertificationsPage() {
  return (
    <div className="section certs-root" aria-label="All Certifications">
      <div className="certs-header">
        <h2>All Certifications</h2>
        <a className="show-all" href="#/" aria-label="Back to home">← Back</a>
      </div>

      <ul className="certs-list" role="list">
        {allCerts.map((c, i) => (
          <li className="cert-item" key={i}>
            <div className="cert-icon" aria-hidden="true" />
            <div className="cert-meta">
              <div className="cert-title">{c}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


