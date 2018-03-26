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

interface PortfolioFilterResult {
  items: Portfolio[];
  currentPageNumber: number;
  pageSize: number;
  totalPages: number;
  filterCategories: string[];
  filterTags: string[];
  filterSearchTerm: string;
}

export function list(
  options: {
    categories?: string[];
    tags?: string[];
    searchTerm?: string;
    pageSize?: number;
    pageNumber?: number;
  } = {},
): Promise<PortfolioFilterResult> {
  const {
    categories = [],
    tags = [],
    searchTerm = '',
    pageSize = 20,
    pageNumber = 0,
  } = options;

  const result: PortfolioFilterResult = {
    items: [],
    currentPageNumber: pageNumber,
    pageSize: pageSize,
    totalPages: 0,
    filterCategories: categories,
    filterTags: tags,
    filterSearchTerm: searchTerm,
  };

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
    return Promise.resolve(result);
  }

  result.totalPages = pages.length;

  if (pageNumber >= pages.length) {
    result.items = pages[pages.length - 1];
    result.currentPageNumber = pages.length;
    return Promise.resolve(result);
  }

  result.items = pages[pageNumber];

  return Promise.resolve(result);
}

export function getById(id: string): Promise<Portfolio | undefined> {
  return Promise.resolve(portfolioList.find(item => item.id === id));
}
