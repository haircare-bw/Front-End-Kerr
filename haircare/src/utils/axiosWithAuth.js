//update api to actual api! :)

import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://hair-care.herokuapp.com'
  });
};