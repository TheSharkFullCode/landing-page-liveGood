const testimonialsData = [
  {
    name: 'Laura Sánchez',
    role: 'Miembro Activa · Madrid',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    text: 'Llevaba años gastando más de 80€ al mes en suplementos de farmacia. Con LiveGood pago mucho menos y la calidad es notablemente mejor. No me lo esperaba para nada.',
    rating: 5,
  },
  {
    name: 'Alejandro Torres',
    role: 'Distribuidor · Barcelona',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    text: 'Lo que más me convenció fue la matriz forzada. No tengo que vender puerta a puerta — el sistema trabaja solo. En 3 meses ya recuperé la inversión de la membresía.',
    rating: 5,
  },
  {
    name: 'Carmen Ruiz',
    role: 'Miembro Premium · Valencia',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    text: 'Empecé solo por los productos y acabé viendo la oportunidad de negocio. Por $9.95 al mes tienes las dos cosas. No hay nada igual en el mercado.',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section id="testimonios" className="testimonials">
      <div className="testimonials__container">

        <div className="testimonials__header">
          <span className="testimonials__badge">Testimonios</span>
          <h2 className="testimonials__title">Lo Que Dicen Nuestros Miembros</h2>
          <p className="testimonials__subtitle">
            Miles de personas ya están transformando su salud y sus finanzas con LiveGood.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonials__card">

              <div className="testimonials__card-stars">
                {'★'.repeat(testimonial.rating)}
              </div>

              <p className="testimonials__card-text">
                &#8220;{testimonial.text}&#8221;
              </p>

              <hr className="testimonials__card-divider" />

              <div className="testimonials__card-author">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="testimonials__card-img"
                />
                <div className="testimonials__card-info">
                  <span className="testimonials__card-name">{testimonial.name}</span>
                  <span className="testimonials__card-role">{testimonial.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
