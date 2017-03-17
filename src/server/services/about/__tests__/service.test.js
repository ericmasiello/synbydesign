/* @flow */
import aboutService from '../service';
import aboutData from '../../../../data/about.json';

describe('About Service', () => {
  describe('#fetch', () => {
    it('should fetch about.json', (done) => {
      aboutService.fetch().then((result) => {
        expect(result).toEqual(aboutData);
        done();
      });
    });
  });
});
