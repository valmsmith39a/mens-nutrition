import React from 'react';
import { connect } from 'react-redux';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  showForm() {
    this.setState({show: true});
  }

  closeForm() {
    this.setState({show: false});
  }

  showEditForm() {
    if(this.state.show) {
      return(
        <div>
          <input />
          <button onClick={this.closeForm.bind(this)}>Save Edit</button>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.showForm.bind(this)}>Edit
        </button>
        {this.showEditForm()}
      </div>
    );
  }
}

export default connect()(EditPost);

// let EditPost = function({ dispatch }) {
//   return(
//     <button>Edit</button>
//   );
// }
//
// EditPost = connect()(EditPost);
//
// export default EditPost;
