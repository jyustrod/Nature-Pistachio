import { Hero } from '@/components/common';
import { ProcessTimeline } from '@/components/sections';
import { getTranslation } from '@/lib/translations';
import { processSteps } from '@/data/mockup';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function ProcessesPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      <Hero
        lang={lang}
        title={t('processes.title')}
        description={t('processes.description')}
        backgroundImage="/images/hero-processes.jpg"
        compact
      />

      {/* Process Timeline */}
      <ProcessTimeline steps={processSteps} lang={lang} />

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-sans font-bold text-foreground">
              {lang === 'es' ? 'Tecnologia Avanzada' : 'Advanced Technology'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: lang === 'es' ? 'Clasificacion Optica' : 'Optical Sorting',
                desc: lang === 'es'
                  ? 'Nuestras maquinas de clasificacion optica de ultima generacion garantizan la seleccion precisa de cada pistachin.'
                  : 'Our state-of-the-art optical sorting machines ensure precise selection of every pistachio.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ),
              },
              {
                title: lang === 'es' ? 'Control de Calidad Multinivel' : 'Multi-level Quality Control',
                desc: lang === 'es'
                  ? 'Multiples puntos de control durante el proceso permiten detectar y corregir desviaciones inmediatamente.'
                  : 'Multiple control points during the process allow immediate detection and correction of deviations.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: lang === 'es' ? 'Sistema de Trazabilidad' : 'Traceability System',
                desc: lang === 'es'
                  ? 'Cada unidad es trazable desde el arbol hasta el distribuidor final, proporcionando transparencia total.'
                  : 'Each unit is traceable from tree to final distributor, providing complete transparency.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                ),
              },
              {
                title: lang === 'es' ? 'Automatizacion Sostenible' : 'Sustainable Automation',
                desc: lang === 'es'
                  ? 'Nuestras instalaciones utilizan energia renovable y sistemas inteligentes para minimizar el impacto ambiental.'
                  : 'Our facilities use renewable energy and smart systems to minimize environmental impact.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-sans font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
