'use strict';

const express = require('express');

const getApp = () => {

  const app = express();

  app.get('/:alias', (req, res) => {
    res.redirect('https.google.de');
  });

  return app;
};

module.exports = getApp;
