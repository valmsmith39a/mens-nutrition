import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/PostActions';

class DisplayPosts extends React.Component {
  constructor(props) {
    super(props);
    this.props.getAllPosts()
      .then(response => {
        console.log('response: ', response);
    });
  }

  render() {
    return (
      <ul>
        <li>Placeholder Post 1</li>
        <li>Placeholder Post 2</li>
        <li>Placeholder Post 3</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(null, { getAllPosts })(DisplayPosts);
