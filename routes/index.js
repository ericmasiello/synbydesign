/* @flow */
const express = require('express');
const request = require('request');
const SYN_BY_DESIGN_ROUTE = require('../config').SYN_BY_DESIGN_ROUTE;

const router: express$Router = express.Router();

router.get('/', (req: express$Request, res: express$Response) => {
  request.get(`${SYN_BY_DESIGN_ROUTE}/data.json`, (err, resp, body) => {
    res.send(JSON.parse(body));
  });
});

module.exports = router;
