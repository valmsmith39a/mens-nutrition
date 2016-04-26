'use strict';

var mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  url: { type: String }
});

var Post;

postSchema.statics.getAll = function(callback) {
  Post.find({}, function(err, posts) {
    if(err) return err;
    return callback(null, posts);
  });
}

postSchema.statics.create = function (post, callback) {
  var newPost = new Post(post);
  newPost.save(function(err, postCreated) {
    if (err) return callback(err, null);
    return callback(null, postCreated);
  });
}

Post = mongoose.model('Post', postSchema);
module.exports = Post;