const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dzbgzbccy',
  api_key: '951829412451366',
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImages() {
  const imageDir = path.join(__dirname, '../public/images/inspo');
  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    try {
      const result = await cloudinary.uploader.upload(
        path.join(imageDir, file),
        {
          folder: 'taste55/inspo',
          public_id: path.parse(file).name,
          resource_type: 'auto',
          quality: 'auto',
          fetch_format: 'auto',
        }
      );
      console.log(`Uploaded ${file}:`, result.secure_url);
    } catch (error) {
      console.error(`Error uploading ${file}:`, error);
    }
  }
}

uploadImages(); 