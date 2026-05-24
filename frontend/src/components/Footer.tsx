import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logolevelupinteriores.jpg";
import { BrandName } from "./BrandName";
import { site, whatsappLinks } from "../lib/site";

export const Footer = () => {
  const textLine = {
    fontSize: "14px",
    margin: "4px 0",
  };

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "30px 20px 15px",
      }}
    >
      <div className="footer-inner">
        {/* CONTACTO */}
        <div>
          <h3 style={{ marginBottom: "10px", fontSize: "16px" }}>
            Contacto
          </h3>

          <p style={textLine}>
            📍 C/ Rey Gaspar Nº9, Campanillas, Málaga, 29590
          </p>

          <p style={textLine}>📩 Email: {site.email}</p>

          {/* 🔥 CAMBIO AQUÍ */}
          <p style={textLine}>
            <a
              href={site.linkedIn}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              💼 Síguenos en LinkedIn
            </a>
          </p>

          <p style={textLine}>
            <a
              href={whatsappLinks.contact}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              💬 WhatsApp 606 · 899 · 991
            </a>
          </p>
        </div>

        {/* HORARIOS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "6px",
          }}
        >
          <h3 style={{ marginBottom: "6px", fontSize: "16px" }}>
            Horarios
          </h3>

          <div className="footer-hours">
            <div>
              <p style={{ ...textLine, fontWeight: 600 }}>
                Trabajo
              </p>
              <p style={{ ...textLine, margin: 0 }}>
                07:00 – 15:00
              </p>
            </div>

            <div>
              <p style={{ ...textLine, fontWeight: 600 }}>
                Online
              </p>
              <p style={{ ...textLine, margin: 0 }}>
                07:00 – 22:00
              </p>
              <p style={{ fontSize: "13px", margin: 0, color: "#aaa" }}>
                Ininterrumpido
              </p>
            </div>
          </div>
        </div>

        {/* LEGAL */}
        <div>
          <h3 style={{ marginBottom: "10px", fontSize: "16px" }}>Legal</h3>
          <p style={textLine}>
            <Link to="/aviso-legal" style={footerLink}>
              Aviso legal
            </Link>
          </p>
          <p style={textLine}>
            <Link to="/privacidad" style={footerLink}>
              Política de privacidad
            </Link>
          </p>
          <p style={textLine}>
            <Link to="/cookies" style={footerLink}>
              Política de cookies
            </Link>
          </p>
        </div>
      </div>

      {/* FRANJA FINAL */}
      <div className="footer-bottom">
        <img
          src={logo}
          alt="LevelUp Interiores"
          className="footer-logo"
          translate="no"
        />

        <p style={{ fontSize: "12px", color: "#777" }}>
          © {new Date().getFullYear()}{" "}
          <BrandName style={{ color: "#777" }} />
        </p>
      </div>
    </footer>
  );
};

const footerLink: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
};