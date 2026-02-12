import { Hero } from '@/components/common';
import { ContactForm } from '@/components/sections';
import { getTranslation } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: 'es' | 'en' }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const t = (key: string) => getTranslation(lang, key);

  return (
    <>
      {/* Hero */}
      <Hero
        lang={lang}
        title={t('contact.title')}
        description={t('contact.description')}
        backgroundImage="https://via.placeholder.com/1920x600?text=Contacto"
      />

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Info Cards */}
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📍 Dirección
              </h3>
              <p className="text-gray-700 text-sm">
                Polígono Industrial Norte<br />
                Albacete, España
              </p>
            </div>

            <div className="bg-earth-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📞 Contacto
              </h3>
              <p className="text-gray-700 text-sm">
                +34 123 456 789<br />
                info@naturepistachio.es
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🕐 Horario
              </h3>
              <p className="text-gray-700 text-sm">
                Lunes a Viernes<br />
                09:00 - 18:00 CET
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Formulario de Contacto
            </h2>
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
