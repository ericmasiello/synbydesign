import * as express from 'express';
import apiRouter from './routes/api';
import uiRouter from './routes/ui';
import errorMiddleware from './middleware/errorMiddleware';


const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/api', apiRouter);
app.use('*', uiRouter);
app.use(errorMiddleware);

export default app;
