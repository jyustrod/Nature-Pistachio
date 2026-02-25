'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
  /** If true, renders a full-height immersive hero with background image. */
  fullScreen?: boolean;
}

const ease = [0.16, 1, 0.3, 1];

export function Hero({
  lang,
  title,
  description,
  backgroundColor = 'primary',
  cta1,
  cta2,
  compact = false,
  fullScreen = false,
}: HeroProps) {

  if (fullScreen) {
    return (
      <section className="relative w-full min-h-[100svh] flex items-end overflow-hidden">
        {/* Background image placeholder - replace /images/hero-home.jpg with your image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-home.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/90 via-[#0a1a0f]/40 to-[#0a1a0f]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a0f]/40 to-transparent" />
        </div>

        {/* Content at bottom */}
        <div className="relative z-10 w-full pb-16 md:pb-24 pt-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1, ease, delay: 0.2 }}
                className="h-[2px] bg-secondary mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
                className="text-secondary font-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4"
              >
                Nature Pistachio - S. Coop. de CLM
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.05] text-balance"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.6 }}
                className="text-lg md:text-xl text-white/75 font-sans leading-relaxed max-w-2xl mb-10 text-pretty"
              >
                {description}
              </motion.p>

              {/* CTAs */}
              {(cta1 || cta2) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  {cta1 && (
                    <a
                      href={cta1.href}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:brightness-110 transition-all hover:shadow-lg hover:shadow-secondary/20 group"
                    >
                      {cta1.label}
                      <svg
                        width="16"
                        height="16"
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
                      className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-sans font-semibold text-sm tracking-wider uppercase rounded-full border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {cta2.label}
                    </a>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] font-sans tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>
    );
  }

  // Compact Hero for subpages
  const bgColors: Record<string, string> = {
    primary: 'bg-primary',
    secondary: 'bg-[#875a38]',
    earth: 'bg-[#6b4423]',
    green: 'bg-[#24392b]',
  };

  return (
    <section className={`relative w-full min-h-[220px] md:min-h-[280px] flex items-center overflow-hidden ${bgColors[backgroundColor]}`}>
      {/* Subtle decorative glow */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, ease }}
              className="h-[2px] bg-secondary mb-6"
            />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4 leading-tight text-balance"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-primary-foreground/75 font-sans text-base md:text-lg leading-relaxed max-w-2xl text-pretty"
            >
              {description}
            </motion.p>

            {(cta1 || cta2) && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                {cta1 && (
                  <a
                    href={cta1.href}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-foreground font-sans font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-white/90 transition-all hover:shadow-lg group"
                  >
                    {cta1.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {cta2 && (
                  <a
                    href={cta2.href}
                    className="inline-flex items-center justify-center px-7 py-3 bg-white/10 backdrop-blur-sm text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-full border border-white/20 hover:bg-white/20 transition-all"
                  >
                    {cta2.label}
                  </a>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
