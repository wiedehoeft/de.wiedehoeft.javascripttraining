'use strict';

const epxress = require('express');

const getApp = () => {
  const app = epxress();

  app.get('/', (req, res) => {
    res.send('Hallo Welt');
  });

  return app;
};

module.exports = getApp;
