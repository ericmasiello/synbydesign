import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import PortfolioList from './../components/portfolio-list.component';
import mockWebPortfolio from '../test-data/portfolio-web.mock';
import mockDesignPortfolio from '../test-data/portfolio-design.mock';
import mockOtherPortfolio from '../test-data/portfolio-other.mock';
import transformPortfolioJSONUtil from '../util/transform-portfolio-json.util';

expect.extend(expectJSX);

describe('PortfolioList', () => {
  const mockLoadAllPortfolio = () => {};
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
    r.render(
      <PortfolioList
        loadAllPortfolio={mockLoadAllPortfolio}
        portfolio={[...transformPortfolioJSONUtil(mockWebPortfolio)]}
      />,
    );
    const actual = r.getRenderOutput();

    expect(actual).toIncludeJSX(WebTitle);
    expect(actual).toNotIncludeJSX(DesignTitle);
    expect(actual).toNotIncludeJSX(OtherTitle);
  });

  it('should render the design section when design portfolio items are provided', () => {
    const r = TestUtils.createRenderer();
    r.render(
      <PortfolioList
        loadAllPortfolio={mockLoadAllPortfolio}
        portfolio={[...transformPortfolioJSONUtil(mockDesignPortfolio)]}
      />,
    );
    const actual = r.getRenderOutput();

    expect(actual).toNotIncludeJSX(WebTitle);
    expect(actual).toIncludeJSX(DesignTitle);
    expect(actual).toNotIncludeJSX(OtherTitle);
  });

  it('should render the other section when other portfolio items are provided', () => {
    const r = TestUtils.createRenderer();
    r.render(
      <PortfolioList
        loadAllPortfolio={mockLoadAllPortfolio}
        portfolio={[...transformPortfolioJSONUtil(mockOtherPortfolio)]}
      />,
    );
    const actual = r.getRenderOutput();

    expect(actual).toNotIncludeJSX(WebTitle);
    expect(actual).toNotIncludeJSX(DesignTitle);
    expect(actual).toIncludeJSX(OtherTitle);
  });
});
