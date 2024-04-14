const mongoose = require('mongoose');

const dataSchema= mongoose.Schema({
    name:{
        type:String,
        require:'name is required'
    },
   email:{
        type:String,
        require:'email is required'
    },
    classe:{
        type:String,
        require:'classe is required'
    }
});
module.exports= mongoose.model('Student',dataSchema);