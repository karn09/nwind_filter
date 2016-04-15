//i would put my models in model folder and my api routes in a routes folder
var mongoose = require('mongoose');
var db = require('../../db');

var Product = new mongoose.Schema({
  name: String
});

module.exports = db.model('Product', Product);
