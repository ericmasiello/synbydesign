import { Request, Response, NextFunction } from 'express';
import * as boom from 'boom';
import { list, getById } from '../services/portfolioService';
import logger from '../utils/logger';

export const portofolioController = (req: Request, res: Response, next: NextFunction) => {
  const {
    categories,
    tags,
    s: searchTerm,
    pageSize,
    pageNumber,
  } = req.query;

  logger.info('Requesting portfolio list with:', req.query);

  return list({
    categories,
    tags,
    searchTerm,
    pageNumber,
    pageSize,
  })
  .then(items => res.json(items))
  .catch((error: Error) => next(boom.badImplementation(error.message)));
};

export const portofolioDetailController = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  logger.info('Requesting portfolio detail with id:', id);

  return getById(id).then((item) => {
    if (!item) {
      return next(boom.notFound('Portfolio item does not exist'));
    }
    return res.json(item);
  });
};
