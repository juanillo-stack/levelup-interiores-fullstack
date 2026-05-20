export const ComoTrabajamos = () => {
  const pasos = [
    "Visita inicial y valoración del trabajo",
    "Presupuesto detallado",
    "Planificación de la reforma",
    "Ejecución organizada por fases",
    "Seguimiento y control",
    "Entrega final",
  ];

  return (
    <section id="metodo" className="como-trabajamos-section">
      <div className="como-trabajamos-inner">
        <article className="como-trabajamos-card">
          <h2>Nuestro proceso</h2>
          <div className="como-trabajamos-card-list">
            {pasos.map((texto, i) => (
              <p key={i}>{texto}</p>
            ))}
          </div>
        </article>

        <article className="como-trabajamos-card">
          <h2>Materiales y acabados</h2>
          <div className="como-trabajamos-card-list">
            <p>Materiales de alta calidad</p>
            <p>Soluciones duraderas</p>
            <p>Instalación funcional y precisa</p>
            <p>Optimización del espacio</p>
            <p>Mejora de seguridad y eficiencia</p>
            <p>Acabados con criterio profesional</p>
          </div>
        </article>

        <article className="como-trabajamos-card">
          <h2>Marcas y Proveedores</h2>
          <div className="como-trabajamos-card-list">
            <p>Grifería — <strong>Llavisan</strong></p>
            <p>Mamparas — <strong>Llavisan</strong></p>
            <p>Muebles y encimeras</p>
            <p>Platos de ducha</p>
            <p>Opciones personalizadas</p>
          </div>
        </article>
      </div>
    </section>
  );
};