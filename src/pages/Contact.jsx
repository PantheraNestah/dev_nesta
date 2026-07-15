import { useState } from 'react'
import './Contact.css'

// Replace with the real Formspree endpoint, e.g. 'https://formspree.io/f/xxxxxxx'
const FORMSPREE_ENDPOINT = ''

const socials = [
  { label: 'GitHub', href: 'https://github.com/PantheraNestah' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gift-nestah/' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__grid">

          {/* ── Left: intro ── */}
          <div className="contact__intro">
            <h1 className="contact__title">Let's talk</h1>
            <p className="contact__text">
              Got a system worth building, a problem worth solving, or just
              want to say hi? My inbox is open — I read and reply to every
              message myself.
            </p>

            <div className="contact__info">
              <div className="contact__info-row">
                <span className="contact__info-label">Location</span>
                <span className="contact__info-value">Nairobi, Kenya</span>
              </div>
              <div className="contact__info-row">
                <span className="contact__info-label">Timezone</span>
                <span className="contact__info-value">EAT (UTC+3)</span>
              </div>
            </div>

            <div className="contact__socials">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="contact__status contact__status--success">
                Thanks — your message is in. I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error">
                Something went wrong. Please try again, or email me directly.
              </p>
            )}
          </form>

        </div>
      </div>
    </div>
  )
}
