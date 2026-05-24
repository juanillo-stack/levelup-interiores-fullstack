import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BrandName } from "./BrandName";
import { whatsappLinks } from "../lib/site";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <BrandName />
        </Link>

        <div className="navbar-links">
          <a href="#servicios">Servicios</a>
          <a href="#metodo">Método</a>
          <a href="#nosotros">Nosotros</a>

          <a
            href={whatsappLinks.contact}
            className="navbar-contact"
            target="_blank"
            rel="noopener noreferrer"
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
