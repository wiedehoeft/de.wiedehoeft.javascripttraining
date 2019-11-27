'use strict';

const add = (left, right) => left + right;

const sum = add(23, 42);

console.log(sum);

/* Now as callback */
const add2 = (left, right, callback) => {
  const sum = left + right;

  setTimeout(() => {
    callback(null, sum); // With error handling
  }, 1 * 1000);
};

console.log('###1');

add2(10, 20, (err, sum) => {
  console.log(sum);
});

console.log('###2');
