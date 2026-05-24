import {
  FaBath,
  FaCheckCircle,
  FaDoorOpen,
  FaFaucet,
  FaGem,
  FaRulerCombined,
  FaShieldAlt,
  FaShower,
  FaThLarge,
  FaTools,
} from "react-icons/fa";

const pasos = [
  "Visita y valoración",
  "Presupuesto detallado",
  "Planificación",
  "Ejecución por fases",
  "Seguimiento",
  "Entrega final",
];

const materiales = [
  { icon: FaGem, label: "Materiales de calidad" },
  { icon: FaShieldAlt, label: "Soluciones duraderas" },
  { icon: FaTools, label: "Instalación precisa" },
  { icon: FaRulerCombined, label: "Optimización del espacio" },
  { icon: FaCheckCircle, label: "Seguridad y eficiencia" },
  { icon: FaThLarge, label: "Acabados profesionales" },
];

const marcas = [
  { icon: FaFaucet, categoria: "Grifería", marca: "Llavisan" },
  { icon: FaShower, categoria: "Mamparas", marca: "Matyban" },
  { icon: FaDoorOpen, categoria: "Puertas", marca: "Madegar" },
  { icon: FaThLarge, categoria: "Muebles y encimeras", marca: "A medida" },
  { icon: FaBath, categoria: "Platos de ducha", marca: "Selección profesional" },
];

export const ComoTrabajamos = () => {
  return (
    <section id="metodo" className="metodo-section" aria-labelledby="metodo-title">
      <div className="metodo-inner">
        <header className="metodo-intro">
          <p className="metodo-eyebrow">Cómo trabajamos</p>
          <h2 id="metodo-title" className="metodo-heading">
            Nuestro método
          </h2>
          <p className="metodo-lead">
            Un proceso claro, materiales seleccionados y marcas de confianza en cada reforma.
          </p>
        </header>

        <div className="metodo-process">
          <p className="metodo-block-label">Proceso</p>
          <ol className="metodo-timeline">
            {pasos.map((texto, i) => (
              <li key={texto} className="metodo-timeline-item">
                <span className="metodo-timeline-dot" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="metodo-timeline-label">{texto}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="metodo-split">
          <div className="metodo-block metodo-block--materiales">
            <p className="metodo-block-label">Materiales</p>
            <ul className="metodo-features">
              {materiales.map(({ icon: Icon, label }) => (
                <li key={label} className="metodo-feature">
                  <span className="metodo-feature-icon-wrap">
                    <Icon className="metodo-feature-icon" aria-hidden="true" />
                  </span>
                  <span className="metodo-feature-text">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="metodo-block metodo-block--marcas">
            <p className="metodo-block-label">Marcas</p>
            <ul className="metodo-partners">
              {marcas.map(({ icon: Icon, categoria, marca }) => (
                <li key={categoria} className="metodo-partner">
                  <span className="metodo-partner-icon-wrap">
                    <Icon className="metodo-partner-icon" aria-hidden="true" />
                  </span>
                  <span className="metodo-partner-copy">
                    <span className="metodo-partner-cat">{categoria}</span>
                    <span className="metodo-partner-name">{marca}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
