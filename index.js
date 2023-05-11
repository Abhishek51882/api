const express = require('express');
const bodyParser=   require('body-parser');
const db = require('./config/mongoose');

const app = express();
const port=4001;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',require('./routes')); 

app.listen(port,(err)=>{
    if(err){
        console.log(`error: ${err}`);
    }
    console.log(`sever is running on http://localhost:${port}`);
}) 