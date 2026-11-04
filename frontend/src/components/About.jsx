export default function About({ profile, education, achievements }) {
  return (
    <section id="about" className="section">
      <p className="eyebrow">// sys.about</p>
      <div className="about">
        <div className="about__main">
          <p className="about__bio">{profile.bio}</p>

          {achievements && achievements.length > 0 && (
            <div className="about__achievements">
              <h4 className="about__subheading">// honors & achievements</h4>
              <ul className="about__achievements-list">
                {achievements.map((item, idx) => (
                  <li key={idx} className="about__achievement-item">
                    <div className="about__achievement-bullet" aria-hidden="true">›</div>
                    <div>
                      <strong className="about__achievement-title">{item.title}</strong>
                      <p className="about__achievement-desc">{item.description}</p>
                      {item.detail && (
                        <span className="about__achievement-detail">{item.detail}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="about__side">
          <div className="about__education">
            <h4 className="about__subheading">// education</h4>
            <p className="about__education-inst">{education.institution}</p>
            <p className="about__education-degree">{education.degree}</p>
            <p className="about__education-meta">{education.duration}</p>
            {education.detail && <p className="about__education-detail">{education.detail}</p>}
          </div>

          {profile.resumeUrl && (
            <div className="about__resume-action">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost btn--resume-about"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                View / Download Resume ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
