import { Request, Response } from 'express';
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

export const portofolioDetailController = (req: Request, res: Response) => {
  const id = req.param('id');
  return getById(id).then((item) => {
    if (!item) {
      return res.status(404).send();
    }
    return res.json(item);
  });
};
