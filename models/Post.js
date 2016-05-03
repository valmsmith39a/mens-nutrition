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

postSchema.statics.delete = function(id, callback) {
  console.log('in delete in model');
  Post.findById(id, function(err, postToDelete) {
    console.log('found post to delete', postToDelete);
    postToDelete.remove(function(err) {

      if(err) {
        console.log('error in deleting: ', err);
        callback(err);
      }
      console.log('post deleted success');
      callback(null, 'Post successfully deleted');
    });
  });
}

Post = mongoose.model('Post', postSchema);
module.exports = Post;
