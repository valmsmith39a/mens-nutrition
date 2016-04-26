import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';

const GET_ALL_POSTS_URL = '/posts';
const CREATE_POST_URL = '/posts';

export function getAllPosts() {
  const request = axios.get('/posts');

  return {
    type: GET_ALL_POSTS,
    payload: request
  }
}

export function createPost(post) {
  const request = axios.post('/posts', post);

  return {
    type: CREATE_POST,
    payload: request
  }
}
