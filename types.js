/* @flow */
export type RootState = {
  selectedPortfolioId?: string,
  portfolio: Portfolio[],
  about?: string,
  loadingCount?: number,
};

export type RootStateReducer = {
  selectedPortfolioId: Function,
  portfolio: Function,
  about: Function,
  loadingCount: Function,
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

export type PortfolioService = {
  fetchAll: () => Promise<Portfolio[]>,
  fetchById: (id: string) => Promise<?Portfolio>,
};

export type AboutService = {
  fetch: () => Promise<About>,
};

export type LoadPortfolio = () => Promise<Portfolio[]>;

export type PortfolioDetailComponentProps = {
  params: {
    id: string,
  },
  portfolioDetail: Portfolio,
  loadPortfolioDetail: Function,
};

export type Action = {|
  type: string,
  payload?: any,
|};

export type About = {
  content: string,
};

export type AboutComponentProps = {
  loadAbout: Function,
  about: string,
};
