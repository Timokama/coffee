// routes/auth.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.username){
        res.sendFile('home.html',{root: 'views'  });
    }
    else {
        res.sendFile('login.html',{root: 'views'  });
    }
})

module.exports = router;