import portfolioList from '../data/portfolio';
import * as _ from 'lodash';
import portfolio from '../data/portfolio';

function titleToId(title: string): string {
  return _.kebabCase(title).trim();
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

  console.log('the options = ', options);

  // TODO: add filtering, pagination

  const list = portfolioList.map(item => ({
    id: titleToId(item.title),
    ...item,
  }));

  return Promise.resolve(list);
}

export function getById(id: string): Promise<Portfolio | undefined> {
  return list().then(items => items.find(item => item.id === id));
}
