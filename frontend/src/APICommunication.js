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
    let result;
    try{
        result = await instance.post('./auth',{
            login: login, 
            password: password
        });
        return {
            data: result.data, 
            status: result.status
        };
    }
    catch (err){
        return false;
    }

    // axios.post('./auth', {
    //     login: login, 
    //     password: password
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // const result = await instance.post('./auth',{
    //     login, 
    //     password
    // });

}

document.getElementById("logButton").addEventListener('click', async (e) =>{
    e.preventDefault();
    const login = document.getElementById("logLogin").value;
    const password = document.getElementById("logPassword").value;
    const result = await CheckUser(login, password);
      console.log("TCL: result", result);
    
    // if(result.status ){
    //     return result.data;
    // }
    // else
    // return 
})

//Rejestracja

async function CreateUser(login, password){

}