import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__name">Gift Nestah P</span>
        <div className="footer__links">
          <a href="https://github.com/giftnestaph" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/giftnestaph" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/giftnestaph" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <span className="footer__location">Nairobi, Kenya · {year}</span>
      </div>
    </footer>
  )
}
