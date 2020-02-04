const getKeys = require('.');
const expect = require('expect');

describe('key resolver', () => {

  it('should return key files', () => {
    // Act
    const result = getKeys();

    // Assert
    expect(result.certificate).toBeDefined();
    expect(result.privateKey).toBeDefined();
  })
});
