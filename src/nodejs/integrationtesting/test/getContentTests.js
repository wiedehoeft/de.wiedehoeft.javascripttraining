'use strict';

const nock = require('nock');

const getContent = require('../lib/getContent');
const expect = require('expect');

describe('getContent', () => {
  it('should return null if there was no error', done => {
    const tnw = nock('http://thenativeweb.io')
      .get('/')
      .reply(200);

    getContent(err => {
      expect(err).toBeNull();
      expect(tnw.isDone()).toBeTruthy();
      done();
    });
  });

  it('returns an error if network is down', done => {
    nock.disableNetConnect();

    getContent(err => {
      expect(err).toBeDefined();
      nock.enableNetConnect();
      done();
    });
  });
});
