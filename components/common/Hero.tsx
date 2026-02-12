import Image from 'next/image';

interface HeroProps {
  lang: 'es' | 'en';
  title: string;
  description: string;
  backgroundImage?: string;
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

export function Hero({
  lang,
  title,
  description,
  backgroundImage = '/images/hero-home.jpg',
  cta1,
  cta2,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative w-full ${compact ? 'h-[50vh] min-h-[400px]' : 'h-[85vh] min-h-[600px]'} flex items-end overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay - warm dark gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-earth-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Decorative line */}
            <div className="w-16 h-0.5 bg-secondary mb-6" />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 leading-tight text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-earth-200 mb-10 font-body leading-relaxed max-w-2xl text-pretty">
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

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
