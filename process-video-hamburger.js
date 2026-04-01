const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const srcVideo = 'c:\\Users\\Administrator\\Downloads\\image_pizzaburger\\Hamburger_360_spinning_202603301930.mp4';
const destVideoDir = 'c:\\Users\\Administrator\\Documents\\lp\\olympus\\public\\pizza_seq';
const destVideo = path.join(destVideoDir, 'hamburger.mp4');

try {
  // First copy the video to the public directory
  fs.copyFileSync(srcVideo, destVideo);
  console.log('Video copied to public directory.');

  // Extract 20 frames starting from index 1
  console.log('Extracting frames 1 to 20...');
  execSync(`"${ffmpeg}" -y -i "${srcVideo}" -vframes 20 -q:v 2 -start_number 1 "${path.join(destVideoDir, 'ezgif-frame-%03d.jpg')}"`);
  console.log('Frames extracted successfully');
} catch (e) {
  console.error('Error:', e.message);
}
