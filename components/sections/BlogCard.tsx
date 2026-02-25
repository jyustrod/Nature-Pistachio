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
    <article className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-500 hover-lift h-full flex flex-col">
      {/* Image */}
      <div className="relative h-60 overflow-hidden image-zoom">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        {article.featured && (
          <div className="absolute top-5 right-5 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-[10px] font-sans font-bold tracking-[0.15em] uppercase">
            Destacado
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-muted-foreground font-sans tracking-wide">
            {article.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span className="text-xs text-primary font-sans font-semibold">{article.author}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-card-foreground mb-3 leading-snug">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-6 flex-1">
          {article.excerpt}
        </p>

        <Link
          href={`/${lang}/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm tracking-wide uppercase group-hover:gap-3 transition-all"
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
