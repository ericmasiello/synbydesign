import rawPortfolioList from '../data/portfolio';
import kebabCase from 'lodash-es/kebabCase';
import chunk from 'lodash-es/chunk';

const IMAGE_HOSTING_URL = 'https://res.cloudinary.com/do50usfvq/image/upload';
const LARGE = 'w_700';
const MEDIUM = 'w_450';
const THUMB = 'w_200';

const portfolioList = rawPortfolioToPortfolio(rawPortfolioList);

function composeImagePaths(imagePaths: PortfolioImage[]) {
  return imagePaths.map(imagePath => {
    return {
      ...imagePath,
      originalUrl: `${IMAGE_HOSTING_URL}/f_auto/${imagePath.originalUrl}`,
      largeUrl: `${IMAGE_HOSTING_URL}/${LARGE},f_auto/${imagePath.originalUrl}`,
      mediumUrl: `${IMAGE_HOSTING_URL}/${MEDIUM},f_auto/${
        imagePath.originalUrl
      }`,
      thumbUrl: `${IMAGE_HOSTING_URL}/${THUMB},f_auto/${imagePath.originalUrl}`,
    };
  });
}

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
    ...item,
    id: titleToId(item.title),
    imagePaths: composeImagePaths(item.imagePaths),
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
): Promise<PortfolioFilterResult> {
  const {
    categories = [],
    tags = [],
    searchTerm = '',
    pageSize = 10,
    pageNumber = 1,
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

  result.items = pages[pageNumber - 1];

  return Promise.resolve(result);
}

export function getById(id: string): Promise<Portfolio | undefined> {
  return Promise.resolve(portfolioList.find(item => item.id === id));
}
