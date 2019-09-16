const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('Joi');

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    password:{
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255
    }
});

const User = mongoose.model('Users', userSchema);

function validateUser(user){
    const schema = {
        login: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(user, schema);
}
exports.User = User; 
exports.validate = validateUser;