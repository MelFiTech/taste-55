'use client'

import Button from './Button';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-2 px-3 md:py-4 md:px-8 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={isScrolled ? "/logob.png" : "/logo.png"} 
              alt="Taste 55 Logo" 
              className="w-[60px] h-[60px] md:w-[60px] md:h-[60px] object-contain" 
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-green-900 hover:bg-green-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <button className={`hidden md:block border font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'border-green-900 text-green-900 hover:bg-green-900 hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}>
            Sign up to Newsletter
          </button>
        </div>

        <div className={`w-full h-px my-4 hidden md:block transition-colors duration-300 ${
          isScrolled ? 'bg-green-900/20' : 'bg-white/20'
        }`}></div>

        {/* Mobile Navigation with slide animation */}
        <nav className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative top-[60px] md:top-0 left-0 w-full h-[calc(100vh-60px)] md:h-auto bg-green-900/95 md:bg-transparent transition-all duration-300 ease-in-out md:block`}>
          <ul className="flex flex-col md:flex-row items-center md:justify-center space-y-6 md:space-y-0 md:space-x-16 pt-8 md:pt-0">
            <li><a href="#" className={`text-base md:text-sm font-medium transition-all duration-300 hover:opacity-80 ${isScrolled ? 'md:text-green-900' : 'text-white'}`}>Home</a></li>
            <li><a href="#" className={`text-base md:text-sm font-medium transition-all duration-300 hover:opacity-80 ${isScrolled ? 'md:text-green-900' : 'text-white'}`}>Suppliers</a></li>
            <li>
              <div className="text-center relative py-4 md:py-0">
                <img 
                  src={isScrolled ? "/estb.png" : "/est.png"} 
                  alt="Taste 55 Established" 
                  className="w-28 md:w-32 mx-auto" 
                />
              </div>
            </li>
            <li><a href="#" className={`text-base md:text-sm font-medium transition-all duration-300 hover:opacity-80 ${isScrolled ? 'md:text-green-900' : 'text-white'}`}>About Us</a></li>
            <li><a href="#" className={`text-base md:text-sm font-medium transition-all duration-300 hover:opacity-80 ${isScrolled ? 'md:text-green-900' : 'text-white'}`}>Community</a></li>
          </ul>
          
          {/* Mobile Newsletter Button */}
          <div className="mt-8 px-6 md:hidden">
            <button className={`w-full border font-medium px-5 py-3 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'border-green-900 text-green-900 hover:bg-green-900 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}>
              Sign up to Newsletter
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}