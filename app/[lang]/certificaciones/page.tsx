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
      <Hero
        lang={lang}
        title={t('certifications.title')}
        description={t('certifications.description')}
        backgroundImage="/images/hero-certifications.jpg"
        compact
      />

      {/* Certifications Grid */}
      <CertificationGrid certifications={certifications} lang={lang} />

      {/* Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-sans font-bold text-foreground">
              {lang === 'es' ? 'Compromiso con la Excelencia' : 'Commitment to Excellence'}
            </h2>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {lang === 'es'
                ? 'Cada certificacion representa anos de trabajo, inversion en tecnologia y formacion continua de nuestro equipo. Nos sometemos regularmente a auditorias independientes para verificar que cumplimos y superamos los requisitos establecidos.'
                : 'Each certification represents years of work, investment in technology and continuous training. We regularly undergo independent audits to verify compliance.'}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              {lang === 'es'
                ? 'Para nuestros clientes distribuidores, esto significa tranquilidad y seguridad: sus productos finales cumplen con todos los estandares internacionales mas exigentes.'
                : 'For our distributor clients, this means peace of mind: their final products meet all demanding international standards.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
