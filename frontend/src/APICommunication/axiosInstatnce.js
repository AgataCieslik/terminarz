import axios from 'axios';

const url = "https://cors-anywhere.herokuapp.com/";

export const instance = axios.create({
    baseURL: url+'https://api-terminarz.herokuapp.com/api',
    timeout: 1500
})