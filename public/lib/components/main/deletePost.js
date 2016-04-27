import React from 'react';
import { deletePost } from '../../actions/PostActions';

export default class DeletePost extends React.Component {
  handleClick() {
    console.log('in handle Click');

  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Delete</button>
    );
  }
}
