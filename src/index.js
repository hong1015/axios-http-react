import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Auth Token';
// axios.defaults.headers.post['Content-Type'] ='application/json'; // default to application/json anway
axios.interceptors.request.use(requestConfig => {
    //all request goes through here
    console.log('request ', requestConfig)
    //edit here 
    return requestConfig;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(responseConfig => {
    //all response goes through here
    console.log('response ', responseConfig)
    //edit here 
    return responseConfig;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
