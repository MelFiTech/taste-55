'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function NewsletterModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState({ name: '', email: '', general: '' })
  const [showSuccess, setShowSuccess] = useState(false)

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Reset form on close
  useEffect(() => {
    if (!isOpen) {
      setName('')
      setEmail('')
      setError({ name: '', email: '', general: '' })
      setStatus('idle')
      setShowSuccess(false)
    }
  }, [isOpen])

  // Validate name
  const validateName = (value) => {
    if (!value.trim()) {
      return 'Name is required'
    }
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters'
    }
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      return 'Name can only contain letters and spaces'
    }
    return ''
  }

  // Validate email
  const validateEmail = (value) => {
    if (!value.trim()) {
      return 'Email is required'
    }
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address'
    }
    return ''
  }

  // Handle input changes with validation
  const handleNameChange = (e) => {
    const value = e.target.value
    setName(value)
    setError(prev => ({ ...prev, name: validateName(value) }))
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    setError(prev => ({ ...prev, email: validateEmail(value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const nameError = validateName(name)
    const emailError = validateEmail(email)

    if (nameError || emailError) {
      setError({
        name: nameError,
        email: emailError,
        general: 'Please fix the errors above'
      })
      return
    }

    try {
      setStatus('loading')
      setError({ name: '', email: '', general: '' })

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setShowSuccess(true)
      
      // Close modal after success animation
      setTimeout(() => {
        onClose()
      }, 2000)

    } catch (err) {
      setStatus('error')
      setError(prev => ({ ...prev, general: err.message }))
    }
  }

  if (!isOpen) return null

  const isFormValid = name && email && !error.name && !error.email

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <button 
        onClick={onClose}
        className="relative mb-2 sm:mb-4 px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 bg-white hover:bg-gray-100 rounded-full text-sm sm:text-base md:text-lg font-medium text-gray-900 transition-colors z-10"
      >
        Close
      </button>

      <div className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-4xl">
        <div className="bg-[#F5FFF7] rounded-[16px] sm:rounded-[20px] md:rounded-[32px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Mobile Image */}
            <div className="relative h-36 sm:h-48 md:hidden">
              <Image
                src="/modal.png"
                alt="Fresh produce display"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-4 sm:p-6 md:p-12 space-y-3 sm:space-y-4 md:space-y-6 relative">
              {/* Success Animation Overlay */}
              {showSuccess && (
                <div className="absolute inset-0 bg-[#F5FFF7] flex items-center justify-center animate-fade-in z-10">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center animate-scale-up">
                      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-500">Successfully Subscribed!</p>
                  </div>
                </div>
              )}

              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">Subscribe to our Newsletter</h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Signup to our newsletter to receive the latest updates and grocery news.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {error.general && (
                  <p className="text-red-500 text-xs sm:text-sm text-left">{error.general}</p>
                )}

                <div className="space-y-1">
                  <label className="text-gray-700 text-xs sm:text-sm font-medium">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className={`w-full h-[42px] px-3 bg-white rounded-lg border ${
                        error.name ? 'border-red-500' : 'border-[#4CAF50]'
                      } text-gray-900 transition-colors text-sm`}
                      placeholder="My Name"
                    />
                    {name && (
                      <button
                        type="button"
                        onClick={() => setName('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  {error.name && <p className="text-red-500 text-xs sm:text-sm text-left">{error.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-gray-700 text-xs sm:text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full h-[42px] px-3 bg-white rounded-lg border ${
                      error.email ? 'border-red-500' : 'border-[#4CAF50]'
                    } text-gray-900 transition-colors text-sm`}
                    placeholder="email@example.com"
                  />
                  {error.email && <p className="text-red-500 text-xs sm:text-sm text-left">{error.email}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !isFormValid}
                  className={`w-full h-[42px] text-white rounded-lg text-sm font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                    status === 'loading' 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : status === 'success'
                      ? 'bg-green-500'
                      : isFormValid
                      ? 'bg-[#4CAF50] hover:bg-[#45a049]'
                      : 'bg-[#808080] cursor-not-allowed'
                  }`}
                >
                  {status === 'loading' 
                    ? 'Subscribing...' 
                    : status === 'success'
                    ? 'Subscribed!'
                    : 'Subscribe Now'}
                </button>
              </form>

              <p className="text-[#FF6B4D] text-[10px] sm:text-xs md:text-sm">
                Don&apos;t Worry, We won&apos;t spam you
              </p>
            </div>

            {/* Desktop Image */}
            <div className="relative hidden md:block">
              <Image
                src="/modal.png"
                alt="Fresh produce display"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}