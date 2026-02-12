import Image from 'next/image';
import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function OurPistachioPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      <Hero
        lang={lang}
        title={t('pistachio.title')}
        description={t('pistachio.description')}
        backgroundImage="/images/hero-pistachio.jpg"
        compact
      />

      {/* Product Characteristics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground">
              {t('pistachio.characteristics')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card
              title={t('pistachio.quality')}
              description="Seleccion rigurosa de variedades y procesos garantizan pistachos de tamano y calidad consistentes"
              image="/images/card-quality.jpg"
            />
            <Card
              title={t('pistachio.traceability')}
              description="Sistema de trazabilidad completo desde la parcela hasta el distribuidor final"
              image="/images/card-traceability.jpg"
            />
            <Card
              title={t('pistachio.ecology')}
              description="Cultivados sin pesticidas sinteticos, usando metodos sostenibles y regenerativos"
              image="/images/card-ecology.jpg"
            />
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-sans font-bold text-foreground">
              {lang === 'es' ? 'Especificaciones Tecnicas' : 'Technical Specifications'}
            </h2>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <h3 className="text-lg font-sans font-bold text-foreground mb-5">
                  {lang === 'es' ? 'Variedades' : 'Varieties'}
                </h3>
                <ul className="space-y-3 font-body text-muted-foreground">
                  {['Kerman', 'Maplewood', 'Chandler'].map((v) => (
                    <li key={v} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      Variedad {v}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-foreground mb-5">
                  {lang === 'es' ? 'Presentaciones' : 'Packaging'}
                </h3>
                <ul className="space-y-3 font-body text-muted-foreground">
                  {[
                    lang === 'es' ? 'Granel' : 'Bulk',
                    lang === 'es' ? 'Bolsas de 10-50 kg' : 'Bags of 10-50 kg',
                    lang === 'es' ? 'Embalajes personalizados' : 'Custom packaging',
                  ].map((v) => (
                    <li key={v} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-10">
              <h3 className="text-lg font-sans font-bold text-foreground mb-5">
                {lang === 'es' ? 'Estandares de Calidad' : 'Quality Standards'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: lang === 'es' ? 'Humedad' : 'Moisture', value: '4-5%' },
                  { label: lang === 'es' ? 'Defectos max.' : 'Max. defects', value: '<2%' },
                  { label: lang === 'es' ? 'Tamano minimo' : 'Min. size', value: '>18mm' },
                  { label: lang === 'es' ? 'Certificaciones' : 'Certifications', value: '4 activas' },
                ].map((spec) => (
                  <div key={spec.label} className="bg-muted rounded-xl p-5 text-center">
                    <div className="text-2xl font-sans font-bold text-primary mb-1">{spec.value}</div>
                    <div className="text-xs font-body text-muted-foreground tracking-wide uppercase">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Image
          src="/images/hero-pistachio.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-sans font-bold text-white mb-5 text-balance">
            {lang === 'es' ? 'Interesado en nuestro pistacho?' : 'Interested in our pistachio?'}
          </h2>
          <p className="text-white/80 mb-10 text-lg font-body">
            {lang === 'es'
              ? 'Contacta con nuestro equipo comercial para conocer disponibilidad y terminos.'
              : 'Contact our sales team to learn about availability and terms.'}
          </p>
          <a
            href={`/${lang}/contacto`}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-earth-50 transition-all hover:shadow-xl"
          >
            {t('common.requestInfo')}
          </a>
        </div>
      </section>
    </>
  );
}
