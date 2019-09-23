import { brotliDecompressSync } from "zlib";

//Zmienne pomocnicze do wykasowania

class Event {
    constructor(title, date1, date2, description){
        this.title = title;
        this.date1 = date1;
        this.date2 = date2;
        this.description = description;
    }
}

let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur augue convallis dapibus rhoncus. In at ultricies diam. Fusce egestas tincidunt dolor. Vestibulum ac ultrices sapien. Praesent gravida tortor a metus mattis auctor. Maecenas sollicitudin nulla at venenatis viverra. Nunc feugiat dolor ege';

let exampleList =[
    new Event('tytul1', "2019-09-05", "2019-09-05", loremIpsum),
    new Event('tytul2', "2019-09-05", "2019-09-05", loremIpsum),
    new Event('tytul3', "2019-09-05", "2019-09-05", loremIpsum),
    new Event('tytul4', "2019-09-05", "2019-09-05", loremIpsum),
    new Event('tytul5', "2019-09-05", "2019-09-05", loremIpsum),
    new Event('tytul6', "2019-09-05", "2019-09-05", loremIpsum),
    new Event('tytul7', "2019-09-06", "2019-09-05", loremIpsum),
    new Event('tytul8', "2019-09-07", "2019-09-05", loremIpsum),
    new Event('tytul9', "2019-09-08", "2019-09-05", loremIpsum),
    new Event('tytul10', "2019-09-09", "2019-09-05",loremIpsum),
    new Event('tytul10', "2019-09-10", "2019-09-05",loremIpsum),
    new Event('tytul10', "2019-09-11", "2019-09-05",loremIpsum),
    new Event('tytul10', "2019-09-12", "2019-09-05",loremIpsum)
]

let exampleEventToAdd1 = new Event('do dodania1', 'beginning1', 'end1', 'description1');
let exampleEventToAdd2 = new Event('do dodania2', 'beginning2', 'end2', 'description2');


//Obsługa zakładki logowania (index.html)

// const logFailureParagraph = document.getElementById("logFailure");
// const logButton = document.getElementById("logButton");


// const correctPassword = async (trueOrFalse) =>{
//     if (!trueOrFalse) logFailureParagraph.innerHTML = 'Invalid username or email given. Please try again.';
// }

// const correctLogin = async (trueOrFalse) =>{
//     if (!trueOrFalse) logFailureParagraph.innerHTML = 'Invalid username or email given. Please try again.';
// }

// logButton.addEventListener('click',(e)=>{
//     correctPassword(false);
//     correctLogin(false);
// })



//Obsługa zakładki rejestracji (index.html)

// const passwordFailureParagraph = document.getElementById('passwordFailure');
// const loginFailureParagraph = document.getElementById('loginFailure');
// const regButton = document.getElementById("regButton");

// const freeLogin = (trueOrFalse)=>{
//     if (!trueOrFalse) loginFailureParagraph.innerHTML = "That username is taken. If this is you, log in!";
// }

// const comparePasswords = () =>{
//     if(document.getElementById("regPassword").value !== document.getElementById('regConfirmPassword').value) {
//         passwordFailureParagraph.innerHTML = "Password and password confirmation differ!";}
//     else{
//         passwordFailureParagraph.innerHTML = '';
//     }
// }

// regButton.addEventListener('click',(e)=>{
//     freeLogin(false);
//     comparePasswords(false);
// })



//dodawanie nowych zdarzeń





//exportowanie potrzebnych funkcji
export {exampleList, Event};