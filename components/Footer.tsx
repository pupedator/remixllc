import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';
import { useTranslation } from '../i18n';
import type { Page } from '../App';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const { t } = useTranslation();

  const handleAdminClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setPage('admin');
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-semibold tracking-wider uppercase mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-slate-400 mb-4">{t('footer.newsletter.body')}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full rounded-l-md border-0 py-2 px-3 text-slate-900 focus:ring-2 focus:ring-inset focus:ring-brand-blue-500"
              />
              <button
                type="submit"
                className="bg-brand-blue-600 text-white font-semibold px-4 rounded-r-md hover:bg-brand-blue-700"
              >
                {t('footer.newsletter.cta')}
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider uppercase mb-4">{t('footer.links.shop')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.new_arrivals')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.best_sellers')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.leggings')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.tops')}</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider uppercase mb-4">{t('footer.links.support')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.help_center')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.shipping')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.returns')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.contact_us')}</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider uppercase mb-4">{t('footer.links.company')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.about_us')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.careers')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">{t('footer.link.press')}</a></li>
              <li><a href="#" onClick={handleAdminClick} className="text-slate-400 hover:text-white cursor-pointer">{t('footer.admin_panel')}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white"><FacebookIcon /></a>
            <a href="#" className="text-slate-400 hover:text-white"><InstagramIcon /></a>
            <a href="#" className="text-slate-400 hover:text-white"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
