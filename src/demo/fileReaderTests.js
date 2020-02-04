const fileAnalyzer = require('./fileanalyzer');
const path = require('path');
const expect = require('expect');

describe('Package JSON analyzer', () => {

  it('should get property', async () => {
    // Arrange
    const pathToPackageJson = path.join(__dirname, 'package.json');

    // Act
    const content = await fileAnalyzer.analyse(pathToPackageJson, 'license');

    // Assert
    expect(content).toEqual('ISC');
  });
});
