'use strict';

const calculator = {};

calculator.add = (...numbers) => {
  if (numbers.filter(number => !isNaN(number)).length === 0) {
    throw new Error('Numbers are missing');
  }

  return numbers.reduce((sum, number) => sum + number);
};

calculator.addAsync = (callback, ...numbers) => {
  if (!callback) {
    throw new Error('Callback is missing');
  }

  if (numbers.filter(number => !isNaN(number)).length === 0) {
    throw new Error('Numbers are missing');
  }

  const sum = numbers.reduce((intermediateSum, number) => intermediateSum + number);

  setTimeout(() => {
    callback(null, sum);
  }, 1 * 1000);
};

module.exports = calculator;
