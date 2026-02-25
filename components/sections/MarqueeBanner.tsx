'use client';

export function MarqueeBanner() {
  const items = [
    'Pistacho Premium',
    'Trazabilidad Total',
    'Cultivo Ecologico',
    'Calidad Certificada',
    'Cooperativa Sostenible',
    'Origen Castilla La Mancha',
  ];

  return (
    <div className="py-4 bg-primary overflow-hidden" aria-hidden="true">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-primary-foreground/80 font-sans text-xs tracking-[0.2em] uppercase font-medium">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
