import * as express from 'express';
import * as boom from 'boom';
import apiRouter from './routes/api';
import uiRouter from './routes/ui';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/api', apiRouter);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('*', uiRouter);

app.use('/api', apiRouter);
app.use('*', uiRouter);
app.use((err: boom.BoomError, req: express.Request, res: express.Response, next: express.NextFunction) => {

  return res.status(err.output.statusCode).json(err.output.payload);
});

export default app;
