import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://emt-lab2-193060.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance;
