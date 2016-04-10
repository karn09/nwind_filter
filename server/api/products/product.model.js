var mongoose = require('mongoose');
var db = require('../../db');

var Product = new mongoose.Schema({
  name: String
});

module.exports = db.model('Product', Product);
