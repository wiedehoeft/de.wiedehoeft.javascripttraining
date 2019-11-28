'use strict';

const http = require('http');

const getContent = (callback) => {
  http.get('http://thenativeweb.io', res => {
    callback(null);
  }).on('error', err => {
    callback(err);
  });
};

module.exports = getContent;
