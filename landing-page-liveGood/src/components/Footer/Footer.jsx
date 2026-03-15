function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__top">

          <div className="footer__brand">
            <span className="footer__logo">
              Live<span className="footer__logo-accent">Good</span>
            </span>
            <p className="footer__brand-description">
              Transformando vidas a través de productos de salud premium y oportunidades
              de negocio sin igual en más de 190 países.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Empresa</h4>
            <ul className="footer__links-list">
              <li><a href="#" className="footer__link">Sobre Nosotros</a></li>
              <li><a href="#" className="footer__link">Misión y Visión</a></li>
              <li><a href="#" className="footer__link">Liderazgo</a></li>
              <li><a href="#" className="footer__link">Noticias</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Productos</h4>
            <ul className="footer__links-list">
              <li><a href="#" className="footer__link">Suplementos</a></li>
              <li><a href="#" className="footer__link">CBD</a></li>
              <li><a href="#" className="footer__link">Café</a></li>
              <li><a href="#" className="footer__link">Todos los Productos</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Negocio</h4>
            <ul className="footer__links-list">
              <li><a href="#" className="footer__link">Plan de Compensación</a></li>
              <li><a href="#" className="footer__link">Cómo Funciona</a></li>
              <li><a href="#" className="footer__link">Testimonios</a></li>
              <li>
                <a
                  href="https://www.securemyposition.com/"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recuperar preinscripción
                </a>
              </li>
              <li>
                <a
                  href="https://livegoodproductreviews.com/nrivas75"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recursos para prospectos
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2025 LiveGood. Todos los derechos reservados.</p>
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">Política de Privacidad</a>
            <a href="#" className="footer__legal-link">Términos de Uso</a>
            <a href="#" className="footer__legal-link">Aviso Legal</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
