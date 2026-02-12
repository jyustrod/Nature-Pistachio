import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function SustainabilityPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      {/* Hero */}
      <Hero
        lang={lang}
        title={t('sustainability.title')}
        description={t('sustainability.description')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Sostenibilidad"
      />

      {/* Sustainability Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card
              title={t('sustainability.waterManagement')}
              description="Riego eficiente y gestión responsable del agua en cada parcela"
              image="https://via.placeholder.com/400x300?text=Agua"
            />
            <Card
              title={t('sustainability.renewableEnergy')}
              description="Paneles solares y energía renovable en nuestras instalaciones"
              image="https://via.placeholder.com/400x300?text=Energía"
            />
            <Card
              title={t('sustainability.biodiversity')}
              description="Protección de ecosistemas y fomento de la biodiversidad"
              image="https://via.placeholder.com/400x300?text=Biodiversidad"
            />
            <Card
              title={t('sustainability.regenerative')}
              description="Prácticas agrícolas regenerativas y mejora del suelo"
              image="https://via.placeholder.com/400x300?text=Regenerativo"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nuestro Compromiso Ambiental
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reducción de Emisiones
              </h3>
              <p className="text-gray-700">
                Nuestras instalaciones han reducido las emisiones de carbono en un 45%
                mediante el uso de energías renovables y optimización de procesos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Gestión Integral del Agua
              </h3>
              <p className="text-gray-700">
                Invertimos en sistemas de riego de precisión que reducen el consumo de
                agua hasta un 30% sin comprometer la calidad del producto. El agua se
                trata y reutiliza responsablemente.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Biodiversidad y Ecosistemas
              </h3>
              <p className="text-gray-700">
                Mantenemos áreas de vegetación natural en nuestras parcelas, fomentando
                la polinización natural y protegiendo especies locales.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Economía Circular
              </h3>
              <p className="text-gray-700">
                Los subproductos del procesado se transforman en otros productos de valor,
                minimizando el desperdicio y maximizando la eficiencia de recursos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
