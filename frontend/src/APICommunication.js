import axios from 'axios';

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

//Logowanie
async function CheckUser(login, password){
    const result = await instance.post('./auth',{
        login: login, 
        password: password
    });
    return result;
}

document.getElementById("logButton").addEventListener('click', async (e) =>{
    e.preventDefault();
    const login = document.getElementById("logLogin").value;
    const password = document.getElementById("logPassword").value;
    const result = await CheckUser(login, password);
    
    if(result.status ){
        return result.data;
    }
    else
    return 
})

//Rejestracja

async function CreateUser(login, password){

}