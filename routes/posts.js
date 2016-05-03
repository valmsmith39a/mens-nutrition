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

router.delete('/:id/:index', function(req, res, next) {
  console.log('in delete route. req.params is: ', req.params.id);
  console.log('req.params.index is: ', req.params.index);

  Post.delete(req.params.id, function(err, postToDelete) {
    console.log('err', err);
    console.log('post deleted: ', postToDelete);
    res.send(req.params.index);
  });
})

module.exports = router;
