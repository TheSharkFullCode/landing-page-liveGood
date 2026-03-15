import { useState } from 'react'

const CTA_URL = 'https://www.livegoodtour.com/teslarod'

function LeadForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: conectar con CRM / email marketing (ej. MailerLite)
    setSubmitted(true)
    setFormData({ nombre: '', email: '' })
    window.open(CTA_URL, '_blank')
  }

  if (submitted) {
    return (
      <section id="formulario" className="lead-form">
        <div className="lead-form__container">
          <div className="lead-form__card">
            <span className="lead-form__icon">✅</span>
            <h2 className="lead-form__title">¡Recibido!</h2>
            <p className="lead-form__subtitle">En breve te enviamos la guía.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="formulario" className="lead-form">
      <div className="lead-form__container">
        <div className="lead-form__card">

          <span className="lead-form__badge">📋 Guía gratuita · Descarga inmediata</span>

          <h2 className="lead-form__title">
            Una membresía.{' '}
            <span className="lead-form__title-accent">Dos beneficios</span>{' '}
            que no esperabas.
          </h2>

          <p className="lead-form__subtitle">
            Descarga gratis y descubre cómo por $9.95/mes puedes tener suplementos
            premium Y construir un ingreso extra desde casa — sin experiencia previa.
          </p>

          <ul className="lead-form__points">
            <li className="lead-form__point">✅ Suplementos al precio de coste</li>
            <li className="lead-form__point">✅ Entrada automática en la matriz forzada</li>
            <li className="lead-form__point">✅ Sin compromisos ni permanencia</li>
          </ul>

          <hr className="lead-form__divider" />

          <form onSubmit={handleSubmit} className="lead-form__form">

            <div className="lead-form__field">
              <label htmlFor="nombre" className="lead-form__label">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                className="lead-form__input"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="lead-form__field">
              <label htmlFor="email" className="lead-form__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                className="lead-form__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="lead-form__submit-btn">
              Quiero mi guía gratuita →
            </button>

          </form>

          <p className="lead-form__privacy">
            🔒 Sin spam. Solo contenido de valor. Puedes darte de baja cuando quieras.
          </p>

        </div>
      </div>
    </section>
  )
}

export default LeadForm
