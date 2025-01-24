module.exports=(asyncFn)=>{

    return(req,res,next)=>{
        asyncFn(req ,res,next ).catch((err)=>{ 
            // console.log("handler",err)
            // res.end(err)
            next(err);
        })
    }


}