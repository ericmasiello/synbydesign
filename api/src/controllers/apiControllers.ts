import { RequestHandler } from 'express';
import * as Sentry from '@sentry/node';
import * as boom from 'boom';
import { list, getById } from '../services/portfolioService';
import { getResume } from '../services/resumeService';
import logger from '../utils/logger';

const filterStringToList = (filter: string): string[] => {
  if (filter.trim() === '') {
    return [];
  }
  return filter.split(',');
};

export const portofolioController: RequestHandler = (req, res, next) => {
  const {
    categories = '',
    tags = '',
    searchTerm = '',
    pageSize = '10',
    requestedPageNumber = '1',
  } = req.query as PortfolioReceivedParams;

  logger.info('Requesting portfolio list with:', req.query);

  return list({
    categories: filterStringToList(categories),
    tags: filterStringToList(tags),
    searchTerm,
    pageNumber: parseInt(requestedPageNumber, 10),
    pageSize: parseInt(pageSize, 10),
  })
    .then(result =>
      res
        .set({
          _currentpagenumber: result.currentPageNumber.toString(),
          _pagesize: result.pageSize.toString(),
          _totalpages: result.totalPages.toString(),
          _filtercategories: result.filterCategories.join(','),
          _filtertags: result.filterTags.join(','),
          _filtersearchterm: result.filterSearchTerm,
        } as PortfolioResponseParams)
        .json(result.items),
    )
    .catch((error: Error) => {
      Sentry.captureException(error);
      next(boom.badImplementation(error.message));
    });
};

export const portofolioDetailController: RequestHandler = (req, res, next) => {
  const id = req.params.id;

  logger.info('Requesting portfolio detail with id:', id);

  return getById(id).then(item => {
    if (!item) {
      Sentry.captureMessage(`Portfolio item does not exist: ${id}`);
      return next(boom.notFound(`Portfolio item does not exist: ${id}`));
    }
    return res.json(item);
  });
};

export const resumeController: RequestHandler = (req, res, next) => {
  logger.info('Requesting resume');
  return getResume()
    .then(resume => res.json(resume))
    .catch((error: Error) => {
      Sentry.captureException(error);
      next(boom.badImplementation(error.message));
    });
};