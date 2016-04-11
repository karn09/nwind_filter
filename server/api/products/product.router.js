var router = require('express').Router();
var Product = require('./product.model');
var freq = require('../../utils/frequency');

router.get('/', function(req, res, next) {
  Product.mapReduce(freq)
    .then(function(model) {
      return model.find({});
    })
    .then(function(docs) {
      res.json(docs);
    });
});

router.get('/:letter', function(req, res, next) {
  var letter = req.params.letter.toUpperCase();
  var page = Number(req.query.page);
  var size = Number(req.query.size);
  var skipRecs = page > 0 ? ((page - 1) * size) : 0;

  Product.find({
      name: new RegExp('^' + letter)
    })
    .skip(skipRecs)
    .limit(size)
    .then(function(products) {
      console.log(products);
      res.json(products);
    });
});

module.exports = router;
