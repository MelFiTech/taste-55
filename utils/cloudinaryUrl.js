export const getCloudinaryUrl = (imageName, folder = 'taste55') => {
  return `https://res.cloudinary.com/dzbgzbccy/image/upload/v1/${folder}/${imageName}`
} 