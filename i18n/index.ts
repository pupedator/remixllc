import { useState, useEffect } from 'react';

// Define translations
const translations = {
  en: {
    // Header
    'nav.shop_all': 'Shop All',
    'nav.best_sellers': 'Best Sellers',
    'nav.new_arrivals': 'New Arrivals',
    'nav.about': 'About',
    // Hero
    'hero.title': 'Effortless Style, Perfect Fit',
    'hero.subtitle': 'Discover our new collection designed for comfort and confidence.',
    'hero.cta': 'Shop New Arrivals',
    // Categories
    'categories.title': 'Shop by Category',
    'category.leggings': 'Leggings',
    'category.tops': 'Tops',
    'category.outerwear': 'Outerwear',
    // Featured
    'featured.title': 'Trending Now',
    'product.add_to_bag': 'Add to Bag',
    // Product Names (example)
    'product.everyday_legging': 'Everyday Comfort Legging',
    'product.performance_tee': 'Flowy Performance Tee',
    'product.zip_hoodie': 'Go-To Zip Hoodie',
    'product.support_bra': 'Sculpt & Support Bra',
    // Brand Promise
    'promise.title': 'The Perfect Fit For Every Body',
    'promise.body': "We believe that what you wear should make you feel unstoppable. That's why we've obsessed over every detail, from our buttery-soft fabrics to our inclusive sizing, to create activewear that moves with you and for you.",
    'promise.cta': 'Learn Our Story',
    // Reviews
    'reviews.title': 'Loved by Thousands',
    // Instagram
    'instagram.title': 'Shop Our Feed',
    'instagram.follow': 'Follow us',
    // Footer
    'footer.newsletter.title': 'Stay in the loop',
    'footer.newsletter.body': 'Get 15% off your first order when you sign up for our newsletter.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.cta': 'Sign Up',
    'footer.links.shop': 'Shop',
    'footer.links.support': 'Support',
    'footer.links.company': 'Company',
    'footer.link.new_arrivals': 'New Arrivals',
    'footer.link.best_sellers': 'Best Sellers',
    'footer.link.leggings': 'Leggings',
    'footer.link.tops': 'Tops',
    'footer.link.help_center': 'Help Center',
    'footer.link.shipping': 'Shipping',
    'footer.link.returns': 'Returns',
    'footer.link.contact_us': 'Contact Us',
    'footer.link.about_us': 'About Us',
    'footer.link.careers': 'Careers',
    'footer.link.press': 'Press',
    'footer.copyright': '© {year} Remix LLC. All Rights Reserved.',
    'footer.admin_panel': 'Admin Panel',
  },
  az: {
    // Header
    'nav.shop_all': 'Hamısını Al',
    'nav.best_sellers': 'Ən Çox Satılanlar',
    'nav.new_arrivals': 'Yeni Gələnlər',
    'nav.about': 'Haqqımızda',
    // Hero
    'hero.title': 'Zəhmətsiz Stil, Mükəmməl Uyğunluq',
    'hero.subtitle': 'Rahatlıq və inam üçün hazırlanmış yeni kolleksiyamızı kəşf edin.',
    'hero.cta': 'Yeni Gələnləri Al',
    // Categories
    'categories.title': 'Kateqoriyaya Görə Alış-veriş',
    'category.leggings': 'Legginslər',
    'category.tops': 'Üst Geyimlər',
    'category.outerwear': 'Xarici Geyim',
    // Featured
    'featured.title': 'İndi Trenddədir',
    'product.add_to_bag': 'Səbətə Əlavə Et',
    // Product Names
    'product.everyday_legging': 'Gündəlik Rahat Leggins',
    'product.performance_tee': 'Axıcı Performans Köynək',
    'product.zip_hoodie': 'Kapüşonlu Jaket',
    'product.support_bra': 'Dəstəkləyici Büstqalter',
    // Brand Promise
    'promise.title': 'Hər Bədənə Mükəmməl Uyğunluq',
    'promise.body': "Biz inanırıq ki, geyindiyiniz şey sizi dayandırılmaz hiss etdirməlidir. Buna görə də, sizinlə və sizin üçün hərəkət edən aktiv geyimlər yaratmaq üçün yumşaq parçalarımızdan tutmuş inklüziv ölçülərimizə qədər hər detala diqqət yetirmişik.",
    'promise.cta': 'Hekayəmizi Öyrən',
    // Reviews
    'reviews.title': 'Minlərlə İnsan Tərəfindən Sevildi',
    // Instagram
    'instagram.title': 'Lentimizi Alış-veriş Edin',
    'instagram.follow': 'Bizi izləyin',
    // Footer
    'footer.newsletter.title': 'Əlaqədə qalın',
    'footer.newsletter.body': 'Bülletenimizə abunə olduğunuz zaman ilk sifarişinizə 15% endirim əldə edin.',
    'footer.newsletter.placeholder': 'E-poçtunuzu daxil edin',
    'footer.newsletter.cta': 'Abunə ol',
    'footer.links.shop': 'Mağaza',
    'footer.links.support': 'Dəstək',
    'footer.links.company': 'Şirkət',
    'footer.link.new_arrivals': 'Yeni Gələnlər',
    'footer.link.best_sellers': 'Ən Çox Satılanlar',
    'footer.link.leggings': 'Legginslər',
    'footer.link.tops': 'Üst Geyimlər',
    'footer.link.help_center': 'Yardım Mərkəzi',
    'footer.link.shipping': 'Çatdırılma',
    'footer.link.returns': 'Qaytarılma',
    'footer.link.contact_us': 'Bizimlə Əlaqə',
    'footer.link.about_us': 'Haqqımızda',
    'footer.link.careers': 'Karyera',
    'footer.link.press': 'Mətbuat',
    'footer.copyright': '© {year} Remix LLC. Bütün hüquqlar qorunur.',
    'footer.admin_panel': 'İdarəetmə Paneli',
  },
  ru: {
    // Header
    'nav.shop_all': 'В магазин',
    'nav.best_sellers': 'Бестселлеры',
    'nav.new_arrivals': 'Новинки',
    'nav.about': 'О нас',
    // Hero
    'hero.title': 'Стиль без усилий, идеальная посадка',
    'hero.subtitle': 'Откройте для себя нашу новую коллекцию, созданную для комфорта и уверенности.',
    'hero.cta': 'К новинкам',
    // Categories
    'categories.title': 'По категориям',
    'category.leggings': 'Леггинсы',
    'category.tops': 'Топы',
    'category.outerwear': 'Верхняя одежда',
    // Featured
    'featured.title': 'В тренде',
    'product.add_to_bag': 'В корзину',
    // Product Names
    'product.everyday_legging': 'Повседневные удобные леггинсы',
    'product.performance_tee': 'Струящаяся футболка',
    'product.zip_hoodie': 'Толстовка на молнии',
    'product.support_bra': 'Поддерживающий бюстгальтер',
    // Brand Promise
    'promise.title': 'Идеальная посадка для каждой фигуры',
    'promise.body': 'Мы верим, что то, что вы носите, должно заставлять вас чувствовать себя неудержимыми. Вот почему мы уделили внимание каждой детали, от наших маслянисто-мягких тканей до наших инклюзивных размеров, чтобы создать спортивную одежду, которая движется с вами и для вас.',
    'promise.cta': 'Наша история',
    // Reviews
    'reviews.title': 'Нас любят тысячи',
    // Instagram
    'instagram.title': 'Покупайте в нашей ленте',
    'instagram.follow': 'Подписывайтесь на нас',
    // Footer
    'footer.newsletter.title': 'Будьте в курсе',
    'footer.newsletter.body': 'Получите скидку 15% на свой первый заказ, подписавшись на нашу рассылку.',
    'footer.newsletter.placeholder': 'Введите ваш email',
    'footer.newsletter.cta': 'Подписаться',
    'footer.links.shop': 'Магазин',
    'footer.links.support': 'Поддержка',
    'footer.links.company': 'Компания',
    'footer.link.new_arrivals': 'Новинки',
    'footer.link.best_sellers': 'Бестселлеры',
    'footer.link.leggings': 'Леггинсы',
    'footer.link.tops': 'Топы',
    'footer.link.help_center': 'Центр помощи',
    'footer.link.shipping': 'Доставка',
    'footer.link.returns': 'Возвраты',
    'footer.link.contact_us': 'Связаться с нами',
    'footer.link.about_us': 'О нас',
    'footer.link.careers': 'Карьера',
    'footer.link.press': 'Пресса',
    'footer.copyright': '© {year} Remix LLC. Все права защищены.',
    'footer.admin_panel': 'Панель администратора',
  },
};

export type Language = 'en' | 'az' | 'ru';
// FIX: Export Translations type to be used for strict typing of translation keys.
export type Translations = typeof translations.en;

export const languageNames: { [key in Language]: string } = {
  en: 'English',
  az: 'Azərbaycanca',
  ru: 'Русский',
};

let currentLanguage: Language = 'en';
let listeners: Array<(lang: Language) => void> = [];

export const setGlobalLanguage = (lang: Language) => {
  currentLanguage = lang;
  listeners.forEach(listener => listener(lang));
};

export const useTranslation = () => {
  const [language, setLanguageState] = useState<Language>(currentLanguage);

  useEffect(() => {
    const listener = (lang: Language) => {
      setLanguageState(lang);
    };
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  const t = (key: keyof Translations, replacements?: { [key: string]: string | number }) => {
    let translation = translations[language]?.[key] || translations.en[key] || key;
    if (replacements) {
      Object.keys(replacements).forEach(rKey => {
        translation = translation.replace(`{${rKey}}`, String(replacements[rKey]));
      });
    }
    return translation;
  };

  return { language, setLanguage: setGlobalLanguage, t, languages: Object.keys(translations) as Language[] };
};
