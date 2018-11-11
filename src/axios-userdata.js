import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-multi-step-form.firebaseio.com/'
});

export default instance;