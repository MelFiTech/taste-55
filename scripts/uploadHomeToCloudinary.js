const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dzbgzbccy',
  api_key: '951829412451366',
  api_secret: 'tQEpLg6JObtRcIsGfIAPyRlvIXU',
});

async function uploadHomeImages() {
  const imageDir = path.join(process.cwd(), 'public/images/home');
  
  try {
    console.log('Processing home folder');
    const files = fs.readdirSync(imageDir);
    
    for (const file of files) {
      try {
        console.log(`Uploading: ${file}`);
        const result = await cloudinary.uploader.upload(
          path.join(imageDir, file),
          {
            folder: 'taste55/home',
            public_id: path.parse(file).name,
            resource_type: 'auto',
            quality: 'auto',
            fetch_format: 'auto',
          }
        );
        console.log(`Successfully uploaded ${file}:`, result.secure_url);
      } catch (error) {
        console.error(`Error uploading ${file}:`, error.message);
      }
    }
  } catch (error) {
    console.error('Error reading home directory:', error.message);
  }
}

uploadHomeImages().then(() => {
  console.log('Home folder upload completed');
}).catch(error => {
  console.error('Upload process failed:', error);
}); 