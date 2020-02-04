const fs = require('fs');

const fileAnalyzer = {};

fileAnalyzer.analyse = (pathToPackageJson, property) => {

  return new Promise((resolve, reject) => {

    fs.readFile(pathToPackageJson, {'encoding': 'UTF-8'}, (err, content) => {
      console.log('Reading');

      if (err) {
        reject(err);
      } else {
        const parsed = JSON.parse(content);
        resolve(parsed[property]);
      }
    });
  });
};

module.exports = fileAnalyzer;
