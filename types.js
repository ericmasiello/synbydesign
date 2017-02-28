/* @flow */
export type RootState = {
  selectedPortfolioId?: string,
  portfolio: Portfolio[],
  about?: string,
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

export type DetailComponentProps = {
  params: {
    id: string,
  },
};

export type Action = {|
  type: string,
  payload?: any,
|};

export type PortfolioAction = {|
  type: LoadPortfolioActionType,
  payload: Portfolio[],
|};

export type SelectedPortfolioAction = {|
  type: SelectPortfolioIdActionType,
  payload: ?string,
|};

export type AboutAction = {|
  type: LoadAboutActionType,
  payload: string,
|};

export type LoadPortfolioActionType = 'LOAD_PORTFOLIO';
export type SelectPortfolioIdActionType = 'SELECT_PORTFOLIO_ID';
export type LoadAboutActionType = 'LOAD_ABOUT';

export type About = {
  content: string,
};

export type AboutComponentProps = {
  loadAbout: Function,
  about: string,
};
