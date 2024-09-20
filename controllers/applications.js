const express = require('express')
const router = express.router()
const User = require('../models/user.js')

router.get('/',(req, res) => {
    res.send('hello applications index.')
})




module.exports(router)