import axios from "axios";


const api = axios.create({
  baseURL: 'http://172.16.201.20:3001',
});


export default api;
