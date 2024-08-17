'use client';

import React from 'react';
import Image from 'next/image';

// Témoignages statiques (3 seulement)
const testimonials = [
  {
    id: '1',
    name: 'Alice Martin',
    message: 'Un thé délicieux et un service client exceptionnel !',
    avatarUrl: '/avatar1.webp',
  },
  {
    id: '2',
    name: 'Jean Dupont',
    message: "Le meilleur thé que j'ai goûté depuis longtemps.",
    avatarUrl: '/avatar2.webp',
  },
  {
    id: '3',
    name: 'Marie Dubois',
    message: 'Je recommande vivement Thé Tip Top pour tous les amateurs de thé.',
    avatarUrl: '/avatar1.webp',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="relative w-full mt-8 mb-16 py-8 bg-gray-50 lg:overflow-hidden overflow-x-auto no-scrollbar">
      <div className="flex space-x-8 lg:space-x-12 justify-center px-4 lg:px-16 animate-auto-scroll lg:animate-none">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-80 bg-white shadow-lg border border-gray-200 rounded-lg p-4 flex-shrink-0 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center">
              <Image
                src={testimonial.avatarUrl}
                width={80}
                height={80}
                alt={testimonial.name}
                className="rounded-full"
              />
              <p className="text-lg mt-4 font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-600 mt-2 text-center italic">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
