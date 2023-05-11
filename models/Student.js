const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    age:Number,
    rollNo:Number
})


module.exports = mongoose.model('student',userSchema);