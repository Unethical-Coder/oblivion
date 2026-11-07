import * as data from '../data/portfolioData'

/**
 * Pure client-side data provider.
 * Eliminates all network latency and external backend dependencies.
 */
export const api = {
  getProfile: async () => data.profile,
  getEducation: async () => data.education,
  getAchievements: async () => data.achievements,
  getExperience: async () => data.experience,
  getProjects: async () => data.projects,
  getSkills: async () => data.skills,
  getStats: async () => data.stats,
}
