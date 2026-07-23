export default function About({ profile, education }) {
  return (
    <section id="about" className="section">
      <p className="eyebrow">// sys.about</p>
      <div className="about">
        <p className="about__bio">{profile.bio}</p>

        <div className="about__education">
          <p className="about__education-inst">{education.institution}</p>
          <p className="about__education-degree">{education.degree}</p>
          <p className="about__education-meta">{education.duration}</p>
          {education.detail && <p className="about__education-detail">{education.detail}</p>}
        </div>
      </div>
    </section>
  )
}
