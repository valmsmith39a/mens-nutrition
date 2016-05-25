import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/PostActions';
import Post from './post';

class DisplayPosts extends React.Component {
  constructor(props) {
    super(props);
    this.props.getAllPosts()
      .then(response => {});
  }

  renderPosts() {
    return this.props.posts.map((post, index) =>
        <Post key={index} post={post} index={index} />
    );
  }

  render() {
    return (
      <ul className='display-posts'>
        {this.renderPosts()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getAllPosts })(DisplayPosts);
