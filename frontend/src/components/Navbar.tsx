import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#f5f1eb",
        padding: "16px 20px",
        borderBottom: "1px solid #e8dfd5",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontWeight: 300,
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          LevelUp Interiores
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <a href="#servicios" style={link}>Servicios</a>
          <a href="#metodo" style={link}>Método</a>
          <a href="#nosotros" style={link}>Nosotros</a>

          <a
            href="https://wa.me/34606899991"
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "6px",
              textDecoration: "none",
              color: "#000",
              fontSize: "13px",
              fontWeight: 500,
              maxWidth: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {React.createElement(FaWhatsapp as any)}

              <span>Contacta conmigo</span>

              <span style={{ marginLeft: "4px" }}>
                606 · 899 · 991
              </span>

              <span style={{ marginLeft: "6px", fontWeight: 600 }}>
                Juan Leiva
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

const link = {
  textDecoration: "none",
  color: "#000",
  fontWeight: 500,
  fontSize: "13px",
};