import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import PortfolioDetail from './../components/portfolio-detail.component';
import DocumentTitle from 'react-document-title';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import PortfolioDetailDefault from './portfolio-detail/portfolio-detail-default.component.jsx';
import PortfolioDetailLiveWeb from './portfolio-detail/portfolio-detail-live-web.component';
import PortfolioDetailStackDesign from './portfolio-detail/portfolio-detail-stack-design.component';
import PortfolioDetailSVG from './portfolio-detail/portfolio-detail-svg.component';
import { TITLE, UI_IDS, MIN_LIVE_SITE_BROWSER_WIDTH_MQ } from '../configuration/';
import mockWebPortfolio from '../test-data/portfolio-web.mock';
import mockDesignPortfolio from '../test-data/portfolio-design.mock';
import transformPortfolioJSONUtil from '../util/transform-portfolio-json.util';

describe('PortfolioDetail', () => {
  'use strict';

  let requestedID = null;
  let r;
  let actual;
  let expected;

  afterEach(()=>{
    requestedID = null;
    r = undefined;
    actual = undefined;
    expected = undefined;
  });

  const mockLoadSelectedPortfolio = (ID) => {
    requestedID = ID;
  };

  it('should render a node with a portfolio-detail CSS class name', ()=>{
    r = TestUtils.createRenderer();
    r.render(<PortfolioDetail loadedAllItems={false}
                              loadSelectedPortfolio={mockLoadSelectedPortfolio}
                              params={{id: 5}} />);

    actual = r.getRenderOutput();
    expect(actual.type).toEqual('section');
    expect(actual.props.className).toEqual('portfolio-detail');
  });

  it('should set the document title', () => {

    r = TestUtils.createRenderer();
    r.render(<PortfolioDetail loadedAllItems={true}
                              portfolio={[]}
                              params={{id: 5}} />);

    actual = r.getRenderOutput();
    expect(actual).toIncludeJSX(<DocumentTitle title={`Loading... ${TITLE}`}/>);

    let mockPortfolioItem = [...transformPortfolioJSONUtil(mockWebPortfolio)][0];
    r = TestUtils.createRenderer();
    r.render(<PortfolioDetail loadedAllItems={true}
                              portfolio={[mockPortfolioItem]}
                              params={{id: mockPortfolioItem.ID}} />);

    actual = r.getRenderOutput();
    expect(actual).toIncludeJSX(<DocumentTitle title={`${mockPortfolioItem.title} - ${TITLE}`}/>);
  });

  it('should set the screen reader focus element', () => {

    r = TestUtils.createRenderer();
    r.render(<PortfolioDetail loadedAllItems={true}
                              portfolio={[]}
                              params={{id: 5}} />);

    actual = r.getRenderOutput();
    expect(actual).toIncludeJSX(<ScreenReaderFocusElm elmId={UI_IDS.portfolioDetail} className="no-focus-ring"/>);
  });

  describe('should render the appropriate page contents', ()=>{

    it('should render the default detail view', ()=>{

      let mockPortfolioItem = [...transformPortfolioJSONUtil(mockWebPortfolio)][0];
      mockPortfolioItem.meta = {}; //no meta props so should use default

      r = TestUtils.createRenderer();
      r.render(<PortfolioDetail loadedAllItems={true}
                                portfolio={[mockPortfolioItem]}
                                params={{id: mockPortfolioItem.ID}} />);

      actual = r.getRenderOutput();
      expect(actual).toIncludeJSX(<PortfolioDetailDefault portfolioItem={mockPortfolioItem} />);
    });

    it('should render the SVG view', ()=>{

      let mockPortfolioItem = [...transformPortfolioJSONUtil(mockWebPortfolio)][0];
      mockPortfolioItem.meta = {
        svg: (<svg></svg>)
      };

      r = TestUtils.createRenderer();
      r.render(<PortfolioDetail loadedAllItems={true}
                                portfolio={[mockPortfolioItem]}
                                params={{id: mockPortfolioItem.ID}} />);

      actual = r.getRenderOutput();
      expect(actual).toIncludeJSX(<PortfolioDetailSVG portfolioItem={mockPortfolioItem} />);
    });

    it('should render the live web view', ()=>{

      let mockPortfolioItem = [...transformPortfolioJSONUtil(mockWebPortfolio)][0];
      mockPortfolioItem.meta = {
        showLiveSite: true
      };

      r = TestUtils.createRenderer();
      r.render(<PortfolioDetail loadedAllItems={true}
                                portfolio={[mockPortfolioItem]}
                                params={{id: mockPortfolioItem.ID}} />);

      actual = r.getRenderOutput();
      expect(actual).toIncludeJSX(<PortfolioDetailLiveWeb liveSiteMinWidthMQ={MIN_LIVE_SITE_BROWSER_WIDTH_MQ} portfolioItem={mockPortfolioItem} />);
    });

    it('should render the stack design view', ()=>{

      let mockPortfolioItem = [...transformPortfolioJSONUtil(mockDesignPortfolio)][0];
      mockPortfolioItem.meta = {
        stackDesign: true
      };

      r = TestUtils.createRenderer();
      r.render(<PortfolioDetail loadedAllItems={true}
                                portfolio={[mockPortfolioItem]}
                                params={{id: mockPortfolioItem.ID}} />);

      actual = r.getRenderOutput();
      expect(actual).toIncludeJSX(<PortfolioDetailStackDesign portfolioItem={mockPortfolioItem} />);
    });
  });
});
