import React from 'react';
import DeletePost from './deletePost';
import EditPost from './editPost';

export default ({ post, post: { url }, index }) => (
  <li className='post'>
    <div className='row'>
      {url}
    </div>
    <div className='row'>
      <div className='delete-edit-wrapper pull-right'>
        <div className='col-md-6' id='delete-wrapper'>
          <DeletePost index={index} id={post._id} />
        </div>
        <div className='col-md-6' id='edit-wrapper'>
          <EditPost index={index} id={post._id} />
        </div>
      </div>
    </div>
  </li>
);
