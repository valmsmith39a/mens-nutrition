var express = require('express');
var router = express.Router();

var testArray = [
  { url: 'www.espn.com' },
  { url: 'www.cnn.com'}
];

router.get('/', function(req, res, next) {
  res.send(testArray);
});

module.exports = router;
