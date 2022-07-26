const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    myCar:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Car'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);