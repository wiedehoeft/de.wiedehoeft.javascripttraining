'use strict';

const fs = require('fs');
const path = require('path');

const fileReader = {};

fileReader.readContentFromFile = (filePath, callback) => {

  return fs.readFile(filePath, {encoding: 'utf8'}, (err, content) => {
    if (err) {
      return callback(err);
    }

    return callback(null, content);
  });
};

module.exports = fileReader;
