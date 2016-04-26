import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    console.log('this.props.post', this.props);
  }

  render() {
    return (
      <li>{this.props.post.url}</li>
    );
  }
}
