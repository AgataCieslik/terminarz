class Event {
    constructor(title, date1, date2, description){
        this.title = title;
        this.date1 = date1;
        this.date2 = date2;
        this.description = description;
    }
}

let exampleList =[
    new Event('tytul1', 'beginning1', 'end1', 'description1'),
    new Event('tytul2', 'beginning2', 'end2', 'description2'),
    new Event('tytul3', 'beginning3', 'end3', 'description3'),
    new Event('tytul4', 'beginning4', 'end4', 'description4'),
    new Event('tytul5', 'beginning5', 'end5', 'description5'),

]


const addEventButton = document.getElementById('addEventButton');
console.log(addEventButton);

export {exampleList, addEventButton};