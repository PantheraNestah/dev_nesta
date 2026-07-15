import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__name">Gift Nestah P</span>
        <div className="footer__links">
          <a href="https://github.com/PantheraNestah" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/gift-nestah/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <span className="footer__location">Nairobi, Kenya · {year}</span>
      </div>
    </footer>
  )
}
