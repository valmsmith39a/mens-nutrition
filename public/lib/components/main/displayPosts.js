import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/PostActions';
import Post from './post';

let DisplayPosts = ( { dispatch }) => {
  // this.props.getAllPosts()
  // .then(response => {});
  dispatch(getAllPosts());

  return(
    <div>Display Posts</div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

DisplayPosts = connect(mapStateToProps)(DisplayPosts);

export default DisplayPosts;
// class DisplayPosts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props.getAllPosts()
//       .then(response => {});
//   }
//
//   renderPosts() {
//     return this.props.posts.map((post, index) =>
//         <Post key={index} post={post} index={index} />
//     );
//   }
//
//   render() {
//     return (
//       <ul>
//         {this.renderPosts()}
//       </ul>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   return state;
// }
//
// export default connect(mapStateToProps, { getAllPosts })(DisplayPosts);
