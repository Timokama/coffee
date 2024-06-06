// routes/signup.js

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();


router.get('/signup',(req, res) => {
    res.sendFile('signup.html', {root: 'views'});
});
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({where: {email}});
        if (user) {
            return res.status(409).json({ errro: 'User Already Exists'})
        }
        const hash = await bcrypt.hash(password, 10);
        const newuser = await User.create({ username, email, password: hash })
        res.status(200).json(newuser);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});

module.exports = router;