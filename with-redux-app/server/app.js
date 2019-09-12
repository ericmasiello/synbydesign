import express from 'express';
import next from 'next';
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

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      if (dev) {
        console.log(`> Ready on http://localhost:${port}`);
      }
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
