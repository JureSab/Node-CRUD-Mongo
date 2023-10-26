const mongoose = require('mongoose');

const partSchema = mongoose.Schema({

    partName:{
        type:String,
        required:true
    },
    carName:{
        type:String,
        required:true
    },
    carModel:{
        type:String,
        required:true
    },
    yearRange:{
        type:String,
    },
    manufacturerID:{
        type:String,
    },
    quantity:{
        type:Number,

    },
    desc:{
        type:String,
        required:true
    }
},
    {timestamps:true}
)

const Part = mongoose.model('Part',partSchema)

module.exports = Part