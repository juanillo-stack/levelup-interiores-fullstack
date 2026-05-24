import { BrandName } from "../components/BrandName";
import {
  LegalPageLayout,
  LegalP,
  LegalSection,
} from "../components/LegalPageLayout";
import { site } from "../lib/site";

export const AvisoLegalPage = () => (
  <LegalPageLayout title="Aviso legal">
    <LegalSection heading="1. Titular del sitio web">
      <LegalP>
        <strong>Titular:</strong> {site.legalName}
        <br />
        <strong>NIF/CIF:</strong> {site.vat}
        <br />
        <strong>Domicilio fiscal:</strong> {site.fiscalAddress}
        <br />
        <strong>Actividad:</strong> reforma e interiorismo de baños y cocinas,
        rehabilitación y coordinación de obras.
        <br />
        <strong>Email:</strong> {site.email}
        <br />
        <strong>Teléfono / WhatsApp:</strong> {site.phoneDisplay}
        <br />
        <strong>Ubicación:</strong> {site.location}.
      </LegalP>
    </LegalSection>

    <LegalSection heading="2. Objeto">
      <LegalP>
        Este sitio web ofrece información sobre los servicios de{" "}
        <BrandName />, proyectos de reforma, contenidos orientativos y canales de
        contacto profesional.
      </LegalP>
      <LegalP>
        El acceso y uso de la web implica la aceptación de este aviso legal, la
        política de privacidad y la política de cookies.
      </LegalP>
    </LegalSection>

    <LegalSection heading="3. Condiciones de uso">
      <LegalP>
        La persona que navega por este sitio se compromete a utilizarlo de forma
        lícita, diligente y respetuosa, sin realizar acciones que puedan dañar la
        web, impedir su funcionamiento o afectar a terceros.
      </LegalP>
      <LegalP>
        <BrandName /> puede actualizar, modificar o retirar contenidos del sitio
        sin necesidad de aviso previo para mantener la información alineada con sus
        servicios y obligaciones legales.
      </LegalP>
    </LegalSection>

    <LegalSection heading="4. Propiedad intelectual e industrial">
      <LegalP>
        Los textos, diseño, estructura visual, identidad, composición, elementos
        gráficos y contenidos propios de este sitio pertenecen a{" "}
        <BrandName /> o cuentan con derechos de uso suficientes. No se permite su
        reproducción, distribución o transformación sin autorización previa.
      </LegalP>
    </LegalSection>

    <LegalSection heading="5. Enlaces externos">
      <LegalP>
        La web puede incluir enlaces a plataformas de terceros, redes sociales,
        herramientas de mensajería o mapas. <BrandName /> no se responsabiliza del
        contenido, políticas o funcionamiento de dichos sitios externos.
      </LegalP>
    </LegalSection>

    <LegalSection heading="6. Responsabilidad">
      <LegalP>
        <BrandName /> trabaja para mantener la información actualizada y el sitio
        disponible, pero no garantiza la ausencia de interrupciones, errores
        técnicos o contenidos externos modificados por terceros. La información
        publicada tiene carácter general y no sustituye una visita técnica ni un
        presupuesto personalizado.
      </LegalP>
    </LegalSection>

    <LegalSection heading="7. Legislación aplicable">
      <LegalP>
        Este aviso legal se rige por la legislación española y europea aplicable.
        Para cualquier controversia, las partes se someterán a los juzgados y
        tribunales que correspondan conforme a la normativa vigente.
      </LegalP>
    </LegalSection>
  </LegalPageLayout>
);
