const express = require('express');
//const helmet = require('helmet');
const users = require('../routes/Users.js');
const events = require('../routes/Events.js');

//
const auth=require('../routes/auth.js');


module.exports = function(app)
{
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static('public'));
    // app.use(helmet());
    app.use('/api/users', users);
    app.use('/api/events', events);

    app.use('/api/auth', auth)

}

