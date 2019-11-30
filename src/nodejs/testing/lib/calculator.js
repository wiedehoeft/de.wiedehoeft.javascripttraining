'use strict';

const calculator = {};

const addWithCache = () => {
  const cache = [0, 1];

  console.log('Starting calculator');

  const sum = (...numbers) => {

    console.log('Starting sum');

    if (numbers.filter(number => !isNaN(number)).length === 0) {
      throw new Error('Numbers are missing');
    }

    const result = cache[numbers];

    if (typeof result !== 'number') {
      console.log('Calculating for', numbers);
      cache[numbers] = numbers.reduce((currentSum, number) => currentSum + number);
    }

    return cache[numbers];
  };

  return sum;
};

calculator.add = addWithCache();

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
