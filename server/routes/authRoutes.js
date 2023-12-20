const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../database/schema/userSchema');
const router = express.Router();

router.post('/register', async (req, res) => {
    const {name, password, email} = req.body;

    try {
        const existingUser = await User.findOne({ name });
        const exisintEmail = await User.findOne({ email });
        const hashedPassword = await bcrypt.hash( password, 10);

        if(existingUser) {
            res.status(400).json({ succes: false, message: 'User name exist'});
        }

        if(exisintEmail) {
            res.status(400).json({ succes: false, message: 'User email exist'});
        }

        const newUser = new User({
            name: name,
            password: hashedPassword,
            email: email
        });

        await newUser.save();
        res.status(200).json({ succes: true, message: 'User created'});
    }catch(error) {
        console.log('Error saving user');
        res.status(500).json({ succes: false, message: 'Error user save'});
    }
})

module.exports = router;