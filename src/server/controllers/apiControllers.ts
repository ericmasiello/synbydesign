import { Request, Response, NextFunction } from 'express';
import * as boom from 'boom';
import { list, getById } from '../services/portfolioService';
import { getResume } from '../services/resumeService';
import logger from '../utils/logger';

export const portofolioController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    categories,
    tags,
    s: searchTerm,
    pageSize,
    pageNumber = 0,
  } = req.query;

  logger.info('Requesting portfolio list with:', req.query);

  return list({
    categories,
    tags,
    searchTerm,
    pageNumber,
    pageSize,
  })
    .then(result =>
      res
        .set({
          _currentpagenumber: result.currentPageNumber,
          _pagesize: result.pageSize,
          _totalpages: result.totalPages,
          _filtercategories: result.filterCategories,
          _filtertags: result.filterTags,
          _filtersearchterm: result.filterSearchTerm,
        })
        .json(result.items),
    )
    .catch((error: Error) => next(boom.badImplementation(error.message)));
};

export const portofolioDetailController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id;

  logger.info('Requesting portfolio detail with id:', id);

  return getById(id).then(item => {
    if (!item) {
      return next(boom.notFound('Portfolio item does not exist'));
    }
    return res.json(item);
  });
};

export const resumeController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.info('Requesting resume');
  return getResume()
    .then(resume => res.json(resume))
    .catch((error: Error) => next(boom.badImplementation(error.message)));
};
