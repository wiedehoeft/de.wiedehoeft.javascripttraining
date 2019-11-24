const express = require('express');
const http = require('http');

const app = express();

const expressServer = app.get('/', (req, res) => {
    res.send('Hello Express');
});

module.exports = expressServer;
