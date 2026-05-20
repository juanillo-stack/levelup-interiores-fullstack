import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h2 className="navbar-brand">LevelUp Interiores</h2>

        <div className="navbar-links">
          <a href="#servicios" style={link}>Servicios</a>
          <a href="#metodo" style={link}>Método</a>
          <a href="#nosotros" style={link}>Nosotros</a>

          <a
            href="https://wa.me/34606899991"
            className="navbar-contact"
          >
            <FaWhatsapp size={18} className="navbar-contact-icon" />
            <span className="navbar-contact-text">606 · 899 · 991</span>
            <span className="navbar-contact-name">Juan Leiva</span>
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