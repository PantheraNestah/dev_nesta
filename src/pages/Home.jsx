import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { posts } from '../data/posts'
import './Home.css'

const tagColorMap = {
  green: { bg: 'var(--clr-green-light)', color: 'var(--clr-green-deep)', border: 'var(--clr-green-mid)' },
  blue:  { bg: '#E6F1FB', color: '#185FA5', border: '#B5D4F4' },
  amber: { bg: 'var(--clr-amber-bg)', color: 'var(--clr-amber-text)', border: 'var(--clr-amber)' },
}

export default function Home() {
  const featured = projects.slice(0, 3)
  const recentPosts = posts.slice(0, 2)

  return (
    <div className="home">
      <div className="container">

        {/* ── Hero ── */}
        <section className="home__hero">
          <div className="home__hero-content">
            <div className="home__badge">
              <span className="home__badge-dot" aria-hidden="true" />
              Open to opportunities
            </div>

            <h1 className="home__headline">
              Hi, I'm Gift —<br />
              I build backend systems<br />
              that <em>solve real problems.</em>
            </h1>

            <p className="home__bio">
              Software engineer based in Nairobi. I design and build the infrastructure
              that makes products actually work — from automation pipelines to AI-powered
              APIs to real-time data systems.
            </p>

            <div className="home__hero-actions">
              <Link to="/projects" className="btn btn--primary">See my work</Link>
              <Link to="/about" className="btn btn--secondary">Read my story</Link>
            </div>
          </div>
          <div className="home__hero-aside">
            <div className="home__avatar-wrapper">
              <img
                src="/gift.jpeg"
                alt="Gift Nestah P"
                className="home__avatar-photo"
              />
            </div>
            <div className="home__avatar-name">
              Gift Nestah P
              <span>Backend Engineer</span>
            </div>
            <div className="home__stack-chips">
              {['Laravel', 'FastAPI', 'Django', 'Spring Boot', 'Docker'].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <div className="home__divider" />

        {/* ── Featured projects ── */}
        <section className="home__section">
          <div className="home__section-header">
            <span className="section-label">Featured projects</span>
            <Link to="/projects" className="home__see-all">See all →</Link>
          </div>

          <div className="home__projects-grid">
            {featured.map(project => {
              const tc = tagColorMap[project.tagColor] || tagColorMap.green
              return (
                <article key={project.id} className="proj-card">
                  <span
                    className="proj-card__tag"
                    style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}
                  >
                    {project.tag}
                  </span>
                  <h2 className="proj-card__title">{project.shortTitle}</h2>
                  <p className="proj-card__desc">{project.summary}</p>
                  <div className="proj-card__footer">
                    <span className="proj-card__stack">
                      {project.stack.slice(0, 2).join(' · ')}
                    </span>
                    <Link to={`/projects/${project.id}`} className="proj-card__link">
                      Case study →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <div className="home__divider" />

        {/* ── Blog preview ── */}
        <section className="home__section">
          <div className="home__section-header">
            <span className="section-label">From the blog</span>
            <Link to="/blog" className="home__see-all">All articles →</Link>
          </div>

          <div className="home__blog-list">
            {recentPosts.map(post => (
              <a
                key={post.id}
                href={post.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-row"
              >
                <div className="blog-row__meta">
                  <span className="blog-row__tag">{post.tag}</span>
                  <p className="blog-row__title">{post.title}</p>
                  <span className="blog-row__date">{post.date}</span>
                </div>
                <span className="blog-row__arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
