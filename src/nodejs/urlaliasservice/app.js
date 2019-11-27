'use strict';

/**
 * Create SSL certificate
 * 1) openssl genrsa -out privateKey.pem 4096
 * 2) openssl req -new -key privateKey.pem -out csr.pem
 * 3) openssl x509 -in csr.pem -out certification.pem -req -signkey privateKey.pem -days 365
 *
 */

const https = require('https');
const getKeys = require('./keys'); //uses index.js

const keys = getKeys();

const server = https.createServer({
  cert: keys.certificate,
  key: keys.privateKey

}, (req, res) => {
  res.write('Hello HTTPS Server. ' + req.method + req.url);

  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
