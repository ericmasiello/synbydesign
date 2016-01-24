import expect from 'expect';
import filter from './transform-portfolio-json.util';
import mockWebPortfolio from '../test-data/portfolio-web.mock.json';
import mockDesignPortfolio from '../test-data/portfolio-design.mock.json';
import mockOtherPortfolio from '../test-data/portfolio-other.mock.json';

describe('Transform Portfolio JSON Utility', () => {
  'use strict';

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
  });

  it('should set default alt text if not defined', () => {

    let mockData = mockWebPortfolio[0];
    //removing alt property from html
    mockData.content = '<p><a href=\"http:\/\/www.synbydesign.com\/wp\/wp-content\/uploads\/2015\/02\/anarchostar.jpg\"><img class=\"alignright size-full wp-image-57\" src=\"http:\/\/www.synbydesign.com\/wp\/wp-content\/uploads\/2015\/02\/anarchostar.jpg\" width=\"1400\" height=\"4704\" \/><\/a><\/p>\n';
    actual = filter([mockWebPortfolio[0]])[0].fullSizeImage.altText;

    expected = 'Anarchostar';

    expect(actual).toEqual(expected);
  });

  describe('should set meta properties', ()=>{

    it('should set the showLiveSite and liveSiteUrl properties if the portfolio is a website', ()=>{

      let mockData = Object.assign({},mockWebPortfolio[0]);
      mockData.custom_meta = {
        website_url: 'http://www.synbydesign.com'
      };
      actual = filter([mockData])[0].meta;

      expected = {
        showLiveSite: true,
        liveSiteUrl: 'http://www.synbydesign.com'
      };

      expect(actual.showLiveSite).toEqual(expected.showLiveSite);
      expect(actual.liveSiteUrl).toEqual(expected.liveSiteUrl);


      mockData = Object.assign({},mockDesignPortfolio[0]);
      mockData.custom_meta = {
        website_url: 'http://www.synbydesign.com'
      };
      actual = filter([mockData])[0].meta;

      expected = {
        showLiveSite: false,
        liveSiteUrl: null
      };

      expect(actual.showLiveSite).toEqual(expected.showLiveSite);
      expect(actual.liveSiteUrl).toEqual(expected.liveSiteUrl);
    });

    it('should set the stackDesign property if value is set and is design portfolio', () =>{

      let mockData = Object.assign({},mockDesignPortfolio[0]);
      mockData.custom_meta = {
        stack_design: 'true'
      };
      actual = filter([mockData])[0].meta;
      expected = {
        stackDesign: true
      };
      expect(actual.stackDesign).toEqual(expected.stackDesign);

      mockData = Object.assign({},mockDesignPortfolio[0]);
      actual = filter([mockData])[0].meta;
      expected = {
        stackDesign: false
      };
      expect(actual.stackDesign).toEqual(expected.stackDesign);


      mockData = Object.assign({},mockOtherPortfolio[0]);
      mockData.custom_meta = {
        stack_design: 'true'
      };
      actual = filter([mockData])[0].meta;
      expected = {
        stackDesign: false
      };
      expect(actual.stackDesign).toEqual(expected.stackDesign);
    });
  });
});