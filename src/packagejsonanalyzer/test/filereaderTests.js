'use strict';

const fileReader = require('../lib/filereader');
const expect = require("expect");
const path = require('path');

const chai = require('chai');
const chaiExpect = chai.expect;
chai.use(require('chai-as-promised'));

describe('FileReader', () => {

  it('should return file content from given path', async () => {
    // Arrange
    const filePath = path.join(__dirname, 'data', 'demofile.txt');

    // Act
    const result = await fileReader.readContentFromFile(filePath);

    // Assert
    expect(result).toContain('Hello from File Reader!');
  });

  it('should raise error when file cannot be found', async () => {
    // Arrange
    const filePath = '/notExistingPath';

    // Act
    const methodUnderTest = fileReader.readContentFromFile(filePath);

    // Assert
    await chaiExpect(methodUnderTest).to.be.rejectedWith('no such file or directory');
  });
});
