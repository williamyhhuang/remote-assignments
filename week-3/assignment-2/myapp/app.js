const express = require('express');
const app = express();
const port = 3000;

app.set ('view engine', 'pug');

const routes = require('./routes');
const dataRoutes = require('./routes/getData');
app.use(routes);
app.use('/getData', dataRoutes);

app.listen(3000, () => {
    console.log("The frontend server is running on port 3000!")
  });

