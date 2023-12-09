const User = require("../models/user_info")
const axios = require("axios")
const { validationResult } = require("express-validator");

exports.postsign = async (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            const error = new Error('Validation failed.');
            error.statusCode = 422;
            error.data = errors.array();
           
            throw error;
        }
        await User.create({ email: email, password: password })
        res.status(201).json({ message: "User created!" })
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.KakaoLogin = async(req,res,next)=>{
    const {code} = req.query
    let id;
    const REDIRECT_URI = "http://localhost:2000/login/kakao"
    const REST_API_KEY = "c2c9d7624e8352d19ded017f4f838cc7"
    const url = 'https://kauth.kakao.com/oauth/token';
    const requestBody = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;
    try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "charset":"utf-8"
          },
          body: requestBody
        });
  
        const resData = await response.json();
        console.log(resData)
      } catch (error) {
        console.error('Error:', error);
      }
      res.status(200).json({toekn : res.locals.kakao})
     
    
}

exports.postLogin = async (req, res, next) => {

}
