'use strict';

const getApp = require('../lib/getApp');
const request = require('supertest');
const expect = require('expect');

describe('getApp', () => {

  it('should return status code 200', done => {
    const app = getApp();

    request(app)
      .get('/')
      // .set
      // .send
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual('Hallo Welt');
        done();
      });
  });

});
