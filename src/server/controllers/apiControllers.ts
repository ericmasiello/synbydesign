import { Request, Response, NextFunction } from 'express';
import * as boom from 'boom';
import { list, getById } from '../services/portfolioService';

export const portofolioController = (req: Request, res: Response) => {
  const {
    categories,
    tags,
    s: searchTerm,
    pageSize,
    pageNumber,
  } = req.query;

  return list({
    categories,
    tags,
    searchTerm,
    pageNumber,
    pageSize,
  }).then(items => res.json(items));
};

export const portofolioDetailController = (req: Request, res: Response, next: NextFunction) => {
  const id = req.param('id');
  return getById(id).then((item) => {
    if (!item) {
      return next(boom.notFound('Portfolio item does not exist'));
    }
    return res.json(item);
  });
};
