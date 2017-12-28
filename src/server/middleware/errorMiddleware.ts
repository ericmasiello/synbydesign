import { BoomError } from 'boom';
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const errorMiddleware = (err: BoomError, req: Request, res: Response, next: NextFunction) => {
  logger.error(JSON.stringify(err.output.payload));
  return res.status(err.output.statusCode).json(err.output.payload);
}

export default errorMiddleware;
