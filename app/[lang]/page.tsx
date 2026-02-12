import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';
import { navigationLinks, blogArticles } from '@/data/mockup';
import { BlogCard } from '@/components/sections';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  const featuredArticles = blogArticles.filter((a) => a.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        lang={lang}
        title={t('home.heroTitle')}
        description={t('home.heroDescription')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Plantación+de+Pistachos"
        cta1={{
          label: t('common.requestInfo'),
          href: `/${lang}/contacto`,
        }}
        cta2={{
          label: t('common.contactSales'),
          href: `/${lang}/comercializacion`,
        }}
      />

      {/* Featured Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('home.featuredSection')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: t('about.title'),
                description: t('about.description'),
                image: 'https://via.placeholder.com/400x300?text=Nosotros',
                link: { label: t('home.learnMore'), href: `/${lang}/nosotros` },
              },
              {
                title: t('processes.title'),
                description: t('processes.description'),
                image: 'https://via.placeholder.com/400x300?text=Procesos',
                link: { label: t('home.learnMore'), href: `/${lang}/procesos` },
              },
              {
                title: t('sustainability.title'),
                description: t('sustainability.description'),
                image: 'https://via.placeholder.com/400x300?text=Sostenibilidad',
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

      {/* Recent Blog */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              {t('blog.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredArticles.map((article) => (
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
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors inline-block"
              >
                {t('blog.readMore')} →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-earth-600">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('common.contactSales')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo comercial está listo para atender tus necesidades.
          </p>
          <a
            href={`/${lang}/contacto`}
            className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            {t('common.requestInfo')}
          </a>
        </div>
      </section>
    </>
  );
}
