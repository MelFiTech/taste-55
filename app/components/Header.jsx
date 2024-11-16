'use client'

import Button from './Button';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed w-full z-50 py-2 px-3 md:py-4 md:px-8 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src={isScrolled ? "/logob.png" : "/logo.png"} 
              alt="Taste 55 Logo"
              width={60}
              height={60}
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain" 
            />
          </div>

          {/* Mobile Est Image */}
          <div className="md:hidden">
            <Image 
              src={isScrolled ? "/estb.png" : "/est.png"} 
              alt="Taste 55 Established"
              width={128}
              height={32}
              className="w-24" 
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
        <nav className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative top-[60px] md:top-0 left-0 w-full h-[calc(100vh-60px)] md:h-auto bg-green-900/95 md:bg-transparent transition-all duration-300 ease-in-out md:block overflow-y-auto`}>
          <ul className="flex flex-col md:flex-row items-center md:justify-center space-y-8 md:space-y-0 md:space-x-16 pt-4 md:pt-0">
            <li><a href="#" className="text-lg md:text-sm font-medium transition-all duration-300 hover:opacity-80 text-white">Home</a></li>
            <li><a href="#" className="text-lg md:text-sm font-medium transition-all duration-300 hover:opacity-80 text-white">Suppliers</a></li>
            <li className="hidden md:block">
              <div className="text-center relative py-6 md:py-0">
                <Image 
                  src={isScrolled ? "/estb.png" : "/est.png"} 
                  alt="Taste 55 Established"
                  width={128}
                  height={32}
                  className="w-24 md:w-32 mx-auto" 
                />
              </div>
            </li>
            <li><a href="#" className="text-lg md:text-sm font-medium transition-all duration-300 hover:opacity-80 text-white">About Us</a></li>
            <li><a href="#" className="text-lg md:text-sm font-medium transition-all duration-300 hover:opacity-80 text-white">Community</a></li>
          </ul>
          
          {/* Mobile Newsletter Button */}
          <div className="mt-10 px-6 pb-8 md:hidden">
            <button className={`w-full border-2 font-medium px-5 py-3 rounded-full transition-all duration-300 ${
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