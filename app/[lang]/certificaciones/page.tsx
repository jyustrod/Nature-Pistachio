import { Hero } from '@/components/common';
import { CertificationGrid } from '@/components/sections';
import { getTranslation } from '@/lib/translations';
import { certifications } from '@/data/mockup';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function CertificationsPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      {/* Hero */}
      <Hero
        lang={lang}
        title={t('certifications.title')}
        description={t('certifications.description')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Certificaciones"
      />

      {/* Certifications Grid */}
      <CertificationGrid certifications={certifications} lang={lang} />

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Compromiso con la Excelencia
          </h2>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Nuestras certificaciones no son solo documentos; son el reflejo de nuestro
            compromiso diario con la calidad, seguridad y sostenibilidad.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              Cada certificación representa años de trabajo, inversión en tecnología
              y formación continua de nuestro equipo. Nos sometemos regularmente a
              auditorías independientes para verificar que cumplimos y superamos
              los requisitos establecidos.
            </p>
            <p className="text-gray-700">
              Para nuestros clientes distribuidores, esto significa tranquilidad y
              seguridad: sus productos finales cumplen con todos los estándares
              internacionales más exigentes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
