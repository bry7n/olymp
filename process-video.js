const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const srcVideo = 'c:\\Users\\Administrator\\Downloads\\image_pizzaburger\\Bubbling_hot_pizza_202603301732.mp4';
const destVideoDir = 'c:\\Users\\Administrator\\Documents\\lp\\olympus\\public\\pizza_seq';
const destVideo = path.join(destVideoDir, 'bubbling_pizza.mp4');

// Copy video to public folder
try {
  fs.copyFileSync(srcVideo, destVideo);
  console.log('Video copied to public directory.');
  
  // Extract frame at 0.0 sec, compress it to save space
  const frame39 = path.join(destVideoDir, 'ezgif-frame-039.jpg');
  const frame40 = path.join(destVideoDir, 'ezgif-frame-040.jpg');
  
  execSync(`"${ffmpeg}" -y -i "${srcVideo}" -ss 00:00:00.000 -vframes 1 -q:v 2 "${frame39}"`);
  console.log('Extracted frame 39');
  
  execSync(`"${ffmpeg}" -y -i "${srcVideo}" -ss 00:00:00.000 -vframes 1 -q:v 2 "${frame40}"`);
  console.log('Extracted frame 40');
  
} catch (e) {
  console.error('Error:', e.message);
}
