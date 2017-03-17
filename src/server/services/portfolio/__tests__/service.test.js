/* @flow */
import portfolioService from '../service';
import getPortfolioId from '../../../../util/portfolio';
import portfolioData from '../../../../data/portfolio.json';

describe('Portfolio Service', () => {
  describe('#fetchAll', () => {
    it('should fetch about.json', (done) => {
      portfolioService.fetchAll().then((result) => {
        expect(result).toEqual(portfolioData);
        done();
      });
    });
  });

  describe('#fetchById', () => {
    const portfolioItem = portfolioData[3];
    const id = getPortfolioId(portfolioItem);
    it('should return a matching record', (done) => {
      portfolioService
        .fetchById(id)
        .then((result) => {
          expect(result).toEqual(portfolioItem);
          done();
        });
    });
  });
});
