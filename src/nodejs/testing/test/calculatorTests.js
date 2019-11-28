'use strict';

const calculator = require('../lib/calculator');
const expect = require('expect');

describe('calculator', () => {
  it('Should return the sum of the given numbers.', () => {
    // Act
    const result = calculator.add(1, 2);

    // Assert
    expect(result).toEqual(3);
  });

  it('Should raise an error when charachter is passed.', () => {
    // Act
    const result = () => calculator.add('a');

    // Assert
    expect(result).toThrowError('Numbers are missing');
  });

  it('Should raise an error when no number is passed.', () => {
    // Act
    const result = () => calculator.add();

    // Assert
    expect(result).toThrowError('Numbers are missing');
  });

});
