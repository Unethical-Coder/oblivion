import { useEffect, useState } from 'react'
import * as portfolioData from './data/portfolioData'
import DynamicBackground from './components/DynamicBackground'
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

  useEffect(() => {
    // Pure client-side data resolution (instant, zero network failure)
    setData(portfolioData)
  }, [])

  if (!data) {
    return (
      <div className="status-screen">
        <p className="status-screen__code">// booting</p>
        <h1>Loading Oblivion…</h1>
      </div>
    )
  }

  return (
    <div className="app-canvas">
      {/* Dynamic ambient background inspired by HelpShift Labs */}
      <DynamicBackground />

      <Navbar resumeUrl={data.profile.resumeUrl} />
      <main>
        <Hero profile={data.profile} />
        <About
          profile={data.profile}
          education={data.education}
          achievements={data.achievements}
        />
        <Experience experience={data.experience} />
        <Stats stats={data.stats} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Contact profile={data.profile} />
      </main>
      <Footer name={data.profile.name} />
    </div>
  )
}
