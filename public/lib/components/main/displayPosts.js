import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/PostActions';
import Post from './post';

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

// Refactoring from class level to functional component

let GetPosts = (props) => {
  props.getAllPosts()
  .then(response => {
    console.log('res:', response);
    DisplayPosts(response)
  });
}

let DisplayPosts = (posts) => {
  console.log('props in displayposts: ', props);
  return(
    <div>Display Posts</div>
  );
}

const mapStateToProps = (state) => {
  return state;
}

GetPosts = connect(mapStateToProps, { getAllPosts })(GetPosts);

export default GetPosts;
