export const site = {
  name: "LevelUp Interiores",
  owner: "Juan Leiva",
  legalName: "Juan Leiva / LevelUp Interiores",
  vat: "76874482H",
  fiscalAddress: "C/ Rey Gaspar Nº9, Campanillas, Málaga, 29590",
  location: "Málaga, España",
  email: "design@levelupinteriores.es",
  phoneDisplay: "606 899 991",
  phoneHref: "+34606899991",
  linkedIn: "https://www.linkedin.com/company/levelup-interiores",
};

const encodedPhone = site.phoneHref.replace(/^\+/, "");

export const whatsappLinks = {
  budget: `https://wa.me/${encodedPhone}?text=Hola%2C%20quiero%20solicitar%20presupuesto%20para%20una%20reforma.`,
  contact: `https://wa.me/${encodedPhone}?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20LevelUp%20Interiores.`,
};
