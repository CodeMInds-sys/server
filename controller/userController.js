
const user=require('../mongooseModels/userModel');
const bcrypt=require('bcrypt');
const asyncHandler=require("../utils/asyncHandler")
const error=require("../utils/ErrorModel")
const HttpStatusTexts=require("../utils/httpStatusText")
const register=asyncHandler( async (req,res,next)=> {
        
            // throw(error("error message",HttpStatusTexts.UNAUTHORIZED,401));
            // return next(error);
            console.log("in register function ");
            
            const {name,email,password,profilePicture,birthdate,phoneNumber}=req.body;
            console.log(req.body)
            const hashedPassword= await bcrypt.hash(password,10);

            const newUser=await new user({
                name,email,
                password:hashedPassword,
                profilePicture,birthdate,phoneNumber
            }); 
            await newUser.save();
            res.status(201).json({statustext:HttpStatusTexts.CREATED,message:"sign up successfully"})
            // res.end("done");

       
            // console.log(error)
           

        
        
        
    }
)


module.exports={
    register,

};