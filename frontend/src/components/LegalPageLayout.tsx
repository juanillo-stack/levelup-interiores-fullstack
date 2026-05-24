import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

const sectionTitle: React.CSSProperties = {
  fontSize: "18px",
  marginBottom: "8px",
  fontWeight: 600,
};

const bodyText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.7,
  color: "#444",
  marginBottom: "8px",
};

export const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => (
  <>
    <Navbar />
    <main
      style={{
        backgroundColor: "#f5f1eb",
        minHeight: "60vh",
        padding: "40px 20px 60px",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8a7355",
            marginBottom: "8px",
          }}
        >
          Legal
        </p>
        <h1 style={{ fontSize: "32px", marginBottom: "8px", fontWeight: 400 }}>
          {title}
        </h1>
        <p style={{ fontSize: "13px", color: "#888", marginBottom: "32px" }}>
          Última actualización: mayo 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {children}
        </div>

        <p style={{ marginTop: "40px", fontSize: "13px" }}>
          <Link to="/" style={{ color: "#000", fontWeight: 500 }}>
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export const LegalSection = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => (
  <section>
    <h2 style={sectionTitle}>{heading}</h2>
    <div>{children}</div>
  </section>
);

export const LegalP = ({ children }: { children: ReactNode }) => (
  <p style={bodyText}>{children}</p>
);

export const LegalUl = ({ items }: { items: string[] }) => (
  <ul
    style={{
      ...bodyText,
      paddingLeft: "20px",
      marginTop: "4px",
    }}
  >
    {items.map((item) => (
      <li key={item} style={{ marginBottom: "4px" }}>
        {item}
      </li>
    ))}
  </ul>
);
