const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'hero-coffee.jpg': 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'coffee-shop-interior.jpg': 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'coffee/espresso.jpg': 'https://images.pexels.com/photos/312080/pexels-photo-312080.jpeg?auto=compress&cs=tinysrgb&w=800',
  'coffee/macchiato.jpg': 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=800',
  'coffee/coldbrew.jpg': 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=800'
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(`Error downloading ${url}: ${err.message}`);
    });
  });
}

async function downloadAllImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const coffeeDir = path.join(publicDir, 'coffee');

  // Create directories if they don't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  if (!fs.existsSync(coffeeDir)) {
    fs.mkdirSync(coffeeDir);
  }

  // Download each image
  for (const [filename, url] of Object.entries(images)) {
    const filepath = path.join(publicDir, filename);
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.error(error);
    }
  }
}

downloadAllImages().catch(console.error); 