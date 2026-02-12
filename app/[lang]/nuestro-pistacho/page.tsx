import { Hero, Card } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function OurPistachioPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      {/* Hero */}
      <Hero
        lang={lang}
        title={t('pistachio.title')}
        description={t('pistachio.description')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Pistacho"
      />

      {/* Product Characteristics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('pistachio.characteristics')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card
              title={t('pistachio.quality')}
              description="Selección rigurosa de variedades y procesos garantizan pistachos de tamaño y calidad consistentes"
              image="https://via.placeholder.com/400x300?text=Calidad"
            />
            <Card
              title={t('pistachio.traceability')}
              description="Sistema de trazabilidad completo desde la parcela hasta el distribuidor final"
              image="https://via.placeholder.com/400x300?text=Trazabilidad"
            />
            <Card
              title={t('pistachio.ecology')}
              description="Cultivados sin pesticidas sintéticos, usando métodos sostenibles y regenerativos"
              image="https://via.placeholder.com/400x300?text=Ecología"
            />
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Especificaciones Técnicas
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Variedades</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Variedad Kerman</li>
                  <li>✓ Variedad Maplewood</li>
                  <li>✓ Variedad Chandler</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Presentaciones</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Granel</li>
                  <li>✓ Bolsas de 10-50 kg</li>
                  <li>✓ Embalajes personalizados</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Estándares de Calidad
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Contenido de humedad: 4-5%</li>
                <li>✓ Defectos máximos: &lt;2%</li>
                <li>✓ Tamaño: &gt;18mm</li>
                <li>✓ Certificación: GlobalG.A.P., Orgánica, ISO 9001</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Interesado en nuestro pistacho?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Contacta con nuestro equipo comercial para conocer disponibilidad y términos.
          </p>
          <a
            href={`/${lang}/contacto`}
            className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Solicitar Información
          </a>
        </div>
      </section>
    </>
  );
}
