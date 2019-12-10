'use strict';

const bowlingGame = {};

let frameResult;
let gameResult;

bowlingGame.start = () => {
  frameResult = [];
  gameResult = 0;
};

bowlingGame.roll = (firstRow, secondRow = 0) => {
  console.log(`first row is ${firstRow} and second row is ${secondRow}`);

  const firstRowAsNumber = Number.parseInt(firstRow);
  const secondRowAsNumber = Number.parseInt(secondRow);

  if (isNaN(firstRowAsNumber)) {
    throw new Error('Please parse a number or number string as first parameter!');
  }

  if (isNaN(secondRowAsNumber)) {
    throw new Error('Please parse a number or number string as second parameter!');
  }

  if (frameResult.length === 11) {
    throw new Error('Game ended!');
  }

  if (frameResult.length === 10) {
    if (lastFrameWasNeitherStrikeNorSpare()) {
      throw new Error('Game ended!');
    }

    if (secondRowAsNumber > 0) {
      throw new Error('Additional frame has just one roll!');
    }
  }

  if (firstRowAsNumber === 10 && secondRowAsNumber > 0) {
    throw new Error('Cannot have a second roll for a strike!');
  }

  frameResult.push([firstRowAsNumber, secondRowAsNumber]);
  const resultCurrentFrame = firstRowAsNumber + secondRowAsNumber;
  gameResult += resultCurrentFrame;

  if (frameResult.length > 1) {
    if (lastFrameWasStrike()) {
      gameResult += firstRowAsNumber + secondRowAsNumber;
    } else if (lastFrameWasSpare()) {
      gameResult += firstRowAsNumber;
    }
  }

  if (frameResult.length > 2) {
    if (twoFramesBeforeWasStrike()) {
      gameResult += firstRowAsNumber;
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
