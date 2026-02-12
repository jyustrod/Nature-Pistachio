# 🟢 Nature Pistachio - Sitio Web Corporativo

Sitio web corporativo B2B para Nature Pistachio, cooperativa de excelencia en pistacho ecológico sostenible.

## 📋 Stack Tecnológico

- **Framework**: Next.js 16 (React 19)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS 4
- **i18n**: Soporte multiidioma (ES/EN)
- **Estructura**: App Router con dinámico [lang]

## 🚀 Comenzar

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd nature-pistachio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 📁 Estructura de Carpetas

```
nature-pistachio/
├── app/
│   ├── [lang]/              # Rutas dinámicas por idioma
│   │   ├── page.tsx         # Home
│   │   ├── nosotros/        # Sobre nosotros
│   │   ├── nuestro-pistacho/# Producto
│   │   ├── procesos/        # Procesos de producción
│   │   ├── sostenibilidad/  # Sostenibilidad
│   │   ├── certificaciones/ # Certificaciones
│   │   ├── comercializacion/# Comercialización
│   │   ├── blog/            # Blog/Noticias
│   │   └── contacto/        # Formulario de contacto
│   ├── layout.tsx           # Layout raíz
│   ├── page.tsx             # Redirección a /es
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # sitemap.xml
├── components/
│   ├── common/              # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Card.tsx
│   │   └── CTAButton.tsx
│   └── sections/            # Componentes de secciones
│       ├── ProcessTimeline.tsx
│       ├── CertificationGrid.tsx
│       ├── BlogCard.tsx
│       └── ContactForm.tsx
├── hooks/
│   └── useI18n.ts           # Hook para multiidioma
├── lib/
│   └── translations.ts      # Lógica i18n
├── data/
│   └── mockup.ts            # Datos mockup (procesos, certificaciones, blog)
├── types/
│   └── index.ts             # Tipos TypeScript globales
├── locales/
│   ├── es.json              # Traducciones español
│   └── en.json              # Traducciones inglés
└── tailwind.config.ts       # Configuración de estilos
```

## 🌍 Idiomas Soportados

- **Español** (ES): `/es`
- **Inglés** (EN): `/en`

La navegación cambia automáticamente entre idiomas mediante botones en el header.

## 🎨 Colores de Marca

- **Verde Primario** (Sostenibilidad): `#22c55e`
- **Tierra**: `#b8804d` (Cultivo)
- **Gris Neutral**: Fondos y textos

## 📝 Rutas Disponibles

### Estructura de URLs
```
/{lang}/                           # Home
/{lang}/nosotros                   # Sobre nosotros
/{lang}/nuestro-pistacho          # Nuestro producto
/{lang}/procesos                   # Procesos de producción
/{lang}/sostenibilidad            # Sostenibilidad
/{lang}/certificaciones           # Certificaciones
/{lang}/comercializacion          # Comercialización
/{lang}/blog                       # Blog y noticias
/{lang}/contacto                  # Formulario de contacto
```

## 🔧 Scripts Disponibles

```bash
npm run dev     # Iniciar desarrollo
npm run build   # Compilar para producción
npm start       # Iniciar servidor producción
npm run lint    # Ejecutar linter
```

## 📦 Componentes Principales

### Header
- Logo y navegación principal
- Selector de idioma
- Links dinámicos según idioma

### Footer
- Enlaces rápidos
- Redes sociales
- Información legal
- Copyright

### Hero
- Imagen de fondo
- Título y descripción
- Botones CTA

### Cards
- Imagen, título, descripción
- Links opcionales
- Hover effects

### Formulario de Contacto
- Validación client-side
- Estados de carga/éxito/error
- Campos: nombre, empresa, país, email, teléfono, mensaje

## 🎯 Próximos Pasos (Roadmap)

- [ ] Integración con CMS (Strapi/Sanity)
- [ ] Formulario contacto con email backend
- [ ] Autenticación de distribuidores (Fase 2)
- [ ] Área privada B2B
- [ ] Sistema de notificaciones
- [ ] Analytics (GA4 / Plausible)
- [ ] Optimización SEO avanzada
- [ ] Tests unitarios y E2E

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Otros Hosting
- AWS Amplify
- Railway
- Render
- DigitalOcean

## 📄 Documentación Adicional

Ver `DOCUMENTACION.md` para:
- Requisitos funcionales detallados
- Stack tecnológico original
- Especificaciones de contenido
- Plan de implementación completo

## 👥 Autor

Nature Pistachio - Cooperativa de Excelencia

## 📄 Licencia

Consultar archivo LICENSE
