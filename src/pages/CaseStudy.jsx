import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './CaseStudy.css'

const tagColorMap = {
  green: { bg: 'var(--clr-green-light)', color: 'var(--clr-green-deep)', border: 'var(--clr-green-mid)' },
  blue:  { bg: '#E6F1FB', color: '#185FA5', border: '#B5D4F4' },
  amber: { bg: 'var(--clr-amber-bg)', color: 'var(--clr-amber-text)', border: 'var(--clr-amber)' },
}

export default function CaseStudy() {
  const { id } = useParams()
  const index = projects.findIndex(p => p.id === id)
  const project = projects[index]

  if (!project) {
    return (
      <div className="case-study">
        <div className="container">
          <div className="case-study__not-found">
            <h1>Project not found</h1>
            <p>The case study you're looking for doesn't exist or may have moved.</p>
            <Link to="/projects" className="btn btn--primary">← Back to projects</Link>
          </div>
        </div>
      </div>
    )
  }

  const tc = tagColorMap[project.tagColor] || tagColorMap.green
  const prevProject = projects[(index - 1 + projects.length) % projects.length]
  const nextProject = projects[(index + 1) % projects.length]

  return (
    <div className="case-study">
      <div className="container">

        <Link to="/projects" className="case-study__back">← All projects</Link>

        {/* ── Hero ── */}
        <section className="case-study__hero">
          <span
            className="case-study__tag"
            style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}
          >
            {project.tag}
          </span>
          <h1 className="case-study__title">{project.title}</h1>
          <div className="case-study__meta">
            <span><strong>Year</strong> {project.year}</span>
            <span className="case-study__meta-divider" />
            <span><strong>Role</strong> {project.role}</span>
            <span className="case-study__meta-divider" />
            <span><strong>Status</strong> {project.status}</span>
          </div>
        </section>

        <div className="case-study__divider" />

        {/* ── Problem ── */}
        <section className="case-study__section">
          <span className="section-label">The problem</span>
          <p className="case-study__text">{project.problem}</p>
        </section>

        <div className="case-study__divider" />

        {/* ── Solution ── */}
        <section className="case-study__section">
          <span className="section-label">The solution</span>
          <p className="case-study__text">{project.solution}</p>
          <div className="case-study__stack">
            {project.stack.map(tool => (
              <span key={tool} className="case-study__stack-pill">{tool}</span>
            ))}
          </div>
        </section>

        <div className="case-study__divider" />

        {/* ── Impact ── */}
        <section className="case-study__section">
          <span className="section-label">Impact</span>
          <p className="case-study__text">{project.impact}</p>
        </section>

        <div className="case-study__divider" />

        {/* ── What I learned ── */}
        <section className="case-study__section">
          <span className="section-label">What I learned</span>
          <p className="case-study__text case-study__text--learned">{project.learned}</p>
        </section>

        <div className="case-study__divider" />

        {/* ── Prev / Next ── */}
        <nav className="case-study__nav">
          <Link to={`/projects/${prevProject.id}`} className="case-study__nav-link case-study__nav-link--prev">
            <span className="case-study__nav-label">← Previous</span>
            <span className="case-study__nav-title">{prevProject.shortTitle}</span>
          </Link>
          <Link to={`/projects/${nextProject.id}`} className="case-study__nav-link case-study__nav-link--next">
            <span className="case-study__nav-label">Next →</span>
            <span className="case-study__nav-title">{nextProject.shortTitle}</span>
          </Link>
        </nav>

      </div>
    </div>
  )
}
