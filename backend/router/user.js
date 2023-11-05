const express = require("express");

const router = express.Router();

const usercontroller = require("../controllers/user")


router.post("/login/signup",usercontroller.postsign);


module.exports = router;