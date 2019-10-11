import axios from "axios";


const api_login = axios.create({
  baseURL: 'https://apiself.alterdata.cloud',
});


export default api_login;
