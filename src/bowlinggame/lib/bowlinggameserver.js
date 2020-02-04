'use strict';

const express = require('express');
const bowlingGame = require('./bowlinggame');

const bowlingGameServer = {};

const app = express();

bowlingGameServer.app = () => {
  return app;
};

app.get('/', (req, res) => {
  res.send(`You can run this app with follwing instructions:
  1) /start : Start a new game, has to be called before first roll.
  2) /roll/:firstRoll/:secondRoll: Add rolls for current frame.`)
});

app.get('/start', (req, res) => {
  bowlingGame.start();
  res.send('Started a new game');
});

app.get('/roll/:firstRoll/:secondRoll?', (req, res) => {
  try {
    const result = bowlingGame.roll(req.params.firstRoll, req.params.secondRoll);
    res.send(`Your current result is: ${result}`);
  } catch (e) {
    res.send(`${e}`);
  }
});

module.exports = bowlingGameServer;
