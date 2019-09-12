export default (app) => {
  const detail = (req, res) => {
    const actualPage = '/portfolio';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  };

  return { detail };
};
