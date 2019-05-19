import * as express from 'express';
import * as next from 'next';
// import * as pathMatch from 'path-match';

const port = parseInt(process.env.PORT || '', 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const route = pathMatch();
// const match = route('/about/:name');

app
  .prepare()
  .then(() => {
    const server = express();

    // FIXME: remove any
    server.get('/portfolio/:id', (req: any, res: any) => {
      const actualPage = '/portfolio';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

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
