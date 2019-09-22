const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { User } = require('../models/User.js')
const {Event, validate} = require('../models/Event.js');

router.get('/:id', async (req, res) => {
    console.log(req);
    const user = await User.findById(req.params.id);
    if(!user)
    {
        return res.status(400).send("invalid user");
    }
    const events = await Event.where('user').gte(req.body._id);
    res.send(events);
})

router.post('/', async (req, res) =>{
    const { error } = validate(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }   
    const user = await User.findById(req.body.user);
    
    if(!user)
    {
        return res.status(400).send("invalid user");
    }
    const newEvent = new Event(_.pick(req.body,['user', 'title', 'begin', 'end', 'description'] ));

    await newEvent.save();

    res.send(newEvent);
});

router.put('/:id', async (req, res) =>{

    const event = Event.findByIdAndUpdate(req.params.id, 
        {
            title: req.body.title, 
            begin: req.body.begin, 
            end: req.body.end,
            description: req.body.description
        }, {new: true});
    if(!event) 
    {
        return res.status(404).send("Event with given id is not found");
    }
    const { error } = validate(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }   

    await event.save();
    res.send(event);
});

router.delete('/:id', async (req,res)=>{
    const event = await Event.findByIdAndRemove(req.params.id);

    if(!event) 
        return res.status(404).send()
    
    res.send(event);
})
module.exports = router;



/*
{
        user: {
            _id: user._id,
            login: user.login
        },
        title: req.body.title,
        begin: req.body.begin,
        end: req.body.begin,
        description: req.body.description
    }
{
	"user":"5d7c0dbc018fe733e477ab24",
	"title": "newEvent",
	"begin": "2019-01-01",
	"end":  "2019-02-01",
	"description": "My new event"
}
*/