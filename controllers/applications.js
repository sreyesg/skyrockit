const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

router.get('/',async (req, res) => {
    try{
        res.render('applications/index.ejs')
    }catch(err){
        console.log(err)
        res.redirect('/')
    }
})
router.get('/new', (req, res) => {
    res.render('applications/new.ejs')
})



module.exports = router
