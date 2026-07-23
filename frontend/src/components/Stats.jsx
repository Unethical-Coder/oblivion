export default function Stats({ stats }) {
  return (
    <section className="stats" aria-label="Key metrics">
      {stats.map((s) => (
        <div key={s.label} className="stats__item">
          <p className="stats__value">{s.value}</p>
          <p className="stats__label">{s.label}</p>
          <p className="stats__detail">{s.detail}</p>
        </div>
      ))}
    </section>
  )
}
