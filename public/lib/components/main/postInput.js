import React from 'react';

export default class PostInput extends React.Component {
  render() {
    return (
      <div id='input-box-wrapper'>
        <input id='input-box' type='text' placeholder='Web URL. Example: www.cnn.com' />
        <button type='button' className='btn btn-primary' id='input-btn'>Post</button>
      </div>
    );
  }
}
