import expect from 'expect';
import filter from './transform-portfolio-json.util';
import mockWebPortfolio from '../test-data/portfolio-web.mock.json';
import mockDesignPortfolio from '../test-data/portfolio-design.mock.json';
import mockOtherPortfolio from '../test-data/portfolio-other.mock.json';

describe('Transform Portfolio JSON Utility', () => {

  let actual;
  let expected;

  afterEach(()=>{
    actual = undefined;
    expected = undefined;
  });

  it('should return the the inputted value if its not an array of length greater than zero', ()=>{

    actual = filter([]);
    expected = [];

    expect(actual).toEqual(expected);

    actual = filter(5);
    expected = 5;

    expect(actual).toEqual(expected);

    actual = filter(null);
    expected = null;

    expect(actual).toEqual(expected);
  });

  it('should transform a list of portfolio items', () => {

    actual = filter([mockWebPortfolio[0]]);

    expected = [{
      ID: 53,
      title: 'Anarchostar',
      slug: 'anarchostar',
      sticky: false,
      featuredImagePath: 'http:\/\/www.synbydesign.com\/wp\/wp-content\/uploads\/2015\/02\/anarchostar1.jpg',
      fullSizeImage: {
        altText: 'anarchostar',
        maxHeight: '4704',
        maxWidth: '1400',
        path: 'http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar.jpg'
      },
      skills: ['HTML5 Audio', 'Mobile\/Responsive Design', 'Parallax', 'Wordpress Custom Theme', 'Wordpress Plugin'],
      isWebsite: true,
      isDesign: false,
      isOther: false,
      isMix: false,
      meta: {
        showLiveSite: true,
        liveSiteUrl: 'http://www.anarchostar.com'
      }
    }];

    expect(actual).toEqual(expected);

  });
});