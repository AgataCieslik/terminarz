import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000
})

const userId = "5d7c0dbc018fe733e477ab24";

const events = getEvents(userId);


async function getEvents(Id){
    const response = await instance.get(`/events/`,{

    });
    console.log(response);
}