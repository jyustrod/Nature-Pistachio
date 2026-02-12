import { Certification } from '@/types';
import Image from 'next/image';
import { getTranslation } from '@/lib/translations';

interface CertificationGridProps {
  certifications: Certification[];
  lang: 'es' | 'en';
}

export function CertificationGrid({
  certifications,
  lang,
}: CertificationGridProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          {getTranslation(lang, 'certifications.title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {getTranslation(lang, 'certifications.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-32 h-32 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
