const mongoose= require('mongoose');

const userSchema=   mongoose.Schema({
    userName: String,
    password: String,
    phno: Number
    

});

const uData=mongoose.model('user',userSchema);


module.exports=uData;