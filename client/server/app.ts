import * as express from 'express';
import * as next from 'next';
import portfolioControllerFactory from './controllers/portfolio';

const port = parseInt(process.env.PORT || '', 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const portfolioController = portfolioControllerFactory(app);

    server.get('/portfolio/:id', portfolioController.detail);

    server.get('*', (req: any, res: any) => {
      return handle(req, res);
    });

    server.listen(port, (err: Error) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex: Error) => {
    console.error(ex.stack);
    process.exit(1);
  });
