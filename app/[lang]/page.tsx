import Image from 'next/image';
import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';
import { blogArticles } from '@/data/mockup';
import { BlogCard } from '@/components/sections';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  const featuredArticles = blogArticles.filter((a) => a.featured).slice(0, 3);
  // If not enough featured, fill with recent
  const displayArticles = featuredArticles.length >= 3
    ? featuredArticles
    : [...featuredArticles, ...blogArticles.filter((a) => !a.featured)].slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        lang={lang}
        title={t('home.heroTitle')}
        description={t('home.heroDescription')}
        backgroundColor="primary"
        cta1={{
          label: t('common.requestInfo'),
          href: `/${lang}/contacto`,
        }}
        cta2={{
          label: t('common.contactSales'),
          href: `/${lang}/comercializacion`,
        }}
      />

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: lang === 'es' ? 'Cooperativa joven' : 'Young cooperative', label: lang === 'es' ? 'En crecimiento' : 'Growing steadily' },
              { value: lang === 'es' ? 'Pequena escala' : 'Small scale', label: lang === 'es' ? 'Produccion cuidada' : 'Careful production' },
              { value: '100%', label: lang === 'es' ? 'Trazabilidad' : 'Traceability' },
              { value: lang === 'es' ? 'Trato directo' : 'Direct contact', label: lang === 'es' ? 'Socios fundadores' : 'Founding members' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-sans font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-body text-muted-foreground tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4 text-balance">
              {t('home.featuredSection')}
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              {lang === 'es'
                ? 'Descubre como una cooperativa joven cuida cada lote con cercania y trazabilidad.'
                : 'Discover how a young cooperative cares for each lot with closeness and traceability.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: t('about.title'),
                description: t('about.description'),
                image: '/images/card-about.jpg',
                link: { label: t('home.learnMore'), href: `/${lang}/nosotros` },
              },
              {
                title: t('processes.title'),
                description: t('processes.description'),
                image: '/images/card-processes.jpg',
                link: { label: t('home.learnMore'), href: `/${lang}/procesos` },
              },
              {
                title: t('sustainability.title'),
                description: t('sustainability.description'),
                image: '/images/card-sustainability.jpg',
                link: { label: t('home.learnMore'), href: `/${lang}/sostenibilidad` },
              },
            ].map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Large Feature Section - Side by Side */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/card-quality.jpg"
                alt="Pistacho premium de Nature Pistachio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div>
              <div className="w-16 h-0.5 bg-secondary mb-6" />
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6 leading-tight text-balance">
                {t('pistachio.title')}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8 text-lg">
                {t('pistachio.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { label: t('pistachio.quality'), icon: 'star' },
                  { label: t('pistachio.traceability'), icon: 'track' },
                  { label: t('pistachio.ecology'), icon: 'leaf' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <span className="font-body font-bold text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={`/${lang}/nuestro-pistacho`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {t('home.learnMore')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog */}
      {displayArticles.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
                {t('blog.title')}
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                {t('blog.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {displayArticles.map((article) => (
                <BlogCard
                  key={article.id}
                  article={article}
                  lang={lang}
                />
              ))}
            </div>

            <div className="text-center">
              <a
                href={`/${lang}/blog`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {t('blog.readMore')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-5 text-balance">
            {t('common.contactSales')}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 font-body leading-relaxed">
            {lang === 'es'
              ? 'Nuestro equipo comercial esta listo para ayudarte en esta etapa de crecimiento.'
              : 'Our sales team is ready to support you in our growth stage.'}
          </p>
          <a
            href={`/${lang}/contacto`}
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-primary-600 transition-all hover:shadow-xl"
          >
            {t('common.requestInfo')}
          </a>
        </div>
      </section>
    </>
  );
}
