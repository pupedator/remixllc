import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandPromise from '../components/BrandPromise';
import Reviews from '../components/Reviews';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';
import type { Page } from '../App';

interface HomePageProps {
  setPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryShowcase />
        <FeaturedProducts />
        <BrandPromise />
        <Reviews />
        <InstagramFeed />
      </main>
      <Footer setPage={setPage} />
    </>
  );
};

export default HomePage;
