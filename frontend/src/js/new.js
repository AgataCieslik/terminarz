import '../public/stylesheets/style.css'
import * as Events from '../APICommunication/Events.js';

const userData = JSON.parse(localStorage.getItem('userData'));
const userId = userData.userId;
const token = userData.token;
const addEventButton = document.getElementById('dodaj');
const newInfo = document.getElementById('newInfo')

addEventButton.addEventListener('click', (e)=>{
    const newTitle = document.getElementById('newTitle').value;
    const newStart = document.getElementById('newStart').value;
    const newStop = document.getElementById('newStop').value;
    const newDescription = document.getElementById('newDecscription').value;

        Events.addEvents(userId, newTitle, newStart, newStop, newDescription);
        newInfo.innerHTML = `Utworzono nowe wydarzenie: ${newTitle}`;
})








