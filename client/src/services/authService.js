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
    return "user";
  });
}

export function hasRole(roles) {
  const userRaw = localStorage.getItem('user');
  if (userRaw) {
    const user = JSON.parse(userRaw);
    return roles.includes(user.role.name);
  }
  return false;
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