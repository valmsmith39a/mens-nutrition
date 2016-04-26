const INITIAL_STATE = [];
import {
  GET_ALL_POSTS
} from '../actions/PostActions';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      console.log('in get all posts reducer');
      return action.payload.data;
    default:
      return state;
  }
}
