import {
  getImagePath,
  showSVG,
} from '../portfolioImage';

describe('getImagePath', () => {
  it('should prefer the large image path', () => {
    const imagePaths: ImagePaths = {
      large: {
        url: '/path/to/large.jpg',
      },
      full: {
        url: '/path/to/full.jpg',
      },
      medium: {
        url: '/path/to/medium.jpg',
      },
    };

    const result = getImagePath(imagePaths);
    expect(result).toEqual({
      url: '/path/to/large.jpg',
    });
  });

  it('should fall back to full when large is not avaialble', () => {
    const imagePaths: ImagePaths = {
      full: {
        url: '/path/to/full.jpg',
      },
      medium: {
        url: '/path/to/medium.jpg',
      },
    };

    const result = getImagePath(imagePaths);
    expect(result).toEqual({
      url: '/path/to/full.jpg',
    });
  });

  it('should fall back to medium when large and full are not avaialble', () => {
    const imagePaths: ImagePaths = {
      medium: {
        url: '/path/to/medium.jpg',
      },
    };

    const result = getImagePath(imagePaths);
    expect(result).toEqual({
      url: '/path/to/medium.jpg',
    });
  });

  it('should return no value when no valid image paths exist', () => {
    const imagePaths: ImagePaths = {};

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
