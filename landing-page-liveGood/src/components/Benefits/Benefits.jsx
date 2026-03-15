const benefitsData = [
  {
    icon: '💊',
    title: 'Suplementos Premium',
    description: 'Fórmulas científicamente desarrolladas con los ingredientes más puros y de mayor biodisponibilidad del mercado.',
  },
  {
    icon: '💰',
    title: 'Precios Imbatibles',
    description: 'Accede a productos de alta calidad a precios hasta un 75% más bajos que la competencia. Calidad sin sacrificar tu bolsillo.',
  },
  {
    icon: '🌐',
    title: 'Oportunidad Global',
    description: 'Construye tu negocio desde cualquier lugar del mundo con nuestra plataforma digital y equipo de soporte 24/7.',
  },
  {
    icon: '🏆',
    title: 'Plan de Compensación',
    description: 'Uno de los planes de compensación más lucrativos y justos de toda la industria del bienestar.',
  },
  {
    icon: '🔬',
    title: 'Respaldo Científico',
    description: 'Todos nuestros productos están respaldados por investigación científica rigurosa y estudios clínicos comprobados.',
  },
  {
    icon: '🤝',
    title: 'Comunidad de Apoyo',
    description: 'Únete a una comunidad global de personas comprometidas con la salud, el bienestar y el éxito financiero.',
  },
]

function Benefits() {
  return (
    <section id="beneficios" className="benefits">
      <div className="benefits__container">

        <div className="benefits__header">
          <span className="benefits__badge">¿Por Qué LiveGood?</span>
          <h2 className="benefits__title">Beneficios Que Transforman Tu Vida</h2>
          <p className="benefits__subtitle">
            LiveGood ofrece una combinación única de productos excepcionales y una oportunidad
            de negocio real para todos.
          </p>
        </div>

        <div className="benefits__grid">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="benefits__card">
              <div className="benefits__card-icon">{benefit.icon}</div>
              <h3 className="benefits__card-title">{benefit.title}</h3>
              <p className="benefits__card-description">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Benefits
