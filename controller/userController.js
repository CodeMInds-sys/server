
const user=require('../mongooseModels/userModel');

class userMethods{
    static async register(req,res) {
        try {
            const {name,email,password,profilePicture,birthdate,phoneNumber}=req.body;
            const newUser=await new user({
                name,email,password,profilePicture,birthdate,phoneNumber
            });
            await newUser.save();
            

        } catch (error) {
            
            

        }
        
        
    }
}