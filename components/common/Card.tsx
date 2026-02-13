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
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {icon && <div className="mb-3 text-2xl text-primary">{icon}</div>}
        <h3 className="text-lg font-sans font-bold text-card-foreground mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
          {description}
        </p>

        {link && (
          <a
            href={link.href}
            className="inline-flex items-center gap-2 text-primary font-body font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all"
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
