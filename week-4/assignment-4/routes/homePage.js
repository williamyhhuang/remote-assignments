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
    console.log('MySql from homePage connected...');
});

router.get('/', (req, res) =>{

    if (req.cookies.username) {
        res.redirect('/memberPage');
    }else if (req.cookies.wrongMessage) {
        res.render('homePage', {wrongMessage: req.cookies.wrongMessage});
    }else {
        res.render('homePage');
    }
})

router.post('/', (req, res) =>{
    var wrongEmail;
    let email_input = req.body.email;
    let password_input = req.body.password;
    let sql = `SELECT * FROM assignment.user WHERE email = '${email_input}'`;

    if (email_input == '' || password_input == ''){
        wrongEmail = 'Please enter the E-mail and password.'
        res.render('homePage', {wrongEmail: wrongEmail});
    }

    if (email_input != '' || password_input != ''){
        if (email_input.indexOf('@')<0) {
            wrongEmail = 'Please check the E-mail format.'
            res.render('homePage', {wrongEmail: wrongEmail});
        }else {
            db.query(sql, (err, result) => {
                if (err) throw err;

                if (result[0] != null) {
                    wrongEmail = 'This email has been used.';
                    res.render('homePage',{ wrongEmail : wrongEmail });   
                }else {
                    let sql = 'INSERT INTO assignment.user SET ?';
                    let post = {email:email_input, password:password_input};
                    db.query(sql, post, (err, result) => {
                        if(err) throw err;
                        res.cookie('username', email_input);
                        res.redirect('/memberPage');
                    });
                }
            });
        }
    }
})

module.exports = router;