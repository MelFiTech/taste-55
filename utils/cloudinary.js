import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dzbgzbccy',
  api_key: '951829412451366',
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const getCloudinaryUrl = (publicId, options = {}) => {
  const defaultOptions = {
    fetch_format: 'auto',
    quality: 'auto',
    secure: true,
  }

  return cloudinary.url(publicId, {
    ...defaultOptions,
    ...options,
  })
}

export const uploadToCloudinary = async (file, options = {}) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: 'auto',
      ...options,
    })
    return result
  } catch (error) {
    console.error('Cloudinary upload error:', error)
    throw error
  }
} 