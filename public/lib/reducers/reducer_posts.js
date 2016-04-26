import {
  GET_ALL_POSTS,
  CREATE_POST
} from '../actions/PostActions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return action.payload.data;
    case CREATE_POST:
      return [...state, action.payload.data];
    default:
      return state;
  }
}
