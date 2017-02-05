/* @flow */
export type RootState = {
  portfolio: string[],
};


export type AppProps = {
  portfolio: Portfolio[],
  children: any, // FIXME: should be a React node
};

type PortfolioMeta = {
  stackDesign: boolean,
  mixUrl: string,
  trackList: string,
  websiteUrl: string,
  isSVG: boolean,
};

export type Portfolio = {|
  title: string,
  meta: ?PortfolioMeta,
  category: string[],
  tags: string[],
  svgSource: ?string,
  imagePaths: {
    full: {
      url: string,
    },
  }
|};

export type PortfolioAction = {|
  type: string,
  payload: Portfolio[],
|};
