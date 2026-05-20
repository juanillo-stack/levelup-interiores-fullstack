import React from "react";
import heroImg from "../assets/hero.jpg";

export const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        position: "relative",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      />

      {/* CONTENIDO */}
      <div className="hero-inner">
        <div className="container">
          <div className="hero-copy">
            <h1>Rehabilitación de baños y cocinas en Málaga</h1>

            <p>Reformas completas con acabados de calidad y ejecución profesional</p>

            <a href="#formulario" className="hero-button">
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};