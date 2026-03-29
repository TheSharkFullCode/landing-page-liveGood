import React from 'react'

const CTA_URL = 'https://www.livegoodtour.com/teslarod'

const socialLinks = [
  {
    name: 'Facebook',
    handle: '',
    url: 'https://www.facebook.com/share/1DVqEoJtAj/',
    color: '#ffffff',
    bg: '#1558b0',
    border: '#1558b0',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '',
    url: 'https://www.instagram.com/teslarod',
    color: '#ffffff',
    bg: 'linear-gradient(45deg, #a0522d, #c1365a, #8b1a6b)',
    border: '#c1365a',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '',
    url: 'https://www.tiktok.com/@teslarod123',
    color: '#ffffff',
    bg: '#1a1a1a',
    border: '#4a9ea8',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
]

const faqData = [
  {
    question: '¿Cuánto cuesta unirse a LiveGood?',
    answer: 'La membresía es de $9.95 al mes. Sin permanencia, sin compromisos. Puedes cancelar cuando quieras.',
  },
  {
    question: '¿Necesito vender para ganar dinero?',
    answer: 'No. La matriz forzada hace que te beneficies del crecimiento global de LiveGood aunque no vendas nada.',
  },
  {
    question: '¿Qué pasa si solo quiero los productos?',
    answer: 'Perfecto. Con $9.95/mes accedes a todos los productos al precio de coste, con hasta un 50% de descuento.',
  },
  {
    question: '¿Es seguro el pago?',
    answer: 'Sí. LiveGood usa pasarelas de pago seguras con cifrado SSL. Puedes pagar con tarjeta o criptomonedas.',
  },
  {
    question: '¿Puedo cancelar en cualquier momento?',
    answer: 'Sí, sin penalizaciones ni letras pequeñas. Cancelas cuando quieras desde tu panel de miembro.',
  },
]

function ContactLinks() {
  const [openIndex, setOpenIndex] = React.useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="contacto" className="contact-links">
      <div className="contact-links__container">

        {/* Header */}
        <div className="contact-links__header">
          <span className="contact-links__badge">Conecta Con Nosotros</span>
          <h2 className="contact-links__title">¿Tienes dudas? Te respondemos</h2>
          <p className="contact-links__subtitle">
            Las preguntas más frecuentes sobre LiveGood, resueltas de forma clara y directa.
          </p>
        </div>

        {/* FAQ */}
        <div className="contact-links__faq">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`contact-links__faq-item${openIndex === i ? ' contact-links__faq-item--open' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="contact-links__faq-question">
                <span>{item.question}</span>
                <span className="contact-links__faq-icon">
                  {openIndex === i ? '−' : '+'}
                </span>
              </div>
              {openIndex === i && (
                <div className="contact-links__faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="contact-links__social-header">
          <h3 className="contact-links__social-title">Síguenos en redes</h3>
        </div>
        <div className="contact-links__social-grid">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="contact-links__social-card"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                '--card-color': link.color,
                '--card-bg': link.bg,
                '--card-border': link.border,
              }}
            >
              <div className="contact-links__social-icon-wrap" style={{color: link.color}}>
                {link.svg}
              </div>
              <span className="contact-links__social-name">{link.name}</span>
              <span className="contact-links__social-handle">{link.handle}</span>
            </a>
          ))}
        </div>

        {/* CTA box */}
        <div id="unete" className="contact-links__cta-box">
          <h3 className="contact-links__cta-title">
            ¿Cómo me registro en LiveGood? Es más fácil de lo que crees
          </h3>
          <p className="contact-links__cta-subtitle">
            En menos de 5 minutos ya formas parte. Aquí te explicamos exactamente qué va a pasar:
          </p>
          <div className="contact-links__steps">
            <div className="contact-links__step contact-links__step--blue">
              <span className="contact-links__step-num">1</span>
              <div className="contact-links__step-body">
                <h4 className="contact-links__step-title">Haz clic en el botón</h4>
                <p className="contact-links__step-desc">Te llevamos a la página oficial de LiveGood. Es segura, rápida y en español.</p>
              </div>
            </div>
            <div className="contact-links__step contact-links__step--green">
              <span className="contact-links__step-num">2</span>
              <div className="contact-links__step-body">
                <h4 className="contact-links__step-title">Elige tu membresía</h4>
                <p className="contact-links__step-desc">Solo $9.95/mes. Sin permanencia, sin compromisos. Cancela cuando quieras.</p>
              </div>
            </div>
            <div className="contact-links__step contact-links__step--purple">
              <span className="contact-links__step-num">3</span>
              <div className="contact-links__step-body">
                <h4 className="contact-links__step-title">¡Ya eres miembro!</h4>
                <p className="contact-links__step-desc">Accedes a precios de miembro, productos premium y tu oportunidad de negocio.</p>
              </div>
            </div>
          </div>

          {/* Formulario decorativo */}
          <div className="contact-links__mock-form">
            <p className="contact-links__mock-label">Así de fácil — así se ve tu registro:</p>
            <div className="contact-links__mock-fields">
              <div className="contact-links__mock-field">
                <label className="contact-links__mock-field-label">First Name</label>
                <input
                  className="contact-links__mock-input"
                  type="text"
                  defaultValue="María"
                  readOnly
                  tabIndex={-1}
                />
              </div>
              <div className="contact-links__mock-field">
                <label className="contact-links__mock-field-label">Last Name</label>
                <input
                  className="contact-links__mock-input"
                  type="text"
                  defaultValue="González"
                  readOnly
                  tabIndex={-1}
                />
              </div>
              <div className="contact-links__mock-field">
                <label className="contact-links__mock-field-label">Email</label>
                <input
                  className="contact-links__mock-input"
                  type="text"
                  defaultValue="maria@gmail.com"
                  readOnly
                  tabIndex={-1}
                />
              </div>
            </div>
            <div className="contact-links__mock-btn-wrap">
              <button type="button" className="contact-links__mock-btn">
                RESERVE MY POSITION NOW!
              </button>
              <p className="contact-links__mock-secure">🔒 Conexión segura · Sin tarjeta de crédito</p>
            </div>
          </div>

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
