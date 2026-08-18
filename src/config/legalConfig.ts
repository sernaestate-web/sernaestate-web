export interface LegalConfig {
  legalName: string;
  commercialName: string;
  ruc: string;
  country: string;
  legalContactAddress: string | null;
  contactEmail: string;
  privacyEmail: string;
  personalDataBankRegistered: boolean;
  personalDataBankName: string | null;
  personalDataBankCode: string | null;
  retentionPeriod: string | null;
  privacyPolicyVersion: string;
  effectiveDate: string | null;
  jurisdiction: string | null;
}

export const legalConfig: LegalConfig = {
  legalName: "SERNA ESTATE FIRMA LEGAL INMOBILIARIA S.A.C.",
  commercialName: "Serna Estate",
  ruc: "20616191731",
  country: "Perú",
  legalContactAddress: null, // Pendiente de validación de dirección formal de contacto legal
  contactEmail: "sernaestate@gmail.com",
  privacyEmail: "sernaestate@gmail.com",
  personalDataBankRegistered: false, // En trámite ante la Autoridad Nacional de Protección de Datos Personales (ANPD)
  personalDataBankName: null,
  personalDataBankCode: null,
  retentionPeriod: null, // Pendiente de definición de plazo o política interna específica
  privacyPolicyVersion: "1.0",
  effectiveDate: null, // Pendiente de fecha formal de entrada en vigor tras validación legal
  jurisdiction: null, // Pendiente de asignación de fuero o fuero común según normativa procesal
};

export type LegalDocType = 'privacidad' | 'cookies' | 'aviso-legal' | 'terminos';

export interface LegalNavigationItem {
  id: LegalDocType;
  title: string;
  shortTitle: string;
  description: string;
  slug: string;
}

export const legalDocList: LegalNavigationItem[] = [
  {
    id: 'privacidad',
    title: 'Política de Privacidad y Protección de Datos Personales',
    shortTitle: 'Política de Privacidad',
    description: 'Conoce cómo Serna Estate trata, protege y resguarda tus datos personales conforme a la Ley N.° 29733.',
    slug: 'privacidad',
  },
  {
    id: 'cookies',
    title: 'Política de Cookies y Tecnologías de Almacenamiento',
    shortTitle: 'Política de Cookies',
    description: 'Información transparente sobre el uso de tecnologías, servicios externos y ausencia de cookies de rastreo.',
    slug: 'cookies',
  },
  {
    id: 'aviso-legal',
    title: 'Aviso Legal e Información Institucional',
    shortTitle: 'Aviso Legal',
    description: 'Identificación institucional, condiciones generales de acceso y régimen de responsabilidad de la web.',
    slug: 'aviso-legal',
  },
  {
    id: 'terminos',
    title: 'Términos y Condiciones de Uso del Sitio Web',
    shortTitle: 'Términos y Condiciones',
    description: 'Reglas y lineamientos de navegación, consultas preliminares y propiedad intelectual en el portal.',
    slug: 'terminos',
  },
];
