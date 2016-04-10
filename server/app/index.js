var app = require('express')();

app.use(require('./logging.middleware'));
app.use(require('./error.middleware'));
app.use(require('./statics.middleware'));
app.use('/api', require('../api/api.router'));

module.exports = app;
