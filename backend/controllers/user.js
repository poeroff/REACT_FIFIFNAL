const User = require("../models/user_info")

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

exports.postLogin = async (req, res, next) => {

}
