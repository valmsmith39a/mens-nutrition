var express = require('express');
var Post = require('../models/Post');
var router = express.Router();

router.get('/', function(req, res, next) {
  Post.getAll(function(err, posts) {
    res.send(posts);
  });
});

router.post('/', function(req, res, next) {
  Post.create(req.body, function(err, postCreated){
    res.status(err ? 400:200).send(err||postCreated);
  });
});

router.delete('/:index', function(req, res, next) {
  console.log('in delete route. req.params is: ', req.params.index);
  Post.delete(req.params.index, function(err, postToDelete) {
    console.log('err', err);
    console.log('post deleted: ', postToDelete);
    res.send('TEMPORARY MESSAGE: Delete route reached');
  });
})

module.exports = router;
