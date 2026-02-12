import { ProcessStep } from '@/types';
import Image from 'next/image';
import { getTranslation } from '@/lib/translations';

interface ProcessTimelineProps {
  steps: ProcessStep[];
  lang: 'es' | 'en';
}

export function ProcessTimeline({ steps, lang }: ProcessTimelineProps) {
  const sortedSteps = [...steps].sort((a, b) => a.order - b.order);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
            {getTranslation(lang, 'processes.title')}
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            {getTranslation(lang, 'processes.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedSteps.map((step, index) => (
            <div key={step.id} className="group relative">
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-sans font-bold text-lg z-10 shadow-lg shadow-primary/20">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Card */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 pt-4">
                <div className="relative h-52 mx-4 mt-4 rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={getTranslation(lang, step.title)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-950/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-sans font-bold text-card-foreground mb-2">
                    {getTranslation(lang, step.title)}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
