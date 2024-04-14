const mongoose= require('mongoose');
const Student = mongoose.model("Student");
exports.register=async(req,res)=>{
    const {name,email,classe}=req.body;
    const emailRegex=/@gmail.com|@yahoo.com|@hotmail.com|@live.com/;
    if(!emailRegex.test(email))throw 'Email is not supported from your domain';
    const userExist= await Student.findOne({
        email
    })
    if(userExist)throw 'User with the same email already exist';
    const user= await Student({
        name,email,classe
    });
    await user.save();
    res.json({
        message:'Student registered successfully'
    });

}
exports.allStudents=async (req,res)=>{
    const users= await Student.find();
    res.json({
        users
    });
}
exports.updateStudent = async(req,res)=>{
    try{
 const userId=req.params._id;
 const newData= req.body;
    const userUpdate= await Student.findByIdAndUpdate(userId,newData,{new:true});
    if(!userUpdate){
        return res.status(404).json({message:'User not found'});
    }
    res.json({user:userUpdate});

    }catch(error){
   console.error('error lors de la mise a jour de l\'ulisateur',error);
   res.status(500).json({message:'Error server'});
    }
}
exports.deleteStudent = async (req, res) => {
    try {
        const userId = req.params._id;
        const deleteuser = await Student.findByIdAndDelete(userId);
        if (!deleteuser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User is deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};