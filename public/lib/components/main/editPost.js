import React from 'react';
import { connect } from 'react-redux';

let EditPost = function({ dispatch }) {
  return(
    <button>Edit</button>
  );
}

EditPost = connect()(EditPost);

export default EditPost;
