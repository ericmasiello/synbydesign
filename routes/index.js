const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', (req, res) => {
  request.get('https://dl.dropboxusercontent.com/u/4825781/synbydesign.json', (err, resp, body) => {
    res.send(JSON.parse(body));
  });
});

module.exports = router;
