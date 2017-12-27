import portfolioList from '../data/portfolio';
import * as _ from 'lodash';
import portfolio from '../data/portfolio';

function titleToId(title: string): string {
  return _.kebabCase(title).trim();
}

function matchListFilter(filters: string[], filterKey: string) {
  return ((item: Portfolio) => {
    if (filters.length === 0) {
      return true;
    }

    const matches = filters.map(filter => {
      return (item[filterKey] as string[]).indexOf(filter) > -1;
    }).reduce((acc, current) => {
      return acc || current;
    }, false);

    return matches;
  });
}

export function list(options: {
  categories?: string[];
  tags?: string[];
  searchTerm?: string;
  pageSize?: number;
  pageNumber?: number;
} = {}): Promise<Portfolio[]> {

  const {
    categories = [],
    tags = [],
    searchTerm = '',
    pageSize = 20,
    pageNumber = 0,
  } = options;

  const list = portfolioList.map(item => ({
    id: titleToId(item.title),
    ...item,
  }))
  .filter(matchListFilter(categories, 'category'))
  .filter(matchListFilter(tags, 'tags'))
  .filter(item => {
    return (item.title.search(searchTerm) >= 0 || 
      (item.description && item.description.search(searchTerm) >= 0)
    );
  })

  return Promise.resolve(_.chunk(list, pageSize)[pageNumber]);
}

export function getById(id: string): Promise<Portfolio | undefined> {
  return list().then(items => items.find(item => item.id === id));
}
