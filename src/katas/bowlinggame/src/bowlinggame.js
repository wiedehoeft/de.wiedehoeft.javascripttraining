const bowlinggame = {};

bowlinggame.addRoll = (game, points) => {
  game.push(points);
  return game;
};

bowlinggame.calculatePoints = (game) => {
  return game.reduce((accumulator, reducer) => {
    return accumulator + reducer;
  });
};

module.exports = bowlinggame;
