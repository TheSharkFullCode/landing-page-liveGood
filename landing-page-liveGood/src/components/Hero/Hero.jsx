const CTA_URL = 'https://www.livegoodtour.com/teslarod'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">

        <span className="hero__badge">🔒 Sistema probado · Matriz forzada · Ingresos reales</span>

        <h1 className="hero__title">
          ¿Trabajas duro y el dinero nunca alcanza?{' '}
          <em className="hero__title-emphasis">Hay un sistema que trabaja por ti.</em>
        </h1>

        <p className="hero__subtitle">
          No necesitas experiencia ni vender puerta a puerta. LiveGood tiene una{' '}
          <strong>matriz forzada</strong>: cuando la empresa crece, tú cobras.{' '}
          <strong>Por $9.95 al mes tras un registro único de $40.</strong>
        </p>

        <p className="hero__secondary-text">
          Más de 2 millones de personas ya están dentro. La matriz se llena sola.
          Cada nuevo miembro global suma a tu red.
        </p>

        <div className="hero__cta-group">
          <a
            href={CTA_URL}
            className="hero__cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero ver cómo funciona →
          </a>
          <a href="#como-empezar" className="hero__cta-secondary">
            Ver el plan de compensación
          </a>
        </div>

        <p className="hero__cta-note">Registro único $40 · Membresía $9.95/mes · Sin permanencia</p>

      </div>
    </section>
  )
}

export default Hero
