var express = require('express');
var router = express.Router();

var testArray = [
  { url: 'www.espn.com' },
  { url: 'www.cnn.com'},
  { url: 'www.menshealth.com'}
];

router.get('/', function(req, res, next) {
  res.send(testArray);
});

router.post('/', function(req, res, next) {
  // Temporarily storing post in testArray
  testArray.push(req.body);
  res.send(req.body);
});

module.exports = router;
