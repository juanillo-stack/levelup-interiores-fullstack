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
  "Visita inicial y valoración del trabajo",
  "Presupuesto detallado",
  "Planificación de la reforma",
  "Ejecución organizada por fases",
  "Seguimiento y control",
  "Entrega final",
];

const materiales = [
  { icon: FaGem, label: "Materiales de alta calidad" },
  { icon: FaShieldAlt, label: "Soluciones duraderas" },
  { icon: FaTools, label: "Instalación funcional y precisa" },
  { icon: FaRulerCombined, label: "Optimización del espacio" },
  { icon: FaCheckCircle, label: "Mejora de seguridad y eficiencia" },
  { icon: FaThLarge, label: "Acabados con criterio profesional" },
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
    <section id="metodo" className="como-trabajamos-section">
      <div className="como-trabajamos-inner como-trabajamos-inner--process">
        <article className="como-trabajamos-card">
          <h2>Nuestro proceso</h2>
          <div className="como-trabajamos-card-list">
            {pasos.map((texto, i) => (
              <p key={i}>{texto}</p>
            ))}
          </div>
        </article>
      </div>

      <div className="como-trabajamos-visual">
        <div className="como-trabajamos-visual-header">
          <p className="como-trabajamos-kicker">Calidad en cada detalle</p>
          <h2 className="como-trabajamos-visual-title">
            Materiales y marcas con las que trabajamos
          </h2>
        </div>

        <div className="como-trabajamos-visual-grid">
          <article className="como-trabajamos-panel">
            <h3>Materiales y acabados</h3>
            <div className="como-trabajamos-tiles">
              {materiales.map(({ icon: Icon, label }) => (
                <div key={label} className="como-trabajamos-tile">
                  <span className="como-trabajamos-tile-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="como-trabajamos-panel como-trabajamos-panel--brands">
            <h3>Nuestras marcas</h3>
            <div className="como-trabajamos-brands">
              {marcas.map(({ icon: Icon, categoria, marca }) => (
                <div key={categoria} className="como-trabajamos-brand">
                  <span className="como-trabajamos-brand-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="como-trabajamos-brand-copy">
                    <span className="como-trabajamos-brand-cat">{categoria}</span>
                    <strong>{marca}</strong>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
