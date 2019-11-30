'use strict';

const fileReader = require('../lib/filereader');
const expect = require("expect");
const path = require('path');
const isolated = require('isolated');

describe('FileReader', () => {

  it('should return file content from given path', done => {
    // Arrange
    const filePath = path.join(__dirname, 'data', 'demofile.txt');

    // Act
    fileReader.readContentFromFile(filePath, (err, content) => {

      // Assert
      expect(content).toContain('Hello from File Reader!');
      done();
    });
  });

  it('should raise error when file cannot be found', done => {
    // Arrange
    const filePath = '/notExistingPath';

    // Act
    fileReader.readContentFromFile(filePath, (err) => {
      // Assert
      expect(err.message).toContain('no such file or directory');
      done();
    });
  });

});
