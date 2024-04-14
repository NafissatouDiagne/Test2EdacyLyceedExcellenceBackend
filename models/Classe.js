const mongoose= require('mongoose')
const classSchema= mongoose.Schema({
    name:{
        type:String
    }
});
module.exports= mongoose.model('Classe',classSchema);