import { useEffect, useRef } from 'react'

/**
 * DynamicBackground
 * Inspired by the visual experience and dynamic depth of HelpShift Labs:
 * - Interactive mouse-following radial spotlight mask
 * - Ambient multi-layer glowing orbs with organic levitation
 * - Fine-grain geometric cyber grid with radial vignette
 * - Lightweight constellation particle network on HTML5 canvas
 * - Strictly pointer-events-none to preserve 100% interactive fidelity
 */
export default function DynamicBackground() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  // Track cursor position for the dynamic spotlight
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`)
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  // Floating constellation canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize, { passive: true })

    // Generate responsive particle count (fewer on mobile for peak performance)
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55)
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries smoothly
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(142, 237, 199, ${p.baseAlpha})`
        ctx.fill()

        // Connect nearby particles with subtle glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distSq = dx * dx + dy * dy
          const maxDist = 135

          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq)
            const alpha = (1 - dist / maxDist) * 0.16
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(142, 237, 199, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="ambient-background" aria-hidden="true">
      {/* Dynamic Cursor Spotlight Layer */}
      <div className="ambient-spotlight" />

      {/* Cyber Geometric Dot Grid with Radial Vignette */}
      <div className="ambient-grid" />

      {/* High-Impact Ambient Luminous Orbs (HelpShift Style) */}
      <div className="ambient-orb ambient-orb--primary" />
      <div className="ambient-orb ambient-orb--secondary" />
      <div className="ambient-orb ambient-orb--tertiary" />

      {/* Starfield / Constellation Canvas */}
      <canvas ref={canvasRef} className="ambient-canvas" />
    </div>
  )
}
