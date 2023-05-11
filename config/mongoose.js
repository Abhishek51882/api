const moongoose = require('mongoose');

moongoose.connect('mongodb://127.0.0.1:/api');

const db = moongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to the Database :: MongoDB"));

db.once('open',()=>{
    console.log('Connected to Database :: mongoDB');
})