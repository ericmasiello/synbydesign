import { Request, Response } from 'express';
import { Store } from 'redux';
import { matchRoutes } from 'react-router-config';
import axios, { AxiosInstance } from 'axios';
import createStore from '../../utils/createStore';
import Routes, { RouteConfigWithLoadData } from '../../client/Routes';
import renderer from '../utils/renderer';
import logger from '../utils/logger';

// TODO: move this to helper
let axiosInstance: AxiosInstance | undefined;

const getApiInstance = (req: Request) => {
  if (!axiosInstance) {
    const baseURL = `${req.protocol}://${req.get('host')}/api`;
    logger.info('Creating axios instance with url', baseURL);
    axiosInstance = axios.create({
      baseURL: `${req.protocol}://${req.get('host')}/api`,
    });
  }

  return axiosInstance;
};

const uiRootController = (req: Request, res: Response) => {
  const url = req.baseUrl;
  logger.info('Calling ui controller with path', url);

  const store = <Store<AppState>>createStore(getApiInstance(req));

  const promises = <Promise<{}>[]>matchRoutes(Routes, url)
    .map(matchedRoute => {
      logger.info('Found matching route:', matchedRoute.match);
      const route = <RouteConfigWithLoadData>matchedRoute.route;
      if (route.loadData) {
        return route.loadData(store, matchedRoute.match.params);
      }
      return null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          return promise.then(resolve).catch(resolve);
        });
      }
    });

  return Promise.all(promises).then(() => {
    logger.info('Done loading all promises');
    const context: Context = {};
    try {
      const { html, head, state } = renderer(url, store, context);

      if (context.url) {
        logger.warn('Redirecting to', context.url);
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        logger.warn('Context not found');
        res.status(404);
      }

      logger.info('Rendering view');
      res.render('index', { html, head, state });
    } catch (error) {
      logger.error('Rendering error view', error);
      res.render('error', { html: '' });
    }
  });
};

export default uiRootController;
