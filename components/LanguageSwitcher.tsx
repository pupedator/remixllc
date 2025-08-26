import React, { useState, useRef, useEffect } from 'react';
import GlobeIcon from './icons/GlobeIcon';
import { useTranslation, languageNames } from '../i18n';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, languages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: typeof languages[number]) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-500 hover:text-brand-blue-600 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
        aria-label="Change language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <GlobeIcon className="h-5 w-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`${
                  language === lang ? 'bg-brand-blue-50 text-brand-blue-700' : 'text-slate-700'
                } block w-full text-left px-4 py-2 text-sm hover:bg-slate-100`}
                role="menuitem"
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
