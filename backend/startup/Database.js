const mongoose = require('mongoose');

module.exports = function(){
    const db = 'mongodb://localhost/Terminarz';
    mongoose.connect(db)
    .then(() => console.log(`Connected to ${db}`))
    .catch(err => console.log('Could not connect to MongoDb ' + err));
}