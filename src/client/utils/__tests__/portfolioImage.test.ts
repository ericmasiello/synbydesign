import {
  getImagePath,
  showSVG,
} from '../portfolioImage';

describe('getImagePath', () => {
  it('should prefer the large image path', () => {
    const imagePaths: PortfolioImage[] = [{
      largeUrl: '/path/to/large.jpg',
      originalUrl: '/path/to/full.jpg',
      mediumUrl: '/path/to/medium.jpg',
    }];

    const result = getImagePath(imagePaths);
    expect(result).toEqual('/path/to/large.jpg');
  });

  it('should fall back to original when large is not available', () => {
    const imagePaths: PortfolioImage[] = [{
      originalUrl: '/path/to/full.jpg',
      mediumUrl: '/path/to/medium.jpg',
    }];

    const result = getImagePath(imagePaths);
    expect(result).toEqual('/path/to/full.jpg');
  });

  it('should return no value when no valid image paths exist', () => {
    const imagePaths: PortfolioImage[] = [];

    const result = getImagePath(imagePaths);
    expect(result).toEqual(undefined);
  });
});

describe('showSVG', () => {
  it('should not show SVG when isSVG is not true', () => {
    expect(showSVG()).toBe(false);
    expect(showSVG({ svgSource: 'someSVG' })).toBe(false);
    expect(showSVG({ meta: {}, svgSource: 'someSVG' })).toBe(false);
    expect(showSVG({ meta: { isSVG: false }, svgSource: 'someSVG' })).toBe(false);
  });

  it('should not show SVG when svgSource is not set', () => {
    expect(showSVG()).toBe(false);
    expect(showSVG({})).toBe(false);
    expect(showSVG({ meta: {} })).toBe(false);
    expect(showSVG({ meta: { isSVG: true } })).toBe(false);
  });

  it('should show SVG when isSVG is true and svgSource is set', () => {
    expect(showSVG({ meta: { isSVG: true }, svgSource: 'someSVG' })).toBe(true);
  });
});
