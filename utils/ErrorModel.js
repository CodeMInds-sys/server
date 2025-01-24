module.exports=(message,statusText,statusCode)=>{
    const error=new Error()

    error.message=message;
    error.statusText=statusText;
    error.statusCode=statusCode;
    return error;

}