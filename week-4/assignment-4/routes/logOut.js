const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.redirect('../homePage');
})

router.post('/', (req, res) =>{
    res.clearCookie('username');
    res.redirect('../homePage');
})

module.exports = router;