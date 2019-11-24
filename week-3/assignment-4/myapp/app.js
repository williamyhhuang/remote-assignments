const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set ('view engine', 'pug');

const routes = require('./routes');
const getDataRoutes = require('./routes/getData');
const myNameRoutes = require('./routes/myName');
const trackNameRoutes = require('./routes/trackName');
const logOutRoutes = require('./routes/logOut');

app.use(routes);
app.use('/getData', getDataRoutes);
app.use('/myName', myNameRoutes);
app.use('/trackName', trackNameRoutes);
app.use('/logOut', logOutRoutes);

app.listen(3000, () => {
    console.log("The frontend server is running on port 3000!")
  });

