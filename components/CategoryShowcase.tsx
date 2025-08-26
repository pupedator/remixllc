import React from 'react';
import { useTranslation } from '../i18n';
// FIX: Import Translations type for strong typing of translation keys.
import type { Translations } from '../i18n';

interface Category {
  id: number;
  // FIX: Use keyof Translations for nameKey to ensure valid translation keys are used.
  nameKey: keyof Translations;
  imageUrl: string;
}

const categoriesData: Category[] = [
  { id: 1, nameKey: 'category.leggings', imageUrl: 'https://picsum.photos/400/500?image=884' },
  { id: 2, nameKey: 'category.tops', imageUrl: 'https://picsum.photos/400/500?image=1027' },
  { id: 3, nameKey: 'category.outerwear', imageUrl: 'https://picsum.photos/400/500?image=1025' },
];

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
    const { t } = useTranslation();
    return (
        <a href="#" className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
            src={category.imageUrl}
            alt={t(category.nameKey)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold tracking-wider">{t(category.nameKey)}</h3>
            </div>
        </a>
    );
};


const CategoryShowcase: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('categories.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
