'use client'

import Header from '@/app/components/Header'
import AboutHero from './components/AboutHero'
import Inspo from './components/Inspo'
import Subscribe from '@/app/components/Subscribe'

export default function About() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header alwaysScrolled={true} />
      </div>
      
      <AboutHero />
      <Inspo />
      <Subscribe />
    </main>
  )
}