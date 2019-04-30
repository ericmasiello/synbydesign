import * as express from 'express';
import * as compression from 'compression';
import * as Sentry from '@sentry/node';
import apiRouter from './routes/api';
import errorMiddleware from './middleware/errorMiddleware';

const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14;

// TODO: make this a different value that is unique to the API now
Sentry.init({
  dsn: process.env.SENTRY_SERVER_DSN,
});

const app = express();
app.disable('x-powered-by'); // removes 'X-Powered-By: Express' header
app.use(Sentry.Handlers.requestHandler());
app.use(compression()); // enable gzip compression
app.set('port', process.env.PORT || 3000);
app.use(
  express.static('public', {
    maxAge: TWO_WEEKS,
  }),
);

app.use('/', apiRouter);
app.use(Sentry.Handlers.errorHandler());
app.use(errorMiddleware);

export default app;
