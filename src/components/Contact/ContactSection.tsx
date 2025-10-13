import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

export default function ContactSection(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')
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
          message: description,
          phone: phone,
          to_name: 'Vansh', // Your name
        }
      )
      
      console.log('Email sent successfully:', response)
      setSubmitted(true)
      setName(''); setEmail(''); setDescription(''); setPhone('')
      window.setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error('Failed to send email:', err)
      setError(true)
      window.setTimeout(() => setError(false), 3000)
    }
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
            <input placeholder="Description or query" value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <div className="field">
            <input placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {submitted && <div className="form-success" role="status">Thanks! I'll get back to you.</div>}
        {error && <div className="form-error" role="alert">Failed to send message. Please try again.</div>}
      </div>
      <div className="contact-copy">© 2025 <strong>Vansh</strong>. All rights reserved.</div>
    </section>
  )
}



