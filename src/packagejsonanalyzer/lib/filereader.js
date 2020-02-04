'use strict';

const fs = require('fs');
const path = require('path');

const fileReader = {};

fileReader.readContentFromFile = (filePath) => {

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, {encoding: 'utf8'}, (err, content) => {
      if (err) {
        reject(err);
      }

      resolve(content);
    })
  });
};

module.exports = fileReader;
