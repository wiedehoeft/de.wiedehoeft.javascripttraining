'use strict';

const fs = require('fs'),
    path = require('path');

const filename = path.join(__dirname, 'foobar.txt');

console.log('###1');

fs.readFile(filename, 'utf-8', (err, content) => {
    if (err) {
        return console.log(err); // Early return pattern
    }

    console.log(content);
});

console.log('###2');

/*---------------------------------------------------------*/
const cache = {};

/* This mixes sync and async functions, when setTimeout is commented out! */
const loadFile = (fileName, callback) => {
    const content = cache[fileName];

    if (content) {
        console.log('From cache');

        //return setTimeout(() => {
        //    callback(null, content);
        //}, 0); // Now then function is aysnc

        //return setImmediate(() => {
        //    callback(null, content);
        //});

        return process.nextTick(() => {
            callback(null, content);
        }); // faster return then setTimeout or setImmediate
    }

    fs.readFile(filename, 'utf-8', (err, content) => {
        if (err) {
            return callback(err); // Early return pattern
        }

        cache[fileName] = content;
        callback(null, content);
    });
};

console.log('###1');

loadFile(filename, (err, content) => {
    if (err) {
        return console.log(er);
    }

    console.log(content);

    console.log('###3');

    loadFile(filename, (err, content) => {
        if (err) {
            return console.log(er);
        }

        console.log(content);
    });
    console.log('###4');
});

console.log('###2');
