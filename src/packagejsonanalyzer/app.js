'use strict';

const express = require('express');
const http = require('http');

const fileReader = require('./lib/filereader');
const fileAnalyzer = require('./lib/fileAnalyzer');
const path = require('path');

const app = express();

const packageJson = path.join(__dirname, '..', '..', 'package.json');

app.get('/', async (req, res) => {
  console.log('Got request');

  try {
    const result = await fileReader.readContentFromFile(packageJson);

    res.set('Content-Type', 'text/html');
    const properties = fileAnalyzer.getPropertiesFromFile(JSON.parse(result));
    res.send(properties);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
