'use strict';

const expect = require("expect");

const sut = require('../lib/bowlinggame');

describe(' Bowling Game', () => {

  beforeEach(() => {
    sut.start();
  });

  describe('Rolling', () => {

    it('single roll', () => {
      // Arrange
      const firstRoll = 5;

      // Act
      const result = sut.roll(firstRoll);

      // Assert
      expect(result).toEqual(5);
    });

    it('two rolls', () => {
      // Arrange
      const firstRoll = 5;
      const secondRoll = 3;

      // Act
      const result = sut.roll(firstRoll, secondRoll);

      // Assert
      expect(result).toEqual(8);
    });
  });

  it('Spare', () => {
    // Arrange
    const firstRoll = 4;
    const secondRoll = 6;

    const spareRoll = 5;

    // Act
    sut.roll(firstRoll, secondRoll);
    const result = sut.roll(spareRoll);

    // Assert
    expect(result).toEqual(20);
  });

  it('Strike and Spare', () => {
    // Arrange
    const strikeRoll = 10;

    const firstSpareRoll = 6;
    const secondSpareRoll = 4;

    const firstRollAfterSpare = 4;
    const secondRollAfterSpare = 8;

    // Act
    sut.roll(strikeRoll);
    sut.roll(firstSpareRoll, secondSpareRoll);

    const result = sut.roll(firstRollAfterSpare, secondSpareRoll);

    // Assert
    expect(result).toEqual(46);
  });

  describe('Strike', () => {

    it('One Strike', () => {
      // Arrange
      const strike = 10;

      const strikeRoll = 5;
      const seondStrikeRoll = 4;

      // Act
      sut.roll(strike);
      const result = sut.roll(strikeRoll, seondStrikeRoll);

      // Assert
      expect(result).toEqual(28);
    });

    it('Two Strike', () => {
      // Arrange
      const strike = 10;

      const secondStrike = 10;

      // Act
      sut.roll(strike);
      const result = sut.roll(secondStrike);

      // Assert
      expect(result).toEqual(30);
    });

    it('Three Strike', () => {
      // Arrange
      const strike = 10;
      const secondStrike = 10;
      const thirdStrike = 10;

      // Act
      sut.roll(strike);
      sut.roll(secondStrike);
      const result = sut.roll(thirdStrike);

      // Assert
      expect(result).toEqual(60);
    });
  });

  it('perfect game', () => {
    // Act
    sut.roll(10);
    sut.roll(10);
    sut.roll(10);

    sut.roll(10);
    sut.roll(10);
    sut.roll(10);

    sut.roll(10);
    sut.roll(10);
    sut.roll(10);

    sut.roll(10);

    const result = sut.roll(10);

    // Assert
    expect(result).toEqual(300);
  });

  it('should only accept ten frames after no strike or spare', () => {
    // Arrange
    for (let i = 0; i < 10; i++) {
      sut.roll(1, 1);
    }

    // Act
    const result = () => sut.roll(1, 1);

    // Assert
    expect(result).toThrowError('Game ended');
  });

  it('should allow eleven frames for strike', () => {
    // Arrange
    for (let i = 0; i < 10; i++) {
      sut.roll(10);
    }

    // Act
    const result = () => sut.roll(1);

    // Assert
    expect(result).not.toThrowError('Game ended');
  });

  it('should allow eleven frames for spare', () => {
    // Arrange
    for (let i = 0; i < 10; i++) {
      sut.roll(5, 5);
    }

    // Act
    const result = () => sut.roll(1);

    // Assert
    expect(result).not.toThrowError('Game ended');
  });

  it('should not allow any roll after eleventh frame', () => {
    // Arrange
    for (let i = 0; i < 10; i++) {
      sut.roll(5, 5);
    }

    sut.roll(5);

    // Act
    const result = () => sut.roll(1);

    // Assert
    expect(result).toThrowError('Game ended');
  });

  it('should only allow one roll for eleventh frame', () => {
    // Arrange
    for (let i = 0; i < 10; i++) {
      sut.roll(5, 5);
    }

    // Act
    const result = () => sut.roll(1, 1);

    // Assert
    expect(result).toThrowError('Additional frame has just one roll!');
  });

  it('should only allow second row if first was not strike', () => {
    // Act
    const result = () => sut.roll(10, 5);

    // Assert
    expect(result).toThrowError('Cannot have a second roll for a strike!');
  })
});
