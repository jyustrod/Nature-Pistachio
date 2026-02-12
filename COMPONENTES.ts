// ARCHIVO DE REFERENCIA: Listado de todos los componentes implementados

export const COMPONENTES = {
  // COMPONENTES COMUNES (Reutilizables)
  COMMON: {
    Header: "components/common/Header.tsx",
    Footer: "components/common/Footer.tsx",
    Hero: "components/common/Hero.tsx",
    Card: "components/common/Card.tsx",
    CTAButton: "components/common/CTAButton.tsx",
  },

  // COMPONENTES DE SECCIONES
  SECTIONS: {
    ProcessTimeline: "components/sections/ProcessTimeline.tsx",
    CertificationGrid: "components/sections/CertificationGrid.tsx",
    BlogCard: "components/sections/BlogCard.tsx",
    ContactForm: "components/sections/ContactForm.tsx",
  },
};

export const PAGES = {
  // Páginas principales
  HOME: "app/[lang]/page.tsx",
  ABOUT: "app/[lang]/nosotros/page.tsx",
  PISTACHIO: "app/[lang]/nuestro-pistacho/page.tsx",
  PROCESSES: "app/[lang]/procesos/page.tsx",
  SUSTAINABILITY: "app/[lang]/sostenibilidad/page.tsx",
  CERTIFICATIONS: "app/[lang]/certificaciones/page.tsx",
  COMMERCIALIZATION: "app/[lang]/comercializacion/page.tsx",
  BLOG: "app/[lang]/blog/page.tsx",
  CONTACT: "app/[lang]/contacto/page.tsx",

  // Estructura
  ROOT_LAYOUT: "app/layout.tsx",
  LANG_LAYOUT: "app/[lang]/layout.tsx",
  ROOT_PAGE: "app/page.tsx",
};

export const UTILITIES = {
  TRANSLATIONS: "lib/translations.ts",
  USE_I18N: "hooks/useI18n.ts",
  MOCKUP_DATA: "data/mockup.ts",
  TYPES: "types/index.ts",
};

export const LOCALES = {
  ES: "locales/es.json",
  EN: "locales/en.json",
};

export const CONFIGURATION = {
  TAILWIND: "tailwind.config.ts",
  NEXT: "next.config.ts",
  TYPESCRIPT: "tsconfig.json",
  PACKAGE: "package.json",
  ROBOTS: "app/robots.ts",
  SITEMAP: "app/sitemap.ts",
};

export const DOCUMENTATION = {
  README: "README.md",
  IMPLEMENTATION: "IMPLEMENTATION.md",
  ORIGINAL_DOCS: "DOCUMENTACION.md",
  ENV_EXAMPLE: ".env.example",
};

// RESUMEN DE IMPLEMENTACIÓN
export const SUMMARY = {
  COMPONENTES_CREADOS: 13,
  PAGINAS_CREADAS: 10,
  ARCHIVOS_TRADUCCION: 2,
  TIPOS_DEFINIDOS: 7,
  DATOS_MOCKUP: 4,
  STATUS: "✅ IMPLEMENTACIÓN COMPLETA",
  VERSION: "1.0",
  FECHA: "12-02-2026",
};
