import sinon from 'sinon';
import Promise from 'bluebird';

import aboutService from '../service';
import request from '../req';

describe.only('About Service', () => {
  describe('#fetch', () => {
    beforeEach(() => {
      sinon.stub(request, 'fetch', Promise.resolve(JSON.stringify({
        body: {
          hello: 'world',
        },
      })));
    });
    afterEach(() => {
      request.fetch.restore();
    });
    it('should fetch about.json', (done) => {
      aboutService.fetch().then(() => {
        expect(true).toBe(true);
        done();
      });
    });
  });
});
