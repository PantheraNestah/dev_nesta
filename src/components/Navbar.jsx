import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
      <NavLink to="/" className="navbar__logo">
        Gift<span className="navbar__dot">.</span>
      </NavLink>

      <nav className="navbar__links" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Projects</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Blog</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>Contact</NavLink>
      </nav>

      <NavLink to="/contact" className="navbar__cta">Let's talk</NavLink>
      </div>
    </header>
  )
}
