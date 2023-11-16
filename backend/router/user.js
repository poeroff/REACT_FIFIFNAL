const express = require("express");

const router = express.Router();

const {check} = require("express-validator");

const usercontroller = require("../controllers/user")


router.post("/login/signup",[check("email").isEmail().withMessage("Please Enter a Valid Email"), 
check("password","Please enter a password with only numbers and text ant at least 5characters").isLength({min : 5}).isAlphanumeric().trim(),
check("confirmpassword").trim().custom((value, {req})=>{
    console.log(req.body.password)
    if(value !== req.body.password){
        throw new Error("password have to match");
    }
    return true;
})],usercontroller.postsign);


module.exports = router;