'use strict';

const bowlingGame = {};

let frameResult;
let gameResult;

bowlingGame.start = () => {
  frameResult = [];
  gameResult = 0;
};

bowlingGame.roll = (firstRow, secondRow = 0) => {
  if (frameResult.length === 11) {
    throw new Error('Game ended!');
  }

  if (frameResult.length === 10) {
    if (lastFrameWasNeitherStrikeNorSpare()) {
      throw new Error('Game ended!');
    }

    if (secondRow > 0) {
      throw new Error('Additional frame has just one roll!');
    }
  }

  if (firstRow === 10 && secondRow > 0) {
    throw new Error('Cannot have a second roll for a strike!');
  }

  frameResult.push([firstRow, secondRow]);
  const resultCurrentFrame = firstRow + secondRow;
  gameResult += resultCurrentFrame;

  if (frameResult.length > 1) {
    if (lastFrameWasStrike()) {
      gameResult += firstRow + secondRow;
    } else if (lastFrameWasSpare()) {
      gameResult += firstRow;
    }
  }

  if (frameResult.length > 2) {
    if (twoFramesBeforeWasStrike()) {
      gameResult += firstRow;
    }
  }

  return gameResult;
};

const twoFramesBeforeWasStrike = () => {
  const resultLastFrame = frameResult[frameResult.length - 3];
  return resultLastFrame[0] === 10;
};

const lastFrameWasStrike = () => {
  const resultLastFrame = frameResult[frameResult.length - 2];
  return resultLastFrame[0] === 10;
};

const lastFrameWasSpare = () => {
  const resultLastFrame = frameResult[frameResult.length - 2];
  return resultLastFrame[0] + resultLastFrame[1] === 10;
};

const lastFrameWasNeitherStrikeNorSpare = () => {
  return !lastFrameWasStrike() && !lastFrameWasSpare()
};


module.exports = bowlingGame;
