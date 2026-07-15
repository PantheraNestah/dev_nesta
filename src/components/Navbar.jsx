import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          Gift<span className="navbar__dot">.</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Main navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="navbar__cta">Let's talk</NavLink>

        <button
          type="button"
          className={`navbar__toggle${open ? ' navbar__toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navbar-mobile-menu"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="navbar-mobile-menu"
        className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setOpen(false)}
            className={({ isActive }) => isActive ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'}
          >
            {label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="navbar__mobile-cta" onClick={() => setOpen(false)}>
          Let's talk
        </NavLink>
      </nav>
    </header>
  )
}
