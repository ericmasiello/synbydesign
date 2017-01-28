import supertest from 'supertest';
import { expect } from 'chai';
import nock from 'nock';
import app from '../../../app';
import { SYN_BY_DESIGN_ROUTE } from '../../../config';

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
