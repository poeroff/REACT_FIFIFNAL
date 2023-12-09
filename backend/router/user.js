const express = require("express");

const router = express.Router();

const {check} = require("express-validator");
const User = require("../models/user_info")

const usercontroller = require("../controllers/user")


router.post("/login/signup",[check("email").isEmail().withMessage("유효하지 않은 이메일입니다.").custom((value, {req})=>{
    return User.findOne({where : {email : value}}).then(user=>{
        if(user){
            return Promise.reject("이미 존재하는 이메일입니다");
        }

    })

}), 
check("password","패스워드를 6글자 이상 적어주세요").isLength({min : 5}).isAlphanumeric().trim(),
check("confirmpassword").trim().custom((value, {req})=>{
    if(value !== req.body.password){
        throw new Error("패스워드와 일치하지 않습니다");
    }
    return true;
})],usercontroller.postsign);

router.get("/login/kakao",usercontroller.KakaoLogin)


module.exports = router;