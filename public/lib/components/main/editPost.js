import { connect } from 'react-redux';

let EditPost = function({ dispatch }) {
  return(
    <div>
      <button>
        Edit
      </button>
    </div>
  );
}

let EditPost = connect()(EditPost);

export default EditPost;
