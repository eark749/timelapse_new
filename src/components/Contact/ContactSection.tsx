import React, { useEffect, useState } from 'react'
import './contact.css'

export default function ContactSection() {
  const year = new Date().getFullYear()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const sheetUrl = (window as any).CONTACT_SHEET_URL || (import.meta as any)?.env?.VITE_CONTACT_SHEET_URL
    if(sheetUrl){
      fetch(sheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, ts: new Date().toISOString() })
      }).catch(() => {})
    }
    setSubmitted(true)
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    window.setTimeout(() => setSubmitted(false), 3000)
  }
  return (
    <footer id="contact" className="section contact-root contact2" aria-label="Contact">
      <div className="contact2-shell">
        <div className="contact2-left">
          <div className="contact2-eyebrow">CONTACT</div>
          <h2 className="contact2-title">
            <span>GET IN</span>
            <span>TOUCH</span>
          </h2>
          <a className="contact2-email" href="mailto:vansh@example.com">vansh@example.com</a>
          <p className="contact2-sub">Let me know how I can serve you best.</p>
          <div className="contact2-social">
            <div className="social-h">Social Links</div>
            <ul className="social-list" role="list">
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-link">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.17-3.37-1.17-.46-1.18-1.11-1.5-1.11-1.5-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03 .9 1.52 2.36 1.08 2.94.83.09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.39.21 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" rel="noreferrer" className="social-link">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h3.7l5.03 6.9L16.3 3H21l-7.7 9.9L21 21h-3.7l-5.03-6.9L7.7 21H3l7.7-8.1L3 3Z"/></svg>
                  <span>X</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-link">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.8v1.7h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.64 4.74 6.07V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4Z"/></svg>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact2-right">
          <div className="contact2-form">
            <div className="form-title">Send me a message</div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required />
              </div>
              <div className="form-row">
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" />
              </div>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Your message" required />
              <button type="submit">Submit</button>
            </form>
            {submitted && <div className="form-success" role="status">Thanks! I’ll get back to you.</div>}
          </div>
        </div>
      </div>

      <div className="copyright">© {year} <strong>Vansh</strong>. All rights reserved.</div>
    </footer>
  )
}



