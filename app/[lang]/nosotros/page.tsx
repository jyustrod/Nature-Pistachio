import { Hero } from '@/components/common';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      {/* Hero */}
      <Hero
        lang={lang}
        title={t('about.subtitle')}
        description={t('about.description')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Sobre+Nosotros"
      />

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                {t('about.mission')}
              </h3>
              <p className="text-gray-700">{t('about.missionText')}</p>
            </div>

            {/* Vision */}
            <div className="bg-earth-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-earth-900 mb-4">
                {t('about.vision')}
              </h3>
              <p className="text-gray-700">{t('about.visionText')}</p>
            </div>

            {/* Values */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.values')}
              </h3>
              <p className="text-gray-700 text-sm">
                {t('about.valuesList')}
              </p>
            </div>
          </div>

          {/* Long Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Nature Pistachio es resultado de la unión de agricultores visionarios que
              vieron en el cultivo sostenible del pistacho una oportunidad para generar
              valor duradero. Con más de 20 años de experiencia, hemos consolidado
              un modelo de negocio que equilibra rentabilidad con responsabilidad ambiental.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-gray-700 mb-6">
              Cada paso en nuestro proceso productivo está diseñado para garantizar
              la máxima calidad. Desde la selección de variedades hasta el almacenaje
              final, aplicamos los más altos estándares internacionales.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-700 mb-6">
              Contamos con un equipo multidisciplinario de agrónomos, ingenieros
              y especialistas en comercialización que trabajan día a día para superar
              las expectativas de nuestros clientes distribuidores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
