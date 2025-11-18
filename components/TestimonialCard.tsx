
import React from 'react';
import type { Testimonial } from '../types';

type TestimonialCardProps = Testimonial;

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, imageUrl }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-lg h-full flex flex-col">
      <p className="text-gray-600 mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-full mr-4" src={imageUrl} alt={name} />
        <div>
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
