import { ProcessStep, Certification, Article } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: 'cultivation',
    title: 'processes.steps.cultivation',
    description: 'Cultivo responsable con tecnicas modernas y sostenibles',
    image: '/images/process-cultivation.jpg',
    order: 1,
  },
  {
    id: 'harvest',
    title: 'processes.steps.harvest',
    description: 'Cosecha selectiva en el momento optimo de maduracion',
    image: '/images/process-harvest.jpg',
    order: 2,
  },
  {
    id: 'reception',
    title: 'processes.steps.reception',
    description: 'Recepcion y control inicial en instalaciones modernas',
    image: '/images/process-reception.jpg',
    order: 3,
  },
  {
    id: 'drying',
    title: 'processes.steps.drying',
    description: 'Secado y clasificacion optica de precision',
    image: '/images/process-drying.jpg',
    order: 4,
  },
  {
    id: 'quality',
    title: 'processes.steps.quality',
    description: 'Control de calidad multinivel garantizado',
    image: '/images/process-quality.jpg',
    order: 5,
  },
  {
    id: 'storage',
    title: 'processes.steps.storage',
    description: 'Almacenaje optimizado listo para distribucion',
    image: '/images/process-storage.jpg',
    order: 6,
  },
];

export const certifications: Certification[] = [
  {
    id: 'global-gap',
    name: 'GlobalG.A.P.',
    logo: '/images/cert-globalgap.svg',
    description: 'Certificacion internacional de buenas practicas agricolas',
    category: 'agriculture',
  },
  {
    id: 'organic',
    name: 'Certificacion Ecologica',
    logo: '/images/cert-organic.svg',
    description: 'Certificacion de produccion ecologica',
    category: 'organic',
  },
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    logo: '/images/cert-iso.svg',
    description: 'Sistema de gestion de calidad',
    category: 'quality',
  },
  {
    id: 'haccp',
    name: 'HACCP',
    logo: '/images/cert-haccp.svg',
    description: 'Analisis de Peligros y Puntos Criticos de Control',
    category: 'safety',
  },
];

export const blogArticles: Article[] = [
  {
    id: 'article-1',
    title: 'Inauguracion de nuevas instalaciones de procesado',
    slug: 'inauguration-new-facilities',
    excerpt: 'Nature Pistachio abre las puertas de su moderna planta de procesado',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/images/blog-facilities.jpg',
    date: '2026-02-01',
    author: 'Nature Pistachio',
    featured: true,
  },
  {
    id: 'article-2',
    title: 'Participacion en Alimentaria 2026',
    slug: 'alimentaria-2026',
    excerpt: 'Nature Pistachio presente en la feria internacional de alimentacion',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/images/blog-fair.jpg',
    date: '2026-01-15',
    author: 'Nature Pistachio',
    featured: false,
  },
  {
    id: 'article-3',
    title: 'Innovacion en tecnicas de riego sostenible',
    slug: 'sustainable-irrigation',
    excerpt: 'Nuevas tecnologias para optimizar el uso del agua en nuestros campos',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: '/images/blog-irrigation.jpg',
    date: '2025-12-20',
    author: 'Nature Pistachio',
    featured: false,
  },
];

export const navigationLinks = [
  { id: 'home', label: 'common.home', href: '/', description: 'Pagina principal' },
  { id: 'about', label: 'common.about', href: '/nosotros', description: 'Conoce nuestra cooperativa' },
  { id: 'pistachio', label: 'common.ourPistachio', href: '/nuestro-pistacho', description: 'Nuestro producto' },
  { id: 'processes', label: 'common.processes', href: '/procesos', description: 'Procesos de produccion' },
  { id: 'sustainability', label: 'common.sustainability', href: '/sostenibilidad', description: 'Sostenibilidad' },
  { id: 'certifications', label: 'common.certifications', href: '/certificaciones', description: 'Nuestras certificaciones' },
  { id: 'commercialization', label: 'common.commercialization', href: '/comercializacion', description: 'Comercializacion' },
  { id: 'blog', label: 'common.blog', href: '/blog', description: 'Noticias y blog' },
  { id: 'contact', label: 'common.contact', href: '/contacto', description: 'Formulario de contacto' },
];
