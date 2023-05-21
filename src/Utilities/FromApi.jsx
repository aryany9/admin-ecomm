import React from 'react'
import axios from 'axios'
import constants, { PROD_BASE_URL, UAT_BASE_URL } from './Constants'

export default axios.create({ baseURL: UAT_BASE_URL });