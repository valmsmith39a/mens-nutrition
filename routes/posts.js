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

router.put('/:id/:index', function(req, res, next) {
  Post.edit(req.body, req.params.id, function(err, editedPost) {
    res.status(err ? 400:200).send(err||{
      editedPost:editedPost,
      editedPostIndex:parseInt(req.params.index)
    });
  });
});

router.delete('/:id/:index', function(req, res, next) {
  Post.delete(req.params.id, function(err, postToDelete) {
    res.status(err ? 400:200).send(err||req.params.index);
  });
})

module.exports = router;
