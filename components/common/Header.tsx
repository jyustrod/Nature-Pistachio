import Link from 'next/link';
import { getTranslation } from '@/lib/translations';
import { navigationLinks } from '@/data/mockup';

interface HeaderProps {
  lang: 'es' | 'en';
}

export function Header({ lang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-to-br from-primary-600 to-earth-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NP</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-gray-900">
              Nature Pistachio
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${lang}${link.href}`}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                title={link.description}
              >
                {getTranslation(lang, link.label)}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Link
                href={`/es${typeof window !== 'undefined' ? window.location.pathname.replace(/^\/[a-z]{2}/, '') : '/'}`}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  lang === 'es'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ES
              </Link>
              <Link
                href={`/en${typeof window !== 'undefined' ? window.location.pathname.replace(/^\/[a-z]{2}/, '') : '/'}`}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  lang === 'en'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
