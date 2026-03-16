const whatsappUrl = `https://wa.me/34604381862?text=${encodeURIComponent('Hola, me interesa saber más sobre LiveGood 🌿')}`

function OwnerSection() {
  return (
    <section id="quien-soy" className="owner-section">
      <div className="owner-section__container">
        <div className="owner-section__grid">

          {/* Columna izquierda: Foto grande sin marcos */}
          <div className="owner-section__photo-col">
            <img
              src="/imagenes/tesla-rod.jpg"
              alt="Tesla Ramona Rodríguez"
              className="owner-section__photo"
            />
            <div className="owner-section__photo-info">
              <table className="owner-section__photo-table">
                <tbody>
                  <tr>
                    <td className="owner-section__photo-td-dot">
                      <span className="owner-section__photo-dot"></span>
                    </td>
                    <td className="owner-section__photo-td-name">
                      <span className="owner-section__photo-name">Tesla Ramona Rodríguez</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="owner-section__photo-td-role">
                      <span className="owner-section__photo-role">Distribuidora LiveGood · Madrid</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Columna derecha: Texto */}
          <div className="owner-section__content">
            <h2 className="owner-section__title">
              No te vendo un sueño. Te muestro lo que yo misma{' '}
              <em>estoy construyendo.</em>
            </h2>

            <p className="owner-section__text">
              Me llamo Tesla Ramona Rodríguez. Soy trabajadora social en una residencia de Madrid y empecé con
              LiveGood porque necesitaba algo que generara ingresos mientras yo trabajaba.
              Sin montar una tienda, sin stocks, sin invertir miles de euros.
            </p>

            <p className="owner-section__text">
              Lo que me convenció fue la matriz forzada. No dependes solo de lo que tú
              vendas — cuando LiveGood crece globalmente, tú te beneficias. Es el único
              modelo que he visto donde el sistema trabaja aunque tú no estés al volante.
            </p>

            <div className="owner-section__checklist">
              <ul className="owner-section__checklist-list">
                <li className="owner-section__checklist-item">
                  <span className="owner-section__checklist-icon">✓</span>
                  <span>Productos al precio de coste desde <strong>$9.95/mes</strong></span>
                </li>
                <li className="owner-section__checklist-item">
                  <span className="owner-section__checklist-icon">✓</span>
                  <span>Entras en la matriz forzada <strong>automáticamente</strong></span>
                </li>
                <li className="owner-section__checklist-item">
                  <span className="owner-section__checklist-icon">✓</span>
                  <span>Sin permanencia. <strong>Cancela cuando quieras</strong></span>
                </li>
                <li className="owner-section__checklist-item">
                  <span className="owner-section__checklist-icon">✓</span>
                  <span>El sistema avanza.  <strong>aunque no estés ahí.</strong></span>
                </li>
              </ul>
            </div>

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
