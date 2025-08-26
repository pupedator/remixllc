import React from 'react';
import { useTranslation } from '../i18n';

const BrandPromise: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-brand-blue-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://picsum.photos/600/700?image=103"
              alt="Woman wearing comfortable activewear"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-6">
              {t('promise.title')}
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {t('promise.body')}
            </p>
            <a
              href="#"
              className="inline-block bg-brand-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-brand-blue-700 transition-colors duration-300"
            >
              {t('promise.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;
