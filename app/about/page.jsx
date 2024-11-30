'use client'

import dynamic from 'next/dynamic'
import Header from '@/app/components/Header'

// Dynamically import components with loading fallbacks
const AboutHero = dynamic(() => import('./components/AboutHero'), {
  loading: () => <div className="h-screen animate-pulse bg-gray-100" />
})

const Inspo = dynamic(() => import('./components/Inspo'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
})

const Promote = dynamic(() => import('./components/Promote'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
})

const Partners = dynamic(() => import('./components/55Partners'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
})

const HotFood = dynamic(() => import('./components/HotFood'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
})

const Value = dynamic(() => import('./components/Value'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
})

const Subscribe = dynamic(() => import('@/app/components/Subscribe'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
})

export default function About() {
  return (
    <main className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <AboutHero />
      <Inspo />
      <Promote />
      <Partners />
      <HotFood />
      <Value />
      <Subscribe />
    </main>
  )
}