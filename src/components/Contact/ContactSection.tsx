import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

export default function ContactSection(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
      console.log('EmailJS initialized successfully')
    } else {
      console.error('EmailJS public key not found in environment variables')
    }
  }, [])

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setError(false)
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    
    console.log('Sending email with:', { serviceId, templateId, name, email })
    
    try {
      // Send email notification via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          interest: interest,
          budget: budget,
          message: message,
          to_name: 'Vansh', // Your name
        }
      )
      
      console.log('Email sent successfully:', response)
      setSubmitted(true)
      setName(''); setEmail(''); setInterest(''); setBudget(''); setMessage('')
      window.setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error('Failed to send email:', err)
      setError(true)
      window.setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <section id="contact" className="contact-new" aria-label="Contact">
      <ScrollAnimation>
        <div className="contact-header">
          <h2 className="headline">Get in touch 👋</h2>
        </div>
      </ScrollAnimation>

      <ScrollAnimation className="scale-up" delay={200}>
        <div className="contact-card">
          <form onSubmit={handleSubmit} className="card-form">
            <div className="form-row">
              <div className="field">
                <label>Your name</label>
                <input placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} required />
              </div>
              <div className="field">
                <label>Your email</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              </div>
            </div>
            
            <div className="field">
              <label>What you are interested</label>
              <select value={interest} onChange={(e)=>setInterest(e.target.value)} required>
                <option value="">Select interest</option>
                <option value="AI/ML Development">AI/ML Development</option>
                <option value="LLM Integration">LLM Integration</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field">
              <label>Message</label>
              <textarea 
                placeholder="Let tell us know your project about" 
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                rows={5}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </button>
          </form>
          {submitted && <div className="form-success" role="status">Thanks! I'll get back to you.</div>}
          {error && <div className="form-error" role="alert">Failed to send message. Please try again.</div>}
        </div>
      </ScrollAnimation>
      <div className="contact-copy">© 2025 <strong>Vansh</strong>. All rights reserved.</div>
    </section>
  )
}



