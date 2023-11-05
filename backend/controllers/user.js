const User = require("../util/user");


exports.postsign = async(req,res,next)=>{
    const {email ,password} = req.body;

    console.log(email)
   
    return res.redirect("http://localhost:3000/")

    

    
}
    