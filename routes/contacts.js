const express = require("express");

const router = express.Router();

// it's a CRUD route for contacts

// @route           GET api/contacts
// @desc            Get all user's contacts
// @access          private
router.get("/", (req, res) => {
    res.send("Get all contacts");
});

// @route           POST api/auth
// @desc            Add new Contact
// @access          private
router.post("/", (req, res) => {
    res.send("Add new contact");
});

// @route           PUT api/contacts/:id
// @desc            Update a Contact
// @access          private
router.put("/:id", (req, res) => {
    res.send("Update contact");
});

// @route           DELETE api/contacts/:id
// @desc            Delete a Contact
// @access          private
router.delete("/:id", (req, res) => {
    res.send("Delete a contact");
});


module.exports  = router;