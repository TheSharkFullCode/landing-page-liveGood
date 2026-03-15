const videosData = [
  {
    title: 'Presentación de LiveGood',
    description: 'Descubre qué es LiveGood y por qué está cambiando la industria del bienestar.',
    videoId: 'qKi9uJ_t7Oo',
  },
  {
    title: '¿De dónde sale el dinero?',
    description: 'Entiende el modelo de negocio y cómo se genera el plan de compensación.',
    videoId: 'elAu4MA5PLo',
  },
  {
    title: 'Testimonio real de miembro',
    description: 'La experiencia de alguien que ya empezó. En sus propias palabras.',
    videoId: 'Iy-H5tZjshY',
  },
]

function VideoSection() {
  return (
    <section id="videos" className="video-section">
      <div className="video-section__container">

        <div className="video-section__header">
          <span className="video-section__badge">Vídeos</span>
          <h2 className="video-section__title">Mira cómo funciona</h2>
          <p className="video-section__subtitle">
            Antes de decidir, infórmate. Tres vídeos para entenderlo todo en minutos.
          </p>
        </div>

        <div className="video-section__grid">
          {videosData.map((video, index) => (
            <div key={index} className="video-section__card">
              <div className="video-section__embed-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="video-section__iframe"
                />
              </div>
              <div className="video-section__card-info">
                <h3 className="video-section__card-title">{video.title}</h3>
                <p className="video-section__card-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VideoSection
