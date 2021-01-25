import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'Auth Token instance';

instance.interceptors.request.use(requestConfig => {
    //all request goes through here
    console.log('instance request ', requestConfig)
    //edit here 
    return requestConfig;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(responseConfig => {
    //all response goes through here
    console.log('instance response ', responseConfig)
    //edit here 
    return responseConfig;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});

export default instance;