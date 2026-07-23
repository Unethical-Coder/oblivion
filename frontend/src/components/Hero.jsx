import NodeMap from './NodeMap'

export default function Hero({ profile }) {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <p className="hero__status">
          <span className="hero__dot" aria-hidden="true" />
          status: {profile.status}
          <span className="hero__cursor" aria-hidden="true" />
        </p>

        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">
          {profile.title} · {profile.location}
        </p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            View work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__map">
        <NodeMap />
      </div>
    </section>
  )
}
