import React from 'react';
import type { Product } from '../types';
import { useTranslation } from '../i18n';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="group relative">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.imageUrl}
          alt={t(product.nameKey)}
          className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {t(product.nameKey)}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
       <button className="mt-2 w-full bg-brand-blue-100 text-brand-blue-800 font-semibold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {t('product.add_to_bag')}
      </button>
    </div>
  );
};

export default ProductCard;
