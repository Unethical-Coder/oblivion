export default function Stats({ stats }) {
  return (
    <section className="stats" aria-label="Key metrics">
      {stats.map((s) => {
        const content = (
          <>
            <p className="stats__value">
              {s.value}
              {s.url && (
                <span className="stats__link-icon" aria-hidden="true">
                  ↗
                </span>
              )}
            </p>
            <p className="stats__label">{s.label}</p>
            <p className="stats__detail">{s.detail}</p>
          </>
        )

        return s.url ? (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="stats__item stats__item--link"
            title={`View ${s.label} profile`}
          >
            {content}
          </a>
        ) : (
          <div key={s.label} className="stats__item">
            {content}
          </div>
        )
      })}
    </section>
  )
}
