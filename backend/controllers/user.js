const User = require("../util/user");

const {validationResult} = require("express-validator");


exports.postsign = async(req,res,next)=>{
    const {email ,password,confirmpassword} = req.body;
    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error.array())
        res.status(422).json({error : error.array()})
        return;
    }
    res.status(200).json({error : []})
    console.log(email, password, confirmpassword)
    
}
    