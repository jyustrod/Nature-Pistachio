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
      {/* Hero */}
      <Hero
        lang={lang}
        title={t('processes.title')}
        description={t('processes.description')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Procesos+de+Producción"
      />

      {/* Process Timeline */}
      <ProcessTimeline steps={processSteps} lang={lang} />

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Tecnología Avanzada
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Clasificación Óptica
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestras máquinas de clasificación óptica de última generación
                  garantizan la selección precisa de cada pistachín, eliminando
                  defectos imperceptibles al ojo humano.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Control de Calidad Multinivel
                </h3>
                <p className="text-gray-700 mb-4">
                  Múltiples puntos de control durante el proceso permiten detectar
                  y corregir desviaciones inmediatamente, garantizando consistencia
                  en cada lote.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sistema de Trazabilidad
                </h3>
                <p className="text-gray-700 mb-4">
                  Cada unidad es trazable desde el árbol hasta el distribuidor final,
                  proporcionando transparencia total en la cadena de suministro.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Automatización Sostenible
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestras instalaciones utilizan energía renovable y sistemas
                  inteligentes para minimizar el impacto ambiental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
