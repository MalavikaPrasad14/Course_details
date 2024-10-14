const express=require('express');
const router = new express.Router();
const jwt=require('jsonwebtoken')
require("../db/connection")
const uModel = require('../model/userdata');
router.use(express.json());


router.post('/login',async(req,res)=>{
    const user=await uModel.findOne({username:req.body.userName})
    if(!user){
         res.json({message:"User not found"});
    }
    try{
        if(user.password==req.body.password)
        {
            const payload={uname:req.body.username,pwd:req.body.password}
            const  token=jwt.sign(payload,"secret")
            res.status(200).send({message:"Login Successful",usertoken:token})

        }
    }catch(error){
        console.log(error);
    }
})
module.exports=router;








module.exports=router;
