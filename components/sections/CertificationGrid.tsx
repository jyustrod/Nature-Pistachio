import { Certification } from '@/types';
import { getTranslation } from '@/lib/translations';

interface CertificationGridProps {
  certifications: Certification[];
  lang: 'es' | 'en';
}

const certIcons: Record<string, React.ReactNode> = {
  'global-gap': (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  'organic': (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
      <path d="M12 22c4-4 8-7 8-12a8 8 0 10-16 0c0 5 4 8 8 12z" />
      <path d="M12 12V8M12 12l3-3M12 12L9 9" />
    </svg>
  ),
  'iso9001': (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
      <path d="M9 12l2 2 4-4" />
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  'haccp': (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

export function CertificationGrid({
  certifications,
  lang,
}: CertificationGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
            {getTranslation(lang, 'certifications.title')}
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            {getTranslation(lang, 'certifications.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {certIcons[cert.id] || (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <path d="M9 12l2 2 4-4M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-sans font-bold text-card-foreground mb-3">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
