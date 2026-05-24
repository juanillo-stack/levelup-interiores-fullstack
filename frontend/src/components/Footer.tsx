import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logolevelupinteriores.jpg";
import { BrandName } from "./BrandName";
import { site, whatsappLinks } from "../lib/site";

const FooterColumn = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="site-footer-col">
    <p className="site-footer-label">{label}</p>
    {children}
  </div>
);

const FooterLink = ({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    className="site-footer-link"
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    {children}
  </a>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <FooterColumn label="Contacto">
          <div className="site-footer-stack">
            <FooterLink href={`tel:${site.phoneHref}`}>
              <FaPhone className="site-footer-icon" aria-hidden="true" />
              <span>{site.phoneDisplay}</span>
            </FooterLink>
            <FooterLink href={whatsappLinks.contact} external>
              <FaWhatsapp className="site-footer-icon" aria-hidden="true" />
              <span>WhatsApp</span>
            </FooterLink>
            <FooterLink href={`mailto:${site.email}`}>
              <FaEnvelope className="site-footer-icon" aria-hidden="true" />
              <span>{site.email}</span>
            </FooterLink>
            <FooterLink href={site.linkedIn} external>
              <FaLinkedinIn className="site-footer-icon" aria-hidden="true" />
              <span>LinkedIn</span>
            </FooterLink>
          </div>
        </FooterColumn>

        <FooterColumn label="Horarios">
          <div className="site-footer-stack">
            <p className="site-footer-text">
              <strong>Lunes a Viernes</strong>
            </p>
            <p className="site-footer-text">Trabajo · 07:00 – 15:00</p>
            <p className="site-footer-text">WhatsApp · 07:00 – 22:00</p>
            <p className="site-footer-note">Respuesta online ininterrumpida</p>
          </div>
        </FooterColumn>

        <FooterColumn label="Legal">
          <div className="site-footer-stack">
            <Link to="/aviso-legal" className="site-footer-link site-footer-link--plain">
              Aviso legal
            </Link>
            <Link to="/privacidad" className="site-footer-link site-footer-link--plain">
              Política de privacidad
            </Link>
            <Link to="/cookies" className="site-footer-link site-footer-link--plain">
              Política de cookies
            </Link>
          </div>
        </FooterColumn>
      </div>

      <div className="site-footer-bottom">
        <img
          src={logo}
          alt="LevelUp Interiores"
          className="site-footer-logo"
          translate="no"
        />
        <p className="site-footer-copy">
          © {year} <BrandName style={{ color: "rgba(255,255,255,0.4)" }} />
        </p>
      </div>
    </footer>
  );
};
