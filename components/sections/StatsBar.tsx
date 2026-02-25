'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatsBarProps {
  lang: 'es' | 'en';
}

const ease = [0.16, 1, 0.3, 1];

export function StatsBar({ lang }: StatsBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const stats = [
    {
      value: lang === 'es' ? 'Cooperativa joven' : 'Young cooperative',
      label: lang === 'es' ? 'En crecimiento' : 'Growing steadily',
    },
    {
      value: lang === 'es' ? 'Pequena escala' : 'Small scale',
      label: lang === 'es' ? 'Produccion cuidada' : 'Careful production',
    },
    {
      value: '100%',
      label: lang === 'es' ? 'Trazabilidad' : 'Traceability',
    },
    {
      value: lang === 'es' ? 'Trato directo' : 'Direct contact',
      label: lang === 'es' ? 'Socios fundadores' : 'Founding members',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 px-6 sm:px-8 lg:px-12 bg-card border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2 leading-tight">
                {stat.value}
              </div>
              <div className="text-sm font-sans text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
