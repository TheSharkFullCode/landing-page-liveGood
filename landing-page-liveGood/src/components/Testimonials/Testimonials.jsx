import { useState } from 'react'

const testimonialsData = [
  {
    name: 'Laura Sánchez',
    role: 'Miembro Activa · Madrid',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Llevaba años gastando más de 80€ al mes en suplementos de farmacia. Con LiveGood pago mucho menos y la calidad es notablemente mejor. No me lo esperaba para nada.',
    rating: 5,
  },
  {
    name: 'Alejandro Torres',
    role: 'Distribuidor · Barcelona',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Lo que más me convenció fue la matriz forzada. No tengo que vender puerta a puerta — el sistema trabaja solo. En 3 meses ya recuperé la inversión de la membresía.',
    rating: 5,
  },
  {
    name: 'Carmen Ruiz',
    role: 'Miembro Premium · Valencia',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Empecé solo por los productos y acabé viendo la oportunidad de negocio. Por $9.95 al mes tienes las dos cosas. No hay nada igual en el mercado.',
    rating: 5,
  },
  {
    name: 'Miguel Fernández',
    role: 'Distribuidor · Sevilla',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: 'Llevaba meses buscando algo serio. LiveGood me dio un sistema real, no promesas vacías. En 6 semanas ya tenía mi primera comisión.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Miembro Activa · Bilbao',
    photo: 'https://randomuser.me/api/portraits/women/26.jpg',
    text: 'Los productos son increíbles pero lo que de verdad me sorprendió fue la comunidad. Aquí todo el mundo se ayuda y eso se nota.',
    rating: 5,
  },
  {
    name: 'Roberto García',
    role: 'Distribuidor Senior · Valencia',
    photo: 'https://randomuser.me/api/portraits/men/54.jpg',
    text: 'En 4 meses recuperé la inversión y ahora genero ingresos pasivos reales. La matriz forzada funciona exactamente como explican.',
    rating: 5,
  },
  {
    name: 'Isabel Moreno',
    role: 'Miembro Activa · Zaragoza',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    text: 'Nunca pensé que con menos de 10€ al mes podría acceder a productos de esta calidad y además generar ingresos. LiveGood cambió mi perspectiva completamente.',
    rating: 5,
  },
  {
    name: 'David López',
    role: 'Distribuidor · Málaga',
    photo: 'https://randomuser.me/api/portraits/men/18.jpg',
    text: 'Lo probé con escepticismo y en 2 meses ya vi resultados reales. El sistema de matriz forzada es lo más inteligente que he visto en este sector.',
    rating: 5,
  },
  {
    name: 'Sofía Jiménez',
    role: 'Miembro Premium · Alicante',
    photo: 'https://randomuser.me/api/portraits/women/55.jpg',
    text: 'Vine por los productos y me quedé por el negocio. La comunidad es increíble y el soporte constante. No he visto nada igual en el mercado.',
    rating: 5,
  },
]

function Testimonials() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(testimonialsData.length / perPage)
  const visible = testimonialsData.slice(page * perPage, page * perPage + perPage)

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
          {visible.map((testimonial, index) => (
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

        <div className="testimonials__nav">
          <button
            className="testimonials__nav-btn"
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
          >←</button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`testimonials__nav-dot${i === page ? ' testimonials__nav-dot--active' : ''}`}
              onClick={() => setPage(i)}
            />
          ))}

          <button
            className="testimonials__nav-btn"
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >→</button>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
