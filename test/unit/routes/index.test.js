import supertest from 'supertest';
import { expect } from 'chai';
import nock from 'nock';
import cheerio from 'cheerio';
import app from '../../../app';
import { SYN_BY_DESIGN_ROUTE } from '../../../config';

describe('routes', function () {
  let request;
  const dataStub = {
    whatsup: 'dog',
  };
  beforeEach(() => {
    nock(SYN_BY_DESIGN_ROUTE)
      .get('/data.json')
      .reply(200, dataStub);

    request = supertest(app)
      .get('/')
      .set('User-Agent', 'my cool browser')
      .set('Accept', 'test/plain');
  });

  it('should render hello world', function (done) {
    request
      .expect(200)
      .expect(function (res) {
        const $ = cheerio.load(res.text);
        const app = $('#app');
        expect(app.text().trim()).to.equal('Hello World');
      })
      .end(done);
  });
});
