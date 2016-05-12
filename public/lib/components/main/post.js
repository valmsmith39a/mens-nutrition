import React from 'react';
import DeletePost from './deletePost';
import EditPost from './editPost';

export default ({ post, post: { url }, index }) => (
  <li>
    {url}
    <DeletePost index={index} id={post._id} />
    <EditPost index={index} id={post._id} />
  </li>
);
