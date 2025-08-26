// FIX: Import Translations type for strong typing of translation keys.
import type { Translations } from './i18n';

export interface Product {
  id: number;
  // FIX: Use keyof Translations for nameKey to ensure valid translation keys are used.
  nameKey: keyof Translations;
  price: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}
