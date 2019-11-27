'use strict';

const events = require('events');

const needle = require('needle');

const { EventEmitter } = events;

class NetworkConnection extends EventEmitter {
  constructor (options) {
    if (!options) {
      throw new Error('Options are missing');
    }

    if (!options.host) {
      throw new Error('Host is missing');
    }

    if (!options.port) {
      throw new Error('Port is missing');
    }

    super();

    this.host = options.host;
    this.port = options.port;

    this.wasOnline = undefined;
    this.isOnline = undefined;

    // SetInterval(() => this.test(), 5 * 1000); // Better wait 5s after successful request (see above)
    this.test();
  }

  test () {
    needle.get(`https://${this.host}:${this.port}/`, err => {
      if (err) {
        this.wentOffline();
      } else {
        this.wentOnline();
      }

      setTimeout(() => this.test(), 5 * 1000);
    });
  }

  wentOffline () {
    this.wasOnline = this.isOnline;
    this.isOnline = false;

    if (this.isOnline !== this.wasOnline) {
      this.emit('offline');
    }
  }

  wentOnline () {
    this.wasOnline = this.isOnline;
    this.isOnline = true;

    if (this.isOnline !== this.wasOnline) {
      this.emit('online');
    }
  }
}

module.exports = NetworkConnection;
