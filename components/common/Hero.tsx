import { getTranslation } from '@/lib/translations';

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
}

export function Hero({
  lang,
  title,
  description,
  backgroundImage = 'https://via.placeholder.com/1920x600?text=Hero',
  cta1,
  cta2,
}: HeroProps) {
  return (
    <section
      className="relative w-full h-96 md:h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#1a1a1a',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-slide-up max-w-2xl mx-auto">
          {description}
        </p>

        {/* CTAs */}
        {(cta1 || cta2) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            {cta1 && (
              <a
                href={cta1.href}
                className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                {cta1.label}
              </a>
            )}
            {cta2 && (
              <a
                href={cta2.href}
                className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {cta2.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
