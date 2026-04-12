const CTA_URL = 'https://www.livegoodtour.com/teslarod'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">

        <span className="hero__badge">
          <span className="hero__badge-dot"></span>
          ✨ <span className="hero__highlight-green">Nuevo Paradigma:</span> El sistema que rompe las reglas
        </span>

        <h1 className="hero__title">
          ¿Trabajas duro y el dinero nunca alcanza?{' '}
          <span className="hero__title-block">
            Hay un <span className="hero__highlight-gold">sistema</span> que, por fin,{' '}
            <span className="hero__highlight-green">trabaja por ti.</span>
          </span>
        </h1>

        <p className="hero__subtitle">
          Lo que ocurre en <span className="hero__highlight-white">LiveGood</span> no es una coincidencia, es{' '} 
          <span className="hero__highlight-gold">ingeniería financiera</span> para el ciudadano común. 
          Hemos rediseñado las reglas para que el <span className="hero__highlight-green">crecimiento global</span> de una comunidad sea tu mayor aliado.
        </p>

        <p className="hero__secondary-text">
          Mientras otros dudan, <span className="hero__highlight-white">2 millones de personas</span> ya han descifrado el mecanismo. 
          El engranaje está en marcha; solo falta que descubras lo que ocurre de puertas adentro.
        </p>

        <div className="hero__cta-group">
          <a
            href={CTA_URL}
            className="hero__cta-button hero__cta-button--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡RESERVAR MI LUGAR AHORA! →
          </a>
          <a href="#registro" className="hero__cta-secondary">
            Recibir invitación por email
          </a>
        </div>

        <p className="hero__cta-note">
          🔒 <span className="hero__highlight-green">Únete a la nueva economía por solo $9.95.</span> Sin letras pequeñas.
        </p>

      </div>
      
      {/* Background decorations for extra visual punch */}
      <div className="hero__glow hero__glow--1"></div>
      <div className="hero__glow hero__glow--2"></div>
    </section>
  )
}

export default Hero
