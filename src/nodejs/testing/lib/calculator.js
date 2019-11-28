'use strict';

const calculator = {};

calculator.add = (...numbers) => {
  if (numbers.filter(number => !isNaN(number)).length === 0) {
    throw new Error('Numbers are missing');
  }

  return numbers.reduce((sum, number) => sum + number);
};

module.exports = calculator;
