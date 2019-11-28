const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.set ('view engine', 'pug');

app.listen(3000, () => {
    console.log("The frontend server is running on port 3000!")
  });