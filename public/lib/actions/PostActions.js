import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';

const GET_ALL_POSTS_URL = '/posts';

export function getAllPosts() {
  console.log('in action get all posts');
  const request = axios.get('/posts');
  return {
    type: GET_ALL_POSTS,
    payload: request
  }
}
