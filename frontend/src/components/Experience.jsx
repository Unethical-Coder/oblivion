export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">// sys.experience</p>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline__item">
            <div className="timeline__meta">
              <span className="timeline__dates">
                {job.start} — {job.end}
              </span>
              <span className="timeline__location">{job.location}</span>
            </div>
            <h3 className="timeline__role">{job.role}</h3>
            <p className="timeline__company">{job.company}</p>
            <ul className="timeline__highlights">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="chip-row">
              {job.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
