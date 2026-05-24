import { BrandName } from "../components/BrandName";
import {
  LegalPageLayout,
  LegalP,
  LegalSection,
} from "../components/LegalPageLayout";

export const CookiesPage = () => (
  <LegalPageLayout title="Política de cookies">
    <LegalSection heading="1. Qué son las cookies">
      <LegalP>
        Las cookies son pequeños archivos que un sitio web puede almacenar en el
        navegador para recordar información técnica, mejorar la navegación o medir
        el uso del servicio. También pueden existir tecnologías similares, como
        almacenamiento local o identificadores técnicos.
      </LegalP>
    </LegalSection>

    <LegalSection heading="2. Uso de cookies en este sitio">
      <LegalP>
        <BrandName /> mantiene una web informativa orientada a la captación de
        clientes para reformas. No se instalan cookies propias de publicidad
        comportamental.
      </LegalP>
      <LegalP>
        Pueden utilizarse cookies técnicas o mecanismos equivalentes estrictamente
        necesarios para la seguridad, carga, mantenimiento y disponibilidad del
        sitio, especialmente los gestionados por el proveedor de alojamiento (por
        ejemplo, GitHub Pages) o infraestructura asociada.
      </LegalP>
    </LegalSection>

    <LegalSection heading="3. Cookies de terceros">
      <LegalP>
        El sitio enlaza a servicios externos como WhatsApp o LinkedIn. Al acceder a
        dichos servicios, sus titulares pueden instalar cookies o tratar datos
        conforme a sus propias políticas. <BrandName /> no controla esas cookies
        externas.
      </LegalP>
    </LegalSection>

    <LegalSection heading="4. Gestión y desactivación">
      <LegalP>
        La persona usuaria puede configurar, bloquear o eliminar cookies desde las
        preferencias de su navegador. La desactivación de cookies técnicas puede
        afectar a determinadas funciones básicas de navegación o seguridad.
      </LegalP>
    </LegalSection>

    <LegalSection heading="5. Actualizaciones">
      <LegalP>
        Esta política puede actualizarse si se incorporan nuevas herramientas,
        servicios de analítica, funcionalidades o cambios normativos. La fecha de
        última actualización aparece al inicio del documento.
      </LegalP>
    </LegalSection>
  </LegalPageLayout>
);
