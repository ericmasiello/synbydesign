import supertest from 'supertest';
import { expect } from 'chai';
import nock from 'nock';
import cheerio from 'cheerio';
import app from '../../../app/server';
import { SYN_BY_DESIGN_ROUTE } from '../../../app/config';

describe('routes', function () {
  let request;
  const dataStub = {
    whatsup: 'dog',
  };
  beforeEach(() => {
    nock(SYN_BY_DESIGN_ROUTE)
      .get('/portfolio.json')
      .reply(200, dataStub);

    nock(SYN_BY_DESIGN_ROUTE)
      .get('/about.json')
      .reply(200, dataStub);

    request = supertest(app)
      .get('/')
      .set('User-Agent', 'my cool browser')
      .set('Accept', 'test/plain');
  });

  it('should render div#app', function (done) {
    request
      .expect(200)
      .expect(function (res) {
        const $ = cheerio.load(res.text);
        expect($('#app')).to.have.length(1);
      })
      .end(done);
  });

  it('should render a script tag with redux state', function (done) {
    request
      .expect(200)
      .expect(function (res) {
        const $ = cheerio.load(res.text);
        expect($('script').text().includes('window.__PRELOADED_DATA__')).to.be.true;
      })
      .end(done);
  });
});
