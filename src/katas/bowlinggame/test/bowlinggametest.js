'use strict';

const bowlinggame = require('../src/bowlinggame');
const expect = require('expect');

describe('bowlinggame', () => {
  it('test one roll', () => {
    let game = [];
    game = bowlinggame.addRoll( game,1);
    const result = bowlinggame.calculatePoints(game);
    expect(result).toEqual(1);
  });

  it('test two rolls', () => {
    let game = [];
    game = bowlinggame.addRoll(game, 1);
    game = bowlinggame.addRoll(game, 3);
    const result = bowlinggame.calculatePoints(game);
    expect(result).toEqual(4);
  });
});

