'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getTranslation } from '@/lib/translations';
import { navigationLinks } from '@/data/mockup';

interface HeaderProps {
  lang: 'es' | 'en';
}

export function Header({ lang }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 group">
            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <path d="M12 2C8 2 4 6 4 10c0 3 2 6 5 8l3 4 3-4c3-2 5-5 5-8 0-4-4-8-8-8z" fill="currentColor" opacity="0.3"/>
                <path d="M12 6c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" fill="currentColor"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="block font-sans text-xl font-bold text-foreground tracking-tight">
                Nature Pistachio
              </span>
              <span className="block text-xs text-muted-foreground font-body tracking-widest uppercase">
                Cooperativa de Excelencia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${lang}${link.href}`}
                className="px-3 py-2 rounded-md text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                title={link.description}
              >
                {getTranslation(lang, link.label)}
              </Link>
            ))}
          </div>

          {/* Right Side: Language + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex gap-1 bg-accent rounded-full p-1">
              <Link
                href={`/es`}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-bold transition-all ${
                  lang === 'es'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </Link>
              <Link
                href={`/en`}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
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
          <div className="lg:hidden pb-6 animate-slide-down">
            <div className="flex flex-col gap-1 pt-4 border-t border-border">
              {navigationLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`/${lang}${link.href}`}
                  className="px-4 py-3 rounded-lg text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
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
