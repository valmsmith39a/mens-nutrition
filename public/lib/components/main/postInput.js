import React from 'react';
import { connect } from 'react-redux';
import {
  createPost
} from '../../actions/PostActions';

let PostInput = ({ dispatch }) => {
  let input

  return (
    <div id='post-input-wrapper'>
      <form id='post-input-form' onSubmit={ e => {
        e.preventDefault()
        if(!input.value.trim()) {
          return
        }
        dispatch(createPost({url: input.value}))
        input.value = ''
      }}>
        <input id='post-input' ref={node => {
          input = node
        }} />
        <button type='submit' className='btn btn-primary' id='post-btn'>
          Post
        </button>
      </form>
    </div>
  )
}

PostInput = connect()(PostInput)

export default PostInput
