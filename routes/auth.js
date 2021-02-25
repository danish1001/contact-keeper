const express = require("express");

const router = express.Router();

// @route           GET api/auth
// @desc            Get Logged in user
// @access          private
router.get("/", (req, res) => {
    res.send("Get logged in a user");
});

// @route           POST api/auth
// @desc            Auth user and get token
// @access          private
router.post("/", (req, res) => {
    res.send("Log in user");
});

module.exports  = router;