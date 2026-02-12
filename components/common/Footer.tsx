import Link from 'next/link';
import { getTranslation } from '@/lib/translations';

interface FooterProps {
  lang: 'es' | 'en';
}

export function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-earth-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NP</span>
              </div>
              <h3 className="font-bold text-lg">Nature Pistachio</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Cooperativa de excelencia en pistacho sostenible para distribuidores globales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(lang, 'footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {getTranslation(lang, 'common.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/nosotros`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {getTranslation(lang, 'common.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contacto`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {getTranslation(lang, 'common.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(lang, 'footer.followUs')}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <span className="text-2xl">in</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <span className="text-2xl">𝕏</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <span className="text-2xl">f</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(lang, 'footer.legalInfo')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {getTranslation(lang, 'footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {getTranslation(lang, 'footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            {getTranslation(lang, 'footer.copyright').replace(
              '2026',
              currentYear.toString()
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
