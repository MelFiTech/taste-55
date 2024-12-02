'use client'

import { useState, useEffect } from 'react'

export default function AboutHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoUrl = 'https://res.cloudinary.com/dzbgzbccy/video/upload/v1733095958/taste55/inspo/fres.mp4'

  useEffect(() => {
    // Create a new video element to preload
    const preloadVideo = document.createElement('video')
    preloadVideo.src = videoUrl
    preloadVideo.load()

    // Check if video loads successfully
    preloadVideo.onloadeddata = () => {
      setIsVideoLoaded(true)
      setVideoError(false)
    }

    preloadVideo.onerror = () => {
      setVideoError(true)
      console.error('Error loading video')
    }

    return () => {
      preloadVideo.src = '' // Cleanup
    }
  }, [videoUrl])

  return (
    <section className="relative h-[40vh] md:h-[60vh]">
      <div className="absolute inset-0">
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        {!videoError && (
          <video
            key={videoUrl}
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`object-cover w-full h-full brightness-75 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 h-full flex items-end justify-center pb-10 md:pb-20 container mx-auto px-4">
        <h3 className="text-white text-4xl md:text-7xl font-regular font-serif text-center">
          Our Story
        </h3>
      </div>
    </section>
  )
}