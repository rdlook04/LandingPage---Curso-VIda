
import React, { useState } from 'react';
import { ChevronDownIcon } from './IconComponents';
import type { FAQ } from '../types';

type FAQItemProps = FAQ;

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h4 className="text-lg font-semibold text-gray-800">{question}</h4>
        <ChevronDownIcon
          className={`w-6 h-6 text-emerald-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
