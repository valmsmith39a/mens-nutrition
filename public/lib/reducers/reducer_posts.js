import {
  GET_ALL_POSTS,
  CREATE_POST,
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
    case DELETE_POST:
      const index = action.payload.data;
      return [ ...state.slice(0, index), ...state.slice(index + 1) ];
    default:
      return state;
  }
}
