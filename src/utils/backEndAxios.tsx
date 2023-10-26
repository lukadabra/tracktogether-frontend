import axios from 'axios';

export const backendFetcher = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': 'true'
  },
  withCredentials: true
});