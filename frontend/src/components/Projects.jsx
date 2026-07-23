export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">// sys.projects</p>
      <div className="projects">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-card__head">
              <h3>{project.name}</h3>
              <p className="project-card__tagline">{project.tagline}</p>
            </div>
            <p className="project-card__desc">{project.description}</p>
            <div className="chip-row">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            {(project.repoUrl || project.liveUrl) && (
              <div className="project-card__links">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source →
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live →
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
