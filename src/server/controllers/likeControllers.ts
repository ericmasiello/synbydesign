import { RequestHandler } from 'express';
import * as boom from 'boom';
import { getById as portfolioGetById } from '../services/portfolioService';
import { likeAction, unlikeAction } from '../services/likeService';
import logger from '../utils/logger';

export const likeController: RequestHandler = (req, res, next) => {
  const id: string = req.params.id;

  logger.info('liking with id:', id);

  return portfolioGetById(id)
    .then(portfolio => {
      const title = portfolio && portfolio.title;

      return likeAction(id, title)
        .then(status => {
          if (status.code >= 400 && status.code < 500) {
            throw boom.badRequest(status.message);
          } else if (status.code >= 500) {
            throw boom.badImplementation(status.message);
          }
          res.json({
            success: true,
          });
        })
        .catch((error: boom<any>) => {
          next(error);
        });
    })
    .catch((error: Error) => {
      next(boom.badImplementation(error.message));
    });
};

export const unlikeController: RequestHandler = (req, res, next) => {
  const id: string = req.params.id;

  logger.info('unliking with id:', id);

  return portfolioGetById(id)
    .then(portfolio => {
      const title = portfolio && portfolio.title;

      return unlikeAction(id, title)
        .then(status => {
          if (status.code >= 400 && status.code < 500) {
            throw boom.badRequest(status.message);
          } else if (status.code >= 500) {
            throw boom.badImplementation(status.message);
          }
          res.json({
            success: true,
          });
        })
        .catch((error: boom<any>) => {
          next(error);
        });
    })
    .catch((error: Error) => {
      next(boom.badImplementation(error.message));
    });
};
