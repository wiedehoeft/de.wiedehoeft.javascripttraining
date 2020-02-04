const https = require('https');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const getKeys = require('./keys');
const resolveAlias = require('./lib/routes/resolveAlias'),
  addAlias = require('./lib/routes/addAlias'),
  getApi = require('./lib/routes/getApi');

app.use(bodyParser.json());
resolveAlias(app);
addAlias(app);
getApi(app);

const server = https.createServer({
  cert: getKeys().certificate,
  key: getKeys().privateKey
}, app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
