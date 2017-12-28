import { Request, Response } from 'express';
import { Store } from 'redux';
import { matchRoutes } from 'react-router-config';
import axios, { AxiosInstance } from 'axios';
import createStore from '../../utils/createStore';
import Routes, { RouteConfigWithLoadData } from '../../client/Routes';
import renderer from '../utils/renderer';

// TODO: move this to helper
let axiosInstance: AxiosInstance | undefined;

const getApiInstance = (req: Request) => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: `${req.protocol}://${req.get('host')}${req.originalUrl}api`,
    });
  }

  return axiosInstance;
};

const uiRootController = (req: Request, res: Response) => {
  const store = <Store<AppState>>createStore(getApiInstance(req));
  const promises = <Promise<{}>[]>matchRoutes(Routes, req.path)
    .map((matchedRoute) => {
      const route = <RouteConfigWithLoadData>matchedRoute.route;
      if (route.loadData) {
        return route.loadData(store);
      }
      return null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  return Promise.all(promises).then(() => {
    const context: Context = {};
    const { html, head, state } = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.render('index', { html, head, state });
  });
};

export default uiRootController;
