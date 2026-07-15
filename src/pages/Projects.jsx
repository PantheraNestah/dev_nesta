import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Projects.css'

const tagColorMap = {
  green: { bg: 'var(--clr-green-light)', color: 'var(--clr-green-deep)', border: 'var(--clr-green-mid)' },
  blue:  { bg: '#E6F1FB', color: '#185FA5', border: '#B5D4F4' },
  amber: { bg: 'var(--clr-amber-bg)', color: 'var(--clr-amber-text)', border: 'var(--clr-amber)' },
}

const tagIconMap = { green: '⚙', blue: '◈', amber: '✦' }

export default function Projects() {
  const tags = useMemo(() => ['All', ...new Set(projects.map(p => p.tag))], [])
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tag === activeTag)

  return (
    <div className="projects">
      <div className="container">

        {/* ── Header ── */}
        <section className="projects__header">
          <h1 className="projects__title">Projects</h1>
          <p className="projects__intro">
            A selection of systems I've designed and built — from automation
            pipelines to AI-grounded backends. Each one solves a real problem
            for a real user.
          </p>
        </section>

        {/* ── Filter pills ── */}
        <div className="projects__filters">
          {tags.map(tag => (
            <button
              key={tag}
              className={`filter-pill${tag === activeTag ? ' filter-pill--active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ── Project list ── */}
        <div className="projects__list">
          {filtered.map(project => {
            const tc = tagColorMap[project.tagColor] || tagColorMap.green
            return (
              <article key={project.id} className="proj-full-card">
                <div
                  className="proj-full-card__icon"
                  style={{ background: tc.bg, color: tc.color }}
                  aria-hidden="true"
                >
                  {tagIconMap[project.tagColor] || '⚙'}
                </div>

                <div className="proj-full-card__body">
                  <div className="proj-full-card__meta">
                    <span
                      className="proj-full-card__tag"
                      style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}
                    >
                      {project.tag}
                    </span>
                    <span className="proj-full-card__status">{project.status}</span>
                    <span className="proj-full-card__year">{project.year}</span>
                  </div>

                  <h2 className="proj-full-card__title">{project.title}</h2>
                  <p className="proj-full-card__desc">{project.summary}</p>

                  <div className="proj-full-card__stack">
                    {project.stack.map(tool => (
                      <span key={tool} className="proj-full-card__stack-pill">{tool}</span>
                    ))}
                  </div>

                  <Link to={`/projects/${project.id}`} className="proj-full-card__link">
                    View case study →
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </div>
  )
}
