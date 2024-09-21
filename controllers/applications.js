const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

// ================ Index ================= //
router.get('/',async (req, res) => {
    try{
        const currentUser = await User.findById(req.session.user._id)
        res.render('applications/index.ejs', {
            applications: currentUser.applications,
        })
    }catch(err){
        console.log(err)
        res.redirect('/')
    }
})
// =============== New =================== //
router.get('/new', (req, res) => {
    res.render('applications/new.ejs')
})

// ============== Create embedded data =========//
router.post('/', async(req,res)=> {
    try {
        const currentUser = await User.findById(req.session.user._id)
        currentUser.applications.push(req.body)
        await currentUser.save()
        console.log('AFTER CREATED',currentUser)
        res.redirect(`/users/${currentUser._id}/applications`)
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
})
// ============== Show page route ================ //
router.get('/:applicationId', async(req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id)
        const application = currentUser.application.id(req.params.applicationId)
        res.render('applications/show.ejs', {
            application,
        })
        
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
    
})



module.exports = router
