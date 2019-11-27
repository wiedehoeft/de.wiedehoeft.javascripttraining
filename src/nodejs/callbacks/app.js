'use strict';

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n ** 2);

console.log(squares);

const words = ['the', 'quick', 'brown', 'fox'];
const wordLenghts = words.map(word => ({
  word: word, length: word.length
}));

console.log(wordLenghts);
