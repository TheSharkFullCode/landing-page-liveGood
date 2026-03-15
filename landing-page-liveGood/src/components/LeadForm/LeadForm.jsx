import { useState } from 'react'

function LeadForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const handleClick = () => {
    if (!formData.nombre.trim() || !formData.email.trim()) {
      setError('Por favor rellena todos los campos')
      return
    }
    // TODO: conectar con CRM / email marketing (ej. MailerLite)
    setError('')
    setSubmitted(true)
    setFormData({ nombre: '', email: '' })
  }

  return (
    <section id="formulario" className="lead-form">
      <div className="lead-form__container">

        {/* ── Parte superior: narrativa ── */}
        <div id="quienes-somos" className="lead-form__narrative">
          <span className="lead-form__narrative-label">¿QUIÉNES SOMOS?</span>

          <h2 className="lead-form__narrative-title">
            La empresa que está rompiendo las reglas del mercado
          </h2>

          <hr className="lead-form__narrative-sep" />

          <p className="lead-form__narrative-text">
            LiveGood nació en 2022 en Florida, Estados Unidos, con una misión clara:
            llevar suplementos nutricionales de calidad farmacéutica a cualquier persona,
            sin importar su presupuesto. Fundada por Ben Glinsky, con más de 20 años de
            experiencia en la industria, la empresa eliminó a todos los intermediarios
            del proceso de distribución.
          </p>

          <hr className="lead-form__narrative-sep" />

          <h3 className="lead-form__narrative-sub">¿Cómo ganan dinero sus miembros?</h3>
          <p className="lead-form__narrative-text">
            LiveGood reparte sus beneficios directamente con su comunidad. Por cada
            persona que refieres y se convierte en miembro, recibes $25 de comisión
            inmediata. Además, el sistema matricial te permite ganar hasta $2.047/mes
            incluso sin hacer referencias directas.
          </p>

          <hr className="lead-form__narrative-sep" />

          <h3 className="lead-form__narrative-sub">Cifras que no mienten</h3>
          <p className="lead-form__narrative-text">
            En su primer año alcanzó 1 millón de miembros globales. En 2024 generó
            entre 85 y 125 millones de dólares en ingresos, un crecimiento del 1.600%
            respecto al año anterior. Ha sido calificada AAA+ por Business For Home,
            el mayor directorio mundial de empresas de network marketing.
          </p>
        </div>

        {/* ── Parte inferior: barra de formulario ── */}
        <div className="lead-form__bar">

          {/* Fila 1 — texto descriptivo */}
          <div className="lead-form__bar-teaser">
            <span className="lead-form__bar-badge">EXCLUSIVO</span>
            <div>
              <p className="lead-form__bar-hook">
                ¿Quieres saber exactamente cómo funciona por dentro?
              </p>
              <p className="lead-form__bar-sub">Descarga gratis y descúbrelo tú mismo</p>
            </div>
          </div>

          {/* Fila 2 — inputs + botón o mensaje */}
          {submitted ? (
            <p className="lead-form__bar-success">
              ¡Guía enviada a tu email! Revisa tu bandeja de entrada 🎉
            </p>
          ) : (
            <>
              <div className="lead-form__bar-form">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="lead-form__bar-input"
                  value={formData.nombre}
                  onChange={handleChange}
                  autoComplete="given-name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  className="lead-form__bar-input"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <button
                  type="button"
                  className="lead-form__bar-btn"
                  onClick={handleClick}
                >
                  Quiero la guía
                </button>
              </div>
              {error && <p className="lead-form__bar-error">{error}</p>}
            </>
          )}

        </div>

      </div>
    </section>
  )
}

export default LeadForm
