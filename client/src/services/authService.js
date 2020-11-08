import axios from 'axios';

export function setToken(token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  localStorage.setItem('customToken', token);
}

export function isLoggedIn() {
  return !!localStorage.getItem('customToken')
}

export function login(user) {
  return axios.post('/login', {
    username: user,
  }).then(res => {
    setToken(res.data);
    localStorage.setItem('user', user);
  });
}

export function logout() {
  axios.defaults.headers.common['Authorization'] = null;
  localStorage.clear();
}

export function handle403Errors(on403) {
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 403) {
        on403();
      }
    });
}