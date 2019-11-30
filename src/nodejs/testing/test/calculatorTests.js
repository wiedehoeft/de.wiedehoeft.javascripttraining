/* eslint-disable padded-blocks */
'use strict';

const calculator = require('../lib/calculator');
const expect = require('expect');

describe('calculator', () => {

  describe('sync', () => {

    it('Should return the sum of the given numbers.', done => {
      // Act
      const result = calculator.add(1, 2);

      // Assert
      expect(result).toEqual(3);
      done();
    });

    it('Should raise an error when charachter is passed.', done => {
      // Act
      const result = () => calculator.add('a');

      // Assert
      expect(result).toThrowError('Numbers are missing');
      done();
    });

    it('Should raise an error when no number is passed.', done => {
      // Act
      const result = () => calculator.add();

      // Assert
      expect(result).toThrowError('Numbers are missing');
      done();
    });

    it('Should allow composite operations', done => {
      // Act
      const result = calculator.add(3, calculator.add(3, calculator.add(3, 4)));

      // Assert
      expect(result).toEqual(13);
      done();
    });

    it('Should only calculate once', done => {
      // Act
      calculator.add(3, 4);
      calculator.add(3, 4);
      calculator.add(3, 4);
      calculator.add(4, 4);

      // Assert
      done();
    });
  });

  describe('async', () => {

    it('Should return the sum of the given numbers.', done => {
      // Act
      calculator.addAsync((err, sum) => {
        expect(err).toBeNull();
        expect(sum).toEqual(3);
        done();
      }, 1, 2);
    });
  });
});
