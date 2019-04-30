import * as Boom from 'boom';
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const errorMiddleware = (
  err: Boom | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error = err as Boom;
  if (error && error.isBoom) {
    logger.error(JSON.stringify(error.output.payload));
    return res.status(error.output.statusCode).json(error.output.payload);
  }
  logger.error(err.message);
  return res.status(500).json({
    name: err.name,
    message: err.message,
  });
};

export default errorMiddleware;
