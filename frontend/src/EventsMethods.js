import {userId,token, instance, log } from './APICommunication.js';

export async function getEvents(userID){
    const response = await instance.get(`/events/${userID}`,{
        headers:{
            Authoriztion: 'Bearer ' + token
        }
    }); 
    console.log(response);
}

async function addEvents (title, begin, end, description){
    const result = await instance.post('./events',{
        user: userId,
        tilte,
        begin,
        end,
        description
    });
}
// document.getElementById("addEvent").addEventListener('click', async (e)=>{
//     log('STH');
// })