const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const srcVideo = 'c:\\Users\\Administrator\\Downloads\\image_pizzaburger\\Bubbling_hot_pizza_202603301732.mp4';
const destVideoDir = 'c:\\Users\\Administrator\\Documents\\lp\\olympus\\public\\pizza_seq';

try {
  // Extract 18 frames starting from index 23
  console.log('Extracting frames 23 to 40...');
  execSync(`"${ffmpeg}" -y -i "${srcVideo}" -vframes 18 -q:v 2 -start_number 23 "${path.join(destVideoDir, 'ezgif-frame-%03d.jpg')}"`);
  console.log('Frames extracted successfully');
} catch (e) {
  console.error('Error:', e.message);
}
