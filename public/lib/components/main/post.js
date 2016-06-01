import React from 'react';
import DeletePost from './deletePost';
import EditPost from './editPost';

export default ({ post, post: { url }, index }) => (
  <li className='post'>
    <div className='post-image'>
      <img src='http://i2.wp.com/www.theimpulsivebuy.com/wordpress/wp-content/uploads/2015/03/McDonalds-Artisan-Grilled-Chicken-Sandwich.jpg?resize=640%2C532' className='img-url' />
    </div>
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
