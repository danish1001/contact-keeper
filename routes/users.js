const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const config = require("config");

// user schema and model
const User = require("../models/User");


// @route           POST api/users
// @desc            Register a user
// @access          Public
router.post(
    "/",
    [
        check("name", "Please add name").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check("password", "Please enter a passpord with 6 or more Characters").isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({email: email});

            if(user) {
                return res.status(400).json({msg: "user already exists"});
            }
            user = new User({
                name: name,
                email: email,
                password: password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get("jwtSecret"), {
                expiresIn: 36000
                }, (err, token) => {
                    if(err) {
                        throw err;
                    }
                    res.json({ token });
                }
            );

        } catch (error) {
            console.error(error.message);
            res.send(500).send("server error");
        }     
});

module.exports = router;