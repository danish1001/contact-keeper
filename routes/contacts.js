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
router.put('/:id', auth, async (req, res) => {
    const {name, email, phone, type} = req.body;
  
    // Build contact object
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
  
    try {
      let contact = await Contact.findById(req.params.id);
  
      if (!contact) return res.status(404).json({msg: 'Contact not found'});
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({msg: 'Not authorized'});
      }
  
      contact = await Contact.findByIdAndUpdate(
        req.params.id,
        {$set: contactFields},
        {new: true},
      );
  
      res.json(contact);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  });

// @route           DELETE api/contacts/:id
// @desc            Delete a Contact
// @access          private
router.delete("/:id", async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id, function(err) {
        if(err) {
            res.send(err);
        } else {
            res.send("deleted");
        }
    });
});


module.exports  = router;