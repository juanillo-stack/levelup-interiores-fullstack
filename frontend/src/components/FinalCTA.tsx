import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { site, whatsappLinks } from "../lib/site";

export const FinalCTA = () => {
  return (
    <section className="final-cta">
      <p className="final-cta-location">
        📍 {site.fiscalAddress}
      </p>

      <div className="final-cta-box">
        <p className="final-cta-kicker">Contacto</p>

        <h2 className="final-cta-title">
          Cada reforma merece una ejecución que transmita calidad
        </h2>

        <p className="final-cta-text">
          Si tienes un baño, cocina o reforma integral en mente, podemos valorar
          tu proyecto juntos, sin compromiso.
        </p>

        <ul className="final-cta-contact">
          <li>
            <a href={whatsappLinks.contact} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="final-cta-contact-icon" aria-hidden="true" />
              <span>
                <strong>WhatsApp / Teléfono</strong>
                <span>{site.phoneDisplay}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>
              <FaEnvelope className="final-cta-contact-icon" aria-hidden="true" />
              <span>
                <strong>Email</strong>
                <span>{site.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={site.linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="final-cta-contact-icon" aria-hidden="true" />
              <span>
                <strong>LinkedIn</strong>
                <span>LevelUp Interiores</span>
              </span>
            </a>
          </li>
        </ul>

        <div className="final-cta-actions">
          <a href="#formulario" className="final-cta-btn final-cta-btn--primary">
            Solicitar presupuesto
          </a>
          <a
            href={whatsappLinks.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="final-cta-btn final-cta-btn--whatsapp"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
