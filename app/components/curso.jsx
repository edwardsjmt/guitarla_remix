export default function Curso({ curso }) {
  const { titulo, descripcion, imagen } = curso;
  return (
    <div>
      <section className="curso">
        <style jsx="true">{`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}</style>
        <div className="contenedor curso-grid">
          <div className="contenido">
            <h2 className="heading">{titulo}</h2>
            <p className="texto">{descripcion}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
