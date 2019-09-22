import axios from 'axios';
import { changePage } from './changePage.js';
import jwt from 'jsonwebtoken';
// import {getEvents} from './EventsMethods.js';

export const log = (val) => console.log(val);

export let token;
export let userId ;
const url = "https://cors-anywhere.herokuapp.com/";
export const instance = axios.create({
    baseURL: url+'https://api-terminarz.herokuapp.com/api',
    timeout: 1500
})

//const userId = "5d7c0dbc018fe733e477ab24";
//
//const events = getEvents(userId);



async function ValidateUser(login, password, path){
    try{
        const result = await instance.post(path,{
            login,
            password
        });
        return {
            data: result.data, 
            status: result.status
        };
    }
    catch (err){
        return false;
    }
}
//Logowanie
// async function CheckUser(login, password){
//     try{
//         const result = await instance.post('./auth',{
//             login,
//             password
//         });
//         return {
//             data: result.data, 
//             status: result.status
//         };
//     }
//     catch (err){
//         return false;
//     }
// }

document.getElementById("logButton").addEventListener('click', async (e) =>{
    e.preventDefault();
    const login = document.getElementById("logLogin").value;
    const password = document.getElementById("logPassword").value;
    const result = await ValidateUser(login, password, './auth');
    if(result === false) // Błędny login lub hasło, a raczej po prostu złapany catch 
    {
        document.getElementById("logFailure").innerHTML = "Nieprawidłowy login lub hasło";
        return;
        // Opis błędu
    }
    if(result.status === 200)
    {
        document.getElementById("logFailure").innerHTML = "";
        
        token = result.data;
        log(token);
        userId = jwt.decode(result.data)._id;
        log(userId);
        const res = await getEvents(userId);
        log("ssss");
        log(res);
        // const events= await getEvents(userId);

        // log(events);
        //przenieś do strony z wydarzeniami 
        //nie działa póki nie mamy webpacka z brancha funkcjonalnosci
        //changePage("new");
    }
})

//Rejestracja

document.getElementById("regButton").addEventListener('click', async (e)=>{
    e.preventDefault();
    const login = document.getElementById("regLogin").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;
    let regFailure = document.getElementById("regFailure");
    if(password !== confirmPassword)
    {
        //Wpisane hasła różnią się 
        regFailure.innerHTML = "Wpisane hasła różnią się ";
        return;
    }
    const result  = await ValidateUser(login, password, './users');
    if(result === false)
    {
        regFailure.innerHTML = "Użytkownik został już zarejestowany";
        return;
    }
    else if(result.status == 200)
    {
        regFailure.innerHTML = "";
        userId = result.data._id;
        //Zarejestroano poprawnie
        changePage("new");
    }
    log(result);

});

async function getEvents(userID){
    const response = await instance.get(`/events/${userID}`,{
    // const response = await instance.get(`users/me`,{
        headers:{
            "x-auth-token": token
        }
    }); 
    console.log(response);
}