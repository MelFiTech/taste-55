'use client'

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you sell organic and specialty items?',
    answer: 'Absolutely! We offer a wide selection of organic, gluten-free, vegan, and specialty products. Check our dedicated sections in-store or online.',
  },
  {
    question: 'How do I know if an item is in stock?',
    answer: 'You can check the availability of items on our website or app, or contact our customer service for assistance.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer: 'Yes, we have a return and exchange policy. Please refer to our website for more details.',
  },
  {
    question: 'Do you offer online shopping and delivery?',
    answer: 'Yes, we offer online shopping with delivery options available for your convenience.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[120px] bg-red-600 text-white">
      <div className="max-w-[1240px] mx-auto flex items-start">
        <div className="w-1/2 text-left pr-12">
          <h2 className="text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-lg">
            Got questions? Check out our FAQs for answers on groceries availability, our suppliers, and more!
          </p>
        </div>
        <div className="w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <div
                className="flex justify-between cursor-pointer text-black"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm text-black">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}