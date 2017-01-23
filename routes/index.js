const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', function(req, res, next) {
    console.log('Root route');
    request.get('https://dl.dropboxusercontent.com/u/4825781/synbydesign.json', function(err, resp, body){
        res.send(JSON.parse(body));
    });
});

module.exports = router;