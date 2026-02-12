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
    <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/40 to-transparent" />
        {article.featured && (
          <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-xs font-body font-bold tracking-wider uppercase">
            Destacado
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground font-body tracking-wide">
            {getTranslation(lang, 'blog.postedOn')} {article.date}
          </span>
          <span className="text-xs text-primary font-body font-bold">{article.author}</span>
        </div>

        <h3 className="text-xl font-sans font-bold text-card-foreground mb-3 leading-snug">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-sm font-body leading-relaxed mb-5">
          {article.excerpt}
        </p>

        <Link
          href={`/${lang}/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-primary font-body font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all"
        >
          {getTranslation(lang, 'blog.readMore')}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
