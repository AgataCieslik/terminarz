import {userId,token, instance, log } from '../js/Logging.js';

export async function getEvents(userID){
    const response = await instance.get(`/events/${userID}`,{
        headers:{
            "x-auth-token": token
        }
    }); 
    return response;
}

export async function addEvents (title, begin, end, description){
    try{
        const result = await instance.post('./events',{
            user: userId,
            tilte,
            begin,
            end,
            description
        });
        return result;
    }
    catch(err){
        return err;
    }
}

export async function removeEvent(eventId){
    try{
        const result = await instance.delete(`./events/${eventId}`);
        return result;
    }
    catch(err){
        return err;
    }
}
export async function updateEvent(eventId, title, begin, end, description){
    try{
        const result = await instance.put(`./events${eventId}`,{
            title,
            begin, 
            end, 
            description
        });
        return result;
    }
    catch(err){
        return err;
    }
}
