'use strict';

const fileAnalyzer = {};

fileAnalyzer.getPropertiesFromFile = (jsonFileContent, name) => {
  if (name) {
    const foundProperty = jsonFileContent[name];

    if (!foundProperty) {
      throw new Error(`Cannot find property "${name}"`)
    }

    return foundProperty;
  }

  return Object.values(jsonFileContent);
};

module.exports = fileAnalyzer;
