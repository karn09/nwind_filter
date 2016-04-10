var router = require('express').Router();

router.use(function(err, req, res, next) {
  console.error(err);
  // res.json(err);
});

module.exports = router;
