const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    if (req.cookies.username){
        res.render('myName', {name: req.cookies.username});
    }else{
        res.render('myName');
    }
})

module.exports = router;