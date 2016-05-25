import React from 'react';
import DeletePost from './deletePost';
import EditPost from './editPost';

/*
<div className='col-md-6 pull-right' id='delete-btn'>
  <DeletePost index={index} id={post._id} />
</div>
<div className='col-md-6' id='edit-btn'>
  <EditPost index={index} id={post._id} />
</div>
*/
export default ({ post, post: { url }, index }) => (
  <li className='post'>
    <div className='row'>
      {url}
    </div>
    <div className='row'>
      <div className='btn-group pull-right'>
      <div className='col-md-6' id='delete-btn'>
        <DeletePost index={index} id={post._id} />
      </div>
      <div className='col-md-6' id='edit-btn'>
        <EditPost index={index} id={post._id} />
      </div>
      </div>
    </div>
  </li>
);
