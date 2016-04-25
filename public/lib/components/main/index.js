import React from 'react';
import PostInput from './postInput';
import DisplayPosts from './DisplayPosts';

export default class MainPage extends React.Component {
  render() {
    return(
      <div>
        <PostInput />
        <DisplayPosts />
      </div>
    );
  }
}
