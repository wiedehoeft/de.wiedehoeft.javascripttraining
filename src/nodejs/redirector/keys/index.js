'use strict';

const fs = require('fs'),
  path = require('path');

const getKeys = () => {
  const certificate = fs.readFileSync(path.join(__dirname, 'certification.pem'), {encoding: 'UTF-8'}),
    privateKey = fs.readFileSync(path.join(__dirname, 'privateKey.pem'), {encoding: 'UTF-8'});

  return {certificate, privateKey};
};

module.exports = getKeys;
