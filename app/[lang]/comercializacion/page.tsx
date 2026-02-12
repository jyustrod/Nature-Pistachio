import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function CommercializationPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      {/* Hero */}
      <Hero
        lang={lang}
        title={t('commercialization.title')}
        description={t('commercialization.description')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Comercialización"
      />

      {/* Distribution Network */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nuestra Red de Distribución
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card
              title="Mercados Europeos"
              description="Presencia consolidada en más de 15 países europeos con distribuidores especializados"
              image="https://via.placeholder.com/400x300?text=Europa"
              icon="🌍"
            />
            <Card
              title="Mercados Internacionales"
              description="Exportamos a Asia, América y Oriente Medio con logística especializada"
              image="https://via.placeholder.com/400x300?text=Global"
              icon="✈️"
            />
            <Card
              title="Logística Optimizada"
              description="Sistemas de transporte refrigerado y almacenaje en óptimas condiciones"
              image="https://via.placeholder.com/400x300?text=Logística"
              icon="📦"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Servicios para Distribuidores
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div className="border-l-4 border-primary-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Suministro Flexible
              </h3>
              <p className="text-gray-700">
                Adaptamos nuestros volúmenes de entrega a tus necesidades, desde pequeños
                lotes hasta cargas completas de contenedor.
              </p>
            </div>

            <div className="border-l-4 border-earth-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Documentación Completa
              </h3>
              <p className="text-gray-700">
                Certificados de origen, análisis de laboratorio, certificaciones de
                trazabilidad y documentos aduanales listos.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Soporte Técnico
              </h3>
              <p className="text-gray-700">
                Asesoramiento en almacenaje, manipulación y transporte para garantizar
                la máxima calidad en destino.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Precios Competitivos
              </h3>
              <p className="text-gray-700">
                Márgenes atractivos para distribuidores con volúmenes garantizados y
                condiciones de pago flexibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-earth-600">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Conviértete en Distribuidor Nature Pistachio
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Únete a nuestra red de distribuidores premium en toda Europa y el mundo.
          </p>
          <a
            href={`/${lang}/contacto`}
            className="px-8 py-4 bg-white text-earth-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Solicitar Información Comercial
          </a>
        </div>
      </section>
    </>
  );
}
