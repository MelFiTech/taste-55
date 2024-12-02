const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dzbgzbccy',
  api_key: '951829412451366',
  api_secret: 'tQEpLg6JObtRcIsGfIAPyRlvIXU',
});

const folders = {
  'hot-food': 'public/images/hot-food',
  'inspo': 'public/images/inspo',
  'backgrounds': 'public/images/backgrounds',
  'videos': 'public/videos'
};

async function uploadAllAssets() {
  for (const [folderName, localPath] of Object.entries(folders)) {
    console.log(`Processing folder: ${folderName}`);
    
    try {
      const files = fs.readdirSync(path.join(process.cwd(), localPath));
      
      for (const file of files) {
        try {
          console.log(`Uploading: ${file}`);
          const result = await cloudinary.uploader.upload(
            path.join(process.cwd(), localPath, file),
            {
              folder: `taste55/${folderName}`,
              public_id: path.parse(file).name,
              resource_type: 'auto',
              quality: 'auto',
              fetch_format: 'auto',
            }
          );
          console.log(`Successfully uploaded ${file} to ${folderName}:`, result.secure_url);
        } catch (error) {
          console.error(`Error uploading ${file}:`, error.message);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${localPath}:`, error.message);
    }
  }
}

uploadAllAssets().then(() => {
  console.log('Upload process completed');
}).catch(error => {
  console.error('Upload process failed:', error);
}); 