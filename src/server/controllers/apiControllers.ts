import { Request, Response } from 'express';
import * as proxy from 'express-http-proxy';
import { RequestOptions } from 'http';
import { list, getById } from '../services/portfolioService';

export const proxyConfig = {
  proxyReqOptDecorator(opts: RequestOptions) {
    if (opts.headers) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
    }
    return opts;
  },
};

export const proxyController = proxy('http://react-ssr-api.herokuapp.com', proxyConfig);

export const portofolioController = (req: Request, res: Response) => {
  const {
    categories,
    tags,
    s: searchTerm,
    pageSize,
    pageNumber
  } = req.query;

  return list({
    categories,
    tags,
    searchTerm,
    pageNumber,
    pageSize,
  }).then(items => res.json(items))
};

export const portofolioDetailController = (req: Request, res: Response) => {
  const id = req.param('id');
  return getById(id).then(item => {
    if (!item) {
      res.status(404);
    }
    return res.json(item)
  });
};
