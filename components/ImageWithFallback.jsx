'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IMAGE_PATHS } from '@/utils/imagePaths'

const defaultPlaceholder = IMAGE_PATHS.backgrounds.bg // or any other fallback image

export default function ImageWithFallback({
  src,
  alt,
  fallback = defaultPlaceholder,
  ...props
}) {
  const [error, setError] = useState(false)

  return (
    <Image
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  )
} 