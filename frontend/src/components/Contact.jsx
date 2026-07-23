import { useState } from 'react'
import { api } from '../api/client'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
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
          <p>Open to backend and full-stack roles. The fastest way to reach me is the form below.</p>
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
