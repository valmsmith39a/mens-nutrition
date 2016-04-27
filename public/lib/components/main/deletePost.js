import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/PostActions';

class DeletePost extends React.Component {
  handleClick() {
    console.log('in handle Click');
    this.props.deletePost()
      .then(response => {
        console.log('response in delete is: ', response);
      });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Delete</button>
    );
  }
}

export default connect(null, { deletePost })(DeletePost);
