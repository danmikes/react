const fs = require('fs');
const buildTime = new Date().toLocaleString();
const html = fs.readFileSync('public/index.html', 'utf8').replace(/__BUILD_TIME__/g, buildTime);
fs.writeFileSync('public/index.html', html);
