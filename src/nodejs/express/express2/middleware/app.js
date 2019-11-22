'use strict';

const http = require('http'),
    path = require('path');
const express = require('express');
const logger = require('./logger');

const app = express();

app.use(logger({
    level: 'info'
}));

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/blog/:year/:month/:day?', (req, res) => {

    if (req.query.format === 'html') {
        res.send(`<h1> ${req.params.day}.${req.params.month}.${req.params.year} </h1>`);
        return;
    }

    res.send({
        year: Number(req.params.year),
        month: Number(req.params.month),
        day: Number(req.params.day) || 1,
    });
});

app.get('/requestinfo', (req, res) => {
    res.send({
        ip: req.ip,
        protocol: req.protocol,
        secure: req.secure,
        method: req.method,
        hostname: req.hostname,
        path: req.path
    })
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
