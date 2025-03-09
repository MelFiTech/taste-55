'use client'

import Button from './Button';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NewsletterModal from './NewsletterModal'

const logoPath = {
  scrolled: "https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101119/taste55/icons/estb.png",
  default: "https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101117/taste55/icons/est.png"
}

export default function Header({ alwaysScrolled }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(alwaysScrolled || false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!alwaysScrolled) {
        if (currentScrollY === 0) {
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, alwaysScrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white md:bg-transparent' : ''}`}>
        {/* Top Section - Transparent initially, Green when scrolled */}
        <div className={`w-full transition-all duration-300 py-1 px-3 md:py-2 md:px-8 ${
          isScrolled ? 'bg-green-900' : 'bg-transparent'
        }`}>
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image 
                  src="https://res.cloudinary.com/dzbgzbccy/image/upload/v1733101121/taste55/icons/logo.png"
                  alt="Taste 55 Logo"
                  width={60}
                  height={60}
                  className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] object-contain cursor-pointer"
                  onClick={() => router.push('/')}
                />
              </div>

              {/* Mobile Est Image */}
              <div className="md:hidden">
                <Image 
                  src={logoPath.default}
                  alt="Taste 55 Established"
                  width={128}
                  height={32}
                  className="w-20"
                  priority 
                />
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-green-800/50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              <button 
                onClick={() => setIsNewsletterOpen(true)} 
                className="hidden md:block border border-white text-white font-medium px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-white hover:text-[#1E4620]"
              >
                Sign up to Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className={`w-full h-[1px] transition-all duration-300 ${
          isScrolled ? 'bg-gray-200' : 'bg-white/20'
        }`} />

        {/* Bottom Section - Transparent initially, White when scrolled */}
        <div className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-white' : 'bg-transparent'
        }`}>
          <div className="container mx-auto">
            <nav className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative top-[48px] md:top-0 left-0 w-full h-[calc(100vh-48px)] md:h-auto bg-[#1E4620]/95 md:bg-transparent transition-all duration-300 ease-in-out md:block overflow-y-auto`}>
              <ul className="flex flex-col md:flex-row items-center md:justify-center space-y-8 md:space-y-0 md:space-x-32 pt-4 md:pt-2 pb-4">
                <li><button onClick={() => {setIsMenuOpen(false); router.push('/')}} className={`text-lg md:text-[20px] font-medium transition-all duration-300 hover:opacity-80 text-white ${isScrolled ? 'md:text-[#1E4620]' : 'md:text-white'}`}>Home</button></li>
                <li><a href="#suppliers" onClick={() => setIsMenuOpen(false)} className={`text-lg md:text-[20px] font-medium transition-all duration-300 hover:opacity-80 text-white ${isScrolled ? 'md:text-[#1E4620]' : 'md:text-white'}`}>Suppliers</a></li>
                <li className="hidden md:block">
                  <div className="text-center relative py-6 md:py-0">
                    <Image 
                      src={isScrolled ? logoPath.scrolled : logoPath.default}
                      alt="Taste 55 Established"
                      width={128}
                      height={32}
                      className="w-24 md:w-32 mx-auto cursor-pointer"
                      onClick={() => router.push('/')}
                      priority
                    />
                  </div>
                </li>
                <li><button onClick={() => {setIsMenuOpen(false); router.push('/about')}} className={`text-lg md:text-[20px] font-medium transition-all duration-300 hover:opacity-80 text-white ${isScrolled ? 'md:text-[#1E4620]' : 'md:text-white'}`}>Our Story</button></li>
                <li><button onClick={() => {setIsMenuOpen(false); router.push('/#subscribe')}} className={`text-lg md:text-[20px] font-medium transition-all duration-300 hover:opacity-80 text-white ${isScrolled ? 'md:text-[#1E4620]' : 'md:text-white'}`}>Community</button></li>
              </ul>
              
              {/* Mobile Newsletter Button */}
              <div className="mt-10 px-6 pb-8 md:hidden">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsNewsletterOpen(true);
                  }}
                  className="w-full border-2 border-white text-white font-medium px-5 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-[#1E4620]"
                >
                  Sign up to Newsletter
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <NewsletterModal 
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </>
  );
}