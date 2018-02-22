import rawPortfolioList from '../data/portfolio';
import kebabCase from 'lodash-es/kebabCase';
import chunk from 'lodash-es/chunk';

const portfolioList = rawPortfolioToPortfolio(rawPortfolioList);

function titleToId(title: string): string {
  return kebabCase(title).trim();
}

function matchListFilter(filters: string[], filterKey: string) {
  return (item: Portfolio) => {
    if (filters.length === 0) {
      return true;
    }

    const matches = filters
      .map(filter => {
        return (item[filterKey] as string[]).indexOf(filter) > -1;
      })
      .reduce((acc, current) => {
        return acc || current;
      }, false);

    return matches;
  };
}

function rawPortfolioToPortfolio(rawList: RawPortfolio[]): Portfolio[] {
  return rawList.map(item => ({
    id: titleToId(item.title),
    ...item,
  }));
}

export function list(
  options: {
    categories?: string[];
    tags?: string[];
    searchTerm?: string;
    pageSize?: number;
    pageNumber?: number;
  } = {},
): Promise<Portfolio[]> {
  const {
    categories = [],
    tags = [],
    searchTerm = '',
    pageSize = 20,
    pageNumber = 0,
  } = options;

  const list = portfolioList
    .filter(matchListFilter(categories, 'category'))
    .filter(matchListFilter(tags, 'tags'))
    .filter(item => {
      return (
        item.title.search(searchTerm) >= 0 ||
        (item.description && item.description.search(searchTerm) >= 0)
      );
    });

  const pages = chunk(list, pageSize);

  if (pages.length === 0) {
    return Promise.resolve([]);
  }

  if (pageNumber >= pages.length) {
    return Promise.resolve(pages[pages.length - 1]);
  }

  return Promise.resolve(pages[pageNumber]);
}

export function getById(id: string): Promise<Portfolio | undefined> {
  return Promise.resolve(portfolioList.find(item => item.id === id));
}
