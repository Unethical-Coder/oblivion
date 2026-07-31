import { useState } from 'react'
import { api } from '../api/client'

const initialForm = { name: '', email: '', message: '' }

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function IconResume() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function Contact({profile}) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrors({})

    try {
      await api.sendContact(form)
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      try {
        setErrors(JSON.parse(err.message))
      } catch {
        setErrors({})
      }
    }
  }

  return (
    <section id="contact" className="section">
      <p className="eyebrow">// sys.contact</p>
      <div className="contact">
        <div className="contact__intro">
          <h2>Let&apos;s talk</h2>
          <p>Open to backend and full-stack roles. The fastest way to reach me is the form below, or:</p>
          <p>Open to backend and full-stack roles. The fastest way to reach me is the form below, or:</p>
          <a href={`mailto:${profile.email}`} className="contact__email">
            <IconMail /> {profile.email}
          </a>

          <div className="contact__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__social">
              <IconGithub /> <span>GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__social">
              <IconLinkedin /> <span>LinkedIn</span>
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="contact__social">
              <IconResume /> <span>Resume</span>
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </label>

          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </label>

          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && <p className="contact__note contact__note--ok">Message sent — thank you.</p>}
          {status === 'error' && Object.keys(errors).length === 0 && (
            <p className="contact__note contact__note--error">Something went wrong. Try again in a moment.</p>
          )}
        </form>
      </div>
    </section>
  )
}
