import React from "react";

export const Servicios = () => {
  return (
    <section
      id="servicios"
      className="servicios"
    >
      <div className="servicios-inner">

        {/* IZQUIERDA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "16px",
            }}
          >
            Servicios
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.6",
              maxWidth: "360px",
              fontSize: "15px",
            }}
          >
            Soluciones completas para la renovación de tu hogar, cuidando cada
            detalle para garantizar calidad y un acabado profesional.
          </p>
        </div>

        {/* LÍNEA */}
        <div className="servicios-divider" />

        {/* DERECHA */}
        <div className="servicios-right">
          <div>
            <p>Rehabilitación de baños</p>
            <p>Rehabilitación de cocinas</p>
            <p>Reformas integrales</p>
          </div>

          <div>
            <p>Instalaciones de agua y saneamiento</p>
            <p>Instalaciones eléctricas</p>
            <p>Revestimientos cerámicos</p>
          </div>
        </div>
      </div>
    </section>
  );
};