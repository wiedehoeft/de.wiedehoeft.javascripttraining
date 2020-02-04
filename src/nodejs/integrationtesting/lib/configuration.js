/* eslint-disable object-curly-spacing */
'use strict';

const path = require('path');
const fs = require('fs');

const configuration = {};

configuration.get = directory => {
  const file = path.join(directory, 'package.json');

  const data = fs.readFileSync(file, {encoding: 'utf8'});

  const packageJson = JSON.parse(data);

  const name = packageJson.name;
  const configuration = packageJson[name];

  if (!configuration) {
    throw new Error('Configuration is missing');
  }

  return configuration;
};

module.exports = configuration;
