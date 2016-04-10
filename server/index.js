var app = require('./app');
var db = require('./db');

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Server listening on port', port);
});

module.exports = server;
