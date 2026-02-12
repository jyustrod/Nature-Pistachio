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
      <Hero
        lang={lang}
        title={t('contact.title')}
        description={t('contact.description')}
        backgroundColor="primary"
        compact
      />

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-sans font-bold text-foreground mb-3">
                {lang === 'es' ? 'Direccion' : 'Address'}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Poligono Industrial Norte<br />
                Albacete, Espana
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-secondary">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-sans font-bold text-foreground mb-3">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                +34 123 456 789<br />
                info@naturepistachio.es
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-sans font-bold text-foreground mb-3">
                {lang === 'es' ? 'Horario' : 'Hours'}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {lang === 'es' ? 'Lunes a Viernes' : 'Monday to Friday'}<br />
                09:00 - 18:00 CET
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
              <h2 className="text-2xl font-sans font-bold text-foreground mb-3">
                {lang === 'es' ? 'Formulario de Contacto' : 'Contact Form'}
              </h2>
              <p className="text-muted-foreground font-body text-sm">
                {lang === 'es'
                  ? 'Rellena el formulario y nos pondremos en contacto contigo a la mayor brevedad.'
                  : 'Fill in the form and we will get back to you as soon as possible.'}
              </p>
            </div>
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
