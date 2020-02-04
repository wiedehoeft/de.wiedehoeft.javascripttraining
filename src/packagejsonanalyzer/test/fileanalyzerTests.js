'use strict';

const fileAnalyzer = require('../lib/fileAnalyzer');
const expect = require("expect");

describe('FileAnalyzer', () => {

  it('should return property from json file', () => {
    // Arrange
    const jsonFileContent = {
      "name": "hello from json file"
    };

    // Act
    const result = fileAnalyzer.getPropertiesFromFile(jsonFileContent);


    // Assert
    expect(result).toContain("hello from json file");
  });

  it('should return all properties from json file', () => {
    // Arrange
    const jsonFileContent = {
      "name": "hello from json file",
      "version": "1.0.0"
    };

    // Act
    const result = fileAnalyzer.getPropertiesFromFile(jsonFileContent);

    // Assert
    expect(result).toEqual(["hello from json file", "1.0.0"]);
  });

  it('should search for passed property in json file', () => {
    // Arrange
    const jsonFileContent = {
      "name": "hello from json file",
      "version": "1.0.0"
    };

    // Act
    const result = fileAnalyzer.getPropertiesFromFile(jsonFileContent, 'name');

    // Assert
    expect(result).toEqual("hello from json file");
  });

  it('should raise error when passed property cannot be found', () => {
    // Arrange
    const jsonFileContent = {
      "name": "hello from json file",
      "version": "1.0.0"
    };

    // Act
    const result = () => fileAnalyzer.getPropertiesFromFile(jsonFileContent, 'hugo');

    // Assert
    expect(result).toThrowError('Cannot find property "hugo"');
  });
});
