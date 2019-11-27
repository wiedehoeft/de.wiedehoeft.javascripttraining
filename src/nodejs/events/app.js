'use strict';

const NetworkConnection = require('./NetworkConnection');

const networkConnection = new NetworkConnection({host: 'www.thenativeweb.io', port: 443});

const onOnline = () => {
  console.log('online');
};

const onOffline = () => {
  console.log('offline');
};

networkConnection.on('online', onOnline);

networkConnection.on('offline', onOffline);

/* Further methods */

// networkConnection.once('online', () => {
//   console.log('online');
// });
//
// networkConnection.once('offline', () => {
//   console.log('offline');
// });

// networkConnection.removeListener('online', onOnline);
