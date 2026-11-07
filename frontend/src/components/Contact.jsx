import { useState } from 'react'
import { CONTACT_CONFIG, buildWhatsAppUrl, buildMailtoUrl } from '../config/contact'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: 'General Enquiry',
  message: '',
}

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

function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconCopy() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export default function Contact({ profile }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submittedUrl, setSubmittedUrl] = useState(null)
  const [copied, setCopied] = useState(false)

  const validate = (values) => {
    const errs = {}

    // Name validation
    if (!values.name || !values.name.trim()) {
      errs.name = 'Full name is required'
    } else if (values.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!values.email || !values.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!emailRegex.test(values.email.trim())) {
      errs.email = 'Please enter a valid email address'
    }

    // Phone validation (optional, but if provided must be plausible)
    if (values.phone && values.phone.trim()) {
      const digits = values.phone.replace(/[^0-9]/g, '')
      if (digits.length < 7 || digits.length > 15) {
        errs.phone = 'Please enter a valid phone number (7-15 digits)'
      }
    }

    // Message validation
    if (!values.message || !values.message.trim()) {
      errs.message = 'Please enter your message or project enquiry'
    } else if (values.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters'
    }

    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific error as user types if already touched
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validate(form)
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    })

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    // Generate official WhatsApp Click-to-Chat URL
    const waUrl = buildWhatsAppUrl({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: `[Subject: ${form.subject}]\n${form.message}`,
    })

    setSubmittedUrl(waUrl)

    // Open WhatsApp in a new tab without losing any form details
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCopy = () => {
    const textToCopy = `Portfolio Enquiry\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setTouched({})
    setSubmittedUrl(null)
  }

  const mailtoUrl = buildMailtoUrl({
    name: form.name,
    email: form.email,
    phone: form.phone,
    message: `[Subject: ${form.subject}]\n${form.message}`,
  })

  return (
    <section id="contact" className="section">
      <p className="eyebrow">// sys.contact</p>
      <div className="contact">
        <div className="contact__intro">
          <h2>Let&apos;s build together</h2>
          <p>
            Open to senior backend, distributed systems, and agentic AI roles, as well as technical consulting.
            Fill out the form to dispatch an enquiry straight to my WhatsApp, or connect through the direct channels below:
          </p>

          <a href={`mailto:${profile.email}`} className="contact__email">
            <IconMail /> <span>{profile.email}</span>
          </a>

          {profile.phone && (
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="contact__direct-wa"
            >
              <IconWhatsApp /> <span>{profile.phone} (WhatsApp)</span>
            </a>
          )}

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

        <div className="contact__card">
          {submittedUrl ? (
            <div className="contact__handoff">
              <div className="contact__handoff-badge">
                <span className="contact__handoff-icon">
                  <IconWhatsApp />
                </span>
                <span>WhatsApp Dispatch Ready</span>
              </div>

              <h3 className="contact__handoff-title">Your enquiry is prefilled</h3>
              <p className="contact__handoff-desc">
                WhatsApp has been launched in a new window with your complete message formatted and prefilled.
                Please review the text in WhatsApp and tap <strong>Send</strong> to complete the delivery.
              </p>

              <div className="contact__handoff-actions">
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--wa"
                >
                  <IconWhatsApp /> Open WhatsApp Again
                </a>

                <button type="button" onClick={handleCopy} className="btn btn--ghost">
                  {copied ? (
                    <>
                      <IconCheck /> Copied to Clipboard
                    </>
                  ) : (
                    <>
                      <IconCopy /> Copy Message Text
                    </>
                  )}
                </button>

                <a href={mailtoUrl} className="btn btn--ghost">
                  <IconMail /> Send via Email Instead
                </a>

                <button type="button" onClick={() => setSubmittedUrl(null)} className="btn btn--link">
                  ← Edit message details
                </button>
              </div>

              <p className="contact__handoff-footnote">
                Note: WhatsApp requires the sender to confirm before transmitting. Your message text is safely preserved above.
              </p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label className="form-group">
                  <span className="form-label">
                    Your Name <span className="req">*</span>
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="e.g. Maya Lin"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? 'input--error' : ''}
                    autoComplete="name"
                    required
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </label>

                <label className="form-group">
                  <span className="form-label">
                    Email Address <span className="req">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="maya@enterprise.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? 'input--error' : ''}
                    autoComplete="email"
                    required
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </label>
              </div>

              <div className="form-row">
                <label className="form-group">
                  <span className="form-label">Phone / WhatsApp Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.phone ? 'input--error' : ''}
                    autoComplete="tel"
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </label>

                <label className="form-group">
                  <span className="form-label">Enquiry Topic</span>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Full-time Engineering Role">Full-time Engineering Role</option>
                    <option value="Backend / Distributed Systems Project">Backend / Distributed Systems</option>
                    <option value="Agentic AI / Automation Architecture">Agentic AI & Automation</option>
                    <option value="Technical Consulting">Technical Consulting</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </label>
              </div>

              <label className="form-group">
                <span className="form-label">
                  Project or Opportunity Details <span className="req">*</span>
                </span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Share a summary of what you are building, team objectives, timeline, or relevant links..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message ? 'input--error' : ''}
                  required
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </label>

              <div className="contact__form-footer">
                <button type="submit" className="btn btn--primary btn--wa-submit">
                  <IconWhatsApp />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <span className="contact__wa-note">
                  Direct WhatsApp link · Opens with message formatted & prefilled
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
