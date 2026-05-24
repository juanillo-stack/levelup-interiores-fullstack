import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLinks } from "../lib/site";

const primaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  backgroundColor: "#d6c3a3",
  color: "#000",
  padding: "12px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "14px",
  border: "none",
  cursor: "pointer",
  width: "100%",
  maxWidth: "280px",
};

const secondaryBtn: React.CSSProperties = {
  ...primaryBtn,
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.2)",
};

export const FinalCTA = () => {
  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "56px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#d6c3a3",
            marginBottom: "12px",
          }}
        >
          Contacto
        </p>

        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 34px)",
            lineHeight: 1.25,
            marginBottom: "16px",
            fontWeight: 400,
          }}
        >
          Cada reforma merece una ejecución que transmita calidad
        </h2>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.65)",
            marginBottom: "28px",
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Si tienes un baño, cocina o reforma integral en mente, podemos valorar
          tu proyecto juntos, sin compromiso.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <a href="#formulario" style={primaryBtn}>
            Solicitar presupuesto
          </a>
          <a
            href={whatsappLinks.contact}
            target="_blank"
            rel="noopener noreferrer"
            style={secondaryBtn}
          >
            {React.createElement(FaWhatsapp as any, { size: 16 })}
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
