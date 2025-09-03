
import React, { useState } from 'react';

interface AccordionProps {
  question: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded-md"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-brand-blue">{question}</h3>
        <svg
          className={`w-6 h-6 text-brand-teal flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="pb-5 px-2 text-brand-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
