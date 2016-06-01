import React from 'react';
import DeletePost from './deletePost';
import EditPost from './editPost';

export default ({ post, post: { url, img }, index }) => (
  <li className='post'>
    <div className='post-image'>
      <img src={img} className='img-url' />
    </div>
    <div className='row post-title'>
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
