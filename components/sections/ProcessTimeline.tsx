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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {getTranslation(lang, 'processes.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow pt-8">
                <div className="relative h-48 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={step.image}
                    alt={getTranslation(lang, step.title)}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {getTranslation(lang, step.title)}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < sortedSteps.length - 1 && (
                <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-primary-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
