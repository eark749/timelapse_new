import React from 'react'
import './contact.css'

export default function ContactSection() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="section contact-root" aria-label="Contact">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>Have a project in mind or want to collaborate? Let’s talk.</p>
        <div className="contact-actions">
          <a className="contact-cta" href="mailto:vansh@example.com">vansh@example.com</a>
        </div>
      </div>

      <div className="copyright">© {year} <strong>Vansh</strong>. All rights reserved.</div>
    </footer>
  )
}



