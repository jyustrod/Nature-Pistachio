interface CardProps {
  title: string;
  description: string;
  image?: string;
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
      {/* Image area or placeholder */}
      <div className="relative h-64 overflow-hidden bg-muted">
        {/* Decorative placeholder with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-muted flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/40">
              <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 16l4-4 3 3 4-5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-muted-foreground/50 font-sans tracking-wider uppercase">
            {'Imagen pendiente'}
          </p>
        </div>
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
