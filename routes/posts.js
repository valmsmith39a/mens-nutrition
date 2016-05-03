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
  Post.delete(req.params.id, function(err, postToDelete) {
    res.status(err ? 400:200).send(err||req.params.index);
  });
})

module.exports = router;
