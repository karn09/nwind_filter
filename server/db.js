var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var databaseURI = process.env.DBCONN || 'mongodb://localhost:27017/northwind-filter';
var db = mongoose.connect(databaseURI).connection;

db.on('open', function() {
  console.log('Database connection opened at', databaseURI);
});

db.on('error', function(err) {
  console.error('Database connection error: ', err);
});

module.exports = db;
