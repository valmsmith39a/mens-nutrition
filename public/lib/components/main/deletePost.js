import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/PostActions';

class DeletePost extends React.Component {
  constructor(props){
    super(props);
  }
  
  handleClick() {
    this.props.deletePost(this.props.id, this.props.index)
      .then(response => {});
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Delete</button>
    );
  }
}

export default connect(null, { deletePost })(DeletePost);
