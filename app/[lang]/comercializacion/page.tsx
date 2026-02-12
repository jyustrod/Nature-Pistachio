import Image from 'next/image';
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
        backgroundImage="/images/hero-commerce.jpg"
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
              title={lang === 'es' ? 'Mercados Europeos' : 'European Markets'}
              description={lang === 'es' ? 'Presencia consolidada en mas de 15 paises europeos con distribuidores especializados' : 'Consolidated presence in over 15 European countries'}
              image="/images/card-europe.jpg"
            />
            <Card
              title={lang === 'es' ? 'Mercados Internacionales' : 'International Markets'}
              description={lang === 'es' ? 'Exportamos a Asia, America y Oriente Medio con logistica especializada' : 'Exporting to Asia, Americas and Middle East'}
              image="/images/card-global.jpg"
            />
            <Card
              title={lang === 'es' ? 'Logistica Optimizada' : 'Optimized Logistics'}
              description={lang === 'es' ? 'Sistemas de transporte refrigerado y almacenaje en optimas condiciones' : 'Refrigerated transport and optimal storage systems'}
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
                title: lang === 'es' ? 'Suministro Flexible' : 'Flexible Supply',
                desc: lang === 'es'
                  ? 'Adaptamos nuestros volumenes de entrega a tus necesidades, desde pequenos lotes hasta cargas completas de contenedor.'
                  : 'We adapt our delivery volumes to your needs, from small batches to full container loads.',
                color: 'bg-primary',
              },
              {
                title: lang === 'es' ? 'Documentacion Completa' : 'Complete Documentation',
                desc: lang === 'es'
                  ? 'Certificados de origen, analisis de laboratorio, certificaciones de trazabilidad y documentos aduanales listos.'
                  : 'Certificates of origin, lab analysis, traceability certifications and customs documents ready.',
                color: 'bg-secondary',
              },
              {
                title: lang === 'es' ? 'Soporte Tecnico' : 'Technical Support',
                desc: lang === 'es'
                  ? 'Asesoramiento en almacenaje, manipulacion y transporte para garantizar la maxima calidad en destino.'
                  : 'Advisory on storage, handling and transport to ensure maximum quality at destination.',
                color: 'bg-primary',
              },
              {
                title: lang === 'es' ? 'Precios Competitivos' : 'Competitive Pricing',
                desc: lang === 'es'
                  ? 'Margenes atractivos para distribuidores con volumenes garantizados y condiciones de pago flexibles.'
                  : 'Attractive margins for distributors with guaranteed volumes and flexible payment terms.',
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Image
          src="/images/hero-commerce.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-earth-900/85" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-sans font-bold text-white mb-5 text-balance">
            {lang === 'es' ? 'Conviertete en Distribuidor Nature Pistachio' : 'Become a Nature Pistachio Distributor'}
          </h2>
          <p className="text-white/80 mb-10 text-lg font-body">
            {lang === 'es'
              ? 'Unete a nuestra red de distribuidores premium en toda Europa y el mundo.'
              : 'Join our premium distributor network across Europe and the world.'}
          </p>
          <a
            href={`/${lang}/contacto`}
            className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-secondary/90 transition-all hover:shadow-xl"
          >
            {lang === 'es' ? 'Solicitar Informacion Comercial' : 'Request Commercial Information'}
          </a>
        </div>
      </section>
    </>
  );
}
