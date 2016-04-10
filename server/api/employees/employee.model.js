var mongoose = require('mongoose');
var db = require('../../db');

var Employee = new mongoose.Schema({
  firstName: String,
  lastName: String
});

module.exports = db.model('Employee', Employee);
