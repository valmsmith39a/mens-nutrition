import React from 'react';
import DeletePost from './deletePost';

export default ({ post: { url }, index }) => {
  return (
    <li>
      {url}
      <DeletePost index={index}/>
    </li>
  );
  }
