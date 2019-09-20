const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate} = require('../models/User.js');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth=require('../middleware/auth');

router.get('/me',auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password'); 
    res.send(user);
})
///myląca nazwa-może hashedPassword?
async function generatePassword(password)
{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
router.post('/', async (req, res) =>{
    const { error } = validate(req.body);
    if(error) 
        return res.status(400).send(error.details[0].message);
    
    let user = await User.findOne({login: req.body.login});
    if(user)
        return res.status(400).send("User with this login already exists.");

    user = new User(_.pick(req.body, ['login', 'password'] ));

    user.password = await generatePassword(user.password);
    
    await user.save();
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id','login']));
});
router.put('/:id', async (req,res)=>{
    const { error } = validate(req.body);
    if(error) 
        return res.status(400).send(error.details[0].message);

    const hashedPassword = await generatePassword(req.body.password)
    const user = User.findByIdAndUpdate(req.params.id, 
        {
            login: req.body.login, 
            password: hashedPassword
        });

    if(!user)
    {
        return RTCRtpSender.status(404).send('User with given id does not exist.');
    }

    await user.save();

    res.send(user);

});
router.delete('/:id', async (req,res)=>{
    const user = await User.findByIdAndRemove(req.params.id);

    if(!user) 
        return res.status(404).send();
    
    res.send(user);
})

module.exports = router;