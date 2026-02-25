import Image from 'next/image';
import { Hero, Card, AnimatedSection } from '@/components/common';
import { getTranslation } from '@/lib/translations';
import { blogArticles } from '@/data/mockup';
import { BlogCard } from '@/components/sections';
import { StatsBar } from '@/components/sections/StatsBar';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  const featuredArticles = blogArticles.filter((a) => a.featured).slice(0, 3);
  const displayArticles = featuredArticles.length >= 3
    ? featuredArticles
    : [...featuredArticles, ...blogArticles.filter((a) => !a.featured)].slice(0, 3);

  return (
    <>
      {/* ===== Full-Screen Hero ===== */}
      {/* IMAGE: Replace /images/hero-home.jpg with a wide-angle aerial photo of pistachio orchards at golden hour, or a cinematic landscape of Castilla La Mancha fields */}
      <Hero
        lang={lang}
        title={t('home.heroTitle')}
        description={t('home.heroDescription')}
        backgroundColor="primary"
        fullScreen
        cta1={{
          label: t('common.requestInfo'),
          href: `/${lang}/contacto`,
        }}
        cta2={{
          label: t('common.contactSales'),
          href: `/${lang}/comercializacion`,
        }}
      />

      {/* ===== Marquee Banner ===== */}
      <MarqueeBanner />

      {/* ===== Stats Bar ===== */}
      <StatsBar lang={lang} />

      {/* ===== Featured Sections ===== */}
      <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 gradient-mesh">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="inline-block text-secondary font-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                {lang === 'es' ? 'Descubre' : 'Discover'}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
                {t('home.featuredSection')}
              </h2>
              <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
                {lang === 'es'
                  ? 'Descubre como una cooperativa joven cuida cada lote con cercania y trazabilidad.'
                  : 'Discover how a young cooperative cares for each lot with closeness and traceability.'}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IMAGE card-about.jpg: Photo of farmers working together in the field, warm tones, human connection */}
            <AnimatedSection delay={0}>
              <Card
                title={t('about.title')}
                description={t('about.description')}
                image="/images/card-about.jpg"
                link={{ label: t('home.learnMore'), href: `/${lang}/nosotros` }}
              />
            </AnimatedSection>
            {/* IMAGE card-processes.jpg: Close-up of pistachio processing machinery or pistachio shells being sorted */}
            <AnimatedSection delay={0.1}>
              <Card
                title={t('processes.title')}
                description={t('processes.description')}
                image="/images/card-processes.jpg"
                link={{ label: t('home.learnMore'), href: `/${lang}/procesos` }}
              />
            </AnimatedSection>
            {/* IMAGE card-sustainability.jpg: Green landscape, water irrigation systems, or biodiversity scene */}
            <AnimatedSection delay={0.2}>
              <Card
                title={t('sustainability.title')}
                description={t('sustainability.description')}
                image="/images/card-sustainability.jpg"
                link={{ label: t('home.learnMore'), href: `/${lang}/sostenibilidad` }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== Large Feature - Split Layout ===== */}
      <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE: card-quality.jpg - A beautiful close-up of premium open pistachio nuts, studio-lit, on a natural surface */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden image-zoom">
                <Image
                  src="/images/card-quality.jpg"
                  alt="Pistacho premium de Nature Pistachio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl px-6 py-4 border border-white/10">
                    <p className="text-white font-sans text-sm font-medium">
                      {lang === 'es' ? 'Calidad certificada en cada lote' : 'Certified quality in every lot'}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div>
                <span className="inline-block text-secondary font-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                  {lang === 'es' ? 'Nuestro producto' : 'Our product'}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight text-balance">
                  {t('pistachio.title')}
                </h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-10 text-lg text-pretty">
                  {t('pistachio.description')}
                </p>

                <div className="flex flex-col gap-5 mb-12">
                  {[
                    { label: t('pistachio.quality'), desc: lang === 'es' ? 'Control multinivel en cada etapa' : 'Multi-level control at every stage' },
                    { label: t('pistachio.traceability'), desc: lang === 'es' ? 'Del campo al distribuidor' : 'From field to distributor' },
                    { label: t('pistachio.ecology'), desc: lang === 'es' ? 'Practicas sostenibles certificadas' : 'Certified sustainable practices' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                          <path d="M9 12l2 2 4-4" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-sans font-semibold text-foreground text-base">{item.label}</span>
                        <p className="text-muted-foreground font-sans text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={`/${lang}/nuestro-pistacho`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all group"
                >
                  {t('home.learnMore')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== Full-Width Image Break ===== */}
      {/* IMAGE: A panoramic shot of pistachio orchards, vast landscape, dramatic sky */}
      <AnimatedSection direction="scale">
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden image-zoom">
          <Image
            src="/images/panoramic-orchards.jpg"
            alt={lang === 'es' ? 'Campos de pistachos en Castilla La Mancha' : 'Pistachio fields in Castilla La Mancha'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-white/80 font-sans text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                Corral de Almaguer, Toledo
              </p>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-white text-balance">
                {lang === 'es' ? 'Donde nace nuestro pistacho' : 'Where our pistachio is born'}
              </h3>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ===== Blog / News ===== */}
      {displayArticles.length > 0 && (
        <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 gradient-mesh">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                <div>
                  <span className="inline-block text-secondary font-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                    {lang === 'es' ? 'Novedades' : 'News'}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">
                    {t('blog.title')}
                  </h2>
                </div>
                <a
                  href={`/${lang}/blog`}
                  className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm tracking-wide uppercase hover:gap-3 transition-all self-start md:self-auto"
                >
                  {t('blog.readMore')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayArticles.map((article, i) => (
                <AnimatedSection key={article.id} delay={i * 0.1}>
                  <BlogCard article={article} lang={lang} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA Section ===== */}
      <section className="relative py-32 md:py-40 px-6 sm:px-8 lg:px-12 overflow-hidden bg-primary">
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-block text-secondary font-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4">
              {lang === 'es' ? 'Empieza hoy' : 'Start today'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
              {t('common.contactSales')}
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-12 font-sans leading-relaxed text-pretty">
              {lang === 'es'
                ? 'Nuestro equipo comercial esta listo para ayudarte en esta etapa de crecimiento.'
                : 'Our sales team is ready to support you in our growth stage.'}
            </p>
            <a
              href={`/${lang}/contacto`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:brightness-110 transition-all hover:shadow-xl hover:shadow-secondary/20 group"
            >
              {t('common.requestInfo')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
