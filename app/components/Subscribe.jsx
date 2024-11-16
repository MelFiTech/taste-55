import React from 'react';

export default function Subscribe() {
  return (
    <section className="h-[450px] bg-green-900 text-white text-center relative flex flex-col justify-between">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-lg font-bold mb-2 opacity-40">Taste55</span>
        <img src="/logo.png" alt="Taste 55 Logo" className="w-[90px] h-[90px] opacity-50" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-lg font-bold mb-2 opacity-40">Taste55</span>
        <img src="/logo.png" alt="Taste 55 Logo" className="w-[90px] h-[90px] opacity-50" />
      </div>
      
      {/* Main content centered vertically */}
      <div className="flex-1 flex items-center">
        <div className="max-w-[1240px] mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="mb-8">Signup to Our newsletter to receive the latest updates and grocery news.</p>
          <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer at bottom */}
      <footer className="text-sm py-6">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center">
          <div>© 2024 Taste55. All rights reserved.</div>
          <div>
            <a href="/privacy-policy" className="text-green-300 hover:text-green-200">Privacy Policy</a> | 
            <a href="/terms-of-service" className="text-green-300 hover:text-green-200">Terms of Service</a> | 
            <a href="/cookie-policy" className="text-green-300 hover:text-green-200">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </section>
  );
}