import { useEffect, useState } from 'react'
import { api } from './api/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    Promise.all([
      api.getProfile(),
      api.getEducation(),
      api.getExperience(),
      api.getProjects(),
      api.getSkills(),
      api.getStats(),
    ])
      .then(([profile, education, experience, projects, skills, stats]) => {
        if (!cancelled) {
          setData({ profile, education, experience, projects, skills, stats })
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (error) {
    return (
      <div className="status-screen">
        <p className="status-screen__code">// connection_error</p>
        <h1>Signal lost</h1>
        <p>
          Couldn&apos;t reach the backend. Make sure the Spring Boot API is running at{' '}
          <code>{import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'}</code>.
        </p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="status-screen">
        <p className="status-screen__code">// booting</p>
        <h1>Loading Oblivion…</h1>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} education={data.education} />
        <Experience experience={data.experience} />
        <Stats stats={data.stats} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Contact profile={data.profile}/>
      </main>
      <Footer name={data.profile.name} />
    </>
  )
}
