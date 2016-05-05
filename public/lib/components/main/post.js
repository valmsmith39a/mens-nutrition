import React from 'react';
import DeletePost from './deletePost';

export default ({ post, post: { url }, index }) => (
  <li>
    {url}
    <DeletePost index={index} id={post._id} />
  </li>
);
