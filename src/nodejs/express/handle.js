'use strict';

const express = require('express');

const app = express();

const expressServer = app.get('/', (req, res) => {
  res.send('Hello Express');
});

module.exports = expressServer;
