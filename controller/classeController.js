const router = require('express').Router();
const mongoose = require('mongoose')
const Classe = mongoose.model("Classe");
exports.registerClass=async(req,res)=>{
    const {name}= req.body;
    const classexist = await Classe.findOne({
        name
    })
    if(classexist)throw 'Classe name already exist'
    else{
    const register= await Classe({
        name
    });
    await register.save();
    res.json({
        message:"Classe name is saved"
    });
    }
}
exports.allclasses= async(req,res)=>{
    const classes= await Classe.find();
    res.json({
        classes
    })
}

exports.updateClasse = async(req,res)=>{
    try{
 const userId=req.params._id;
 const newData= req.body;
    const userUpdate= await Classe.findByIdAndUpdate(userId,newData,{new:true});
    if(!userUpdate){
        return res.status(404).json({message:'User not found'});
    }
    res.json({user:userUpdate});

    }catch(error){
   console.error('error lors de la mise a jour de l\'ulisateur',error);
   res.status(500).json({message:'Error server'});
    }
}
exports.deleteClasse=async(req,res)=>{
    const classId=req.params._id;
    const data= req.body;
    const deleteclass= await Classe.findByIdAndDelete(classId,data,{new:true});
    if(!deleteclass){
        return res.status(500).json({message:'class not found '});
    }
    res.status(200).json({message:'class is deleted'});
    
}