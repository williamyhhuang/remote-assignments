const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.redirect('../myName');
})

router.post('/', (req, res) =>{
    res.clearCookie('username');
    res.redirect('../myName');
})

module.exports = router;