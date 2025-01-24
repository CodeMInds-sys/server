const mongoose=require('mongoose');
const validator=require('validator');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: [3, 'Name should be at least 3 characters long'],  // Minimum length of 3 characters for the name
      

    },
    email:{
        type:String,
        required:true,
        unique: [true,"user is already exist"],
        validate: [ validator.isEmail, 'Please enter a valid email address' ],

    },
    password:{
        type:String,
        required:  [true,"password is required"],
        minlength: [8, 'Password should be at least 8 characters long']  // Minimum length of 6 characters for the password
    },
    profilePicture:{
        type: String, // The URL to the profile picture
        default: 'https://cdn3.vectorstock.com/i/1000x1000/33/37/human-profile-silhouette-isolated-icon-vector-9813337.jpg' // You can set a default image if the user doesn't upload one
    },
    birthdate: {
        type: Date,
        required: [true,"birthdate is required"]
    },
    phoneNumber: {
        type: String,
        required: [true,"phone number is required"],
        unique:[true,"phone number  is already exist"],
        validate:[validator.isMobilePhone,'please enter a valid phone number']
    }



}
)


module.exports=mongoose.model("User",userSchema);
