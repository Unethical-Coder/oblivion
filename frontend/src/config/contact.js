/**
 * Contact & WhatsApp Automation Configuration
 * 
 * To change the recipient WhatsApp number:
 * 1. Define VITE_WHATSAPP_NUMBER in your environment (e.g. .env or hosting environment variables).
 * 2. Or modify the `defaultWhatsAppNumber` property below.
 * 
 * Ensure the number includes the country code with NO leading plus sign or special characters
 * (e.g., '919319808968' for +91 9319808968).
 */

export const CONTACT_CONFIG = {
  // Recipient WhatsApp phone number in international format without '+' (e.g. 919319808968)
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919319808968',
  recipientEmail: 'anurag.tradersfbd@gmail.com',
  recipientName: 'Anurag Kumar',
}

/**
 * Sanitizes phone number to digits only (e.g., "+91-9319808968" -> "919319808968")
 */
export function sanitizePhoneNumber(phone) {
  if (!phone) return ''
  return String(phone).replace(/[^0-9]/g, '')
}

/**
 * Builds the official WhatsApp click-to-chat URL with structured message payload
 */
export function buildWhatsAppUrl({ name, email, phone, message }) {
  const recipient = sanitizePhoneNumber(CONTACT_CONFIG.whatsappNumber)

  const textLines = [
    `*New Portfolio Enquiry* 🚀`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `*Name:* ${name.trim()}`,
    `*Email:* ${email.trim()}`,
    `*Phone:* ${phone ? phone.trim() : 'Not provided'}`,
    ``,
    `*Message:*`,
    `${message.trim()}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `_Sent via Anurag Kumar's Portfolio (Oblivion)_`,
  ]

  const encodedText = encodeURIComponent(textLines.join('\n'))
  return `https://wa.me/${recipient}?text=${encodedText}`
}

/**
 * Builds fallback mailto: link with prefilled subject and body
 */
export function buildMailtoUrl({ name, email, phone, message }) {
  const subject = encodeURIComponent(`Portfolio Enquiry from ${name.trim()}`)
  const body = encodeURIComponent(
    `Hello Anurag,\n\n${message.trim()}\n\n--\nName: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${phone ? phone.trim() : 'N/A'}`
  )
  return `mailto:${CONTACT_CONFIG.recipientEmail}?subject=${subject}&body=${body}`
}
