const express = require('express');
const app = express();
const port = 8000;

const db=require('./config/mongoose')
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',require('./routes'));
app.use(express.static(__dirname+'/public'));



// Set up views using EJS templating engine
app.set('view engine', 'ejs');
app.set('views', './views');







// Start the server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});