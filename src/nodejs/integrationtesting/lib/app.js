'use strict';

const http = require('http');

const getApp = require('./getApp');

const app = getApp();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
