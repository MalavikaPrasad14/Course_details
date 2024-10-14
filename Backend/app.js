const express =require('express');
const cors =require('cors');
const app = new express();
const rout=require('./route/courseroutes');
require ('./db/connection');
const user_route=require('./route/userroutes')


require('dotenv').config();
const port=process.env.port
// app.use('/')



app.use(cors());


app.use('/home',rout);
app.use('/user',user_route);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})