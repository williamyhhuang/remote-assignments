const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.clearCookie('wrongMessage');
    res.clearCookie('wrongEmail');
    if (req.cookies.username){
        var name = 'Welcome, ' + req.cookies.username;
        res.render('memberPage', {name: name});
    }else{
        res.redirect('/homePage');
    }
})

module.exports = router;