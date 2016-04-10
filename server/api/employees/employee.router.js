var router = require('express').Router();
var Employee = require('./employee.model');
var freq = require('../../utils/frequency');

router.get('/', function(req, res, next) {
  Employee.mapReduce(freq)
    .then(function(model) {
      return model.find();
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

  Employee.find({
      lastName: new RegExp('^' + letter)
    })
    .skip(skipRecs)
    .limit(size)
    .then(function(employee) {
      res.json(employee);
    });
});

module.exports = router;
