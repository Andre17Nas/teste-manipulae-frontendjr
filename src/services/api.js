import axios from 'axios';

const api = axios.create({
    baseURL: "https://muzik-api-deezer.herokuapp.com",
});

export default api;