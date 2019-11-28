const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'w80288028',
    database : 'assignment'
});

// Connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySql from checkPage connected...');
});

router.post('/', (req, res) =>{
    res.clearCookie('wrongMessage');

    var wrongMessage;
    let email_input = req.body.email;
    let password_input = req.body.password; 

    if (email_input == '' || password_input == ''){
        wrongMessage = 'Please enter the E-mail and password.';
        res.cookie('wrongMessage', wrongMessage);
        res.redirect('/homePage');
    }   
    
    if (email_input != '' && password_input != '') {
        let sql = `SELECT * FROM assignment.user WHERE email = '${email_input}'`;

        if (email_input.indexOf('@')<0) {
            wrongMessage = 'Please check the E-mail format.';
            res.cookie('wrongMessage', wrongMessage);
            res.redirect('/homePage');
        }else{
            db.query(sql, (err, result) => {
                if (err) throw err;

                if (result[0] == null) {
                    wrongMessage = 'This E-mail does not exsist.';
                    res.cookie('wrongMessage', wrongMessage);
                    res.redirect('/homePage');
                }else if (result[0] != null && result[0].password != password_input){
                    wrongMessage = 'The password is wrong.';
                    res.cookie('wrongMessage', wrongMessage);
                    res.redirect('/homePage');
                }else if (result[0] != null && result[0].password == password_input) {
                    res.cookie('username', email_input);
                    res.redirect('/memberPage');
                };
            });
        }
    }
})

module.exports = router;