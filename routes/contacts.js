const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator/check");
const User = require("../models/User");
const auth = require("../middleware/auth"); 
const Contact = require("../models/Contact");

// it's a CRUD route for contacts

// @route           GET api/contacts
// @desc            Get all user's contacts
// @access          private
router.get("/", auth, async (req, res) => {
    try {
        const contacts = await Contact
            .find({user: req.user.id})
            .sort({date: -1}); // accessing specific user's contacts via user.id
        
        res.json(contacts);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

// @route           POST api/auth
// @desc            Add new Contact
// @access          private
router.post(
    "/",
    [auth,
        [
            check("name", "Name is required").not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {name, email, phone, type } = req.body;
        try {
            const newContact = new Contact({
                name: name,
                email: email,
                phone: phone,
                type: type,
                user: req.user.id // id is accessed because we are using auth
            });
            const contact = await newContact.save();
            res.json(contact);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("server error");
        }
    }
);

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