var express = require('express');
var router = express.Router();
var path = require('path');

var rootPath = path.join(__dirname, '..', '..');
var publicPath = path.join(rootPath, 'public');
var appPath = path.join(rootPath, 'browser');
var vendorPath = path.join(rootPath, 'node_modules');

router.use('/vendor', express.static(vendorPath));
router.use('/browser', express.static(appPath));
router.use(express.static(publicPath));

module.exports = router;
