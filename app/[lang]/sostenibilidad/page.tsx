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
        backgroundImage="/images/hero-sustainability.jpg"
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
                title: lang === 'es' ? 'Reduccion de Emisiones' : 'Emissions Reduction',
                desc: lang === 'es'
                  ? 'Nuestras instalaciones han reducido las emisiones de carbono en un 45% mediante el uso de energias renovables y optimizacion de procesos.'
                  : 'Our facilities have reduced carbon emissions by 45% through renewable energy and process optimization.',
                stat: '45%',
                statLabel: lang === 'es' ? 'menos emisiones CO2' : 'less CO2 emissions',
              },
              {
                title: lang === 'es' ? 'Gestion Integral del Agua' : 'Integrated Water Management',
                desc: lang === 'es'
                  ? 'Invertimos en sistemas de riego de precision que reducen el consumo de agua hasta un 30% sin comprometer la calidad.'
                  : 'We invest in precision irrigation systems that reduce water consumption by up to 30%.',
                stat: '30%',
                statLabel: lang === 'es' ? 'ahorro de agua' : 'water savings',
              },
              {
                title: lang === 'es' ? 'Biodiversidad y Ecosistemas' : 'Biodiversity & Ecosystems',
                desc: lang === 'es'
                  ? 'Mantenemos areas de vegetacion natural en nuestras parcelas, fomentando la polinizacion natural y protegiendo especies locales.'
                  : 'We maintain natural vegetation areas, promoting natural pollination and protecting local species.',
                stat: '100%',
                statLabel: lang === 'es' ? 'polinizacion natural' : 'natural pollination',
              },
              {
                title: lang === 'es' ? 'Economia Circular' : 'Circular Economy',
                desc: lang === 'es'
                  ? 'Los subproductos del procesado se transforman en otros productos de valor, minimizando el desperdicio.'
                  : 'Processing by-products are transformed into valuable products, minimizing waste.',
                stat: '0%',
                statLabel: lang === 'es' ? 'desperdicio' : 'waste',
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
