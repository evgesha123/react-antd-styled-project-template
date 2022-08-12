import axios from 'axios';
import React from 'react';
import Config from '../Config/index';
import { getLocalToken } from '../../lib/getLocalToken';
import { mkNotification } from '../../lib/mkNotification';
import urlPageNotFound from '../../urls/urlPageNotFound';



const axiosInstance = axios.create();

export const interceptor = (/*store*/) => {

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getLocalToken();

      if (token && token.hasOwnProperty('token')) {
        config.headers.Accept = 'application/json';
        config.headers.Authorization = `${token.token}`;
      }

      config.baseURL = `${Config.API_URL}/`;

      document.dispatchEvent(new CustomEvent('refreshTokenEvent', {}));
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );


  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const localToken = getLocalToken();
      const originalConfig = err.config;

      if (err.response && localToken) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            axiosInstance.defaults.headers.common.Authorization = localToken.token;

            return axiosInstance(originalConfig);
          } catch (_error) {
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }

            return Promise.reject(_error);
          }
        }
        // if (err.response.status === 403) {
        //   store.dispatch(getAuthUser(localToken));
        // }
        if (err.response.status === 404) {
          window.location.replace(urlPageNotFound());
        }
        if (err.response.status >= 400 < 500) {
          mkNotification('error', err.response.data.message);
        }
        if (err.response.status >= 500) {
          mkNotification('error', 'Server error! Contact the web development team.');
        }
      }
      return Promise.reject(err);
    },
  );
};

const Api = {
  get: async (url) => {
    const response = await axiosInstance.get(url);

    return response.hasOwnProperty('data') ? response.data : {};
  },
  post: async (url, data) => {
    const response = await axiosInstance.post(url, data);

    return response.hasOwnProperty('data') ? response.data : {};
  },
  put: async (url, data) => {
    const response = await axiosInstance.put(url, data);

    return response.hasOwnProperty('data') ? response.data : {};
  },
  delete: async (url) => {
    const response = await axiosInstance.delete(url);

    return response.hasOwnProperty('data') ? response.data : {};
  },
};

export default Api;
