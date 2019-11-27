'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./routes');

const getApp = (database) => {
  if (!database) {
    throw new Error('Database is missing!');
  }

  const app = express();
  app.use(bodyParser.json());

  app.get('/api', routes.getApi(database));
  app.post('/api/:alias', routes.postApiAlias(database));
  app.get('/:alias', routes.getAlias(database));

  return app;
};

module.exports = getApp;
