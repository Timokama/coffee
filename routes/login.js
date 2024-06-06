// routes/login.js

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile('login.html', {root: "views"});
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return res.status(409).json({ errro: 'User Not Found'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid Password' })
        }
        req.session.username=user.username;
        res.redirect('/')
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});

module.exports = router;