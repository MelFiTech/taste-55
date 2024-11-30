'use client'

import React, { useState } from 'react';

const faqs = [
  {
    question: 'When will Taste55 open launch?',
    answer: 'Our plan is to launch the flagship neighborhood grocery store in Fall 2026.',
  },
  {
    question: 'Where can you locate a Taste 55 store?',
    answer: 'Our grocery hubs will be in metropolitan cities such as Atlanta, Dallas and Houston.',
  },
  {
    question: 'Who is the CEO and Founder of Taste 55',
    answer: 'Princesse Likayi is the Chief Executive Officer and Founder of Taste 55.She holds an undergraduate degree from Portland State University in International Relations and a Master of Business Administration from EDHEC, a highly ranked business school in Paris, France. Ms. Likayi\'s work experience span continents. She was the Interim Chief Operating Officer at Talent2 Africa, a bespoke recruitment agency based in France and Senegal, she led the product development of the first iteration of the platform. After Talent2Africa, she joined Green Africa Airways, an aviation start-up company as the founding Director, People and Culture, during her tenure she scaled the workforce from 3-250 employees and created a strong employer brand attracting local and international talents to join a start-up company in Lagos, Nigeria.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-[120px] bg-[#860336] text-white">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-start">
        <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-base md:text-lg">
            Got questions? Check out our FAQs for answers on groceries availability, Our suppliers, and more!
          </p>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <div
                className="flex justify-between items-center cursor-pointer text-black"
                onClick={() => toggleFaq(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleFaq(index);
                  }
                }}
              >
                <h3 className="text-base md:text-lg font-semibold pr-4">{faq.question}</h3>
                <span className="text-xl flex-shrink-0">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm md:text-base text-black">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}