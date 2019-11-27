'use strict';

/**
 * Create SSL certificate
 * 1) openssl genrsa -out privateKey.pem 4096
 * 2) openssl req -new -key privateKey.pem -out csr.pem
 * 3) openssl x509 -in csr.pem -out certification.pem -req -signkey privateKey.pem -days 365
 *
 */

const https = require('https');

const {flaschenpost} = require('flaschenpost'),
  {processenv} = require('processenv');

const getKeys = require('./keys'), //uses index.js
  getApp = require('./lib/getApp');

const logger = flaschenpost.getLogger();

const port = processenv('PORT') || 3000;

const keys = getKeys(),
  app = getApp();

const server = https.createServer({
  cert: keys.certificate,
  key: keys.privateKey
}, app);

server.listen(port, () => {
  logger.info('Server started', {port: port});
});
