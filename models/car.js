const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    reg_num:{
        type:String,
        required:true
    },
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },   
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
}, {
    timestamps: true
    
});

module.exports = mongoose.model('Car', carSchema);