'use strict';

const express = require('express');
const http = require('http');

const fileReader = require('./lib/filereader');
const fileAnalyzer = require('./lib/fileAnalyzer');
const path = require('path');

const app = express();

const packageJson = path.join(__dirname, '..', '..', 'package.json');

app.get('/', (req, res) => {


  fileReader.readContentFromFile(packageJson, (err, content) => {
    res.set('Content-Type', 'text/html');

    const properties = fileAnalyzer.getPropertiesFromFile(JSON.parse(content));

    res.send(properties);
  })
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
