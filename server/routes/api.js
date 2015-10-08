var express = require('express');
var router = express.Router();

var jsonQuery = require('json-query');
var output = {};
var movieFilePath = require('../data/data.json');
/* GET movies listing. */

router.get('/movies/', function (req, res, next) {
    output = movieFilePath.movies.slice(0, 20);
    res.json(output);
});

router.get('/movies/total', function (req, res, next) {
    output = movieFilePath.movies.slice(0, 20);
    res.send(movieFilePath.movies.length);
});

router.get('/movies/query/:query', function (req, res, next) {
    var search = req.params.query;
    var input = movieFilePath.movies;
    output = input.slice(0, 20);

    if (search.length >= 3) {
        output = input.filter(function(o){
            return (o.title.indexOf(search) !== -1);
        });
    }
    var response = {total:input.length,movies:output};
    res.json(response);
});

module.exports = router;
