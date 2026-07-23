export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">// sys.skills</p>
      <div className="skills">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__category">{group.category}</h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
