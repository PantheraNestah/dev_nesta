import { Link } from 'react-router-dom'
import './About.css'

const stack = [
  { category: 'Backend',   tools: ['PHP Laravel', 'Python', 'Django', 'Java Spring Boot', 'FastAPI'] },
  { category: 'Frontend',  tools: ['ReactJS', 'JavaScript'] },
  { category: 'Databases', tools: ['MySQL', 'PostgreSQL', 'ChromaDB'] },
  { category: 'Infra',     tools: ['Docker', 'Linux', 'Git'] },
  { category: 'AI / Auto', tools: ['n8n Workflows', 'AI Model Integration', 'RAG pipelines'] },
]

const values = [
  {
    title: 'Systems thinking',
    desc: 'I look at the whole picture before touching any part of it. Good backend work starts with understanding the problem deeply, not jumping to the solution.',
  },
  {
    title: 'Built to last',
    desc: 'Clean, maintainable code that the next engineer — or future me — will actually thank someone for. Shortcuts compound into debt.',
  },
  {
    title: 'People behind the problem',
    desc: 'Every system I build has a human on the other end. I keep that person in mind from architecture decisions all the way to error messages.',
  },
]

const experience = [
  {
    period: 'Sep 2025 – Present',
    role: 'Software Developer',
    organisation: 'First Advantage Consulting — CPA Centre, Nairobi',
    description: 'Designing and developing business solutions to enhance operational efficiency. Architecting scalable system architecture and building robust backend APIs to streamline data access.',
  },
  {
    period: 'May 2025 – Present',
    role: 'Backend Web Developer',
    organisation: 'Pins To Planes Group — Mashiara Park, Loresho',
    description: 'Building backend APIs to support application functionality, integrating messaging platforms including WhatsApp and Africa\'s Talking, and developing business solutions tailored to client needs.',
  },
  {
    period: 'May 2024 – Aug 2024',
    role: 'Backend Web Developer',
    organisation: 'JHUB Africa — JKUAT, Nairobi',
    description: 'Developed backend APIs for seamless data exchange, integrated AI solutions into application workflows, and executed third-party API integrations to expand platform functionality.',
  },
]

const education = [
  {
    period: 'Sep 2022 – May 2026',
    degree: 'BSc. Computer Science',
    institution: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
    note: '',
  },
]

const certifications = [
  {
    name: 'ALX Software Engineering ProDev — Backend Development',
    issuer: 'ALX Africa',
    year: '2025',
  },
]

export default function About() {
  return (
    <div className="about">
      <div className="container">

        {/* ── Intro ── */}
        <section className="about__hero">
          <div className="about__avatar-wrapper">
            <img src="/gift.jpeg" alt="Gift Nestah P" className="about__avatar-photo" />
          </div>
          <div className="about__intro">
            <h1 className="about__name">Gift Nestah P</h1>
            <p className="about__role">Backend & Systems Engineer · Nairobi, Kenya</p>
            <p className="about__tagline">
              I build the infrastructure that makes things actually work —
              reliable, scalable, and grounded in a genuine desire to solve
              problems that matter to real people.
            </p>
            <a href="/Gift_Nestah_P_CV_v2_1.pdf" download className="about__dl-btn">
              ↓ Download CV
            </a>
          </div>
        </section>

        <div className="about__divider" />

        {/* ── Story ── */}
        <section className="about__section">
          <span className="section-label">My story</span>
          <div className="about__story">
            <p>
              My journey into software engineering started with a genuine curiosity
              about how things work — not just what they do on the surface, but the
              systems and logic underneath. Studying Computer Science at JKUAT gave
              me the language to express that curiosity, but it was the process of
              building real things that turned it into a craft.
            </p>
            <p>
              I was drawn to backend and systems engineering because that's where
              the interesting problems live. Anyone can see a broken UI — but a
              broken data pipeline, a race condition, a poorly designed API contract?
              Those take real digging to find and real thinking to fix. That's the
              work I find most satisfying.
            </p>
            <p>
              What drives me isn't the technology itself — it's the moment a system
              you built quietly solves a problem someone was manually wrestling with.
              The property manager who stops chasing rent reminders. The health
              worker who can finally read local air quality data in plain language.
              That's the measure I care about.
            </p>
          </div>
        </section>

        <div className="about__divider" />

        {/* ── Values ── */}
        <section className="about__section">
          <span className="section-label">How I work</span>
          <div className="about__values-grid">
            {values.map(v => (
              <div key={v.title} className="about__value-card">
                <h3 className="about__value-title">{v.title}</h3>
                <p className="about__value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="about__divider" />

        {/* ── Stack ── */}
        <section className="about__section">
          <span className="section-label">Tech stack</span>
          <div className="about__stack">
            {stack.map(row => (
              <div key={row.category} className="about__stack-row">
                <span className="about__stack-cat">{row.category}</span>
                <div className="about__stack-pills">
                  {row.tools.map(tool => (
                    <span
                      key={tool}
                      className={`about__stack-pill${
                        ['Python', 'Django', 'Java Spring Boot', 'FastAPI', 'PHP Laravel'].includes(tool)
                          ? ' about__stack-pill--core'
                          : ''
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="about__divider" />

        {/* ── Experience ── */}
        <section className="about__section">
          <span className="section-label">Experience</span>
          <div className="about__timeline">
            {experience.map((e, i) => (
              <div key={i} className="about__timeline-item">
                <div className="about__timeline-period">{e.period}</div>
                <div className="about__timeline-body">
                  <div className="about__timeline-role">{e.role}</div>
                  <div className="about__timeline-org">{e.organisation}</div>
                  <p className="about__timeline-desc">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="about__divider" />

        {/* ── Education ── */}
        <section className="about__section">
          <span className="section-label">Education</span>
          <div className="about__timeline">
            {education.map((e, i) => (
              <div key={i} className="about__timeline-item">
                <div className="about__timeline-period">{e.period}</div>
                <div className="about__timeline-body">
                  <div className="about__timeline-role">{e.degree}</div>
                  <div className="about__timeline-org">{e.institution}</div>
                  {e.note && <p className="about__timeline-desc">{e.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="about__divider" />

        {/* ── Certifications ── */}
        <section className="about__section">
          <span className="section-label">Certifications</span>
          <div className="about__timeline">
            {certifications.map((c, i) => (
              <div key={i} className="about__timeline-item">
                <div className="about__timeline-period">{c.year}</div>
                <div className="about__timeline-body">
                  <div className="about__timeline-role">{c.name}</div>
                  <div className="about__timeline-org">{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="about__divider" />

        {/* ── CTA ── */}
        <section className="about__cta">
          <p className="about__cta-text">Got a problem worth solving?</p>
          <Link to="/contact" className="btn btn--primary">Let's talk</Link>
        </section>

      </div>
    </div>
  )
}