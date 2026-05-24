import { BrandName } from "../components/BrandName";
import {
  LegalPageLayout,
  LegalP,
  LegalSection,
  LegalUl,
} from "../components/LegalPageLayout";
import { site } from "../lib/site";

export const PrivacidadPage = () => (
  <LegalPageLayout title="Política de privacidad">
    <LegalSection heading="1. Responsable del tratamiento">
      <LegalP>
        <strong>Responsable:</strong> {site.legalName}
        <br />
        <strong>NIF/CIF:</strong> {site.vat}
        <br />
        <strong>Domicilio fiscal:</strong> {site.fiscalAddress}
        <br />
        <strong>Email de contacto:</strong> {site.email}
        <br />
        <strong>Teléfono / WhatsApp:</strong> {site.phoneDisplay}
        <br />
        <strong>Ámbito de actividad:</strong> reformas de baños, cocinas e
        interiorismo en Málaga y alrededores.
        <br />
        <strong>Ubicación:</strong> {site.location}.
      </LegalP>
    </LegalSection>

    <LegalSection heading="2. Datos personales tratados">
      <LegalP>
        Los datos personales que pueden tratarse son los facilitados
        voluntariamente por la persona interesada a través de:
      </LegalP>
      <LegalUl
        items={[
          "El formulario de solicitud de presupuesto (nombre, teléfono y descripción del proyecto).",
          "Mensajes enviados por WhatsApp al número indicado en la web.",
          "Correos electrónicos enviados a la dirección de contacto.",
          "Comunicaciones profesionales derivadas de solicitudes de información, presupuestos o contratación de servicios.",
        ]}
      />
      <LegalP>
        Los datos pueden incluir nombre, teléfono, dirección de email, información
        del inmueble o proyecto y cualquier dato que la persona facilite libremente
        en la comunicación.
      </LegalP>
    </LegalSection>

    <LegalSection heading="3. Finalidad del tratamiento">
      <LegalP>Los datos facilitados se utilizan para:</LegalP>
      <LegalUl
        items={[
          "Responder consultas y solicitudes de presupuesto iniciadas por la persona interesada.",
          "Preparar propuestas, visitas técnicas o presupuestos vinculados a reformas.",
          "Gestionar la relación contractual o precontractual con clientes.",
          "Cumplir obligaciones legales, administrativas y fiscales cuando resulten aplicables.",
        ]}
      />
    </LegalSection>

    <LegalSection heading="4. Base legal">
      <LegalP>
        La base legal del tratamiento puede ser el consentimiento de la persona
        interesada al enviar el formulario o iniciar una comunicación, la aplicación
        de medidas precontractuales solicitadas por ella, la ejecución de un
        contrato de servicios o el cumplimiento de obligaciones legales, conforme
        al Reglamento (UE) 2016/679 (RGPD).
      </LegalP>
    </LegalSection>

    <LegalSection heading="5. Conservación de datos">
      <LegalP>
        Los datos se conservarán durante el tiempo necesario para atender la
        solicitud, gestionar la relación profesional y cumplir los plazos legales
        aplicables. Cuando dejen de ser necesarios, se suprimirán o bloquearán de
        acuerdo con la normativa vigente.
      </LegalP>
    </LegalSection>

    <LegalSection heading="6. Comunicación de datos y proveedores">
      <LegalP>
        No se ceden datos a terceros salvo obligación legal o cuando sea necesario
        para prestar un servicio solicitado. El uso de WhatsApp implica que las
        comunicaciones se gestionan conforme a las condiciones de Meta Platforms
        Ireland Ltd. El alojamiento web, correo electrónico, API o herramientas
        técnicas pueden implicar acceso por parte de proveedores que actúan como
        encargados del tratamiento.
      </LegalP>
    </LegalSection>

    <LegalSection heading="7. Derechos de las personas interesadas">
      <LegalP>La persona interesada puede ejercer los siguientes derechos:</LegalP>
      <LegalUl
        items={[
          "Acceso a sus datos personales.",
          "Rectificación de datos inexactos o incompletos.",
          "Supresión cuando los datos ya no sean necesarios.",
          "Limitación u oposición al tratamiento.",
          "Portabilidad de los datos cuando proceda.",
        ]}
      />
      <LegalP>
        Para ejercer estos derechos, se puede escribir a{" "}
        <strong>{site.email}</strong>, indicando el derecho que se desea ejercer y
        aportando información suficiente para verificar la identidad.
      </LegalP>
      <LegalP>
        También existe derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos en www.aepd.es.
      </LegalP>
    </LegalSection>

    <LegalSection heading="8. Cookies y datos de navegación">
      <LegalP>
        La información sobre cookies se detalla en la Política de cookies. Pueden
        existir registros técnicos mínimos del proveedor de alojamiento necesarios
        para seguridad, disponibilidad y funcionamiento del servicio.
      </LegalP>
    </LegalSection>

    <LegalSection heading="9. Cambios en esta política">
      <LegalP>
        Esta política puede actualizarse para adaptarse a cambios legales o del
        servicio. Se recomienda revisarla periódicamente. La fecha de última
        actualización aparece al inicio del documento.
      </LegalP>
    </LegalSection>
  </LegalPageLayout>
);
