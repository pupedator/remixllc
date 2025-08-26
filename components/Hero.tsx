import React from 'react';
import { useTranslation } from '../i18n';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[60vh] min-h-[400px] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1062')" }}>
      <div className="absolute inset-0 bg-slate-900/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          {t('hero.title')}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8 text-slate-100">
          {t('hero.subtitle')}
        </p>
        <a
          href="#"
          className="bg-brand-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-brand-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
