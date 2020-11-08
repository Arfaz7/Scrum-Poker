import axios from 'axios';

export function getAllStories() {
  return axios.get('/story');
}

export function updateStoryPoint(story) {
  return axios.put('/story', story);
}