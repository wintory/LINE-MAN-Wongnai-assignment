import axios from 'axios';
import ServiceConfig from '../configs/service';

const ApiClient = axios.create({
  baseURL: `${ServiceConfig.API_GATEWAY_PATH}/api`,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 5000,
});

export default ApiClient;
