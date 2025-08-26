import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';
import { useTranslation } from '../i18n';

const productsData: Product[] = [
  { id: 1, nameKey: 'product.everyday_legging', price: '$78.00', imageUrl: 'https://picsum.photos/400/400?image=838' },
  { id: 2, nameKey: 'product.performance_tee', price: '$42.00', imageUrl: 'https://picsum.photos/400/400?image=660' },
  { id: 3, nameKey: 'product.zip_hoodie', price: '$95.00', imageUrl: 'https://picsum.photos/400/400?image=1080' },
  { id: 4, nameKey: 'product.support_bra', price: '$55.00', imageUrl: 'https://picsum.photos/400/400?image=577' },
];

const FeaturedProducts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('featured.title')}</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
