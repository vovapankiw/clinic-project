const https = require('https');
const fs = require('fs');
const Nuxt = require('nuxt');

const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

// Nuxt.js setup
const config = require('../nuxt.config.js');

config.dev = !isProd;
const nuxt = new Nuxt(config);
if (!isProd) {
  nuxt.build(); // Build in development mode
}

// HTTPS Server
const options = {
  key: fs.readFileSync('../server.key'),
  cert: fs.readFileSync('../server.crt'),
};

console.log('create server')
// Create the server
https
  .createServer(options, nuxt.render)
  .listen(port);

console.log(`Server listening on https://localhost:${port}`)