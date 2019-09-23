// import * as APICommunication from './APICommunication.js';
import * as functionalities from './functionalities';
import '../public/stylesheets/style.css'
import './LogOut';


const addEvent = (e)=>{
    const newTitle = document.getElementById('newTitle').value;
    const newStart = document.getElementById('newStart').value;
    const newStop = document.getElementById('newStop').value;
    const newDescription = document.getElementById('newDecscription').value;
    let newEvent = new functionalities.Event(newTitle, newStart, newStop, newDescription);
    console.log(newEvent);
    return newEvent;
}

const dodaj = document.getElementById('dodaj');
dodaj.addEventListener('click', addEvent);


