import React from 'react';
import { connect } from 'react-redux';
import {
  createPost
} from '../../actions/PostActions';

let PostInput = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        if(!input.value.trim()) {
          return
        }
        dispatch(createPost({url: input.value}))
        // input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          Post
        </button>
      </form>
    </div>
  )
}

PostInput = connect()(PostInput)

export default PostInput





// <div id='input-box-wrapper'>
//   <input id='input-box' type='text' placeholder='Web URL. Example: www.cnn.com' />
//   <button type='button' className='btn btn-primary' id='input-btn' onClick={ e => {
//       e.preventDefault();
//       dispatch(createPost({url: 'some url'}))
//     }
//   }>
//   Post
//   </button>
// </div>
// class PostInput extends React.Component {
//   createPost() {
//     const postObject = {
//       url: this.refs.inputData.value
//     }
//     this.props.createPost(postObject)
//       .then(response => {});
//   }
//
//   render() {
//     return (
//       <div id='input-box-wrapper'>
//         <input id='input-box' type='text' placeholder='Web URL. Example: www.cnn.com' ref='inputData' />
//         <button type='button' className='btn btn-primary' id='input-btn' onClick={this.createPost.bind(this)}>Post</button>
//       </div>
//     );
//   }
// }
//
// export default connect (null, { createPost })(PostInput);
