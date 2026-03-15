const CTA_URL = 'https://www.livegoodtour.com/teslarod'

const socialLinksData = [
  // TODO: reemplazar con URL real
  { name: 'Facebook', icon: '📘', url: '#', handle: '/LiveGoodOfficial' },
  // TODO: reemplazar con URL real
  { name: 'Instagram', icon: '📸', url: '#', handle: '@livegood' },
  // TODO: reemplazar con URL real
  { name: 'YouTube', icon: '▶️', url: '#', handle: 'LiveGood TV' },
  // TODO: reemplazar con URL real
  { name: 'WhatsApp', icon: '💬', url: '#', handle: 'Chat Directo' },
  // TODO: reemplazar con URL real
  { name: 'Telegram', icon: '✈️', url: '#', handle: 'Grupo LiveGood' },
]

function ContactLinks() {
  return (
    <section id="contacto" className="contact-links">
      <div className="contact-links__container">

        <div className="contact-links__header">
          <span className="contact-links__badge">Conecta Con Nosotros</span>
          <h2 className="contact-links__title">Únete a Nuestra Comunidad</h2>
          <p className="contact-links__subtitle">
            Síguenos en redes sociales y mantente al día con las últimas novedades,
            productos y oportunidades de LiveGood.
          </p>
        </div>

        <div className="contact-links__social-grid">
          {socialLinksData.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="contact-links__social-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-links__social-icon">{link.icon}</span>
              <span className="contact-links__social-name">{link.name}</span>
              <span className="contact-links__social-handle">{link.handle}</span>
            </a>
          ))}
        </div>

        <div id="unete" className="contact-links__cta-box">
          <h3 className="contact-links__cta-title">
            ¿Cómo me uno a LiveGood? Es más fácil de lo que crees
          </h3>
          <p className="contact-links__cta-subtitle">
            En menos de 5 minutos ya formas parte. Aquí te explicamos exactamente qué va a pasar:
          </p>

          <div className="contact-links__steps">
            <div className="contact-links__step contact-links__step--blue">
              <span className="contact-links__step-num">1</span>
              <div className="contact-links__step-body">
                <h4 className="contact-links__step-title">Haz clic en el botón</h4>
                <p className="contact-links__step-desc">
                  Te llevamos a la página oficial de LiveGood. Es segura, rápida y en español.
                </p>
              </div>
            </div>
            <div className="contact-links__step contact-links__step--green">
              <span className="contact-links__step-num">2</span>
              <div className="contact-links__step-body">
                <h4 className="contact-links__step-title">Elige tu membresía</h4>
                <p className="contact-links__step-desc">
                  Solo $9.95/mes. Sin permanencia, sin compromisos. Cancela cuando quieras.
                </p>
              </div>
            </div>
            <div className="contact-links__step contact-links__step--purple">
              <span className="contact-links__step-num">3</span>
              <div className="contact-links__step-body">
                <h4 className="contact-links__step-title">¡Ya eres miembro!</h4>
                <p className="contact-links__step-desc">
                  Accedes a precios de miembro, productos premium y tu oportunidad de negocio.
                </p>
              </div>
            </div>
          </div>

          {/* Mock form — solo visual, no editable */}
          <div className="contact-links__mock-form">
            <p className="contact-links__mock-title">
              👇 Así de fácil se ve el registro — ¡Solo 3 campos!
            </p>

            {/* Paso 1 */}
            <div className="contact-links__mock-step">
              <span className="contact-links__mock-badge">✅ Paso 1 completado</span>
              <div className="contact-links__mock-fields">
                <div className="contact-links__mock-field">
                  <label className="contact-links__mock-label">Nombre</label>
                  <input className="contact-links__mock-input" type="text" defaultValue="María García" disabled />
                </div>
                <div className="contact-links__mock-field">
                  <label className="contact-links__mock-label">Email</label>
                  <input className="contact-links__mock-input" type="text" defaultValue="maria@gmail.com" disabled />
                </div>
              </div>
              <p className="contact-links__mock-date">Registrada el 14 Mar 2026 · 2 minutos</p>
            </div>

            <span className="contact-links__mock-arrow">↓</span>

            {/* Paso 2 */}
            <div className="contact-links__mock-step">
              <span className="contact-links__mock-badge">✅ Paso 2 completado</span>
              <div className="contact-links__mock-fields">
                <div className="contact-links__mock-field">
                  <label className="contact-links__mock-label">Membresía elegida</label>
                  <input className="contact-links__mock-input" type="text" defaultValue="$9.95/mes — Sin permanencia" disabled />
                </div>
                <div className="contact-links__mock-field">
                  <label className="contact-links__mock-label">Método de pago</label>
                  <input className="contact-links__mock-input" type="text" defaultValue="Tarjeta Visa ···· 4242" disabled />
                </div>
              </div>
              <p className="contact-links__mock-date">Pago procesado · Seguro SSL</p>
            </div>

            <span className="contact-links__mock-arrow">↓</span>

            {/* Paso 3 */}
            <div className="contact-links__mock-step">
              <span className="contact-links__mock-badge">✅ Paso 3 completado</span>
              <div className="contact-links__mock-fields">
                <div className="contact-links__mock-field">
                  <label className="contact-links__mock-label">Estado</label>
                  <input className="contact-links__mock-input" type="text" defaultValue="🟢 MIEMBRO ACTIVO" disabled />
                </div>
                <div className="contact-links__mock-field">
                  <label className="contact-links__mock-label">Acceso a precios</label>
                  <input className="contact-links__mock-input" type="text" defaultValue="✅ Activado — Ahorro del 50%" disabled />
                </div>
              </div>
              <p className="contact-links__mock-date">Bienvenida a LiveGood, María 🎉</p>
            </div>
          </div>

          <p className="contact-links__reassurance">
            ⚡ No necesitas tarjeta de crédito para explorar. Garantía de devolución de 90 días en todos los productos.
          </p>

          <a
            href={CTA_URL}
            className="contact-links__cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registrarme Ahora
          </a>
        </div>

      </div>
    </section>
  )
}

export default ContactLinks
