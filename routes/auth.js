

const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.post('/register', async(req, res) => {
    try {
        console.log(req.body)
        const user = await User.create(req.body);
        res.send(user) 

    } catch (e) {
        res.send(e);
    }
    

})

module.exports = router;