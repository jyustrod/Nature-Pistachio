import Image from 'next/image';
import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function SustainabilityPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      <Hero
        lang={lang}
        title={t('sustainability.title')}
        description={t('sustainability.description')}
        backgroundColor="green"
        compact
      />

      {/* Sustainability Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground">
              {lang === 'es' ? 'Nuestros Pilares' : 'Our Pillars'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card
              title={t('sustainability.waterManagement')}
              description={lang === 'es' ? 'Riego eficiente y gestion responsable del agua en cada parcela' : 'Efficient irrigation and responsible water management in every plot'}
              image="/images/card-water.jpg"
            />
            <Card
              title={t('sustainability.renewableEnergy')}
              description={lang === 'es' ? 'Paneles solares y energia renovable en nuestras instalaciones' : 'Solar panels and renewable energy in our facilities'}
              image="/images/card-energy.jpg"
            />
            <Card
              title={t('sustainability.biodiversity')}
              description={lang === 'es' ? 'Proteccion de ecosistemas y fomento de la biodiversidad' : 'Protection of ecosystems and promotion of biodiversity'}
              image="/images/card-biodiversity.jpg"
            />
            <Card
              title={t('sustainability.regenerative')}
              description={lang === 'es' ? 'Practicas agricolas regenerativas y mejora del suelo' : 'Regenerative agricultural practices and soil improvement'}
              image="/images/card-regenerative.jpg"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-sans font-bold text-foreground">
              {lang === 'es' ? 'Nuestro Compromiso Ambiental' : 'Our Environmental Commitment'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: lang === 'es' ? 'Energia Renovable' : 'Renewable Energy',
                desc: lang === 'es'
                  ? 'Invertimos en energia renovable desde el inicio, priorizando paneles solares en nuestras instalaciones.'
                  : 'We invest in renewable energy from the start, prioritizing solar panels in our facilities.',
                stat: lang === 'es' ? 'Solar' : 'Solar',
                statLabel: lang === 'es' ? 'energia limpia' : 'clean energy',
              },
              {
                title: lang === 'es' ? 'Gestion del Agua' : 'Water Management',
                desc: lang === 'es'
                  ? 'Aplicamos sistemas de riego eficiente en nuestras parcelas, cuidando este recurso vital.'
                  : 'We apply efficient irrigation systems in our plots, caring for this vital resource.',
                stat: lang === 'es' ? 'Riego' : 'Irrigation',
                statLabel: lang === 'es' ? 'eficiente' : 'efficient',
              },
              {
                title: lang === 'es' ? 'Biodiversidad' : 'Biodiversity',
                desc: lang === 'es'
                  ? 'Mantenemos areas naturales en nuestras parcelas, fomentando la polinizacion y protegiendo especies locales.'
                  : 'We maintain natural areas in our plots, promoting pollination and protecting local species.',
                stat: lang === 'es' ? 'Natural' : 'Natural',
                statLabel: lang === 'es' ? 'polinizacion' : 'pollination',
              },
              {
                title: lang === 'es' ? 'Aprovechamiento Integral' : 'Full Utilization',
                desc: lang === 'es'
                  ? 'Buscamos aprovechar los subproductos del procesado, minimizando el desperdicio desde nuestros primeros pasos.'
                  : 'We seek to utilize processing by-products, minimizing waste from our first steps.',
                stat: lang === 'es' ? 'Cero' : 'Zero',
                statLabel: lang === 'es' ? 'objetivo desperdicio' : 'waste goal',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-sans font-bold text-foreground">
                    {item.title}
                  </h3>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-2xl font-sans font-bold text-primary">{item.stat}</div>
                    <div className="text-xs font-body text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
