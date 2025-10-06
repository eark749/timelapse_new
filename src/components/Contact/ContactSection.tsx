import React, { useState } from 'react'
import './contact.css'

export default function ContactSection(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    const sheetUrl = (window as any).CONTACT_SHEET_URL || (import.meta as any)?.env?.VITE_CONTACT_SHEET_URL
    if(sheetUrl){
      fetch(sheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, business, phone, ts: new Date().toISOString() })
      }).catch(() => {})
    }
    setSubmitted(true)
    setName(''); setEmail(''); setBusiness(''); setPhone('')
    window.setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact-new" aria-label="Contact">
      <div className="contact-header">
        
        <h2 className="headline">I’ve been waiting<br/>for you.</h2>
        
      </div>

      <div className="contact-card">
        <div className="card-title">Let me know how I can help.</div>
        <form onSubmit={handleSubmit} className="card-form">
          <div className="field">
            <input placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className="field">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <input placeholder="Business name" value={business} onChange={(e)=>setBusiness(e.target.value)} />
          </div>
          <div className="field">
            <input placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {submitted && <div className="form-success" role="status">Thanks! I’ll get back to you.</div>}
      </div>
      <div className="contact-copy">© 2025 <strong>Vansh</strong>. All rights reserved.</div>
    </section>
  )
}



