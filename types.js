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
  fetchById: (id: string) => Promise<Portfolio>,
};

export type AboutService = {
  fetch: () => Promise<string>,
};

export type LoadPortfolio = () => Promise<Portfolio[]>;

export type DetailComponentProps = {
  params: {
    id: string,
  },
};

export type PortfolioAction = {|
  type: string,
  payload: Portfolio[],
|};

export type SelectedPortfolioAction = {
  type: string,
  payload: ?string,
};
