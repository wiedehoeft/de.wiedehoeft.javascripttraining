/* eslint-disable object-curly-spacing */
'use strict';

const path = require('path');
const expect = require('expect');
const isolated = require('isolated');

const configuration = require('../lib/configuration');

describe('configuration', () => {

  describe('get', () => {

    it('should return the configuration from package.json', done => {
      // Arrange
      isolated({
        files: path.join(__dirname, 'data', 'with-configuration', 'package.json'),
        preserveTimestamps: true
      }, (err, directory) => {
        expect(err).toBeNull();

        // Act
        const settings = configuration.get(directory);

        // Arrange
        expect(settings).toEqual({
          port: 3000
        });
        done();
      });
    });

    it('should raise error when there is no configuration in package.json', done => {
      // Arrange
      isolated({
        files: path.join(__dirname, 'data', 'without-configuration', 'package.json'),
        preserveTimestamps: true
      }, (err, directory) => {
        const settings = () => configuration.get(directory);
        expect(settings).toThrowError();
        done();
      });
    });
  });
});
