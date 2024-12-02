const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dzbgzbccy',
  api_key: '951829412451366',
  api_secret: 'tQEpLg6JObtRcIsGfIAPyRlvIXU',
});

async function uploadIcons() {
  const imageDir = path.join(process.cwd(), 'public/images/icons');
  
  try {
    const files = fs.readdirSync(imageDir);
    
    for (const file of files) {
      try {
        console.log(`Uploading: ${file}`);
        const result = await cloudinary.uploader.upload(
          path.join(imageDir, file),
          {
            folder: 'taste55/icons',
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
    console.error('Error reading directory:', error.message);
  }
}

uploadIcons().then(() => {
  console.log('Upload process completed');
}).catch(error => {
  console.error('Upload process failed:', error);
}); 