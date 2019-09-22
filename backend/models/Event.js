const mongoose = require('mongoose');
const Joi = require('joi');

const EventSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    begin:{
        type: Date, 
        required: true,
    },
    end:{
        type: Date, 
        required: true,
    },
    description:{
        type: String,
        required: false,
        maxlength: 255
    }
});

const Event = mongoose.model('Events', EventSchema);


function validateEvent(event){
    const schema = {
        user: Joi.objectId().required(),
        title: Joi.string().min(5).max(50).required(),
        begin: Joi.date().required(),
        end: Joi.date().required(),
        description: Joi.string().max(255).required()
        
    };

    return Joi.validate(event, schema);
}
exports.Event = Event; 
exports.validate = validateEvent;