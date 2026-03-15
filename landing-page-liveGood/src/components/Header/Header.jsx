import { useState, useEffect } from 'react'
import logo from '../../imagenes/logo-livegood.png'

const CTA_URL = 'https://www.livegoodtour.com/teslarod'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__container">

        <div className="header__logo">
          <img
            src={logo}
            alt="LiveGood"
            className="header__logo-img"
          />
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li><a href="#inicio"         className="header__nav-link">Inicio</a></li>
            <li><a href="#quienes-somos" className="header__nav-link">Quiénes Somos</a></li>
            <li><a href="#productos"     className="header__nav-link">Productos</a></li>
            <li><a href="#videos"        className="header__nav-link">Vídeos</a></li>
            <li><a href="#como-empezar"  className="header__nav-link">Empezar</a></li>
          </ul>
        </nav>

        <a
          href={CTA_URL}
          className="header__cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Únete Ahora
        </a>

      </div>
    </header>
  )
}

export default Header
