import axios from 'axios';

 

const apiClient = axios.create({

    baseURL: 'http://bookworm.com/api/',

    withCredentials: true,

});

 

export default apiClient;