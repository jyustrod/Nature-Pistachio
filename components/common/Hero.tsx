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
    base: '#2b4533',
    accent: '#4a7c59',
    glow: '#6aab7e',
  },
  secondary: {
    base: '#875a38',
    accent: '#c8a96e',
    glow: '#b8945a',
  },
  earth: {
    base: '#6b4423',
    accent: '#c8a96e',
    glow: '#a37d42',
  },
  green: {
    base: '#24392b',
    accent: '#4a7c59',
    glow: '#6aab7e',
  },
};

function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 10 C30 40, 10 80, 20 140 C30 120, 40 90, 60 60 C80 90, 90 120, 100 140 C110 80, 90 40, 60 10Z"
        fill="currentColor"
        opacity="0.07"
      />
      <path
        d="M60 30 C45 55, 35 85, 40 130"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.1"
        fill="none"
      />
      <path
        d="M60 30 C75 55, 85 85, 80 130"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.1"
        fill="none"
      />
      <path
        d="M60 10 L60 160"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.08"
      />
    </svg>
  );
}

function BranchDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 50 Q50 20, 100 50 Q150 80, 200 50"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.08"
        fill="none"
      />
      <circle cx="40" cy="35" r="6" fill="currentColor" opacity="0.05" />
      <circle cx="80" cy="42" r="4" fill="currentColor" opacity="0.06" />
      <circle cx="120" cy="58" r="5" fill="currentColor" opacity="0.05" />
      <circle cx="160" cy="65" r="7" fill="currentColor" opacity="0.04" />
    </svg>
  );
}

export function Hero({
  lang,
  title,
  description,
  backgroundColor = 'primary',
  cta1,
  cta2,
  compact = false,
}: HeroProps) {
  const colors = backgroundStyles[backgroundColor];
  const heightClass = compact
    ? 'min-h-[160px] md:min-h-[180px]'
    : 'min-h-[180px] md:min-h-[200px]';

  return (
    <section
      className={`relative w-full ${heightClass} flex items-center overflow-hidden`}
      style={{ backgroundColor: colors.base }}
    >
      {/* Radial glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: colors.glow }}
        aria-hidden="true"
      />

      {/* Radial glow bottom-left */}
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: colors.accent }}
        aria-hidden="true"
      />

      {/* Botanical decorations */}
      <LeafDecoration className="absolute top-8 right-8 md:right-16 w-20 md:w-28 text-white pointer-events-none" />
      <LeafDecoration className="absolute bottom-12 right-1/4 w-16 md:w-20 text-white pointer-events-none rotate-12" />
      <BranchDecoration className="absolute bottom-16 left-0 w-48 md:w-72 text-white pointer-events-none" />
      <BranchDecoration className="absolute top-20 right-0 w-40 md:w-56 text-white pointer-events-none rotate-180" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />


      {/* Content */}
      <div className="relative z-10 w-full py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Decorative accent */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colors.accent}33` }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 2C8 2 4 6 4 10c0 3 2 6 5 8l3 4 3-4c3-2 5-5 5-8 0-4-4-8-8-8z"
                    fill="currentColor"
                    opacity="0.4"
                  />
                  <path d="M12 6c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" fill="currentColor" />
                </svg>
              </div>
              <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: `${colors.glow}40` }} />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white mb-3 leading-tight text-balance">
              {title}
            </h1>

            <p className="text-sm md:text-base text-white/80 mb-6 font-body leading-relaxed max-w-2xl text-pretty">
              {description}
            </p>

            {/* CTAs */}
            {(cta1 || cta2) && (
              <div className="flex flex-col sm:flex-row gap-3">
                {cta1 && (
                  <a
                    href={cta1.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-foreground font-body font-bold text-xs tracking-wider uppercase rounded-full hover:bg-white/90 transition-all hover:shadow-lg group"
                  >
                    {cta1.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {cta2 && (
                  <a
                    href={cta2.href}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white font-body font-bold text-xs tracking-wider uppercase rounded-full border border-white/20 hover:bg-white/20 transition-all"
                  >
                    {cta2.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom fade strip */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
