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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 w-[132px] h-[33px] rounded-full text-[14px] font-medium bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          Close
        </button>

        <div className="relative bg-white rounded-[32px] overflow-hidden p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-[26px]">
            <div className="w-full md:w-[329px]">
              <div className="mb-8">
                <h2 className="text-[26px] md:text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-600">
                  Signup to our newsletter to receive the latest updates and grocery news.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    id="name"
                    className="w-full px-6 py-4 bg-[#F5F3F7] rounded-[14px] focus:ring-0 focus:outline-none peer pt-6 transition-all duration-200 border-2 border-transparent focus:border-green-500"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name"
                    className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Your Name
                  </label>
                  {error.name && (
                    <p className="mt-1 text-sm text-red-500 ml-6">{error.name}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    className="w-full px-6 py-4 bg-[#F5F3F7] rounded-[14px] focus:ring-0 focus:outline-none peer pt-6 transition-all duration-200 border-2 border-transparent focus:border-green-500"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email"
                    className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                  >
                    Your Email
                  </label>
                  {error.email && (
                    <p className="mt-1 text-sm text-red-500 ml-6">{error.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-[14px] text-white font-bold transition duration-300 bg-[#10482B] hover:bg-[#0d3b24]"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                </button>

                {error.general && (
                  <p className="text-sm text-red-500 text-center">{error.general}</p>
                )}

                {showSuccess && (
                  <p className="text-sm text-green-500 text-center">Successfully subscribed!</p>
                )}
              </form>

              <p className="text-sm text-green-600 mt-6">
                Your friendly neighborhood grocer!
              </p>
            </div>

            <div className="relative w-full md:w-[297px] h-[250px] md:h-[428px]">
              <Image
                src="/grocerey-bag.png"
                alt="Grocery bag with fresh produce"
                fill
                className="object-cover rounded-tl-[16px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
