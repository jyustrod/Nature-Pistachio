import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function CommercializationPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      <Hero
        lang={lang}
        title={t('commercialization.title')}
        description={t('commercialization.description')}
        backgroundColor="green"
        compact
      />

      {/* Distribution Network */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground">
              {lang === 'es' ? 'Nuestra Red de Distribucion' : 'Our Distribution Network'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card
              title={lang === 'es' ? 'Distribucion Nacional' : 'National Distribution'}
              description={lang === 'es' ? 'Comenzamos con distribuidores especializados en el mercado nacional' : 'Starting with specialized distributors in the national market'}
              image="/images/card-europe.jpg"
            />
            <Card
              title={lang === 'es' ? 'Expansion Internacional' : 'International Expansion'}
              description={lang === 'es' ? 'Explorando oportunidades en mercados internacionales con socios de confianza' : 'Exploring opportunities in international markets with trusted partners'}
              image="/images/card-global.jpg"
            />
            <Card
              title={lang === 'es' ? 'Logistica Cuidadosa' : 'Careful Logistics'}
              description={lang === 'es' ? 'Sistemas de transporte y almacenaje que garantizan la calidad del producto' : 'Transport and storage systems that guarantee product quality'}
              image="/images/card-logistics.jpg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-sans font-bold text-foreground">
              {lang === 'es' ? 'Servicios para Distribuidores' : 'Services for Distributors'}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: lang === 'es' ? 'Trato Directo' : 'Direct Contact',
                desc: lang === 'es'
                  ? 'Trabajamos de forma cercana con cada distribuidor, adaptando entregas a sus necesidades reales.'
                  : 'We work closely with each distributor, adapting deliveries to their actual needs.',
                color: 'bg-primary',
              },
              {
                title: lang === 'es' ? 'Documentacion Completa' : 'Complete Documentation',
                desc: lang === 'es'
                  ? 'Certificados de origen, analisis de laboratorio y documentos de trazabilidad listos para cada envio.'
                  : 'Certificates of origin, lab analysis and traceability documents ready for each shipment.',
                color: 'bg-secondary',
              },
              {
                title: lang === 'es' ? 'Soporte Tecnico' : 'Technical Support',
                desc: lang === 'es'
                  ? 'Asesoramiento en almacenaje y manipulacion para garantizar la calidad en destino.'
                  : 'Advisory on storage and handling to ensure quality at destination.',
                color: 'bg-primary',
              },
              {
                title: lang === 'es' ? 'Transparencia' : 'Transparency',
                desc: lang === 'es'
                  ? 'Comunicacion clara sobre disponibilidad, calidad y condiciones en cada campana.'
                  : 'Clear communication about availability, quality and conditions each season.',
                color: 'bg-secondary',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all flex gap-6">
                <div className={`w-1 rounded-full ${item.color} flex-shrink-0`} />
                <div>
                  <h3 className="text-lg font-sans font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl font-sans font-bold text-foreground mb-5 text-balance">
            {lang === 'es' ? 'Trabaja con Nature Pistachio' : 'Work with Nature Pistachio'}
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-body">
            {lang === 'es'
              ? 'Contactanos para conocer mas sobre nuestra cooperativa y nuestro pistacho de calidad.'
              : 'Contact us to learn more about our cooperative and our quality pistachio.'}
          </p>
          <a
            href={`/${lang}/contacto`}
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-primary-600 transition-all hover:shadow-xl"
          >
            {lang === 'es' ? 'Solicitar Informacion Comercial' : 'Request Commercial Information'}
          </a>
        </div>
      </section>
    </>
  );
}
