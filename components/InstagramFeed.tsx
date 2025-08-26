import React from 'react';
import { useTranslation } from '../i18n';

const images = [
  'https://picsum.photos/300/300?image=431',
  'https://picsum.photos/300/300?image=433',
  'https://picsum.photos/300/300?image=435',
  'https://picsum.photos/300/300?image=436',
  'https://picsum.photos/300/300?image=438',
  'https://picsum.photos/300/300?image=440',
];

const InstagramFeed: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">{t('instagram.title')}</h2>
        <p className="text-lg text-slate-600 mb-10">
            {t('instagram.follow')} <a href="#" className="text-brand-blue-600 font-semibold">@remixllc</a>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {images.map((src, index) => (
            <a href="#" key={index} className="group block overflow-hidden">
              <img
                src={src}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
