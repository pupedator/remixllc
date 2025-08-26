import React from 'react';
import type { Review } from '../types';
import StarIcon from './icons/StarIcon';
import { useTranslation } from '../i18n';

const reviewsData: Review[] = [
  { id: 1, author: 'Jessica M.', rating: 5, text: "These are hands down the most comfortable leggings I've ever owned. The fabric is so soft and they don't slide down during my workouts!" },
  { id: 2, author: 'Sarah L.', rating: 5, text: "I'm obsessed! The quality is amazing for the price. I've already bought a second pair in a different color. Highly recommend." },
  { id: 3, author: 'Emily R.', rating: 5, text: "Finally, activewear that is both functional and stylish. I get so many compliments at the gym. The fit is incredibly flattering." },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
    </div>
);


const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
      <Rating rating={review.rating} />
      <p className="text-slate-600 my-4 flex-grow">"{review.text}"</p>
      <p className="font-bold text-slate-800">- {review.author}</p>
  </div>
);


const Reviews: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('reviews.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
