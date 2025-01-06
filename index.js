const express=require('express');
require('dotenv').config()


const app=express();

const MONGOOSE=require('./utils/mongoose_connect');
const bodyParser = require('body-parser');
MONGOOSE.connect

const body_parser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const userRouter=require("./Router/userRouter");

app.use("/user",userRouter);


app.listen(process.env.PORT||300,()=>{
    console.log("server is run and lister to port : ",process.env.PORT);
})