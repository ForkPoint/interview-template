const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('s', { title: 'Express' });
});

module.exports = router;