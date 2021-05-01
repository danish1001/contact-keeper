const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const auth = require("../middleware/auth"); // token header file


// @route           GET api/auth
// @desc            Get Logged in user
// @access          private
router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    } 
});

// @route           POST api/auth
// @desc            Auth user and get token
// @access          private
router.post(
    "/",
    [
        check("email", "please include a valid email").isEmail(),
        check("password", "password is required").exists()
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;

        try {
            let user = await User.findOne({email: email});
            if(!user) {
                return res.status(400).json({ msg: "Invalid Credentials" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                res.status(400).json({msg: "Invalid Credentials"});
            }
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get("jwtSecret"),
                {
                    expiresIn: 36000
                },
                (err, token) => {
                    if(err) {
                        throw err;
                    }
                    res.json({token})
                }
            )

        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");
        }
});

module.exports  = router;