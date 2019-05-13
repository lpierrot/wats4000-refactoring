import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
  // Set common parameters on each request
  config.params.APPID = '032ee24027efd1fbb8985bde741591d1';
  config.params.units = 'imperial';
  return config;
}, function (error) {
  return Promise.reject(error);
});


