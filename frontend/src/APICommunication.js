import axios from 'axios';
import { changePage } from './changePage.js';

const log = (val) => console.log(val);

const url = "https://cors-anywhere.herokuapp.com/";
const instance = axios.create({
    baseURL: url+'https://api-terminarz.herokuapp.com/api',
    timeout: 5000
})

//const userId = "5d7c0dbc018fe733e477ab24";
//
//const events = getEvents(userId);


async function getEvents(Id){
    const response = await instance.get(`/events/`,{

    });
    console.log(response);
}

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
        log(result.data);
        //przenieś do strony z wydarzeniami 
        //nie działa póki nie mamy webpacka z brancha funkcjonalnosci
      //  changePage("week");
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
        //Zarejestroano poprawnie
       // changePage("new");
    }
    log(result);

})