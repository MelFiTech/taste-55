'use client'

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/app/constants/breakpoints';

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      setWindowSize({
        width: width,
        height: window.innerHeight,
        isMobile: width < BREAKPOINTS.MOBILE,
        isTablet: width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET,
        isDesktop: width >= BREAKPOINTS.TABLET,
      });
    }, 250); // Wait 250ms after last resize event

    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}