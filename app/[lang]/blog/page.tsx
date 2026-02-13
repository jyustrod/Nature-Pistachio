import { Hero } from '@/components/common';
import { BlogCard } from '@/components/sections';
import { getTranslation } from '@/lib/translations';
import { blogArticles } from '@/data/mockup';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      <Hero
        lang={lang}
        title={t('blog.title')}
        description={t('blog.description')}
        backgroundColor="earth"
        compact
      />

      {/* Blog Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
