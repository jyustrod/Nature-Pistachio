import Image from 'next/image';
import { Hero } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      <Hero
        lang={lang}
        title={t('about.subtitle')}
        description={t('about.description')}
        backgroundColor="green"
        compact
      />

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-primary/5 border border-primary/10 p-10 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                {t('about.mission')}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">{t('about.missionText')}</p>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 p-10 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-secondary">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                {t('about.vision')}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">{t('about.visionText')}</p>
            </div>

            <div className="bg-muted border border-border p-10 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                {t('about.values')}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {t('about.valuesList')}
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/images/card-about.jpg"
                alt="Agricultores de Nature Pistachio"
                fill
              />
            </div>
            <div>
              <div className="w-16 h-0.5 bg-secondary mb-6" />
              <h2 className="text-3xl font-sans font-bold text-foreground mb-6">
                {lang === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {lang === 'es'
                  ? 'Nature Pistachio, S. Coop. de CLM es una cooperativa recién constituida por agricultores que creen en el cultivo sostenible del pistacho. Estamos en nuestros primeros años, construyendo un modelo transparente que equilibra calidad con responsabilidad ambiental.'
                  : 'Nature Pistachio, S. Coop. de CLM is a recently formed cooperative of farmers who believe in sustainable pistachio cultivation. We are in our early years, building a transparent model that balances quality with environmental responsibility.'}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                {lang === 'es'
                  ? 'Cada paso en nuestro proceso productivo está diseñado con cuidado. Desde la selección de variedades hasta el almacenaje final, aplicamos métodos que garantizan trazabilidad y un trato cercano con cada distribuidor.'
                  : 'Each step in our production process is carefully designed. From variety selection to final storage, we apply methods that ensure traceability and close contact with each distributor.'}
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-0.5 bg-secondary mb-6" />
              <h2 className="text-3xl font-sans font-bold text-foreground mb-6">
                {lang === 'es' ? 'Nuestro Equipo' : 'Our Team'}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                {lang === 'es'
                  ? 'Somos un equipo pequeño pero comprometido: agricultores, técnicos y comerciales que trabajamos día a día para cuidar cada campaña y ofrecer un servicio cercano a distribuidores que valoran el origen y la transparencia.'
                  : 'We are a small but committed team: farmers, technicians, and sales staff working day by day to care for each season and offer close service to distributors who value origin and transparency.'}
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/hero-about.jpg"
                alt="Equipo de Nature Pistachio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
