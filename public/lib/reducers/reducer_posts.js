import {
  GET_ALL_POSTS,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST
} from '../actions/PostActions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      // action.payload.data is array of posts
      return action.payload.data;
    case CREATE_POST:
      // action.payload.data is the post created
      return [...state, action.payload.data];
    case EDIT_POST:
      // action.payload.data is an object with the edited post index and edited post
      const editedPostIndex = action.payload.data.editedPostIndex;
      const editedPost = action.payload.data.editedPost;
      return [...state.slice(0, editedPostIndex), editedPost, ...state.slice(editedPostIndex+1)];
    case DELETE_POST:
      let index = action.payload.data;
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}
