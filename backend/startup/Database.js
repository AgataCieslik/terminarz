const mongoose = require('mongoose');
const config = require('../config/default.json');

module.exports = function(){
    const db = config.database;
    mongoose.connect(db)
    .then(() => console.log(`Connected to ${db}`))
    .catch(err => console.log('Could not connect to MongoDb ' + err));
}