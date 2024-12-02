'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageWithFallback({
  src,
  fallbackSrc = '/images/placeholder.jpg',
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt="Image"
      {...props}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
} 