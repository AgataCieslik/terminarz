const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("all.ejs")
});





module.exports = router;