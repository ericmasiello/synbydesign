const supertest = require('supertest');
const app = require('../../../app');
const expect = require('chai').expect;

describe('routes', function () {

  let request;
  beforeEach(function () {
    request = supertest(app)
      .get('/')
      .set('User-Agent', 'my cool browser')
      .set('Accept', 'test/plain')
  });

  it('should return a response', function (done) {
    request
      .expect(200)
      .expect(function (res) {
        expect(res.text).to.equal('Hello world');
      })
      .end(done);
  });
});