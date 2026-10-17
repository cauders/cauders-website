const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://res.cloudinary.com/cauders/image/upload/v1786551887/logo_rgtpg7.png';

const targets = [
  path.join(__dirname, '..', 'src', 'app', 'icon.png'),
  path.join(__dirname, '..', 'src', 'app', 'apple-icon.png'),
  path.join(__dirname, '..', 'public', 'favicon.ico'),
  path.join(__dirname, '..', 'public', 'images', 'icon.png'),
];

function download(url, destinations) {
  https.get(url, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Failed to download: status ${res.statusCode}`);
      process.exit(1);
    }
    const data = [];
    res.on('data', (chunk) => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log(`Downloaded ${buffer.length} bytes`);
      destinations.forEach((dest) => {
        const dir = path.dirname(dest);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(dest, buffer);
        console.log(`Updated: ${dest}`);
      });
      console.log('All favicon and icon destinations updated successfully!');
    });
  }).on('error', (err) => {
    console.error('Download error:', err.message);
    process.exit(1);
  });
}

download(url, targets);
