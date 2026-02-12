interface HeroProps {
  lang: 'es' | 'en';
  title: string;
  description: string;
  backgroundColor?: 'primary' | 'secondary' | 'earth' | 'green';
  cta1?: {
    label: string;
    href: string;
  };
  cta2?: {
    label: string;
    href: string;
  };
  compact?: boolean;
}

const backgroundStyles = {
  primary: {
    backgroundColor: '#2b4533',
  },
  secondary: {
    backgroundColor: '#875a38',
  },
  earth: {
    backgroundColor: '#6b4423',
  },
  green: {
    backgroundColor: '#24392b',
  },
};

export function Hero({
  lang,
  title,
  description,
  backgroundColor = 'primary',
  cta1,
  cta2,
  compact = false,
}: HeroProps) {
  const heightClass = compact ? 'h-[55vh] min-h-[450px]' : 'h-[75vh] min-h-[550px]';

  return (
    <section
      className={`relative w-full ${heightClass} flex items-start overflow-hidden`}
      style={backgroundStyles[backgroundColor]}
    >
      {/* No image, just gradient background */}

      {/* Content */}
      <div className="relative z-10 w-full pt-16 md:pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Decorative line */}
            <div className="w-16 h-0.5 bg-white mb-6" />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-body leading-relaxed max-w-2xl text-pretty">
              {description}
            </p>

            {/* CTAs */}
            {(cta1 || cta2) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {cta1 && (
                  <a
                    href={cta1.href}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    {cta1.label}
                  </a>
                )}
                {cta2 && (
                  <a
                    href={cta2.href}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-body font-bold text-sm tracking-wider uppercase rounded-full border border-white/20 hover:bg-white/20 transition-all"
                  >
                    {cta2.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
