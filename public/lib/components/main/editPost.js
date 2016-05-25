import React from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../actions/PostActions';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  showForm() {
    this.setState({show: true});
  }

  closeForm() {
    this.setState({show: false});
    this.saveEdit();
  }

  saveEdit() {
    this.props.editPost({url:this.refs.editedPostInput.value}, this.props.id, this.props.index)
      .then(response => {
        console.log('response is: ', response);
    });
  }

  showEditForm() {
    if(this.state.show) {
      return(
        <div>
          <input ref='editedPostInput' />
          <button onClick={this.closeForm.bind(this)}>Save Edit</button>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    return(
      <div>
        <button className='btn btn-primary' onClick={this.showForm.bind(this)}>Edit
        </button>
        {this.showEditForm()}
      </div>
    );
  }
}

export default connect(null, { editPost })(EditPost);

// let EditPost = function({ dispatch }) {
//   return(
//     <button>Edit</button>
//   );
// }
//
// EditPost = connect()(EditPost);
//
// export default EditPost;
