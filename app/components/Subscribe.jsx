'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import NewsletterModal from './NewsletterModal';

export default function Subscribe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="h-[480px] bg-green-900 text-white text-center relative flex flex-col justify-between">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <Image 
            src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101121/taste55/icons/logo.png" 
            alt="Taste 55 Logo" 
            width={120} 
            height={120} 
            className="opacity-50 md:w-[200px] md:h-[200px] animate-[spin_20s_linear_infinite]" 
          />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
          <Image 
            src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101121/taste55/icons/logo.png" 
            alt="Taste 55 Logo" 
            width={120} 
            height={120} 
            className="opacity-50 md:w-[200px] md:h-[200px] animate-[spin_20s_linear_infinite]" 
          />
        </div>
        
        {/* Main content centered vertically */}
        <div className="flex-1 flex items-center">
          <div className="max-w-[1240px] mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="mb-8">Signup to Our newsletter to receive the latest updates and grocery news.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black border-2 border-green-500 font-bold py-2 px-6 rounded-full hover:bg-green-50 transition duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer at bottom */}
        <footer className="text-sm py-6">
          <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-center md:text-left">© 2024 Taste55. All rights reserved.</div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
              <a href="/privacy-policy" className="text-green-300 hover:text-green-200 px-2">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="/terms-of-service" className="text-green-300 hover:text-green-200 px-2">Terms of Service</a>
              <span className="hidden md:inline">|</span>
              <a href="/cookie-policy" className="text-green-300 hover:text-green-200 px-2">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </section>

      <NewsletterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}