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
              Transformando vidas a través de productos de salud premium y oportunidades de negocio globales.
            </p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Productos</h4>
            <ul className="footer__links-list">
              <li><a href="#productos" className="footer__link">Nuestros Suplementos</a></li>
              <li><a href="#video-seccion" className="footer__link">Presentación de Productos</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Negocio</h4>
            <ul className="footer__links-list">
              <li><a href="#formulario" className="footer__link">Plan de Compensación</a></li>
              <li><a href="#video-seccion" className="footer__link">Cómo Funciona</a></li>
              <li><a href="#testimonios" className="footer__link">Testimonios Reales</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Acceso rápido</h4>
            <ul className="footer__links-list">
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
          <p className="footer__copyright">© 2026 Tesla Ramona Rodríguez · LiveGood</p>
          <div className="footer__legal-links">
            <span className="footer__legal-text">Bienestar y Libertad Financiera</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
