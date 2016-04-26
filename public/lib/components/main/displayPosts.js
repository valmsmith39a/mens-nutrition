import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/PostActions';
import Post from './post';

class DisplayPosts extends React.Component {
  constructor(props) {
    super(props);
    this.props.getAllPosts()
      .then(response => {
        console.log('response: ', response);
    });
  }

  renderPosts() {
    return this.props.posts.map(post => {
      console.log('each post is: ', post);
    });
  }

  render() {
    return (
      <ul>
        {this.renderPosts()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getAllPosts })(DisplayPosts);
