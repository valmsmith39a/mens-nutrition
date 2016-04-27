import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const GET_ALL_POSTS_URL = '/posts';
const CREATE_POST_URL = '/posts';
const DELETE_POST_URL = '/posts';

export function getAllPosts() {
  const request = axios.get(GET_ALL_POSTS_URL);

  return {
    type: GET_ALL_POSTS,
    payload: request
  }
}

export function createPost(post) {
  const request = axios.post(CREATE_POST_URL, post);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function deletePost(postIndex) {
  const request = axios.delete(DELETE_POST_URL);

  return {
    type: DELETE_POST,
    payload: request
  }
}
