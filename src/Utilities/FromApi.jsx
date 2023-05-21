import React from 'react';
import axios from 'axios';
import { UAT_BASE_URL } from './Constants';

const BASE_URL = UAT_BASE_URL;

const FromApi = {
    get: (url, config) => {
        return axios.get(url, { ...config, baseURL: BASE_URL });
    },
    post: (url, data, config) => {
        return axios.post(url, data, { ...config, baseURL: BASE_URL });
    },
    // Add other HTTP methods as needed (e.g., put, patch, delete)
};

export default FromApi;