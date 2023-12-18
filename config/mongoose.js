const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/fit';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any error occuered
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   

//On Successfull connection to database
db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  