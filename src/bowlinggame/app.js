'use strict';

const http = require('http');
const bowlingGameServer = require('./lib/bowlinggameserver');

const app = bowlingGameServer.app();
const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Started Bowling Server on port 3000');
});
