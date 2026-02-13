// Tipos globales para Nature Pistachio

export interface NavLink {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  featured: boolean;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image: string;
  order: number;
}

export interface Certification {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  message: string;
}

export interface SectionContent {
  title: string;
  description: string;
  image?: string;
  content?: string;
}

export interface Language {
  code: 'es' | 'en';
  name: string;
}
