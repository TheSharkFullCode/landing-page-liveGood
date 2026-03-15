import imgMultivitaminico from '../../imagenes/multivitaminico.png'
import imgMagnesio from '../../imagenes/ultra-magnesio.png'
import imgProteina from '../../imagenes/whey-protein-tile.png'

const productsData = [
  {
    img: imgMultivitaminico,
    name: 'Multivitamínico Completo',
    description:
      'Fórmula con 23 vitaminas y minerales esenciales. Máxima biodisponibilidad. Sin rellenos ni aditivos innecesarios.',
    retailPrice: '$19.95',
    memberPrice: '$12.30',
    savings: '38%',
  },
  {
    img: imgMagnesio,
    name: 'Ultra Magnesio Complex',
    description:
      'Triple forma de magnesio para absorción máxima. Ideal para músculo, sueño reparador y sistema nervioso.',
    retailPrice: '$19.95',
    memberPrice: '$9.95',
    savings: '50%',
  },
  {
    img: imgProteina,
    name: 'Proteína Vegetal Completa',
    description:
      'Blend de guisante, arroz y cáñamo. 20 g de proteína por dosis. Sin sabores ni colorantes artificiales.',
    retailPrice: '$49.95',
    memberPrice: '$39.95',
    savings: '20%',
  },
]

function Products() {
  return (
    <section id="productos" className="products">
      <div className="products__container">

        <div className="products__header">
          <span className="products__badge">Nuestros productos</span>
          <h2 className="products__title">Calidad que habla por sí sola</h2>
          <p className="products__subtitle">
            Los mismos ingredientes que las grandes marcas premium. Sin el margen
            de los intermediarios.
          </p>
        </div>

        <div className="products__grid">
          {productsData.map((product, index) => (
            <div key={index} className="products__card">

              <div className="products__card-image-wrapper">
                <img
                  src={product.img}
                  alt={product.name}
                  className="products__card-image"
                />
              </div>

              <h3 className="products__card-name">{product.name}</h3>
              <p className="products__card-description">{product.description}</p>

              <div className="products__card-pricing">
                <div className="products__card-retail">
                  <span className="products__card-retail-label">Precio venta al público</span>
                  <span className="products__card-retail-price">{product.retailPrice}</span>
                </div>
                <div className="products__card-member">
                  <span className="products__card-member-label">Precio para miembros</span>
                  <span className="products__card-member-price">{product.memberPrice}</span>
                </div>
              </div>

              <div className="products__card-savings">
                Ahorras un <strong>{product.savings}</strong>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Products
