'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const {flaschenpost} = require('flaschenpost');
const logger = flaschenpost.getLogger();

const getApp = (database) => {
  if (!database) {
    throw new Error('Database is missing!');
  }

  const app = express();
  app.use(bodyParser.json());

  app.get('/:alias', (req, res) => {
    const alias = req.params.alias;

    database.getMapping(alias, (err, mapping) => {
      if (err) {
        logger.warn(err);
        return res.status(404).end();
      }

      res.redirect(mapping.target);
    });

  });

  app.post('/api/:alias', (req, res) => {
    console.log(req.body);
    const alias = req.params.alias,
      target = req.body.target;

    database.createMapping(alias, target, err => {
      if (err) {
        logger.error(err);
        return res.status(500).end();
      }
      res.status(201).end();
    });
  });

  return app;
};

module.exports = getApp;
