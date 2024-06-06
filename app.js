// app.js

const express = require('express');
const session =require('express-session')
const body = require('body-parser');
const db = require('./config/config.js');

// Import Routes
const signup= require('./routes/signup');
const auth = require('./routes/auth');
const login = require('./routes/login');


const app = express();

app.use(body.json());
app.use(body.urlencoded({ extended: true }));

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
}))
app.use(express.static('public'))
// routes
app.use(signup);
app.use(auth)
app.use(login)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servert is running on port http://localhost:${PORT}`);
});