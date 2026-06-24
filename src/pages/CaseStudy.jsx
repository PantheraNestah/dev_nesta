import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function CaseStudy() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return (
    <div style={{ padding: '3rem 2rem' }}>
      <p>Project not found.</p>
      <Link to="/projects">← Back to projects</Link>
    </div>
  )

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: 720, color: 'var(--clr-text-secondary)' }}>
      <Link to="/projects" style={{ fontSize: '0.875rem', color: 'var(--clr-green)' }}>← All projects</Link>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--clr-text-primary)', margin: '1rem 0 0.5rem' }}>{project.title}</h1>
      <p>Full case study coming soon.</p>
    </div>
  )
}
