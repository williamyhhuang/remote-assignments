const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set ('view engine', 'pug');

const memberPageRoutes = require('./routes/memberPage');
const homePageRoutes = require('./routes/homePage');
const logOutRoutes = require('./routes/logOut');
const checkRoutes = require('./routes/check');

app.use('/memberPage', memberPageRoutes);
app.use('/homePage', homePageRoutes);
app.use('/logOut', logOutRoutes);
app.use('/check', checkRoutes);

// Create connection
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
    console.log('MySql connected...');
});

app.listen('3000', ()=>{
    console.log('Server started on port 3000');
});