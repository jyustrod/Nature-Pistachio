import { ProcessStep, Certification, Article } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: 'cultivation',
    title: 'processes.steps.cultivation',
    description: 'Cultivo responsable con técnicas modernas y sostenibles',
    image: 'https://via.placeholder.com/400x300?text=Cultivo',
    order: 1,
  },
  {
    id: 'harvest',
    title: 'processes.steps.harvest',
    description: 'Cosecha selectiva en el momento óptimo de maduración',
    image: 'https://via.placeholder.com/400x300?text=Cosecha',
    order: 2,
  },
  {
    id: 'reception',
    title: 'processes.steps.reception',
    description: 'Recepción y control inicial en instalaciones modernas',
    image: 'https://via.placeholder.com/400x300?text=Recepción',
    order: 3,
  },
  {
    id: 'drying',
    title: 'processes.steps.drying',
    description: 'Secado y clasificación óptica de precisión',
    image: 'https://via.placeholder.com/400x300?text=Secado',
    order: 4,
  },
  {
    id: 'quality',
    title: 'processes.steps.quality',
    description: 'Control de calidad multinivel garantizado',
    image: 'https://via.placeholder.com/400x300?text=Calidad',
    order: 5,
  },
  {
    id: 'storage',
    title: 'processes.steps.storage',
    description: 'Almacenaje optimizado listo para distribución',
    image: 'https://via.placeholder.com/400x300?text=Almacén',
    order: 6,
  },
];

export const certifications: Certification[] = [
  {
    id: 'global-gap',
    name: 'GlobalG.A.P.',
    logo: 'https://via.placeholder.com/200x100?text=GlobalGAP',
    description: 'Certificación internacional de buenas prácticas agrícolas',
    category: 'agriculture',
  },
  {
    id: 'organic',
    name: 'Certificación Ecológica',
    logo: 'https://via.placeholder.com/200x100?text=Organic',
    description: 'Certificación de producción ecológica',
    category: 'organic',
  },
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    logo: 'https://via.placeholder.com/200x100?text=ISO9001',
    description: 'Sistema de gestión de calidad',
    category: 'quality',
  },
  {
    id: 'haccp',
    name: 'HACCP',
    logo: 'https://via.placeholder.com/200x100?text=HACCP',
    description: 'Análisis de Peligros y Puntos Críticos de Control',
    category: 'safety',
  },
];

export const blogArticles: Article[] = [
  {
    id: 'article-1',
    title: 'Inauguración de nuevas instalaciones de procesado',
    slug: 'inauguration-new-facilities',
    excerpt: 'Nature Pistachio abre las puertas de su moderna planta de procesado',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://via.placeholder.com/400x250?text=Facilities',
    date: '2026-02-01',
    author: 'Nature Pistachio',
    featured: true,
  },
  {
    id: 'article-2',
    title: 'Participación en Alimentaria 2026',
    slug: 'alimentaria-2026',
    excerpt: 'Nature Pistachio presente en la feria internacional de alimentación',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://via.placeholder.com/400x250?text=Fair',
    date: '2026-01-15',
    author: 'Nature Pistachio',
    featured: false,
  },
  {
    id: 'article-3',
    title: 'Innovación en técnicas de riego sostenible',
    slug: 'sustainable-irrigation',
    excerpt: 'Nuevas tecnologías para optimizar el uso del agua en nuestros campos',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://via.placeholder.com/400x250?text=Irrigation',
    date: '2025-12-20',
    author: 'Nature Pistachio',
    featured: false,
  },
];

export const navigationLinks = [
  { id: 'home', label: 'common.home', href: '/', description: 'Página principal' },
  { id: 'about', label: 'common.about', href: '/nosotros', description: 'Conoce nuestra cooperativa' },
  { id: 'pistachio', label: 'common.ourPistachio', href: '/nuestro-pistacho', description: 'Nuestro producto' },
  { id: 'processes', label: 'common.processes', href: '/procesos', description: 'Procesos de producción' },
  { id: 'sustainability', label: 'common.sustainability', href: '/sostenibilidad', description: 'Sostenibilidad' },
  { id: 'certifications', label: 'common.certifications', href: '/certificaciones', description: 'Nuestras certificaciones' },
  { id: 'commercialization', label: 'common.commercialization', href: '/comercializacion', description: 'Comercialización' },
  { id: 'blog', label: 'common.blog', href: '/blog', description: 'Noticias y blog' },
  { id: 'contact', label: 'common.contact', href: '/contacto', description: 'Formulario de contacto' },
];
