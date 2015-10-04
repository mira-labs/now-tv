var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var movieFilePath = require('../data/data.json');
/* GET movies listing. */
router.get('/movies', function(req, res, next) {
  res.json(movieFilePath.movies.slice(0,20));
});

module.exports = router;
