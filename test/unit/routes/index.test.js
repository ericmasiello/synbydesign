const supertest = require('supertest');
const { expect } = require('chai');
const nock = require('nock');
const app = require('../../../app');
const { SYN_BY_DESIGN_ROUTE } = require('../../../config');

describe('routes', function () {
  let request;
  const dataStub = {
    whatsup: 'dog',
  };
  beforeEach(function () {
    nock(SYN_BY_DESIGN_ROUTE)
      .get(`/data.json`)
      .reply(200, dataStub);

    request = supertest(app)
      .get('/')
      .set('User-Agent', 'my cool browser')
      .set('Accept', 'test/plain');
  });

  it('should return a response', function (done) {
    request
      .expect(200)
      .expect(function (res) {        
        expect(JSON.parse(res.text)).to.deep.equal(dataStub);
      })
      .end(done);
  });
});
