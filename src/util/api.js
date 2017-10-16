import axios from 'axios';

const baseUrl = 'https://api-neuroniohomolog.wedeploy.io';

exports.login = function (email, password) {
  return axios.post(`${baseUrl}/login`, {
    email,
    password,
  })
    .then(response => {
      return response.data;
    });
}
