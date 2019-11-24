const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    const name = req.query.name;
    res.cookie('username', name);
    res.redirect('/myName');
})

module.exports = router;