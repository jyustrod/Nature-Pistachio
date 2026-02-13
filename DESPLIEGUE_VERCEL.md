# 🚀 Guía de Despliegue en Vercel

## ✅ Checklist Pre-Despliegue

Tu proyecto está listo para desplegarse en Vercel. Todos los elementos necesarios están configurados:

### ✓ Archivos Configurados
- [x] `package.json` - Scripts de build configurados
- [x] `next.config.ts` - Configuración de Next.js optimizada
- [x] `vercel.json` - Configuración específica de Vercel
- [x] `.vercelignore` - Archivos excluidos del despliegue
- [x] `.gitignore` - Actualizado con carpetas de Vercel
- [x] `.env.example` - Plantilla de variables de entorno

### ✓ Optimizaciones Aplicadas
- [x] Soporte multiidioma (ES/EN) con rutas dinámicas
- [x] Componente Header corregido para mantener ruta al cambiar idioma
- [x] Imágenes locales en `/public/images/`
- [x] Metadata y SEO configurados
- [x] Sitemap dinámico
- [x] robots.txt configurado

## 📋 Pasos para Desplegar

### 1. Preparar el Repositorio Git

```bash
# Si aún no has inicializado git
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Preparar proyecto para despliegue en Vercel"

# Crear repositorio en GitHub y conectarlo
git remote add origin https://github.com/tu-usuario/nature-pistachio.git
git branch -M main
git push -u origin main
```

### 2. Desplegar en Vercel

#### Opción A: Desde la Web de Vercel (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Add New Project"**
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Configuración sugerida:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build` (auto-detectado)
   - **Output Directory**: `.next` (auto-detectado)
   - **Install Command**: `pnpm install` (auto-detectado)
6. Haz clic en **"Deploy"**

#### Opción B: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Iniciar sesión
vercel login

# Desplegar (primera vez)
vercel

# Desplegar a producción
vercel --prod
```

### 3. Configurar Variables de Entorno (Opcional)

Si necesitas variables de entorno en producción:

1. En el dashboard de Vercel, ve a **Settings → Environment Variables**
2. Añade las variables necesarias basándote en `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`: Tu dominio en Vercel
   - Otras variables según necesites (email, analytics, etc.)

### 4. Configurar Dominio Personalizado (Opcional)

1. Ve a **Settings → Domains**
2. Añade tu dominio personalizado: `www.naturepistachio.com`
3. Sigue las instrucciones para configurar DNS

## 🔧 Configuración de Vercel

El archivo `vercel.json` ya está configurado con:

```json
{
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Regiones Disponibles

Por defecto está configurado en `iad1` (Washington, DC). Puedes cambiar la región según tu audiencia:

- **iad1**: US East (Washington, DC) - Recomendado para Europa/América
- **fra1**: Frankfurt, Germany - Para audiencia europea
- **sfo1**: San Francisco, CA - Para audiencia americana

## 🌍 URLs Después del Despliegue

Una vez desplegado, tendrás:

- **Preview URL**: `https://nature-pistachio-xxx.vercel.app`
- **Production URL**: Tu dominio personalizado o la URL de Vercel
- **Rutas disponibles**:
  - `/es` - Versión en español (por defecto)
  - `/en` - Versión en inglés
  - `/es/nosotros`, `/en/nosotros` - Todas las páginas en ambos idiomas

## 🔄 Actualizaciones Automáticas

Cada vez que hagas push a tu repositorio:

- **Push a `main`**: Despliegue automático a producción
- **Push a otras ramas**: Preview deployment automático
- **Pull Requests**: Preview deployment para revisión

## 🐛 Solución de Problemas

### Error: "Build failed"

1. Verifica que el proyecto compila localmente:
   ```bash
   pnpm build
   ```
2. Revisa los logs en Vercel Dashboard
3. Asegúrate de que todas las dependencias están en `package.json`

### Error: "Images not loading"

- Verifica que las imágenes están en `/public/images/`
- Los paths deben ser relativos: `/images/logo.jpeg`
- En `next.config.ts` está configurado `unoptimized: true`

### Error de Variables de Entorno

- Las variables que empiezan con `NEXT_PUBLIC_` son visibles en el cliente
- Las demás solo están disponibles en el servidor
- Configúralas en Vercel Dashboard → Settings → Environment Variables

## 📊 Monitoreo Post-Despliegue

Vercel proporciona automáticamente:

- **Analytics**: Visitas, rendimiento, Core Web Vitals
- **Logs**: Ver logs de build y runtime
- **Speed Insights**: Métricas de rendimiento
- **Deployments**: Historial completo de despliegues

## 🎯 Próximos Pasos Recomendados

1. **Configurar Analytics**: Google Analytics, Plausible, o Vercel Analytics
2. **Configurar Formulario de Contacto**: Implementar backend para el formulario
3. **Optimizar Imágenes**: Considerar usar CDN como Cloudinary
4. **SEO Avanzado**: Añadir datos estructurados (JSON-LD)
5. **Testing**: Configurar tests e2e con Playwright o Cypress

## 📞 Soporte

- **Documentación Vercel**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Community**: https://github.com/vercel/next.js/discussions

---

¡Tu proyecto está listo para producción! 🎉

