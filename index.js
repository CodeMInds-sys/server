const express=require('express');
require('dotenv').config()


const app=express();

const MONGOOSE=require('./utils/mongoose_connect');
const bodyParser = require('body-parser');
MONGOOSE.connect

const body_parser=require('body-parser');
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

 
const userRouter=require("./Router/userRouter");

app.use("/api/user",userRouter);


app.all("*",(req,res)=>{
    res.end("not found api")
})
    

app.use((error,req,res,next)=>{
    // console.log("midle ware")
    // res.end(error.message);
    // if (error.code === 11000) {
    //     res.status(error.statusCode||500).send({statusText:error.statusText||"enternal errrr",statusCode:error.statusCode||600,message:error})
    // }
    //   res.status(500).json({ message: 'Server Error', error: err.message });
    
    res.status(error.statusCode||500).send({statusText:error.statusText||"enternal errrr",statusCode:error.statusCode||600,message:error.message})
})



app.listen(process.env.PORT||300,()=>{
    
    console.log("server is run and lister to port : ",process.env.PORT);
    
})