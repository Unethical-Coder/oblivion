const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!res.ok) {
    let detail = null
    try {
      detail = await res.json()
    } catch {
      // response wasn't JSON - ignore, we'll fall back to a generic message
    }
    const message = detail?.errors ? JSON.stringify(detail.errors) : `Request failed: ${res.status}`
    throw new Error(message)
  }

  return res.json()
}

export const api = {
  getProfile: () => request('/api/profile'),
  getEducation: () => request('/api/education'),
  getExperience: () => request('/api/experience'),
  getProjects: () => request('/api/projects'),
  getSkills: () => request('/api/skills'),
  getStats: () => request('/api/stats'),
  sendContact: (payload) =>
    request('/api/contact', { method: 'POST', body: JSON.stringify(payload) }),
}
