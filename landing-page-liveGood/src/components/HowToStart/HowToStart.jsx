const stepsData = [
  {
    step: 1,
    title: 'Regístrate en LiveGood',
    description: 'Crea tu cuenta en LiveGood. Te llevará menos de 3 minutos. Accede al vídeo-guía en TikTok para verlo paso a paso.',
    linkLabel: 'Ver cómo registrarse',
    url: 'https://vm.tiktok.com/ZNRrWffUr/',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
  },
  {
    step: 2,
    title: 'Realiza tu pago',
    description: 'Puedes pagar con tarjeta de crédito/débito o con criptomonedas. Elige el método que más te convenga.',
    linkLabel: 'Pago con tarjeta',
    url: 'https://youtu.be/ZIYuymuzzOk',
    linkLabel2: 'Pago con cripto',
    url2: 'https://youtu.be/BKZyvU3E0MI',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
  },
  {
    step: 3,
    title: 'Activa tu posición en la Matriz',
    description: 'Una vez registrado, tu posición en la red queda activa automáticamente. Desde ese momento ya eres parte del sistema.',
    img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop',
  },
]

function HowToStart() {
  return (
    <section id="como-empezar" className="how-to-start">
      <div className="how-to-start__container">

        <div className="how-to-start__header">
          <span className="how-to-start__badge">Guía rápida</span>
          <h2 className="how-to-start__title">Cómo empezar en 3 pasos</h2>
          <div className="how-to-start__title-bar"></div>
          <p className="how-to-start__subtitle">
            Sigue estos pasos en orden y estarás activo en LiveGood en cuestión de minutos.
          </p>
        </div>

        <div className="how-to-start__grid">
          {stepsData.map((item) => (
            <div key={item.step} className="how-to-start__card">

              <div className="how-to-start__card-img-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  className="how-to-start__card-img"
                />
                <span className="how-to-start__card-badge">0{item.step}</span>
              </div>

              <div className="how-to-start__card-content">
                <h3 className="how-to-start__card-title">{item.title}</h3>
                <p className="how-to-start__card-description">{item.description}</p>

                <div className="how-to-start__card-links">
                  {item.url && (
                    <a
                      href={item.url}
                      className="how-to-start__card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkLabel} →
                    </a>
                  )}
                  {item.url2 && (
                    <a
                      href={item.url2}
                      className="how-to-start__card-link how-to-start__card-link--secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkLabel2} →
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="how-to-start__cta-row">
          <a
            href="https://www.livegoodtour.com/teslarod"
            className="how-to-start__cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero empezar ahora →
          </a>
        </div>

      </div>
    </section>
  )
}

export default HowToStart
