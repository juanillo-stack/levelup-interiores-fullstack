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
    <section id="metodo" className="metodo-section">
      <div className="metodo-wrap">
        <header className="metodo-header">
          <p className="metodo-kicker">Cómo trabajamos</p>
          <h2 className="metodo-title">Nuestro método</h2>
        </header>

        <div className="metodo-grid">
          <article className="metodo-card">
            <h3 className="metodo-card-title">Proceso</h3>
            <ol className="metodo-steps">
              {pasos.map((texto, i) => (
                <li key={texto}>
                  <span className="metodo-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{texto}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="metodo-card">
            <h3 className="metodo-card-title">Materiales</h3>
            <ul className="metodo-list">
              {materiales.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon className="metodo-list-icon" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="metodo-card">
            <h3 className="metodo-card-title">Marcas</h3>
            <ul className="metodo-brands">
              {marcas.map(({ icon: Icon, categoria, marca }) => (
                <li key={categoria}>
                  <Icon className="metodo-brand-icon" aria-hidden="true" />
                  <span className="metodo-brand-text">
                    <span className="metodo-brand-cat">{categoria}</span>
                    <strong>{marca}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
