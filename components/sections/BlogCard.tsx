import { Article } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslation } from '@/lib/translations';

interface BlogCardProps {
  article: Article;
  lang: 'es' | 'en';
}

export function BlogCard({ article, lang }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {article.featured && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Destacado
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500 font-medium">
            {getTranslation(lang, 'blog.postedOn')} {article.date}
          </span>
          <span className="text-xs text-primary-600 font-medium">{article.author}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>

        <Link
          href={`/${lang}/blog/${article.slug}`}
          className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
        >
          {getTranslation(lang, 'blog.readMore')}
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
