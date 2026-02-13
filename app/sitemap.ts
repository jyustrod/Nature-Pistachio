import { MetadataRoute } from 'next';
import { languages } from '@/lib/translations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.naturepistachio.com';

  const routes = ['', '/nosotros', '/nuestro-pistacho', '/procesos', '/sostenibilidad', '/certificaciones', '/comercializacion', '/blog', '/contacto'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang.code}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
