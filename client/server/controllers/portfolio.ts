import * as next from 'next';
import { RequestHandler } from 'express-serve-static-core';

export default (app: next.Server) => {
  const detail: RequestHandler = (req, res) => {
    const actualPage = '/portfolio';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  };

  return { detail };
};
