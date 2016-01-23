import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import PortfolioList from './../components/portfolio-list.component';
import mockWebPortfolio from '../test-data/portfolio-web.mock.json';
import mockDesignPortfolio from '../test-data/portfolio-design.mock.json';
import mockOtherPortfolio from '../test-data/portfolio-other.mock.json';

describe('PortfolioList', () => {

  const mockLoadAllPortfolio = function(){};
  const WebTitle = <h1 className="h3  text-center">Web Design &amp; Development</h1>;
  const DesignTitle = <h1 className="h3  text-center">Illustration, Logos, &amp; Flyers</h1>;
  const OtherTitle = <h1 className="h3  text-center">Other Rad Stuff</h1>;

  it('should render its root element as a section', () => {

    const r = TestUtils.createRenderer();
    r.render(<PortfolioList loadAllPortfolio={mockLoadAllPortfolio} portfolio={[]} />);
    const actual = r.getRenderOutput();
    const rootTag = actual.type;
    const expected = 'section';

    expect(rootTag).toEqual(expected);
  });

  it('should request portfolio items of the appropriate categories based on whether or not we have already loaded all the items', () => {

    let actual = [];
    const customMockLoadAllPortfolio = (categories) => {
      actual = categories
    };

    const r = TestUtils.createRenderer();
    r.render(<PortfolioList loadAllPortfolio={customMockLoadAllPortfolio} portfolio={[]} loadedAllItems={false} />);
    r.getRenderOutput();
    let expected = ['web','other', 'logos', 'illustration', 'flyers', 'business-cards'];

    expect(actual).toEqual(expected);

    actual = []; //reset

    r.render(<PortfolioList loadAllPortfolio={customMockLoadAllPortfolio} portfolio={[]} loadedAllItems={true} />);
    r.getRenderOutput();
    expected = [];

    expect(actual).toEqual(expected);
  });

  it('should not render web, design, other headings when no corresponding portfolio data is provided', () => {

    const r = TestUtils.createRenderer();
    r.render(<PortfolioList loadAllPortfolio={mockLoadAllPortfolio} portfolio={[]} />);
    const actual = r.getRenderOutput();
    expect(actual).toNotIncludeJSX(WebTitle);
    expect(actual).toNotIncludeJSX(DesignTitle);
    expect(actual).toNotIncludeJSX(OtherTitle);
  });

  it('should render the web section when web portfolio items are provided', () => {

    const r = TestUtils.createRenderer();
    r.render(<PortfolioList loadAllPortfolio={mockLoadAllPortfolio} portfolio={[...mockWebPortfolio]} />);
    const actual = r.getRenderOutput();

    expect(actual).toIncludeJSX(WebTitle);
    expect(actual).toNotIncludeJSX(DesignTitle);
    expect(actual).toNotIncludeJSX(OtherTitle);
  });

  it('should render the design section when design portfolio items are provided', () => {

    const r = TestUtils.createRenderer();
    r.render(<PortfolioList loadAllPortfolio={mockLoadAllPortfolio} portfolio={[...mockDesignPortfolio]} />);
    const actual = r.getRenderOutput();

    expect(actual).toNotIncludeJSX(WebTitle);
    expect(actual).toIncludeJSX(DesignTitle);
    expect(actual).toNotIncludeJSX(OtherTitle);
  });

  it('should render the other section when other portfolio items are provided', () => {

    const r = TestUtils.createRenderer();
    r.render(<PortfolioList loadAllPortfolio={mockLoadAllPortfolio} portfolio={[...mockOtherPortfolio]} />);
    const actual = r.getRenderOutput();

    expect(actual).toNotIncludeJSX(WebTitle);
    expect(actual).toNotIncludeJSX(DesignTitle);
    expect(actual).toIncludeJSX(OtherTitle);
  });
});