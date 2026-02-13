import { Header, Footer } from '@/components/common';
import { defaultLanguage, languages } from '@/lib/translations';
import { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang.code,
  }));
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    alternates: {
      languages: {
        'es-ES': '/es',
        'en-US': '/en',
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params;
  const validLang = (languages.find((l) => l.code === lang)?.code || defaultLanguage) as 'es' | 'en';

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={validLang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={validLang} />
    </div>
  );
}
