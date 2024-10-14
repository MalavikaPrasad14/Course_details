const express =require('express');
const rout=require('./route/courseroutes');
require ('./db/connection');
const cors =require('cors');

require('dotenv').config();
const port=process.env.port



const app = new express();
app.use(cors());
app.use('/home',rout);



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})