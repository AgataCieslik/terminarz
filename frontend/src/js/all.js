import '../public/stylesheets/style.css';
import './LogOut.js';
import * as Events from '../APICommunication/Events.js';

const userData = JSON.parse(localStorage.getItem('userData'));
const userId = userData.userId;
const token = userData.token;
const addEventButton = document.getElementById('dodaj');
const eventContainer = document.getElementById('container');
const emptyList = document.getElementById('emptyList');



const createEventDiv = function(event){
    const eventDiv = document.createElement('div');
    eventDiv.classList.add( 'task','mb-2','text-left')
    eventDiv.dataset.eventid = event._id;
    eventDiv.innerHTML = `
        <p>
            <span>Tytuł: </span> ${event.title}
        </p>
        <p>
            <span>Start: </span> ${event.begin}
        </p>
        <p>
            <span>Koniec </span> ${event.end}
        </p>
        <p>
        <span>Opis zadania:</span>
        </p>
        <textarea id="eventDivDescription">
            ${event.description}
        </textarea>
        <button type="button" id=${event._id} class="btn btn-danger delete">X</button>
        <!--
            <button class="btn btn-dark save"> SAVE </button>
        -->
    `
    eventContainer.appendChild(eventDiv);
}

let eventList = [];

const createEventList = async ()=>{
    let data = await Events.getEvents(userId, token)
    eventList = data.data;
    eventList.sort((a,b)=>{
        return new Date(a.begin) - new Date(b.begin);
    })
    // console.log(eventList);
    eventList.forEach(createEventDiv);
    if(eventList.length !== 0){
        emptyList.style.display = 'none';}
}


eventContainer.addEventListener('click',async (e)=>{
    if(e.target.classList.contains('delete')){
        const divToDelete = e.target.parentNode;
        divToDelete.parentNode.removeChild(divToDelete);
        Events.removeEvent(divToDelete.dataset.eventid)
    }
})

// eventContainer.addEventListener('click',async (e)=>{
//     if(e.target.classList.contains('save')){
//         const divToSave = e.target.parentNode;
//         const eventId = divToSave.dataset.eventid;
//         const updatedEvent = eventList.find(e=>{
//             return e._id  === eventId;
//         })
//         console.log(updatedEvent);
//         console.log(updatedEvent._id);
//         Events.updateEvent(
//             updatedEvent._id, 
//             updatedEvent.title,
//             updatedEvent.begin,
//             updatedEvent.end,
//             'jakiś nowy tekst');
//     }
    
// })


createEventList();

