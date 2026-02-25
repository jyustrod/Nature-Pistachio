'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/lib/translations';
import { navigationLinks } from '@/data/mockup';

interface HeaderProps {
  lang: 'es' | 'en';
}

export function Header({ lang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const pathWithoutLang = pathname.replace(/^\/(es|en)/, '') || '';

  const isHome = pathWithoutLang === '' || pathWithoutLang === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolid = scrolled || mobileOpen;
  const textOnHero = isHome && !showSolid;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 group">
            <div className={`flex items-center justify-center h-10 w-10 rounded-full transition-all group-hover:scale-105 ${
              textOnHero ? 'bg-primary-foreground/10 border border-primary-foreground/20' : 'bg-primary/10 border border-primary/20'
            }`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`transition-colors duration-300 ${textOnHero ? 'text-secondary' : 'text-primary'}`}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-3.5 3.5L6 13.5 12 7.5l6 6-1.5 1.5L13 11.5v5h-2z" fill="currentColor" opacity="0.8"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className={`block font-serif text-lg font-bold leading-tight tracking-tight transition-colors duration-300 ${
                textOnHero ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                Nature Pistachio
              </span>
              <span className={`block text-[10px] font-sans tracking-widest uppercase transition-colors duration-300 ${
                textOnHero ? 'text-primary-foreground/60' : 'text-muted-foreground'
              }`}>
                S. Coop. de CLM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => {
              const isActive = pathname === `/${lang}${link.href}`;
              return (
                <Link
                  key={link.id}
                  href={`/${lang}${link.href}`}
                  className={`px-3 py-2 rounded-lg text-[13px] font-sans font-medium transition-colors duration-300 ${
                    textOnHero
                      ? isActive
                        ? 'text-primary-foreground bg-primary-foreground/10'
                        : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10'
                      : isActive
                        ? 'text-foreground bg-accent'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                  title={link.description}
                >
                  {getTranslation(lang, link.label)}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className={`flex gap-0.5 rounded-full p-1 transition-colors duration-300 ${
              textOnHero ? 'bg-primary-foreground/10 backdrop-blur-sm' : 'bg-accent'
            }`}>
              <Link
                href={`/es${pathWithoutLang}`}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-bold transition-all ${
                  lang === 'es'
                    ? textOnHero
                      ? 'bg-primary-foreground text-foreground shadow-sm'
                      : 'bg-primary text-primary-foreground shadow-sm'
                    : textOnHero
                      ? 'text-primary-foreground/70 hover:text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </Link>
              <Link
                href={`/en${pathWithoutLang}`}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-bold transition-all ${
                  lang === 'en'
                    ? textOnHero
                      ? 'bg-primary-foreground text-foreground shadow-sm'
                      : 'bg-primary text-primary-foreground shadow-sm'
                    : textOnHero
                      ? 'text-primary-foreground/70 hover:text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                textOnHero
                  ? 'text-primary-foreground hover:bg-primary-foreground/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col gap-1 pt-4 border-t border-border">
              {navigationLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`/${lang}${link.href}`}
                  className="px-4 py-3 rounded-xl text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {getTranslation(lang, link.label)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
