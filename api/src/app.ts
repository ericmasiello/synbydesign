import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as Sentry from '@sentry/node';
import apiRouter from './routes/api';
import errorMiddleware from './middleware/errorMiddleware';

const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14;

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

const app = express();
app.disable('x-powered-by'); // removes 'X-Powered-By: Express' header
app.use(Sentry.Handlers.requestHandler());
app.use(cors());
app.use(compression()); // enable gzip compression
app.set('port', process.env.PORT || 4000);
app.use(
  express.static('public', {
    maxAge: TWO_WEEKS,
  }),
);

app.use('/', apiRouter);
app.use(Sentry.Handlers.errorHandler());
app.use(errorMiddleware);

export default app;
