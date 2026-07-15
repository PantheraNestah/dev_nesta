import { useState, useMemo } from 'react'
import { posts } from '../data/posts'
import './Blog.css'

export default function Blog() {
  const tags = useMemo(() => ['All', ...new Set(posts.map(p => p.tag))], [])
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All' ? posts : posts.filter(p => p.tag === activeTag)

  return (
    <div className="blog">
      <div className="container">

        {/* ── Header ── */}
        <section className="blog__header">
          <h1 className="blog__title">Blog</h1>
          <p className="blog__intro">
            Notes on backend systems, automation, and building AI that stays
            grounded — published on Medium.
          </p>
        </section>

        {/* ── Filter pills ── */}
        <div className="blog__filters">
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

        {/* ── Post list ── */}
        <div className="blog__list">
          {filtered.map(post => (
            <a
              key={post.id}
              href={post.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="post-card"
            >
              <div className="post-card__body">
                <div className="post-card__meta">
                  <span className="post-card__tag">{post.tag}</span>
                  <span className="post-card__date">{post.date}</span>
                </div>
                <h2 className="post-card__title">{post.title}</h2>
                <p className="post-card__excerpt">{post.excerpt}</p>
              </div>
              <span className="post-card__arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>

        {/* ── Note ── */}
        <div className="blog__note">
          New articles are added as entries in <code>src/data/posts.js</code> — no CMS needed.
        </div>

      </div>
    </div>
  )
}
