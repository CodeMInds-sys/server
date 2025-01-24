const express=require('express');

const userControler=require('../controller/userController')

const Router=express.Router();

Router.route("/register")
    .post(userControler.register)



module.exports=Router;