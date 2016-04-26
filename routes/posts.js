var express = require('express');
var Post = require('../models/Post');
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
  // testArray.push(req.body);
  console.log('req.body is: ', req.body);
  Post.create(req.body, function(err, postCreated){
    console.log('post created successfully: ', postCreated);
    res.status(err ? 400:200).send(err||postCreated);
  });
});

module.exports = router;
