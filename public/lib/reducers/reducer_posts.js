import {
  GET_ALL_POSTS,
  CREATE_POST,
  DELETE_POST
} from '../actions/PostActions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return action.payload.data;
    case CREATE_POST:
      return [...state, action.payload.data];
    case DELETE_POST:
      // TESTING: temprarily set index to delete to 1
      const index = 1;
      return [ ...state.slice(0, index), ...state.slice(1,index + 1) ];
    default:
      return state;
  }
}
