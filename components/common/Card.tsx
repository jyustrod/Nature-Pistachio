import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  link?: {
    label: string;
    href: string;
  };
}

export function Card({
  title,
  description,
  image,
  icon,
  link,
}: CardProps) {
  return (
    <div className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-500 hover-lift h-full flex flex-col">
      {/* Image */}
      <div className="relative h-64 overflow-hidden image-zoom">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        {icon && <div className="mb-3 text-2xl text-primary">{icon}</div>}
        <h3 className="text-xl font-serif font-bold text-card-foreground mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {link && (
          <a
            href={link.href}
            className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm tracking-wide uppercase group-hover:gap-3 transition-all"
          >
            {link.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
