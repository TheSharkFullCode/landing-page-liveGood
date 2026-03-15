const whatsappUrl = `https://wa.me/34604381862?text=${encodeURIComponent('Hola, me interesa saber más sobre LiveGood 🌿')}`

function OwnerSection() {
  return (
    <section id="quien-soy" className="owner-section">
      <div className="owner-section__container">
        <div className="owner-section__grid">

          {/* Columna izquierda: Avatar */}
          <div className="owner-section__avatar-col">
            <div className="owner-section__avatar-circle">
              <span className="owner-section__avatar-initials">TR</span>
            </div>
            <span className="owner-section__avatar-label">👋 Hola, soy Tesla</span>
          </div>

          {/* Columna derecha: Texto */}
          <div className="owner-section__content">
            <h2 className="owner-section__title">
              No te vendo un sueño. Te muestro lo que yo misma{' '}
              <em>estoy construyendo.</em>
            </h2>

            <p className="owner-section__text">
              Me llamo Tesla Ramona Rodríguez. Soy conductora VTC en Madrid y empecé con
              LiveGood porque necesitaba algo que generara ingresos mientras yo trabajaba.
              Sin montar una tienda, sin stocks, sin invertir miles de euros.
            </p>

            <p className="owner-section__text">
              Lo que me convenció fue la matriz forzada. No dependes solo de lo que tú
              vendas — cuando LiveGood crece globalmente, tú te beneficias. Es el único
              modelo que he visto donde el sistema trabaja aunque tú estés al volante.
            </p>

            <blockquote className="owner-section__quote">
              Por $9.95 al mes tienes los productos al precio de coste Y entras en la
              matriz. Si decides no hacer nada más, ya tienes los suplementos más baratos
              del mercado. Si decides crecer, el sistema te ayuda.
            </blockquote>

            <a
              href={whatsappUrl}
              className="owner-section__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Habla conmigo por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OwnerSection
