import React from 'react';
import SearchIcon from './icons/SearchIcon';
import UserIcon from './icons/UserIcon';
import ShoppingBagIcon from './icons/ShoppingBagIcon';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../i18n';
// FIX: Import Translations type for strong typing of translation keys.
import type { Translations } from '../i18n';

const Header: React.FC = () => {
  const { t } = useTranslation();
  // FIX: Strongly type navLinks keys to ensure they are valid translation keys.
  const navLinks: { key: keyof Translations; href: string }[] = [
    { key: 'nav.shop_all', href: '#' },
    { key: 'nav.best_sellers', href: '#' },
    { key: 'nav.new_arrivals', href: '#' },
    { key: 'nav.about', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-brand-blue-700">Remix LLC</a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue-600 transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="text-slate-500 hover:text-brand-blue-600">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button className="text-slate-500 hover:text-brand-blue-600">
              <UserIcon className="h-5 w-5" />
            </button>
            <button className="relative text-slate-500 hover:text-brand-blue-600">
              <ShoppingBagIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-blue-600 text-xs font-bold text-white">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
